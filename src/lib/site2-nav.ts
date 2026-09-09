import { game } from '../config/game';
import { routeHref } from './routes';

/** Player-facing route URL; Maps uses its canonical pillar guide. */
export function site2RouteHubHref(routeId: string): string {
	if (routeId === 'maps') return '/maps/';
	return routeHref(game.hubPath, routeId);
}

export interface Site2NavItem {
	label: string;
	href: string;
	routeId?: string;
}

export function buildSite2NavItems(): Site2NavItem[] {
	return [
		{ label: 'ESCAPE', href: '/multiplayer/how-to-escape/' },
		{ label: 'ARREST MICHAEL', href: '/how-to-arrest-michael-myers/' },
		{ label: 'CHALLENGES', href: '/challenges/' },
		{ label: 'PERKS & BUILDS', href: '/progression-perks/' },
		{ label: 'MAPS', href: '/maps/' },
		{ label: 'UPDATES', href: '/updates/' },
	];
}

export function site2NavActivePath(activePath: string | undefined, item: Site2NavItem): boolean {
	if (!activePath) return false;
	if (activePath === item.href) return true;
	if (item.routeId && activePath.startsWith(`/routes/${item.routeId}/`)) return true;
	return false;
}
