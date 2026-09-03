import { isCategoryLandingPath } from './category-url';
import { isExperienceGuide, isExperienceHomepage } from './experience-guide';
import { isAdsEnabled } from './monetization';
import { isTrustPath } from './trust';

/** Adcash Display Banner zone for the after-Quick-Answer article test slot. */
export const ADCASH_BANNER_ZONE_ID = '12101514';

export const ADCASH_LIB_SRC = 'https://acscdn.com/script/aclib.js';

interface GuideEntryLike {
	id: string;
	data: { template?: string };
}

/** Ads switch must be on for any Adcash output. */
export function isAdcashEnabled(): boolean {
	return isAdsEnabled();
}

/**
 * True only on Guide Article pages that render AdcashBanner.
 * Homepage, category landings, trust pages, 404, and Route Hub shells are excluded.
 */
export function shouldLoadAdcashOnPage(entry: GuideEntryLike, pathname: string): boolean {
	if (!isAdcashEnabled()) return false;
	if (isExperienceHomepage(entry)) return false;
	if (entry.id === '404' || entry.id.endsWith('/404')) return false;
	if (isCategoryLandingPath(pathname)) return false;
	if (isTrustPath(pathname)) return false;
	// Experience Guide headers always mount AdcashBanner.
	if (isExperienceGuide(entry, pathname)) return true;
	// Classic (non-experience) Article chrome also mounts AdcashBanner.
	return entry.data.template !== 'splash';
}
