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

export function adScriptSrc(): string | undefined {
	if (!isAdsEnabled()) return undefined;
	const src = game.monetization?.ads.scriptSrc?.trim();
	return src || undefined;
}

export function adContainerId(): string | undefined {
	if (!isAdsEnabled()) return undefined;
	const id = game.monetization?.ads.containerId?.trim();
	return id || undefined;
}

/** Client-side lazy loader config. Network script is injected once per document lifecycle. */
export function adLoaderConfig(): { scriptSrc: string; containerId: string } | null {
	const scriptSrc = adScriptSrc();
	const containerId = adContainerId();
	if (!scriptSrc || !containerId) return null;
	return { scriptSrc, containerId };
}

/** When ads are off, AdSlot renders nothing (no empty box, no CLS). */
export function adSlotDatasetFor(
	adsEnabled: boolean,
	placement: AdPlacement,
): { 'data-ad-slot': AdPlacement } | null {
	if (!AD_PLACEMENTS.includes(placement)) return null;
	if (!adsEnabled) return null;
	return { 'data-ad-slot': placement };
}

export function adSlotDataset(placement: AdPlacement): { 'data-ad-slot': AdPlacement } | null {
	return adSlotDatasetFor(isAdsEnabled(), placement);
}
