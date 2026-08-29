/**
 * Unified Game Experience navigation builder.
 *
 * All Experience pages (Routes Index, Guides Index, Route Hubs, formal
 * Homepage) share this single source for the top bar and footer:
 *
 *   Home / Guides / Routes / About   (+ Search rendered by GameShell)
 *
 * Home points at the formal hub homepage (`/{hubPath}/`) and About at
 * `/{hubPath}/#about`. `activeMatch` lets Route Hub pages keep "Routes"
 * highlighted even though the current URL is `/routes/{id}/`.
 */
import type { NavItem, FooterLink } from '../components/experience/GameShell.astro';
import { game } from '../config/game';
import { getGuides } from './guides';
import { hubHref, pageHref } from './paths';
import { ui } from './ui';

export interface ExperienceNav {
	nav: NavItem[];
	footerLinks: FooterLink[];
	homeHref: string;
	routesHref: string;
	guidesHref: string;
	aboutHref: string;
}

export async function experienceNav(): Promise<ExperienceNav> {
	const t = ui();
	const guides = await getGuides();
	const hub = game.hubPath;
	const homeHref = hubHref(hub);
	const routesHref = pageHref(hub, 'routes');
	const guidesHref = pageHref(hub, 'guides');
	const aboutHref = `${homeHref}#about`;
	const hasGuides = guides.length > 0;
	const hasRoutes = (game.routes?.length ?? 0) > 0;
	const hasAbout = game.portal?.showAbout !== false;

	const nav: NavItem[] = [
		{ label: t.homeNav, href: homeHref },
		...(hasGuides ? [{ label: t.guidesNav, href: guidesHref }] : []),
		...(hasRoutes ? [{ label: t.routesNav, href: routesHref, activeMatch: [routesHref] }] : []),
		...(hasAbout ? [{ label: t.aboutNav, href: aboutHref }] : []),
	];

	return {
		nav,
		footerLinks: nav.map(({ label, href }) => ({ label, href })),
		homeHref,
		routesHref,
		guidesHref,
		aboutHref,
	};
}
