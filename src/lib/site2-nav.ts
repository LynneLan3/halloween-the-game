import { game } from '../config/game';
import { routeHref } from './routes';

/** Player-facing route URL; Maps uses its canonical pillar guide. */
export function site2RouteHubHref(routeId: string): string {
	if (routeId === 'maps') return '/maps/';
	return routeHref(game.hubPath, routeId);
}

export interface Site2NavLink {
	id: string;
	label: string;
	href: string;
}

export interface Site2NavGroup {
	id: string;
	label: string;
	href?: string;
	sectionLabel?: string;
	items?: readonly Site2NavLink[];
}

type GroupDefinition = Omit<Site2NavGroup, 'items'> & {
	pageIds?: readonly { id: string; label: string }[];
};

const GROUP_DEFINITIONS: readonly GroupDefinition[] = [
	{ id: 'guides', label: 'GUIDES', href: '/guides/' },
	{
		id: 'multiplayer',
		label: 'MULTIPLAYER',
		href: '/multiplayer/',
		sectionLabel: 'More in Multiplayer',
		pageIds: [
			{ id: 'multiplayer-hub', label: 'Multiplayer Overview' },
			{ id: 'multiplayer-how-to-escape', label: 'Escape Routes' },
			{ id: 'multiplayer-matchmaking-queue', label: 'Matchmaking' },
			{ id: 'multiplayer-how-it-works', label: 'How Multiplayer Works' },
			{ id: 'multiplayer-crossplay', label: 'Crossplay' },
			{ id: 'bots-private-lobbies-offline', label: 'Bots & Private Matches' },
		],
	},
	{
		id: 'michael-myers',
		label: 'MICHAEL',
		href: '/michael-myers/',
		sectionLabel: 'More Michael Guides',
		pageIds: [
			{ id: 'michael-myers-hub', label: 'Michael Overview' },
			{ id: 'michael-myers-abilities', label: 'Best Build & Abilities' },
			{ id: 'michael-myers-how-to-arrest', label: 'Arrest Michael' },
			{ id: 'michael-myers-skins', label: 'Skins' },
			{ id: 'progression-perks', label: 'Progression & Unlocks' },
		],
	},
	{
		id: 'single-player',
		label: 'STORY',
		href: '/single-player/',
		sectionLabel: 'Story & Challenges',
		pageIds: [
			{ id: 'single-player-hub', label: 'Single Player / First Clear' },
			{ id: 'story-challenges', label: 'All Challenges' },
			{ id: 'story-challenges-chapter-2-challenge-6', label: 'Chapter 2 Challenge 6' },
			{ id: 'story-challenges-chapter-4-challenge-6', label: 'Chapter 4 Challenge 6' },
			{ id: 'single-player-chapter-5-challenges', label: 'Chapter 5 Challenges' },
			{ id: 'loomis-logs', label: 'Loomis Logs' },
		],
	},
	{
		id: 'progression',
		label: 'PROGRESSION',
		href: site2RouteHubHref('progression'),
		sectionLabel: 'More in Progression',
		pageIds: [
			{ id: 'progression-perks', label: 'Progression & Perks' },
			{ id: 'perk-cards', label: 'Perk Cards' },
			{ id: 'civilian-tier-list', label: 'Civilian Tier List' },
		],
	},
	{
		id: 'maps',
		label: 'MAPS',
		href: '/maps/',
		sectionLabel: 'More in Maps',
		pageIds: [
			{ id: 'maps-hub', label: 'All Maps' },
			{ id: 'maps-haddonfield-heights', label: 'Haddonfield Heights' },
			{ id: 'maps-haddonfield-town-center', label: 'Haddonfield Town Center' },
			{ id: 'maps-orange-grove-estates', label: 'Orange Grove Estates' },
			{ id: 'maps-east-haddonfield', label: 'East Haddonfield' },
		],
	},
	{ id: 'updates', label: 'UPDATES', href: '/updates/' },
	{
		id: 'reference',
		label: 'MORE',
		href: site2RouteHubHref('reference'),
		sectionLabel: 'More in Reference',
		pageIds: [
			{ id: 'characters-hub', label: 'Characters' },
			{ id: 'pc-hub', label: 'PC' },
			{ id: 'pc-system-requirements', label: 'System Requirements' },
			{ id: 'steam-deck', label: 'Steam Deck' },
		],
	},
];

function routePageIndex() {
	return new Map((game.routes ?? []).flatMap((route) => route.pages.map((page) => [page.pageId, page] as const)));
}

function resolvePageLinks(pageIds: GroupDefinition['pageIds'], index: ReturnType<typeof routePageIndex>) {
	return (pageIds ?? []).map(({ id, label }) => {
		const page = index.get(id);
		if (!page) throw new Error(`Site2 navigation page "${id}" is not present in generated routes.`);
		return { id, label, href: page.href };
	});
}

export function buildSite2NavGroups(): Site2NavGroup[] {
	const index = routePageIndex();
	return GROUP_DEFINITIONS.map(({ pageIds, ...group }) => ({
		...group,
		...(pageIds ? { items: resolvePageLinks(pageIds, index) } : {}),
	}));
}

export function site2NavActivePath(activePath: string | undefined, item: Pick<Site2NavLink, 'href'>): boolean {
	if (!activePath) return false;
	const current = activePath.replace(/\/+$/, '') || '/';
	const target = item.href.replace(/\/+$/, '') || '/';
	return current === target;
}

export function site2NavGroupActivePath(activePath: string | undefined, group: Site2NavGroup): boolean {
	if (!activePath) return false;
	const current = activePath.replace(/\/+$/, '') || '/';
	const within = (href: string) => {
		const target = href.replace(/\/+$/, '') || '/';
		return current === target || current.startsWith(`${target}/`);
	};
	return Boolean((group.href && within(group.href)) || group.items?.some((item) => site2NavActivePath(activePath, item)));
}

const CATEGORY_GROUP_IDS: Record<string, string> = {
	'character-guides': 'reference',
	'killer-guides': 'michael-myers',
	'map-guides': 'maps',
	'multiplayer-guides': 'multiplayer',
	'pc-guides': 'reference',
	'progression': 'progression',
	'story-guides': 'single-player',
	'live-updates': 'updates',
};

export function site2NavGroupForPath(activePath: string | undefined, category?: string): Site2NavGroup | undefined {
	const groups = buildSite2NavGroups();
	const preferredId = category ? CATEGORY_GROUP_IDS[category] ?? category : undefined;
	if (preferredId) {
		const preferred = groups.find((group) => group.id === preferredId);
		if (preferred) return preferred;
	}
	return groups.find((group) => site2NavGroupActivePath(activePath, group));
}
