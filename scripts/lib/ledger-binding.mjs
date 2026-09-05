/**
 * Ledger Development Task binding helpers for publish receipts.
 *
 * Formal binding requires a registered Development Task. When a receipt carries
 * developmentTaskId, opportunityId + action must match that task exactly.
 * Without a developmentTaskId, the observational path is used — do not invent
 * formal IDs.
 */

function asString(value) {
	if (value === undefined || value === null) return '';
	return String(value).trim();
}

function asAction(value) {
	return asString(value).toUpperCase();
}

/**
 * Collect unique Development Task IDs from common + interventions.
 * @param {object} receipt
 * @returns {string[]}
 */
export function collectDevelopmentTaskIds(receipt) {
	const ids = new Set();
	const commonId = asString(receipt?.common?.developmentTaskId);
	if (commonId) ids.add(commonId);
	for (const item of Array.isArray(receipt?.interventions) ? receipt.interventions : []) {
		const id = asString(item?.developmentTaskId);
		if (id) ids.add(id);
	}
	return [...ids];
}

/**
 * Attach formal binding only from a registered task. Never invent IDs.
 * @param {object} fields
 * @param {{ taskId: string, opportunityId?: string, actionType?: string } | null | undefined} registeredTask
 * @returns {object}
 */
export function attachFormalLedgerBinding(fields = {}, registeredTask = null) {
	const next = { ...fields };
	const taskId = asString(registeredTask?.taskId);
	if (!taskId) {
		delete next.developmentTaskId;
		delete next.opportunityId;
		if (!asString(next.attributionMode)) next.attributionMode = 'OBSERVATIONAL_ONLY';
		return next;
	}
	next.developmentTaskId = taskId;
	next.opportunityId = asString(registeredTask.opportunityId);
	const actionType = asAction(registeredTask.actionType);
	if (actionType) next.action = actionType;
	if (!asString(next.attributionMode) || next.attributionMode === 'OBSERVATIONAL_ONLY') {
		next.attributionMode = 'FORMAL_DECISION_LINKED';
	}
	return next;
}

/**
 * Validate receipt Development Task binding against a lookup.
 * @param {object} receipt
 * @param {(taskId: string) => ({ taskId: string, opportunityId?: string, actionType?: string } | null)} lookupDevelopmentTask
 * @returns {{ ok: true, mode: 'OBSERVATIONAL' | 'FORMAL' } | { ok: false, error: string, mismatches: string[] }}
 */
export function validateLedgerBinding(receipt, lookupDevelopmentTask) {
	const taskIds = collectDevelopmentTaskIds(receipt);
	if (taskIds.length === 0) {
		return { ok: true, mode: 'OBSERVATIONAL' };
	}
	if (typeof lookupDevelopmentTask !== 'function') {
		return {
			ok: false,
			error: 'lookupDevelopmentTask is required when developmentTaskId is set',
			mismatches: ['lookupDevelopmentTask missing'],
		};
	}

	const common = receipt?.common || {};
	const interventions = Array.isArray(receipt?.interventions) ? receipt.interventions : [];
	const mismatches = [];

	for (const taskId of taskIds) {
		let task;
		try {
			task = lookupDevelopmentTask(taskId);
		} catch (error) {
			return {
				ok: false,
				error: `Development Task lookup failed for ${taskId}: ${error.message}`,
				mismatches: [`lookup failed: ${taskId}`],
			};
		}
		if (!task || !asString(task.taskId)) {
			return {
				ok: false,
				error: `Development Task not found: ${taskId}`,
				mismatches: [`Development Task not found: ${taskId}`],
			};
		}

		const taskOpportunity = asString(task.opportunityId);
		const taskAction = asAction(task.actionType);
		const commonOpportunity = asString(common.opportunityId);
		const commonTaskId = asString(common.developmentTaskId);

		if (commonTaskId === taskId && commonOpportunity && taskOpportunity && commonOpportunity !== taskOpportunity) {
			mismatches.push(
				`opportunityId mismatch for ${taskId}: receipt=${commonOpportunity} task=${taskOpportunity}`,
			);
		}

		for (const [index, item] of interventions.entries()) {
			const itemTaskId = asString(item.developmentTaskId) || commonTaskId;
			if (itemTaskId !== taskId) continue;
			const itemOpportunity = asString(item.opportunityId) || commonOpportunity;
			const itemAction = asAction(item.action);
			if (itemOpportunity && taskOpportunity && itemOpportunity !== taskOpportunity) {
				mismatches.push(
					`interventions[${index}] opportunityId mismatch for ${taskId}: receipt=${itemOpportunity} task=${taskOpportunity}`,
				);
			}
			if (itemAction && taskAction && itemAction !== taskAction) {
				mismatches.push(
					`interventions[${index}] action mismatch for ${taskId}: receipt=${itemAction} task=${taskAction} primaryUrl=${asString(item.primaryUrl)}`,
				);
			}
		}
	}

	if (mismatches.length) {
		return {
			ok: false,
			error: `Ledger binding preflight failed: ${mismatches.join('; ')}`,
			mismatches,
		};
	}
	return { ok: true, mode: 'FORMAL' };
}
