import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
	buildProductionUrls,
	buildVerificationUrls,
	preflightLedgerBinding,
	runProductionPublish,
	validateLedgerBinding,
	validateReceiptMinimum,
	verifyProductionUrls,
} from '../../scripts/publish-production.mjs';
import {
	attachFormalLedgerBinding,
} from '../../scripts/lib/ledger-binding.mjs';

const HEAD = 'a'.repeat(40);

function workspace() {
	const root = mkdtempSync(path.join(os.tmpdir(), 'hotword-publish-test-'));
	writeFileSync(path.join(root, 'site-spec.yaml'), `
schemaVersion: 1
templateVersion: 2.0.0
mode: generated-site
site:
  id: fixture-site
  siteUrl: https://fixture.example
  title: Fixture Site
  shortName: Fixture Site
game:
  name: Fixture Game
deployment:
  provider: vercel
  orgId: team_fixture
  projectId: prj_fixture
  projectName: fixture-site
  productionUrl: https://fixture.example
`);
	return root;
}

function receipt(overrides: Record<string, unknown> = {}) {
	return {
		schemaVersion: 'hotword-publish-receipt-v1',
		common: {
			site: 'Fixture Site',
			siteId: 'fixture-site',
			game: 'Fixture Game',
			batchId: 'batch-1',
			commitSha: '',
			...((overrides.common as Record<string, unknown>) ?? {}),
		},
		interventions: [
			{
				action: 'UPDATE_PAGE',
				primaryUrl: '/guide/',
				affectedUrls: ['/guide/', '/other/'],
				reason: 'Fixture reason',
				triggerType: 'query',
				...(overrides.intervention as Record<string, unknown> ?? {}),
			},
		],
	};
}

function writeReceipt(root: string, value: unknown) {
	const file = path.join(root, 'receipt.json');
	writeFileSync(file, `${JSON.stringify(value)}\n`);
	return file;
}

function publishOptions(root: string, file: string, extra: Record<string, unknown> = {}) {
	return {
		rootDir: root,
		receiptPath: file,
		skipBuild: true,
		getHead: () => HEAD,
		deployFn: async () => 0,
		verify: async () => ({ ok: true, checks: [] }),
		submitIndexNow: async () => ({ ok: true }),
		writeLedger: async () => ({ ok: true, output: 'PASS ledger writeback batch=batch-1 interventions=iv-1 baseline=2026-08-23' }),
		...extra,
	};
}

const REGISTERED_TASK = {
	taskId: 'dev-fixture-content-refresh-001',
	opportunityId: 'opp-fixture-content-refresh-001',
	actionType: 'CONTENT_REFRESH',
};

test('no receipt fails before deploy', async () => {
	let deployCalls = 0;
	const result = await runProductionPublish({
		rootDir: workspace(),
		deployFn: async () => { deployCalls += 1; return 0; },
	});
	assert.equal(result.status, 'PUBLISH_FAILED');
	assert.match(result.error, /--receipt/);
	assert.equal(deployCalls, 0);
});

test('invalid receipt fails before deploy', async () => {
	const root = workspace();
	const file = writeReceipt(root, { schemaVersion: 'wrong' });
	let deployCalls = 0;
	const result = await runProductionPublish({
		rootDir: root,
		receiptPath: file,
		deployFn: async () => { deployCalls += 1; return 0; },
	});
	assert.equal(result.status, 'PUBLISH_FAILED');
	assert.match(result.error, /invalid minimum receipt schema/);
	assert.equal(deployCalls, 0);
});

test('commit mismatch fails before deploy', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt({ common: { commitSha: 'b'.repeat(40) } }));
	let deployCalls = 0;
	const result = await runProductionPublish({
		...publishOptions(root, file),
		deployFn: async () => { deployCalls += 1; return 0; },
	});
	assert.equal(result.status, 'PUBLISH_FAILED');
	assert.match(result.error, /does not match HEAD/);
	assert.equal(deployCalls, 0);
});

