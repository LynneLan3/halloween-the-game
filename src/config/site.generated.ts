/**
 * This file is generated from site-spec.yaml.
 * Do not edit directly.
 * Run npm run site:generate instead.
 */
import type { GameConfig } from './game-types';

export const siteConfig: GameConfig = {
	name: "Halloween: The Game",
	shortName: "Halloween: The Game",
	title: "Halloween: The Game Guide — Maps, Characters, Multiplayer & Launch Answers",
	description: "Official-facts guides for Halloween: The Game maps, characters, Michael Myers abilities, multiplayer, single-player story, PC requirements, and Sep 2026 Advance Access timing.",
	tagline: "Maps, characters, Michael Myers, multiplayer, story mode, and launch-window answers for the Sep 2026 release.",
	siteUrl: "https://halloween-the-game-guide.vercel.app/",
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
			label: "Browse all guides",
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
				label: "Guide pillars",
				value: "Maps, Characters, Michael, Multiplayer, Story, PC",
			},
		],
		popularQuestions: [
			{
				label: "What time does Halloween: The Game early access start?",
				href: "/early-access-release-time/",
				context: "Deluxe pre-order Advance Access window and timezone.",
			},
			{
				label: "How many maps are in Halloween: The Game?",
				href: "/maps/",
				context: "Three confirmed Haddonfield maps at pre-launch.",
			},
			{
				label: "Who can you play as?",
				href: "/characters/",
				context: "10 Standard Civilians plus Deluxe exclusives.",
			},
			{
				label: "What abilities does Michael Myers have?",
				href: "/michael-myers/abilities/",
				context: "Killer Sense, Stalk, Shape Jump, and blackouts.",
			},
			{
				label: "How does Halloween multiplayer work?",
				href: "/multiplayer/how-multiplayer-works/",
				context: "1v4 format, objectives, and replay variety.",
			},
			{
				label: "Does Halloween: The Game have single player?",
				href: "/single-player/",
				context: "Six-chapter Michael Myers story mode.",
			},
			{
				label: "What are the PC system requirements?",
				href: "/pc/system-requirements/",
				context: "Steam minimum and recommended specs.",
			},
			{
				label: "Can I upgrade from Standard to Deluxe later?",
				href: "/standard-vs-deluxe-upgrade/",
				context: "Launch upgrade SKU vs Phantom pre-order exclusive.",
			},
			{
				label: "Does Halloween: The Game work on Steam Deck?",
				href: "/steam-deck/",
				context: "EAC, Windows requirements, and verification status.",
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
			id: "map-guides",
			label: "Maps",
			description: "Confirmed Haddonfield maps, landmarks, and launch-window map guides.",
			icon: "puzzle",
			order: 1,
			image: "covers/halloween-gameplay-2.jpg",
		},
		{
			id: "character-guides",
			label: "Characters",
			description: "Playable Civilian roster, Deluxe exclusives, and trait overview.",
			icon: "information",
			order: 2,
			image: "covers/halloween-gameplay-1.jpg",
		},
		{
			id: "killer-guides",
			label: "Michael Myers",
			description: "How the Killer plays — abilities, objectives, and combat rules.",
			icon: "rocket",
			order: 3,
			image: "covers/halloween-gameplay-1.jpg",
		},
		{
			id: "multiplayer-guides",
			label: "Multiplayer",
			description: "1v4 format, crossplay, bots, and match questions.",
			icon: "rocket",
			order: 4,
			image: "covers/halloween-gameplay-2.jpg",
		},
		{
			id: "story-guides",
			label: "Single Player",
			description: "Story mode chapters, replay structure, and unlocks.",
			icon: "puzzle",
			order: 5,
			image: "covers/halloween-gameplay-1.jpg",
		},
		{
			id: "pc-guides",
			label: "PC",
			description: "System requirements, Steam Deck status, and PC launch checks.",
			icon: "information",
			order: 6,
			image: "covers/halloween-gameplay-2.jpg",
		},
		{
			id: "guides",
			label: "Launch Guides",
			description: "Task-focused launch-window guides.",
			icon: "rocket",
			order: 7,
			image: "covers/halloween-gameplay-1.jpg",
		},
		{
			id: "reference",
			label: "Reference",
			description: "Platform and regional status pages.",
			icon: "information",
			order: 8,
			image: "covers/halloween-gameplay-2.jpg",
		},
	],
	pages: [
		{
			id: "maps-hub",
			slug: "maps",
			role: "core",
			assetType: "article",
			intents: ["halloween-maps", "how-many-maps"],
			relations: [
				{
					pageId: "maps-haddonfield-heights",
					type: "next-step",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "michael-myers-hub",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "maps-haddonfield-heights",
			slug: "maps/haddonfield-heights",
			role: "core",
			assetType: "article",
			intents: ["haddonfield-heights-map"],
			relations: [
				{
					pageId: "maps-hub",
					type: "related",
				},
				{
					pageId: "maps-haddonfield-town-center",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "maps-haddonfield-town-center",
			slug: "maps/haddonfield-town-center",
			role: "core",
			assetType: "article",
			intents: ["haddonfield-town-center-map"],
			relations: [
				{
					pageId: "maps-hub",
					type: "related",
				},
				{
					pageId: "maps-orange-grove-estates",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "maps-orange-grove-estates",
			slug: "maps/orange-grove-estates",
			role: "core",
			assetType: "article",
			intents: ["orange-grove-estates-map"],
			relations: [
				{
					pageId: "maps-hub",
					type: "related",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "characters-hub",
			slug: "characters",
			role: "core",
			assetType: "article",
			intents: ["halloween-characters", "playable-characters"],
			relations: [
				{
					pageId: "michael-myers-hub",
					type: "next-step",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "standard-vs-deluxe-upgrade",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "michael-myers-hub",
			slug: "michael-myers",
			role: "core",
			assetType: "article",
			intents: ["michael-myers-gameplay"],
			relations: [
				{
					pageId: "michael-myers-abilities",
					type: "next-step",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "characters-hub",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "michael-myers-abilities",
			slug: "michael-myers/abilities",
			role: "core",
			assetType: "article",
			intents: ["michael-myers-abilities"],
			relations: [
				{
					pageId: "michael-myers-hub",
					type: "related",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "multiplayer-hub",
			slug: "multiplayer",
			role: "core",
			assetType: "article",
			intents: ["halloween-multiplayer"],
			relations: [
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "multiplayer-crossplay",
					type: "next-step",
				},
				{
					pageId: "bots-private-lobbies-offline",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "multiplayer-how-it-works",
			slug: "multiplayer/how-multiplayer-works",
			role: "core",
			assetType: "article",
			intents: ["how-multiplayer-works"],
			relations: [
				{
					pageId: "multiplayer-crossplay",
					type: "next-step",
				},
				{
					pageId: "match-length-timer",
					type: "related",
				},
				{
					pageId: "maps-hub",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "multiplayer-crossplay",
			slug: "multiplayer/crossplay",
			role: "core",
			assetType: "article",
			intents: ["halloween-crossplay"],
			relations: [
				{
					pageId: "pc-system-requirements",
					type: "next-step",
				},
				{
					pageId: "early-access-release-time",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "single-player-hub",
			slug: "single-player",
			role: "core",
			assetType: "article",
			intents: ["halloween-single-player", "story-mode"],
			relations: [
				{
					pageId: "michael-myers-hub",
					type: "next-step",
				},
				{
					pageId: "characters-hub",
					type: "related",
				},
				{
					pageId: "bots-private-lobbies-offline",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "pc-hub",
			slug: "pc",
			role: "core",
			assetType: "article",
			intents: ["halloween-pc"],
			relations: [
				{
					pageId: "pc-system-requirements",
					type: "next-step",
				},
				{
					pageId: "steam-deck",
					type: "next-step",
				},
				{
					pageId: "multiplayer-crossplay",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "pc-system-requirements",
			slug: "pc/system-requirements",
			role: "core",
			assetType: "article",
			intents: ["system-requirements", "pc-requirements"],
			relations: [
				{
					pageId: "pc-hub",
					type: "related",
				},
				{
					pageId: "steam-deck",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "early-access-release-time",
			slug: "early-access-release-time",
			role: "core",
			assetType: "article",
			intents: ["early-access-release-time"],
			relations: [
				{
					pageId: "multiplayer-hub",
					type: "next-step",
				},
				{
					pageId: "multiplayer-crossplay",
					type: "next-step",
				},
				{
					pageId: "pc-system-requirements",
					type: "next-step",
				},
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
				{
					pageId: "characters-hub",
					type: "next-step",
				},
				{
					pageId: "early-access-release-time",
					type: "related",
				},
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
				{
					pageId: "multiplayer-hub",
					type: "next-step",
				},
				{
					pageId: "single-player-hub",
					type: "related",
				},
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
				{
					pageId: "pc-hub",
					type: "next-step",
				},
				{
					pageId: "pc-system-requirements",
					type: "next-step",
				},
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
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
	],
	routes: [
		{
			id: "maps",
			eyebrow: "Maps",
			title: "Maps",
			description: "Confirmed Haddonfield maps, landmarks, and what still needs launch verification.",
			href: "/maps/",
			visual: "covers/halloween-gameplay-2.jpg",
			pages: [
				{
					pageId: "maps-hub",
					href: "/maps/",
					title: "Halloween: The Game Maps — All Confirmed Haddonfield Locations",
					description: "Three officially revealed multiplayer maps: Haddonfield Heights, Haddonfield Town Center, and Orange Grove Estates. Landmarks, gameplay traits, and what still needs launch verification.",
					eyebrow: "Maps",
					image: "covers/halloween-gameplay-2.jpg",
				},
				{
					pageId: "maps-haddonfield-heights",
					href: "/maps/haddonfield-heights/",
					title: "Haddonfield Heights — Halloween: The Game Map Guide",
					description: "Official landmarks, PAX-shown Civilian interactions, and launch-pending details for the first revealed Halloween: The Game map.",
					eyebrow: "Map Location",
					image: "covers/halloween-gameplay-1.jpg",
				},
				{
					pageId: "maps-haddonfield-town-center",
					href: "/maps/haddonfield-town-center/",
					title: "Haddonfield Town Center — Halloween: The Game Map Guide",
					description: "Named downtown businesses and Haddonfield Cemetery confirmed as playable space in Halloween: The Game's Town Center map.",
					eyebrow: "Map Location",
					image: "covers/halloween-gameplay-2.jpg",
				},
				{
					pageId: "maps-orange-grove-estates",
					href: "/maps/orange-grove-estates/",
					title: "Orange Grove Estates — Halloween: The Game Map Guide",
					description: "Upscale suburban map with multi-story homes, park space, Wallace and Doyle houses, and open sightlines in Halloween: The Game.",
					eyebrow: "Map Location",
					image: "covers/halloween-gameplay-1.jpg",
				},
			],
			fastAnswers: [
				{
					question: "How many maps are in Halloween: The Game?",
					answer: "Three maps are officially revealed—Haddonfield Heights, Town Center, and Orange Grove Estates.",
					pageId: "maps-hub",
					href: "/maps/",
				},
				{
					question: "What landmarks are on Haddonfield Heights?",
					answer: "The Myers house, water tower, and Lampkin Lane are confirmed landmarks.",
					pageId: "maps-haddonfield-heights",
					href: "/maps/haddonfield-heights/",
				},
				{
					question: "Which map has the cemetery?",
					answer: "Haddonfield Town Center includes Haddonfield Cemetery as playable space.",
					pageId: "maps-haddonfield-town-center",
					href: "/maps/haddonfield-town-center/",
				},
			],
		},
		{
			id: "characters",
			eyebrow: "Characters",
			title: "Characters",
			description: "Playable Civilian roster, Deluxe exclusives, and trait overview.",
			href: "/characters/",
			visual: "covers/halloween-gameplay-1.jpg",
			pages: [
				{
					pageId: "characters-hub",
					href: "/characters/",
					title: "Halloween: The Game Characters — All Playable Civilians",
					description: "Standard Edition's 10 Civilians (6 new + 4 legacy), Deluxe exclusives Richard and Alexis, and what IllFonic confirms about unique stats and traits.",
					eyebrow: "Character Guide",
					image: "covers/halloween-gameplay-1.jpg",
				},
			],
			fastAnswers: [
				{
					question: "Who can you play as?",
					answer: "Standard Edition includes 10 Civilians; Deluxe adds Richard and Alexis.",
					pageId: "characters-hub",
					href: "/characters/",
				},
				{
					question: "Are Laurie and Annie playable?",
					answer: "Yes—Laurie Strode and Annie Brackett are confirmed legacy Civilians.",
					pageId: "characters-hub",
					href: "/characters/",
				},
			],
		},
		{
			id: "michael-myers",
			eyebrow: "Killer",
			title: "Michael Myers",
			description: "How Michael works in-game—objectives, abilities, and combat rules.",
			href: "/michael-myers/",
			visual: "covers/halloween-gameplay-1.jpg",
			pages: [
				{
					pageId: "michael-myers-hub",
					href: "/michael-myers/",
					title: "Michael Myers in Halloween: The Game — Killer Guide",
					description: "How Michael Myers works in multiplayer and story mode: objectives, combat rules, detention, and links to official ability descriptions.",
					eyebrow: "Killer Guide",
					image: "covers/halloween-gameplay-1.jpg",
				},
				{
					pageId: "michael-myers-abilities",
					href: "/michael-myers/abilities/",
					title: "Michael Myers Abilities — Killer Sense, Stalk, Shape Jump & Blackouts",
					description: "Official ability descriptions for Michael Myers in Halloween: The Game multiplayer, plus what remains launch verification pending.",
					eyebrow: "Killer Abilities",
					image: "covers/halloween-gameplay-2.jpg",
				},
			],
			fastAnswers: [
				{
					question: "What abilities does Michael Myers have?",
					answer: "Killer Sense, Stalk, Shape Jump, Shape Dash, and blackout/light manipulation are confirmed.",
					pageId: "michael-myers-abilities",
					href: "/michael-myers/abilities/",
				},
				{
					question: "Can Michael be killed?",
					answer: "Michael can be resisted and detained but not simply killed by Civilians.",
					pageId: "michael-myers-hub",
					href: "/michael-myers/",
				},
			],
		},
		{
			id: "multiplayer",
			eyebrow: "Multiplayer",
			title: "Multiplayer",
			description: "1v4 online format, crossplay notes, bots, and match questions.",
			href: "/multiplayer/",
			visual: "covers/halloween-gameplay-2.jpg",
			pages: [
				{
					pageId: "multiplayer-hub",
					href: "/multiplayer/",
					title: "Halloween: The Game Multiplayer — 1v4 Format & Objectives",
					description: "Confirmed 1 Michael vs 4 Civilians multiplayer, Civilian and Michael objectives, deputy returns, and replayability notes from IllFonic.",
					eyebrow: "Multiplayer",
					image: "covers/halloween-gameplay-2.jpg",
				},
				{
					pageId: "multiplayer-how-it-works",
					href: "/multiplayer/how-multiplayer-works/",
					title: "How Halloween: The Game Multiplayer Works",
					description: "Step-by-step overview of the confirmed multiplayer loop, Civilian and Michael tasks, and launch-pending systems.",
					eyebrow: "Multiplayer Guide",
					image: "covers/halloween-gameplay-1.jpg",
				},
				{
					pageId: "multiplayer-crossplay",
					href: "/multiplayer/crossplay/",
					title: "Halloween: The Game Crossplay — What Is Officially Confirmed",
					description: "Xbox storefront cross-platform indicators, confirmed platforms, and what not to claim about the full crossplay matrix pre-launch.",
					eyebrow: "Crossplay",
					image: "covers/halloween-gameplay-2.jpg",
				},
				{
					pageId: "bots-private-lobbies-offline",
					href: "/bots-private-lobbies-offline/",
					title: "Does Halloween: The Game Have Bots? Private Lobbies & Offline Mode Explained",
					description: "What you can and can't do offline in Halloween: The Game. Confirmed single‑player story, offline bots, and what we know about private lobbies, crossplay, Steam Deck, and Australia status at launch.",
					eyebrow: "Multiplayer Modes",
					image: "covers/halloween-gameplay-1.jpg",
				},
				{
					pageId: "match-length-timer",
					href: "/match-length-timer/",
					title: "How Long Are Halloween: The Game Matches? 12‑Minute Timer Explained",
					description: "Short answer: there is no official published match timer as of Last Verified 2026-08-29. Pre-release footage often shows sessions around ~12 minutes, but that is observational — not confirmed rules. This page explains what is confirmed, what isn't, and what to check at launch.",
					eyebrow: "Match Length",
					image: "covers/halloween-gameplay-2.jpg",
				},
			],
			fastAnswers: [
				{
					question: "How does Halloween multiplayer work?",
					answer: "1 Michael vs 4 Civilians with varying escapes, items, and police escalation.",
					pageId: "multiplayer-how-it-works",
					href: "/multiplayer/how-multiplayer-works/",
				},
				{
					question: "Does Halloween: The Game support crossplay?",
					answer: "Cross-platform multiplayer is indicated on Xbox; full pairing matrix is launch verification pending.",
					pageId: "multiplayer-crossplay",
					href: "/multiplayer/crossplay/",
				},
			],
		},
		{
			id: "single-player",
			eyebrow: "Story Mode",
			title: "Single Player",
			description: "Michael Myers story chapters, replay structure, and unlocks.",
			href: "/single-player/",
			visual: "covers/halloween-gameplay-1.jpg",
			pages: [
				{
					pageId: "single-player-hub",
					href: "/single-player/",
					title: "Halloween: The Game Single Player — Story Mode & Chapters",
					description: "Six-chapter Michael Myers story reimagining the 1978 film, Dr. Loomis narration, sandbox objectives, and replay unlocks—without speculative walkthroughs.",
					eyebrow: "Story Mode",
					image: "covers/halloween-gameplay-1.jpg",
				},
			],
			fastAnswers: [
				{
					question: "Does Halloween: The Game have single player?",
					answer: "Yes—a six-chapter story played as Michael with Dr. Loomis narration.",
					pageId: "single-player-hub",
					href: "/single-player/",
				},
			],
		},
		{
			id: "pc",
			eyebrow: "PC",
			title: "PC",
			description: "System requirements, anti-cheat, Steam Deck checks, and PC launch notes.",
			href: "/pc/",
			visual: "covers/halloween-gameplay-2.jpg",
			pages: [
				{
					pageId: "pc-hub",
					href: "/pc/",
					title: "Halloween: The Game on PC — Requirements, EAC & Launch Checks",
					description: "PC storefronts, anti-cheat notices, Steam Deck status links, and what to verify after Advance Access.",
					eyebrow: "PC Guide",
					image: "covers/halloween-gameplay-2.jpg",
				},
				{
					pageId: "pc-system-requirements",
					href: "/pc/system-requirements/",
					title: "Halloween: The Game PC System Requirements",
					description: "Current Steam minimum and recommended specs for Halloween: The Game, plus launch-pending performance claims.",
					eyebrow: "System Requirements",
					image: "covers/halloween-gameplay-1.jpg",
				},
				{
					pageId: "steam-deck",
					href: "/steam-deck/",
					title: "Halloween: The Game Steam Deck — Compatibility, Easy Anti-Cheat & Launch Status",
					description: "What is and isn’t known about playing Halloween: The Game on Steam Deck: Easy Anti-Cheat presence, PC requirements, controller support and what to check at launch.",
					eyebrow: "Steam Deck Status",
					image: "covers/halloween-gameplay-2.jpg",
				},
			],
			fastAnswers: [
				{
					question: "What are the PC system requirements?",
					answer: "Steam lists Windows 11, 16–32 GB RAM, DX12, and 45 GB SSD/NVMe storage.",
					pageId: "pc-system-requirements",
					href: "/pc/system-requirements/",
				},
				{
					question: "Does Halloween work on Steam Deck?",
					answer: "Not verified—see the Steam Deck status page for EAC and testing notes.",
					pageId: "steam-deck",
					href: "/steam-deck/",
				},
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
			alt: "Halloween: The Game Guide — Maps, Characters, Multiplayer & Launch Answers",
		},
	},
};
