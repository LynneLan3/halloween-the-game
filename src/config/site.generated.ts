/**
 * This file is generated from site-spec.yaml.
 * Do not edit directly.
 * Run npm run site:generate instead.
 */
import type { GameConfig } from './game-types';

export const siteConfig: GameConfig = {
	name: "Halloween: The Game",
	shortName: "Halloween: The Game",
	title: "Halloween: The Game Guide — Early Access, Editions & Launch Answers",
	description: "Launch-window answers for Advance Access timing, Standard vs Deluxe editions, offline modes, Steam Deck status, Australia classification, and match-length questions.",
	tagline: "Advance Access, editions, and launch-status answers for the Sep 2026 release window.",
	siteUrl: "https://halloween-the-game.vercel.app/",
	siteMode: "standalone",
	hubPath: "/",
	hubTitle: "Halloween: The Game Guide",
	locale: "en",
	releaseStatus: "pre-release",
	releaseDate: "2026-09-08",
	developer: "IllFonic",
	publisher: "IllFonic Publishing",
	platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
	accentColor: "#c41e1e",
	accentForeground: "#111111",
	heroImage: "hero/halloween-hero.jpg",
	heroAlt: "Halloween: The Game Steam header artwork",
	heroPosition: "center",
	disclaimer: "Unofficial fan guide. Verify version-sensitive facts against cited sources before production.",
	portal: {
		heroBadge: "Sep 2026 launch guide",
		primaryCta: {
			label: "Early Access timing",
			href: "/early-access-release-time/",
		},
		secondaryCta: {
			label: "Browse launch guides",
			href: "#browse-guides",
		},
		statusItems: [
			{
				label: "Advance Access",
				value: "Sep 4, 2026 — 9 AM PT (Deluxe pre-order)",
			},
			{
				label: "Digital release",
				value: "Sep 8, 2026",
			},
			{
				label: "Focus",
				value: "Editions, offline modes, AU status",
			},
		],
		popularQuestions: [
			{
				label: "What time does Halloween: The Game early access start?",
				href: "/early-access-release-time/",
				context: "Deluxe pre-order Advance Access window and timezone.",
			},
			{
				label: "Can I upgrade from Standard to Deluxe later?",
				href: "/standard-vs-deluxe-upgrade/",
				context: "Launch upgrade SKU vs Phantom pre-order exclusive.",
			},
			{
				label: "Does Halloween: The Game have bots or private lobbies?",
				href: "/bots-private-lobbies-offline/",
				context: "Story mode, offline bots, and private lobby limits.",
			},
			{
				label: "Does Halloween: The Game work on Steam Deck?",
				href: "/steam-deck/",
				context: "EAC, Windows requirements, and verification status.",
			},
			{
				label: "Is Halloween: The Game banned in Australia?",
				href: "/australia-release-status/",
				context: "RC reason and current storefront status.",
			},
			{
				label: "Are Halloween: The Game matches really only 12 minutes?",
				href: "/match-length-timer/",
				context: "Footage observations vs official timer rules.",
			},
		],
		startHere: [
			{
				title: "Halloween: The Game Early Access — September 4 Release Time & Countdown",
				description: "Confirmed Advance Access start time for Digital Deluxe pre-orders (Sep 4, 2026, 9:00 AM PT), full release date, edition eligibility, pricing and key platform/region notes.",
				href: "/early-access-release-time/",
				image: "covers/halloween-gameplay-1.jpg",
				label: "Early Access",
				badge: "Highest priority",
			},
			{
				title: "Halloween: The Game — Standard vs Deluxe: Can You Upgrade Later?",
				description: "Clear, evidence-backed breakdown of Standard vs Digital Deluxe editions, upgrade path at launch, and the Phantom vs Inmate Michael Myers skins (plus Richard & Alexis civilians).",
				href: "/standard-vs-deluxe-upgrade/",
				image: "covers/halloween-gameplay-2.jpg",
				label: "Standard vs Deluxe",
			},
			{
				title: "Does Halloween: The Game Have Bots? Private Lobbies & Offline Mode Explained",
				description: "What you can and can't do offline in Halloween: The Game. Confirmed single‑player story, offline bots, and what we know about private lobbies, crossplay, Steam Deck, and Australia status at launch.",
				href: "/bots-private-lobbies-offline/",
				image: "covers/halloween-gameplay-1.jpg",
				label: "Bots & Private Lobbies",
			},
			{
				title: "Halloween: The Game Steam Deck — Compatibility, Easy Anti-Cheat & Launch Status",
				description: "What is and isn’t known about playing Halloween: The Game on Steam Deck: Easy Anti-Cheat presence, PC requirements, controller support and what to check at launch.",
				href: "/steam-deck/",
				image: "covers/halloween-gameplay-2.jpg",
				label: "Steam Deck",
			},
		],
		showRecentlyUpdated: true,
		maxRecent: 3,
	},
	categories: [
		{
			id: "guides",
			label: "Launch Guides",
			description: "Task-focused launch-window guides.",
			icon: "rocket",
			order: 1,
			image: "covers/halloween-gameplay-1.jpg",
		},
		{
			id: "reference",
			label: "Reference",
			description: "Platform and regional status pages.",
			icon: "information",
			order: 2,
			image: "covers/halloween-gameplay-2.jpg",
		},
	],
	pages: [
		{
			id: "early-access-release-time",
			slug: "early-access-release-time",
			role: "core",
			assetType: "article",
			intents: ["early-access-release-time"],
			relations: [
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "standard-vs-deluxe-upgrade",
			slug: "standard-vs-deluxe-upgrade",
			role: "core",
			assetType: "article",
			intents: ["standard-vs-deluxe-upgrade"],
			relations: [
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "bots-private-lobbies-offline",
			slug: "bots-private-lobbies-offline",
			role: "core",
			assetType: "article",
			intents: ["bots-private-lobbies-offline"],
			relations: [
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "steam-deck",
			slug: "steam-deck",
			role: "core",
			assetType: "article",
			intents: ["steam-deck"],
			relations: [
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "australia-release-status",
			slug: "australia-release-status",
			role: "core",
			assetType: "article",
			intents: ["australia-release-status"],
			relations: [
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "match-length-timer",
			slug: "match-length-timer",
			role: "core",
			assetType: "article",
			intents: ["match-length-timer"],
			relations: [
			],
			sources: [
			],
			evidence: [
			],
		},
	],
	analytics: {
		enabled: true,
		siteId: "halloween-the-game",
		gameSlug: "halloween-the-game",
		templateVersion: "2.0.0",
		launchDate: "2026-09-08",
		ga4: { enabled: false },
		vercelAnalytics: { enabled: true },
	},
	social: {
		defaultImage: {
			asset: "social/halloween-social.jpg",
			alt: "Halloween: The Game Guide — Early Access, Editions & Launch Answers",
		},
	},
};