test('Ledger binding: valid formal binding passes preflight', () => {
	const value = receipt({
		common: {
			developmentTaskId: REGISTERED_TASK.taskId,
			opportunityId: REGISTERED_TASK.opportunityId,
		},
		intervention: {
			action: 'CONTENT_REFRESH',
			developmentTaskId: REGISTERED_TASK.taskId,
		},
	});
	const result = validateLedgerBinding(value, () => REGISTERED_TASK);
	assert.equal(result.ok, true);
	assert.equal(result.mode, 'FORMAL');
});

test('Ledger binding: wrong opportunityId fails before deploy', async () => {
	const root = workspace();
	const value = receipt({
		common: {
			developmentTaskId: REGISTERED_TASK.taskId,
			opportunityId: 'opp-wrong',
		},
		intervention: {
			action: 'CONTENT_REFRESH',
			developmentTaskId: REGISTERED_TASK.taskId,
		},
	});
	const file = writeReceipt(root, value);
	let deployCalls = 0;
	const result = await runProductionPublish(publishOptions(root, file, {
		lookupDevelopmentTask: () => REGISTERED_TASK,
		deployFn: async () => { deployCalls += 1; return 0; },
	}));
	assert.equal(deployCalls, 0);
	assert.equal(result.status, 'PUBLISH_FAILED');
	assert.match(String(result.error), /opportunityId mismatch/);
});

test('Ledger binding: wrong action fails before deploy', async () => {
	const root = workspace();
	const value = receipt({
		common: {
			developmentTaskId: REGISTERED_TASK.taskId,
			opportunityId: REGISTERED_TASK.opportunityId,
		},
		intervention: {
			action: 'UPDATE_PAGE',
			developmentTaskId: REGISTERED_TASK.taskId,
		},
	});
	const file = writeReceipt(root, value);
	let deployCalls = 0;
	const result = await runProductionPublish(publishOptions(root, file, {
		lookupDevelopmentTask: () => REGISTERED_TASK,
		deployFn: async () => { deployCalls += 1; return 0; },
	}));
	assert.equal(deployCalls, 0);
	assert.equal(result.status, 'PUBLISH_FAILED');
	assert.match(String(result.error), /action mismatch/);
});

test('Ledger binding: observational receipt without developmentTaskId passes', () => {
	const value = receipt();
	const result = preflightLedgerBinding(value);
	assert.equal(result.ok, true);
	assert.equal(result.mode, 'OBSERVATIONAL');
});

test('Ledger binding: attachFormalLedgerBinding does not invent IDs', () => {
	const observational = attachFormalLedgerBinding({ action: 'CONTENT_REFRESH' }, null);
	assert.equal(observational.developmentTaskId, undefined);
	assert.equal(observational.opportunityId, undefined);
	assert.equal(observational.attributionMode, 'OBSERVATIONAL_ONLY');

	const formal = attachFormalLedgerBinding({ batchId: 'x' }, REGISTERED_TASK);
	assert.equal(formal.developmentTaskId, REGISTERED_TASK.taskId);
	assert.equal(formal.opportunityId, REGISTERED_TASK.opportunityId);
	assert.equal(formal.action, 'CONTENT_REFRESH');
});

test('Ledger retry is idempotent when writeLedger returns ALREADY_RECORDED', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	let ledgerCalls = 0;
	const writeLedger = async () => {
		ledgerCalls += 1;
		return {
			ok: true,
			skipped: ledgerCalls > 1,
			output: ledgerCalls === 1
				? 'PASS ledger writeback batch=batch-1 interventions=iv-1 baseline=2026-08-23'
				: 'SKIP deployment receipt result=ALREADY_RECORDED receiptKey=batch-1 intervention=iv-1 contentUpdates=3 observations=0',
		};
	};
	const first = await runProductionPublish(publishOptions(root, file, { writeLedger }));
	const second = await runProductionPublish(publishOptions(root, file, { writeLedger }));
	assert.equal(first.status, 'PUBLISH_COMPLETE');
	assert.equal(second.status, 'PUBLISH_COMPLETE');
	assert.equal(ledgerCalls, 2);
	assert.match(String(second.ledgerResult?.output || ''), /ALREADY_RECORDED/);
});

