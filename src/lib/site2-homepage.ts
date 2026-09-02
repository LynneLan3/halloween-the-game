import type { ImageMetadata } from 'astro';
import { game } from '../config/game';
import type { GameRoute, GameRoutePage } from '../config/game-types';
import { resolveGuideCardImage } from './card-images';
import { findFeaturedGuide } from './experience-homepage';
import { experienceNav } from './experience-nav';
import { getGuides, guideHref } from './guides';
import { site2RouteHubHref } from './site2-nav';
import { optimizeSite2Background } from './site2-images';
import { formatUiDate } from './ui';

const TREND_ACCENTS = ['orange', 'cream', 'blue', 'red'] as const;

/** Bolt-style short headlines for homepage trending cards (href → title). */
const TRENDING_SHORT_TITLES: Record<string, string> = {
	'/early-access-release-time/': 'When can I play Halloween: The Game?',
	'/standard-vs-deluxe-upgrade/': 'Standard vs Deluxe: what changes?',
	'/bots-private-lobbies-offline/': 'Does Halloween have bots & private lobbies?',
	'/steam-deck/': 'Will it work on Steam Deck?',
};

export interface Site2TrendCard {
	label: string;
	title: string;
	text: string;
	href: string;
	imageUrl?: string;
	accent: (typeof TREND_ACCENTS)[number];
}

export interface Site2MapCard {
	title: string;
	meta: string;
	href: string;
	imageUrl?: string;
	large?: boolean;
}

export interface Site2QuestionCard {
	question: string;
	answer: string;
	href: string;
}

export interface Site2CategoryTile {
	title: string;
	copy: string;
	href: string;
	imageUrl?: string;
}

export interface Site2HomepageModel {
	heroImageUrl?: string;
	heroBadge: string;
	primaryCta?: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	statusItems: Array<{ label: string; value: string }>;
	trending: Site2TrendCard[];
	maps: Site2MapCard[];
	mapsHubHref: string;
	killer: { href: string; imageUrl?: string };
	heroes: { href: string; imageUrl?: string };
	questions: Site2QuestionCard[];
	categories: Site2CategoryTile[];
	featured?: {
		title: string;
		description: string;
		href: string;
		cover?: ImageMetadata;
		updated?: string;
	};
	releaseDate: string;
	releaseNote: string;
	platforms: string;
}

function routePageImage(page: GameRoutePage): Promise<string | undefined> {
	const width = 720;
	const height = 480;
	return optimizeSite2Background(page.image, { width, height, quality: 78 });
}

function findRoute(id: string): GameRoute | undefined {
	return game.routes?.find((route) => route.id === id);
}

function mapMeta(page: GameRoutePage): string {
	return page.eyebrow ?? 'Map guide';
}

function trendingShortTitle(href: string, fallbackTitle: string, label?: string): string {
	return TRENDING_SHORT_TITLES[href] ?? label ?? fallbackTitle.split('—')[0]?.trim() ?? fallbackTitle;
}

export async function buildSite2HomepageModel(): Promise<Site2HomepageModel> {
	const guides = await getGuides();
	const { guidesHref } = await experienceNav();
	const portal = game.portal;
	const startHere = portal?.startHere?.slice(0, 4) ?? [];
	const trending: Site2TrendCard[] = await Promise.all(
		startHere.map(async (item, index) => ({
			label: item.label ?? item.badge ?? 'Guide',
			title: trendingShortTitle(item.href, item.title, item.label),
			text: item.description,
			href: item.href,
			imageUrl: await optimizeSite2Background(item.image, { width: 520, height: 390, quality: 78 }),
			accent: TREND_ACCENTS[index % TREND_ACCENTS.length],
		})),
	);

	const mapsRoute = findRoute('maps');
	const mapPages = mapsRoute?.pages.filter((page) => page.pageId !== 'maps-hub') ?? [];
	const maps: Site2MapCard[] = await Promise.all(
		mapPages.map(async (page, index) => ({
			title: page.label ?? page.title.split('—')[0]?.trim() ?? page.title,
			meta: mapMeta(page),
			href: page.href,
			imageUrl: await routePageImage(page),
			large: index === 0,
		})),
	);

	const featuredGuide = findFeaturedGuide(guides);
	const featuredCover = featuredGuide ? resolveGuideCardImage(featuredGuide) : undefined;
	const featured = featuredGuide
		? {
				title: featuredGuide.data.title,
				description: featuredGuide.data.description ?? '',
				href: guideHref(featuredGuide),
				cover: featuredCover,
				updated:
					featuredGuide.data.lastUpdated instanceof Date
						? formatUiDate(featuredGuide.data.lastUpdated)
						: undefined,
			}
		: undefined;

	const popular = portal?.popularQuestions ?? [];
	const questions: Site2QuestionCard[] = popular.slice(0, 6).map((item) => ({
		question: item.label,
		answer: item.context ?? '',
		href: item.href,
	}));

	const routeTiles: Site2CategoryTile[] = await Promise.all(
		(game.routes ?? []).map(async (route) => ({
			title: route.title,
			copy: route.description,
			href: site2RouteHubHref(route.id),
			imageUrl: await optimizeSite2Background(route.visual, { width: 560, height: 360, quality: 78 }),
		})),
	);

	const killerRoute = findRoute('michael-myers');
	const charactersRoute = findRoute('characters');
	const statusItems = portal?.statusItems ?? [];
	const advance = statusItems.find((item) => /advance/i.test(item.label));
	const release = statusItems.find((item) => /digital release|full release/i.test(item.label));

	return {
		heroImageUrl: await optimizeSite2Background(game.heroImage, { width: 1920, height: 1080, quality: 82 }),
		heroBadge: portal?.heroBadge ?? 'Community field guide · Haddonfield, Illinois',
		primaryCta: portal?.primaryCta,
		secondaryCta: portal?.secondaryCta?.href.startsWith('#')
			? { label: portal.secondaryCta.label, href: guidesHref }
			: portal?.secondaryCta,
		statusItems: statusItems.slice(0, 2),
		trending,
		maps,
		mapsHubHref: mapsRoute ? site2RouteHubHref('maps') : '/routes/maps/',
		killer: {
			href: killerRoute ? site2RouteHubHref('michael-myers') : '/routes/michael-myers/',
			imageUrl: await optimizeSite2Background('covers/michael/stairs.jpg', { width: 900, height: 620, quality: 78 }),
		},
		heroes: {
			href: charactersRoute ? site2RouteHubHref('characters') : '/routes/characters/',
			imageUrl: await optimizeSite2Background('covers/characters/heroes-of-haddonfield.jpg', {
				width: 900,
				height: 620,
				quality: 78,
			}),
		},
		questions,
		categories: routeTiles,
		featured,
		releaseDate: release?.value ?? game.releaseDate ?? 'September 8, 2026',
		releaseNote: advance?.value ?? 'Advance Access begins September 4',
		platforms: game.platforms.join(' · '),
	};
}
