import { game } from '../config/game';
import { routeHref } from './routes';

/** Player-facing route hub URL (`/routes/{id}/`), not the pillar guide article. */
export function site2RouteHubHref(routeId: string): string {
	return routeHref(game.hubPath, routeId);
}

export interface Site2NavItem {
	label: string;
	href: string;
	routeId?: string;
}

export function buildSite2NavItems(guidesHref: string): Site2NavItem[] {
	const routeOrder = ['maps', 'characters', 'michael-myers', 'multiplayer'] as const;
	const routes = game.routes ?? [];

	return [
		{ label: 'Guides', href: guidesHref },
		...routeOrder
			.map((id) => routes.find((route) => route.id === id))
			.filter((route): route is NonNullable<typeof route> => Boolean(route))
			.map((route) => ({
				label: route.title,
				href: site2RouteHubHref(route.id),
				routeId: route.id,
			})),
	];
}

export function site2NavActivePath(activePath: string | undefined, item: Site2NavItem): boolean {
	if (!activePath) return false;
	if (activePath === item.href) return true;
	if (item.routeId && activePath.startsWith(`/routes/${item.routeId}/`)) return true;
	return false;
}