test('IndexNow and verification URL generation normalizes, dedupes, and filters origin', () => {
	const value = receipt({
		intervention: {
			primaryUrl: 'https://fixture.example/guide/',
			affectedUrls: ['/guide', '/other?utm_source=test', 'https://other.example/nope'],
		},
	});
	assert.deepEqual(buildProductionUrls(value, 'https://fixture.example'), [
		'https://fixture.example',
		'https://fixture.example/guide',
		'https://fixture.example/other',
	]);
	assert.deepEqual(buildVerificationUrls(value, 'https://fixture.example'), buildProductionUrls(value, 'https://fixture.example'));
});

test('verification requires HTTP 200 and matching canonical when present', async () => {
	const result = await verifyProductionUrls([
		'https://fixture.example/guide',
		'https://fixture.example/bad',
	], {
		fetchImpl: async (url: string) => ({
			status: url.endsWith('/guide') ? 200 : 404,
			text: async () => `<link rel="canonical" href="${url.endsWith('/guide') ? url : 'https://fixture.example/other'}">`,
		}),
	});
	assert.equal(result.ok, false);
	assert.equal(result.checks[0].ok, true);
	assert.equal(result.checks[1].ok, false);
});

test('Ledger is invoked after production verification', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	const events: string[] = [];
	const result = await runProductionPublish(publishOptions(root, file, {
		deployFn: async () => { events.push('deploy'); return 0; },
		verify: async () => { events.push('verify'); return { ok: true, checks: [] }; },
		submitIndexNow: async () => { events.push('indexnow'); return { ok: true }; },
		writeLedger: async (_path: string, normalized: any) => {
			events.push('ledger');
			assert.equal(normalized.common.commitSha, HEAD);
			return { ok: true, output: 'PASS ledger writeback batch=batch-1 interventions=iv-1 baseline=2026-08-23' };
		},
	}));
	assert.deepEqual(events, ['deploy', 'verify', 'indexnow', 'ledger']);
	assert.equal(result.status, 'PUBLISH_COMPLETE');
	assert.equal(result.ledger, 'PASS');
});

test('Ledger failure does not deploy twice and reports live/incomplete', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	let deployCalls = 0;
	const result = await runProductionPublish(publishOptions(root, file, {
		deployFn: async () => { deployCalls += 1; return 0; },
		writeLedger: async () => ({ ok: false, output: 'FAIL ledger writeback: unavailable' }),
	}));
	assert.equal(deployCalls, 1);
	assert.equal(result.production, 'PASS');
	assert.equal(result.ledger, 'FAIL');
	assert.equal(result.status, 'RECEIPT_FAILED');
});

test('all completion steps pass', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	const result = await runProductionPublish(publishOptions(root, file));
	assert.equal(result.status, 'PUBLISH_COMPLETE');
});

test('--check performs no production deployment', async () => {
	const root = workspace();
	const file = writeReceipt(root, receipt());
	let deployCalls = 0;
	let indexNowCalls = 0;
	let ledgerCalls = 0;
	const result = await runProductionPublish(publishOptions(root, file, {
		checkOnly: true,
		deployFn: async () => { deployCalls += 1; return 0; },
		submitIndexNow: async () => { indexNowCalls += 1; return { ok: true }; },
		writeLedger: async () => { ledgerCalls += 1; return { ok: true }; },
	}));
	assert.equal(result.status, 'CHECK_ONLY');
	assert.equal(deployCalls, 0);
	assert.equal(indexNowCalls, 0);
	assert.equal(ledgerCalls, 0);
});

test('minimum receipt validator rejects missing fields', () => {
	assert.throws(() => validateReceiptMinimum({}), /schemaVersion|common/);
});
