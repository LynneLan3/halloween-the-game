import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
	ADCASH_BANNER_ZONE_ID,
	ADCASH_LIB_SRC,
	isAdcashEnabled,
	shouldLoadAdcashOnPage,
} from '../../src/lib/adcash';
import { isAdsEnabled } from '../../src/lib/monetization';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('Adcash Display zone and lib URL are fixed for this test', () => {
	assert.equal(ADCASH_BANNER_ZONE_ID, '12101514');
	assert.equal(ADCASH_LIB_SRC, 'https://acscdn.com/script/aclib.js');
	assert.equal(isAdcashEnabled(), isAdsEnabled());
});

test('Adcash lib loads only on Article pages that render the banner', () => {
	const head = readFileSync(path.join(ROOT, 'src/components/overrides/Head.astro'), 'utf8');
	const lib = readFileSync(path.join(ROOT, 'src/components/AdcashLib.astro'), 'utf8');
	const shell = readFileSync(path.join(ROOT, 'src/components/site2/Site2Shell.astro'), 'utf8');
	const adcash = readFileSync(path.join(ROOT, 'src/lib/adcash.ts'), 'utf8');

	assert.match(head, /shouldLoadAdcashOnPage/);
	assert.match(head, /loadAdcash && <AdcashLib/);
	assert.doesNotMatch(shell, /AdcashLib/);
	assert.match(lib, /id="aclib"/);
	assert.match(lib, /ADCASH_LIB_SRC/);
	assert.match(adcash, /acscdn\.com\/script\/aclib\.js/);
	assert.doesNotMatch(lib, /runAutoTag|runPop|runInterstitial|runPush/i);
});

test('shouldLoadAdcashOnPage matches Article yes / hub-category-route no', () => {
	assert.equal(
		shouldLoadAdcashOnPage({ id: 'michael-myers', data: {} }, '/michael-myers/'),
		isAdsEnabled(),
	);
	assert.equal(shouldLoadAdcashOnPage({ id: 'index', data: { template: 'splash' } }, '/'), false);
	assert.equal(shouldLoadAdcashOnPage({ id: '404', data: {} }, '/404/'), false);
});

test('Adcash banner is in Article headers after Quick Answer, not on homepage AdSlot', () => {
	const site2 = readFileSync(path.join(ROOT, 'src/components/site2/Site2GuideHeader.astro'), 'utf8');
	const experience = readFileSync(
		path.join(ROOT, 'src/components/experience/ExperienceGuideHeader.astro'),
		'utf8',
	);
	const pageTitle = readFileSync(path.join(ROOT, 'src/components/overrides/PageTitle.astro'), 'utf8');
	const homepage = readFileSync(
		path.join(ROOT, 'src/components/experience/ExperienceHomepage.astro'),
		'utf8',
	);
	const banner = readFileSync(path.join(ROOT, 'src/components/AdcashBanner.astro'), 'utf8');
	const adcash = readFileSync(path.join(ROOT, 'src/lib/adcash.ts'), 'utf8');

	assert.match(site2, /AdcashBanner/);
	assert.match(experience, /AdcashBanner/);
	assert.match(pageTitle, /AdcashBanner/);
	assert.doesNotMatch(homepage, /AdcashBanner/);

	const site2QuickAt = site2.indexOf('site2-guide__quick');
	const site2AdAt = site2.indexOf('<AdcashBanner');
	assert.ok(site2QuickAt >= 0 && site2AdAt > site2QuickAt, 'Site2: Adcash after Quick Answer');

	assert.match(banner, /runBanner/);
	assert.match(banner, /ADCASH_BANNER_ZONE_ID/);
	assert.match(adcash, /12101514/);
	assert.doesNotMatch(banner, /runAutoTag|runPop|runInterstitial|runPush/i);
	assert.doesNotMatch(banner, /data-gw-ad-container|AdSlot|AdLoader/);
});

test('guide-after-answer is not wired to Adsterra AdSlot (no dual banner at test position)', () => {
	const footer = readFileSync(path.join(ROOT, 'src/components/overrides/Footer.astro'), 'utf8');
	const site2 = readFileSync(path.join(ROOT, 'src/components/site2/Site2GuideHeader.astro'), 'utf8');
	const experience = readFileSync(
		path.join(ROOT, 'src/components/experience/ExperienceGuideHeader.astro'),
		'utf8',
	);
	assert.doesNotMatch(footer, /guide-after-answer/);
	assert.doesNotMatch(site2, /AdSlot|guide-after-answer/);
	assert.doesNotMatch(experience, /AdSlot|guide-after-answer/);
	assert.match(footer, /guide-before-related/);
});
