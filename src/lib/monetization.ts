import { game } from '../config/game';

export const AD_PLACEMENTS = [
	'guide-after-answer',
	'guide-mid-content',
	'guide-before-related',
	'hub-after-start-here',
] as const;

export type AdPlacement = (typeof AD_PLACEMENTS)[number];

export function isMonetizationEnabled(): boolean {
	return game.monetization?.enabled === true;
}

export function isAffiliateEnabled(): boolean {
	return isMonetizationEnabled() && game.monetization?.affiliate.enabled === true;
}

export function isAffiliateDisclosureEnabled(): boolean {
	return isAffiliateEnabled() && game.monetization?.affiliate.disclosure !== false;
}

export function isAdsEnabled(): boolean {
	return isMonetizationEnabled() && game.monetization?.ads.enabled === true;
}

/**
 * Soft runtime switch for Adsterra / Profitablerate (Native Banner via AdLoader).
 * Keep false to soft-offline; flip true to restore without rewriting Zone/script IDs.
 * No separate Social Bar entry exists in this tree; Native Banner is the only Adsterra path.
 */
export const ADSTERRA_ENABLED = false;

/** Preserved Adsterra invoke.js URL (Zone pl31121382 / unit 48fe22f7…). */
export const ADSTERRA_INVOKE_SRC =
	'https://pl31121382.profitableratecpmnetwork.com/48fe22f744a00606ab2616e732ff6e3a/invoke.js';

/** Preserved Adsterra Native Banner container id. */
export const ADSTERRA_CONTAINER_ID = 'container-48fe22f744a00606ab2616e732ff6e3a';

/** Adsterra banner only when the soft switch and ads master switch are both on. */
export function isAdsterraEnabled(): boolean {
	return ADSTERRA_ENABLED && isAdsEnabled();
}

export function adScriptSrc(): string | undefined {
	if (!isAdsterraEnabled()) return undefined;
	const src = (game.monetization?.ads.scriptSrc?.trim() || ADSTERRA_INVOKE_SRC).trim();
	return src || undefined;
}

export function adContainerId(): string | undefined {
	if (!isAdsterraEnabled()) return undefined;
	const id = (game.monetization?.ads.containerId?.trim() || ADSTERRA_CONTAINER_ID).trim();
	return id || undefined;
}

/** Client-side lazy loader config. Network script is injected once per document lifecycle. */
export function adLoaderConfig(): { scriptSrc: string; containerId: string } | null {
	if (!isAdsterraEnabled()) return null;
	const scriptSrc = adScriptSrc() || ADSTERRA_INVOKE_SRC;
	const containerId = adContainerId() || ADSTERRA_CONTAINER_ID;
	if (!scriptSrc || !containerId) return null;
	return { scriptSrc, containerId };
}

/** When Adsterra is off, AdSlot renders nothing (no empty box, no CLS). */
export function adSlotDatasetFor(
	adsEnabled: boolean,
	placement: AdPlacement,
): { 'data-ad-slot': AdPlacement } | null {
	if (!AD_PLACEMENTS.includes(placement)) return null;
	if (!adsEnabled) return null;
	return { 'data-ad-slot': placement };
}

export function adSlotDataset(placement: AdPlacement): { 'data-ad-slot': AdPlacement } | null {
	return adSlotDatasetFor(isAdsterraEnabled(), placement);
}
