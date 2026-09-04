import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
	ADSTERRA_CONTAINER_ID,
	ADSTERRA_ENABLED,
	ADSTERRA_INVOKE_SRC,
	adLoaderConfig,
	adSlotDataset,
	adSlotDatasetFor,
	isAdsterraEnabled,
	type AdPlacement,
} from '../../src/lib/monetization';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

test('ads disabled returns no slot dataset', () => {
	assert.equal(adSlotDatasetFor(false, 'guide-before-related'), null);
	assert.equal(adSlotDatasetFor(false, 'hub-after-start-here'), null);
});

test('ads enabled returns a stable data-ad-slot hook', () => {
	assert.deepEqual(adSlotDatasetFor(true, 'guide-before-related'), {
		'data-ad-slot': 'guide-before-related',
	});
	assert.deepEqual(adSlotDatasetFor(true, 'guide-after-answer'), {
		'data-ad-slot': 'guide-after-answer',
	});
	assert.deepEqual(adSlotDatasetFor(true, 'guide-mid-content'), {
		'data-ad-slot': 'guide-mid-content',
	});
	assert.deepEqual(adSlotDatasetFor(true, 'hub-after-start-here'), {
		'data-ad-slot': 'hub-after-start-here',
	});
});

test('unknown placement produces no slot', () => {
	assert.equal(adSlotDatasetFor(true, 'not-a-slot' as AdPlacement), null);
});

test('Adsterra soft-offline: switch off, config preserved, slots and loader render nothing', () => {
	assert.equal(ADSTERRA_ENABLED, false);
	assert.equal(isAdsterraEnabled(), false);
	assert.equal(adLoaderConfig(), null);
	assert.equal(adSlotDataset('guide-before-related'), null);
	assert.equal(adSlotDataset('hub-after-start-here'), null);
	assert.equal(
		ADSTERRA_INVOKE_SRC,
		'https://pl31121382.profitableratecpmnetwork.com/48fe22f744a00606ab2616e732ff6e3a/invoke.js',
	);
	assert.equal(ADSTERRA_CONTAINER_ID, 'container-48fe22f744a00606ab2616e732ff6e3a');
});

test('Adsterra Zone/script IDs remain in site-spec and monetization constants', () => {
	const monetization = readFileSync(path.join(ROOT, 'src/lib/monetization.ts'), 'utf8');
	const siteSpec = readFileSync(path.join(ROOT, 'site-spec.yaml'), 'utf8');
	const generated = readFileSync(path.join(ROOT, 'src/config/site.generated.ts'), 'utf8');
	assert.match(monetization, /ADSTERRA_ENABLED\s*=\s*false/);
	assert.match(
		monetization,
		/https:\/\/pl31121382\.profitableratecpmnetwork\.com\/48fe22f744a00606ab2616e732ff6e3a\/invoke\.js/,
	);
	assert.match(monetization, /container-48fe22f744a00606ab2616e732ff6e3a/);
	assert.match(
		siteSpec,
		/scriptSrc:\s*https:\/\/pl31121382\.profitableratecpmnetwork\.com\/48fe22f744a00606ab2616e732ff6e3a\/invoke\.js/,
	);
	assert.match(siteSpec, /containerId:\s*container-48fe22f744a00606ab2616e732ff6e3a/);
	assert.match(
		generated,
		/pl31121382\.profitableratecpmnetwork\.com\/48fe22f744a00606ab2616e732ff6e3a\/invoke\.js/,
	);
	assert.match(generated, /container-48fe22f744a00606ab2616e732ff6e3a/);
});

test('default Guide slot is before related, never before Quick Answer', () => {
	const pageTitle = readFileSync(path.join(ROOT, 'src/components/overrides/PageTitle.astro'), 'utf8');
	const footer = readFileSync(path.join(ROOT, 'src/components/overrides/Footer.astro'), 'utf8');
	const adSlot = readFileSync(path.join(ROOT, 'src/components/AdSlot.astro'), 'utf8');
	const head = readFileSync(path.join(ROOT, 'src/components/overrides/Head.astro'), 'utf8');
	assert.doesNotMatch(pageTitle, /AdSlot/);
	assert.match(footer, /placement="guide-before-related"/);
	assert.match(footer, /AdLoader/);
	assert.doesNotMatch(head, /AdScript/);
	assert.doesNotMatch(adSlot, /\bid=\{containerId\}/);
	assert.match(adSlot, /data-gw-ad-container/);
});

test('Adcash Display is the after-answer article slot (not Adsterra)', () => {
	const pageTitle = readFileSync(path.join(ROOT, 'src/components/overrides/PageTitle.astro'), 'utf8');
	const head = readFileSync(path.join(ROOT, 'src/components/overrides/Head.astro'), 'utf8');
	assert.match(pageTitle, /AdcashBanner/);
	assert.match(head, /shouldLoadAdcashOnPage/);
	assert.match(head, /loadAdcash && <AdcashLib/);
});
