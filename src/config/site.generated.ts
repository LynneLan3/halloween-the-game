/**
 * This file is generated from site-spec.yaml.
 * Do not edit directly.
 * Run npm run site:generate instead.
 */
import type { GameConfig } from './game-types';

export const siteConfig: GameConfig = {
	name: "Halloween: The Game",
	shortName: "Halloween: The Game",
	title: "Halloween: The Game Guide — Maps, Characters, Multiplayer & Live Answers",
	description: "Official-facts guides for Halloween: The Game maps, characters, Michael Myers abilities, multiplayer, single-player story, PC requirements, and live-release updates.",
	tagline: "Maps, characters, Michael Myers, multiplayer, story mode, and live-release answers.",
	siteUrl: "https://www.halloweengameguide.wiki/",
	siteMode: "standalone",
	hubPath: "/",
	hubTitle: "Halloween: The Game Guide",
	locale: "en",
	releaseStatus: "released",
	releaseDate: "2026-09-08",
	developer: "IllFonic",
	publisher: "IllFonic Publishing",
	platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
	accentColor: "#c41e1e",
	accentForeground: "#111111",
	heroImage: "hero/michael-mask-hero.jpg",
	heroAlt: "Michael Myers mask close-up from Halloween: The Game",
	heroPosition: "center",
	disclaimer: "Unofficial fan guide. Verify version-sensitive facts against cited sources before production.",
	portal: {
		heroBadge: "Players Need Right Now",
		primaryCta: {
			label: "Find all 14 recordings",
			href: "/loomis-logs/",
		},
		secondaryCta: {
			label: "Browse all guides",
			href: "#browse-guides",
		},
		statusItems: [
			{
				label: "Early Access (historical)",
				value: "Sep 4, 2026 — 9 AM PT (Digital Deluxe window)",
			},
			{
				label: "Release state",
				value: "Out now — full release completed Sep 8, 2026 at 9 AM PT",
			},
			{
				label: "Guide pillars",
				value: "Loomis Logs, Story Challenges, Civilians, Michael builds, Maps",
			},
		],
		popularQuestions: [
			{
				label: "Where are all 14 Loomis Logs and Story recordings?",
				href: "/loomis-logs/",
				context: "11 numbered Loomis Logs plus 3 other recordings, listed by chapter with access caveats.",
			},
			{
				label: "What are all the Story Challenges?",
				href: "/challenges/",
				context: "Six objective wordings for the Prologue and Chapters 1–5, with Chapter 2 tracking caveats.",
			},
			{
				label: "Which Civilians are best by role?",
				href: "/civilian-tier-list/",
				context: "Dated editorial recommendations for all-rounder, objectives, mobility, NPC support, and anti-Michael play.",
			},
			{
				label: "What are the best Michael abilities and starter build?",
				href: "/michael-myers/abilities/",
				context: "Killer Sense + Shape Jump with Blackout, Detection Pulse, and Reality Tear as a supported starter combination.",
			},
			{
				label: "What is on East Haddonfield?",
				href: "/maps/east-haddonfield/",
				context: "Rural map landmarks including the Rabbit in Red Lounge, Phelps Garage, and Midwest Feed Company.",
			},
			{
				label: "When did Halloween: The Game release?",
				href: "/early-access-release-time/",
				context: "Digital Deluxe Early Access began Sep 4 at 9 AM PT; full release completed Sep 8 at 9 AM PT.",
			},
			{
				label: "Was preload available before release?",
				href: "/preload-download-status/",
				context: "Storefront download status and the historical Sep 4 Digital Deluxe unlock.",
			},
			{
				label: "Should I buy Standard or Digital Deluxe?",
				href: "/standard-vs-deluxe-upgrade/",
				context: "Standard $39.99 vs Deluxe $59.99, upgrade path, historical Early Access, and missable Phantom skin.",
			},
			{
				label: "How many maps are in Halloween: The Game?",
				href: "/maps/",
				context: "4 launch multiplayer maps: Haddonfield Heights, Haddonfield Town Center, Orange Grove Estates, and East Haddonfield.",
			},
			{
				label: "How does matchmaking / the queue work?",
				href: "/multiplayer/matchmaking-queue/",
				context: "Role queues, Killer Tokens reporting, and private matches.",
			},
			{
				label: "How do progression and perks work?",
				href: "/progression-perks/",
				context: "Four XP tracks, Perk Cards, and Michael unlocks.",
			},
			{
				label: "How does Halloween multiplayer work?",
				href: "/multiplayer/how-multiplayer-works/",
				context: "1v4 format, objectives, and replay variety.",
			},
			{
				label: "How does Michael Myers work?",
				href: "/michael-myers/",
				context: "Killer role, detention rules, and loadout model.",
			},
			{
				label: "Does Halloween: The Game have offline bots?",
				href: "/bots-private-lobbies-offline/",
				context: "Private matches against AI confirmed; network-offline still needs verification.",
			},
			{
				label: "What are the PC system requirements?",
				href: "/pc/system-requirements/",
				context: "Steam minimum and recommended specs.",
			},
		],
		startHere: [
			{
				title: "Halloween: The Game Loomis Log Locations — All 14 Story Recordings",
				description: "Find all 14 Story Mode recordings: 11 numbered Loomis Logs plus three other recordings, with Chapter 4 and Chapter 5 access and marker caveats kept explicit.",
				href: "/loomis-logs/",
				image: "covers/michael/singleplayer-haddonfield.jpg",
				label: "Loomis Logs",
				badge: "Launch priority",
			},
			{
				title: "Halloween: The Game — All Story Challenges",
				description: "See the six objective wordings for the Prologue and Chapters 1–5, with the Chapter 2 sixth-challenge and version-sensitive tracking caveat clearly separated.",
				href: "/challenges/",
				image: "covers/michael/singleplayer-haddonfield.jpg",
				label: "Story Challenges",
			},
			{
				title: "Halloween: The Game Civilian Tier List — Best Civilians by Role",
				description: "Choose a Civilian by role and playstyle with a dated editorial ranking based on Athleticism, Personality, Resourcefulness, and Capability—not an objective tier claim.",
				href: "/civilian-tier-list/",
				image: "covers/characters/heroes-of-haddonfield.jpg",
				label: "Best Civilians",
			},
			{
				title: "Michael Myers Abilities — Evil Presence, Killer Sense, Stalk & Shape Jump",
				description: "What Evil Presence does in Halloween: The Game, how Michael's abilities unlock, and which EA details remain unproven.",
				href: "/michael-myers/abilities/",
				image: "covers/michael/smiths-grove.jpg",
				label: "Michael Abilities / Builds",
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
					pageId: "maps-east-haddonfield",
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
				{
					pageId: "maps-east-haddonfield",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
				{
					asset: "evidence/maps/heights-flythrough-t12.webp",
					alt: "Residential road and detached houses on Haddonfield Heights from the IllFonic flythrough",
					caption: "Illustrative IllFonic map flythrough footage of Heights residential road cues at 0:12; not named-landmark or route proof.",
					sourceLabel: "IllFonic flythrough @ 0:12",
					sourceType: "official",
					sourceUrl: "https://www.youtube.com/watch?v=C2iqQykoqB8&t=12s",
				},
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
				{
					pageId: "maps-east-haddonfield",
					type: "related",
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
					pageId: "maps-east-haddonfield",
					type: "next-step",
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
			id: "maps-east-haddonfield",
			slug: "maps/east-haddonfield",
			role: "core",
			assetType: "article",
			intents: ["east-haddonfield-map"],
			relations: [
				{
					pageId: "maps-hub",
					type: "related",
				},
				{
					pageId: "maps-haddonfield-heights",
					type: "related",
				},
				{
					pageId: "maps-haddonfield-town-center",
					type: "related",
				},
				{
					pageId: "maps-orange-grove-estates",
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
					pageId: "progression-perks",
					type: "next-step",
				},
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
					pageId: "progression-perks",
					type: "next-step",
				},
				{
					pageId: "multiplayer-matchmaking-queue",
					type: "related",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "characters-hub",
					type: "related",
				},
				{
					pageId: "michael-myers-skins",
					type: "next-step",
				},
				{
					pageId: "michael-myers-how-to-arrest",
					type: "next-step",
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
			id: "michael-myers-how-to-arrest",
			slug: "how-to-arrest-michael-myers",
			role: "core",
			assetType: "article",
			intents: ["how-to-arrest-michael-myers"],
			relations: [
				{
					pageId: "multiplayer-hub",
					type: "related",
				},
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
					pageId: "multiplayer-matchmaking-queue",
					type: "next-step",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "bots-private-lobbies-offline",
					type: "related",
				},
				{
					pageId: "multiplayer-crossplay",
					type: "next-step",
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
					pageId: "multiplayer-matchmaking-queue",
					type: "next-step",
				},
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
				{
					pageId: "multiplayer-how-to-escape",
					type: "next-step",
				},
				{
					pageId: "progression-perks",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "multiplayer-how-to-escape",
			slug: "multiplayer/how-to-escape",
			role: "core",
			assetType: "article",
			intents: ["how-to-escape-haddonfield"],
			relations: [
				{
					pageId: "multiplayer-hub",
					type: "related",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "related",
				},
				{
					pageId: "michael-myers-how-to-arrest",
					type: "next-step",
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
			id: "multiplayer-matchmaking-queue",
			slug: "multiplayer/matchmaking-queue",
			role: "core",
			assetType: "article",
			intents: ["matchmaking-queue", "killer-tokens"],
			relations: [
				{
					pageId: "multiplayer-hub",
					type: "related",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "next-step",
				},
				{
					pageId: "bots-private-lobbies-offline",
					type: "related",
				},
				{
					pageId: "progression-perks",
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
			intents: ["halloween-single-player", "story-mode", "how-many-chapters"],
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
			id: "single-player-chapter-5-challenges",
			slug: "single-player/chapter-5-challenges",
			role: "core",
			assetType: "article",
			intents: ["chapter-5-challenges", "challenge-6-police-car", "police-car-not-counting"],
			relations: [
				{
					pageId: "single-player-hub",
					type: "related",
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
					pageId: "preload-download-status",
					type: "next-step",
				},
				{
					pageId: "standard-vs-deluxe-upgrade",
					type: "next-step",
				},
				{
					pageId: "multiplayer-hub",
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
			id: "preload-download-status",
			slug: "preload-download-status",
			role: "core",
			assetType: "article",
			intents: ["preload-download-status"],
			relations: [
				{
					pageId: "early-access-release-time",
					type: "related",
				},
				{
					pageId: "standard-vs-deluxe-upgrade",
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
					pageId: "early-access-release-time",
					type: "related",
				},
				{
					pageId: "preload-download-status",
					type: "related",
				},
				{
					pageId: "characters-hub",
					type: "next-step",
				},
				{
					pageId: "physical-collectors-edition",
					type: "related",
				},
				{
					pageId: "michael-myers-skins",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "progression-perks",
			slug: "progression-perks",
			role: "core",
			assetType: "article",
			intents: ["progression-perks", "perk-cards"],
			relations: [
				{
					pageId: "michael-myers-hub",
					type: "next-step",
				},
				{
					pageId: "perk-cards",
					type: "next-step",
				},
				{
					pageId: "michael-myers-abilities",
					type: "related",
				},
				{
					pageId: "characters-hub",
					type: "related",
				},
				{
					pageId: "multiplayer-how-it-works",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "perk-cards",
			slug: "perk-cards",
			role: "supporting",
			assetType: "article",
			intents: ["halloween-perk-cards", "halloween-perk-list", "halloween-perk-deck", "how-perk-cards-work"],
			relations: [
				{
					pageId: "progression-perks",
					type: "next-step",
				},
				{
					pageId: "characters-hub",
					type: "related",
				},
				{
					pageId: "civilian-tier-list",
					type: "related",
				},
				{
					pageId: "multiplayer-hub",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "trophies-achievements",
			slug: "trophies-achievements",
			role: "core",
			assetType: "article",
			intents: ["trophies-achievements", "platinum"],
			relations: [
				{
					pageId: "progression-perks",
					type: "next-step",
				},
				{
					pageId: "single-player-hub",
					type: "related",
				},
				{
					pageId: "michael-myers-hub",
					type: "related",
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
			id: "physical-collectors-edition",
			slug: "physical-collectors-edition",
			role: "core",
			assetType: "article",
			intents: ["physical-collectors-edition", "collectors-edition"],
			relations: [
				{
					pageId: "standard-vs-deluxe-upgrade",
					type: "next-step",
				},
				{
					pageId: "michael-myers-skins",
					type: "next-step",
				},
				{
					pageId: "progression-perks",
					type: "related",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "michael-myers-skins",
			slug: "michael-myers/skins",
			role: "core",
			assetType: "article",
			intents: ["michael-myers-skins", "phantom-michael"],
			relations: [
				{
					pageId: "michael-myers-hub",
					type: "related",
				},
				{
					pageId: "progression-perks",
					type: "next-step",
				},
				{
					pageId: "standard-vs-deluxe-upgrade",
					type: "next-step",
				},
				{
					pageId: "physical-collectors-edition",
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
		{
			id: "loomis-logs",
			slug: "loomis-logs",
			role: "core",
			assetType: "article",
			intents: ["loomis-log-locations", "story-recordings"],
			relations: [
				{
					pageId: "single-player-hub",
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
			id: "story-challenges",
			slug: "challenges",
			role: "core",
			assetType: "article",
			intents: ["story-challenges", "chapter-challenges"],
			relations: [
				{
					pageId: "single-player-hub",
					type: "related",
				},
				{
					pageId: "loomis-logs",
					type: "related",
				},
				{
					pageId: "michael-myers-abilities",
					type: "next-step",
				},
			],
			sources: [
			],
			evidence: [
			],
		},
		{
			id: "civilian-tier-list",
			slug: "civilian-tier-list",
			role: "core",
			assetType: "article",
			intents: ["civilian-tier-list", "best-civilians"],
			relations: [
				{
					pageId: "characters-hub",
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
	],
	routes: [
		{
			id: "maps",
			eyebrow: "Maps",
			title: "Maps",
			description: "Confirmed Haddonfield maps, landmarks, and current UNKNOWNs.",
			href: "/maps/",
			visual: "covers/maps/town-center-main-street.jpg",
			pages: [
				{
					pageId: "maps-hub",
					href: "/maps/",
					title: "Halloween: The Game Maps — All 4 Launch Maps & Locations",
					description: "Halloween: The Game launches with 4 multiplayer maps: Haddonfield Heights, Haddonfield Town Center, Orange Grove Estates, and East Haddonfield. Compare confirmed landmarks and settings.",
					eyebrow: "Maps",
					image: "covers/maps/haddonfield-heights-03.jpg",
				},
				{
					pageId: "maps-haddonfield-heights",
					href: "/maps/haddonfield-heights/",
					title: "Haddonfield Heights Map — Halloween: The Game Landmarks Guide",
					description: "Orient yourself on Haddonfield Heights with confirmed landmarks, supported Lampkin Lane and Myers house context, residential road cues, and explicit route unknowns.",
					eyebrow: "Map Location",
					image: "covers/maps/haddonfield-heights-02.jpg",
				},
				{
					pageId: "maps-haddonfield-town-center",
					href: "/maps/haddonfield-town-center/",
					title: "Haddonfield Town Center — Halloween: The Game Map Guide",
					description: "Named downtown businesses and Haddonfield Cemetery confirmed as playable space in Halloween: The Game's Town Center map.",
					eyebrow: "Map Location",
					image: "covers/maps/town-center-cemetery.jpg",
				},
				{
					pageId: "maps-orange-grove-estates",
					href: "/maps/orange-grove-estates/",
					title: "Orange Grove Estates — Halloween: The Game Map Guide",
					description: "Upscale suburban map with multi-story homes, park space, Wallace and Doyle houses, and open sightlines in Halloween: The Game.",
					eyebrow: "Map Location",
					image: "covers/maps/orange-grove-playground.jpg",
				},
				{
					pageId: "maps-east-haddonfield",
					href: "/maps/east-haddonfield/",
					title: "East Haddonfield — Halloween: The Game Map Guide",
					description: "Rural launch map with The Rabbit in Red Lounge, Phelps Garage, and Midwest Feed Company — confirmed landmarks and current UNKNOWNs.",
					eyebrow: "Map Location",
					image: "covers/maps/east-haddonfield-rabbit-lounge.jpg",
				},
			],
			fastAnswers: [
				{
					question: "How many maps are in Halloween: The Game?",
					answer: "4 launch multiplayer maps: Haddonfield Heights, Haddonfield Town Center, Orange Grove Estates, and East Haddonfield.",
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
					question: "What is on East Haddonfield?",
					answer: "Rural outskirts map with The Rabbit in Red Lounge, Phelps Garage, and Midwest Feed Company.",
					pageId: "maps-east-haddonfield",
					href: "/maps/east-haddonfield/",
				},
			],
		},
		{
			id: "characters",
			eyebrow: "Characters",
			title: "Characters",
			description: "Playable Civilian roster, Deluxe exclusives, and trait overview.",
			href: "/characters/",
			visual: "covers/characters/heroes-of-haddonfield.jpg",
			pages: [
				{
					pageId: "characters-hub",
					href: "/characters/",
					title: "Halloween: The Game Characters — All Playable Civilians",
					description: "Standard Edition's 10 Civilians (6 new + 4 legacy), Deluxe exclusives Richard and Alexis, and what IllFonic confirms about unique stats and traits.",
					eyebrow: "Character Guide",
					image: "covers/characters/heroes-of-haddonfield.jpg",
				},
				{
					pageId: "civilian-tier-list",
					href: "/civilian-tier-list/",
					title: "Halloween: The Game Civilian Tier List — Best Civilians by Role",
					description: "Choose a Civilian by role and playstyle with a dated editorial ranking based on Athleticism, Personality, Resourcefulness, and Capability—not an objective tier claim.",
					eyebrow: "Civilian Picks",
					image: "covers/characters/heroes-of-haddonfield.jpg",
				},
				{
					pageId: "progression-perks",
					href: "/progression-perks/",
					title: "Halloween: The Game Progression & Perks — How Unlocks Work",
					description: "Four progression levels (Profile, Killer, Civilian, Weapon), Civilian Perk Cards and decks, Michael loadout unlocks, and what still needs live-build verification.",
					eyebrow: "Progression",
					image: "covers/progression/po-perk-cards.jpg",
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
				{
					question: "How do Civilian perks and progression work?",
					answer: "Perk Points roll Perk Cards into Perk Decks; four XP tracks unlock cosmetics and more.",
					pageId: "progression-perks",
					href: "/progression-perks/",
				},
			],
		},
		{
			id: "michael-myers",
			eyebrow: "Killer",
			title: "Michael Myers",
			description: "How Michael works in-game—objectives, abilities, and combat rules.",
			href: "/michael-myers/",
			visual: "hero/michael-mask-hero.jpg",
			pages: [
				{
					pageId: "michael-myers-hub",
					href: "/michael-myers/",
					title: "Michael Myers Abilities in Halloween: The Game — Evil Presence, Stalk & Unlocks",
					description: "What Evil Presence does in Halloween: The Game, how Michael's abilities unlock, and what EA gameplay confirms about Stalk, stagger, and executions.",
					eyebrow: "Killer Guide",
					image: "hero/michael-mask-hero.jpg",
				},
				{
					pageId: "michael-myers-abilities",
					href: "/michael-myers/abilities/",
					title: "Michael Myers Abilities — Evil Presence, Killer Sense, Stalk & Shape Jump",
					description: "What Evil Presence does in Halloween: The Game, how Michael's abilities unlock, and which EA details remain unproven.",
					eyebrow: "Killer Abilities",
					image: "covers/michael/smiths-grove.jpg",
				},
				{
					pageId: "michael-myers-how-to-arrest",
					href: "/how-to-arrest-michael-myers/",
					title: "How to Arrest Michael Myers in Halloween: The Game — Detain Sequence",
					description: "The verified multiplayer detain sequence: authority pressure, handcuff readiness, [E] Detain Michael, the minigame, MICHAEL DETAINED, and why knockdowns can fail.",
					eyebrow: "Arrest Guide",
				},
				{
					pageId: "michael-myers-skins",
					href: "/michael-myers/skins/",
					title: "Halloween: The Game Michael Myers Skins — Phantom, Inmate, Clown & Samhain",
					description: "Confirmed Michael Myers skins: Base, Phantom (digital preorder exclusive), Inmate (Deluxe/Deluxe Upgrade), Clown and Samhain (physical Advance Access, also earnable via challenges).",
					eyebrow: "Michael Skins",
					image: "covers/editions/halloween-physical-editions.jpg",
				},
				{
					pageId: "progression-perks",
					href: "/progression-perks/",
					title: "Halloween: The Game Progression & Perks — How Unlocks Work",
					description: "Four progression levels (Profile, Killer, Civilian, Weapon), Civilian Perk Cards and decks, Michael loadout unlocks, and what still needs live-build verification.",
					eyebrow: "Progression",
					image: "covers/progression/po-perk-cards.jpg",
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
				{
					question: "How do you arrest Michael Myers?",
					answer: "Build police pressure until the handcuff readiness indicator appears, knock him down, press Detain Michael, and finish the short progress interaction for MICHAEL DETAINED.",
					pageId: "michael-myers-how-to-arrest",
					href: "/how-to-arrest-michael-myers/",
				},
			],
		},
		{
			id: "multiplayer",
			eyebrow: "Multiplayer",
			title: "Multiplayer",
			description: "1v4 online format, matchmaking, crossplay notes, bots, and match questions.",
			href: "/multiplayer/",
			visual: "covers/gameplay/rachel-gameplay.png",
			pages: [
				{
					pageId: "multiplayer-hub",
					href: "/multiplayer/",
					title: "Halloween: The Game Multiplayer — 1v4 Format & Objectives",
					description: "Confirmed 1 Michael vs 4 Civilians multiplayer, Civilian and Michael objectives, deputy returns, and replayability notes from IllFonic.",
					eyebrow: "Multiplayer",
					image: "covers/gameplay/rachel-gameplay.png",
				},
				{
					pageId: "multiplayer-matchmaking-queue",
					href: "/multiplayer/matchmaking-queue/",
					title: "Halloween: The Game Matchmaking Queue — Roles, Tokens & Private Matches",
					description: "Role-based matchmaking queues, secondary-reported Killer Tokens, private matches with friends, and what remains unknown about AI backfill.",
					eyebrow: "Matchmaking",
					image: "covers/gameplay/rachel-gameplay.png",
				},
				{
					pageId: "multiplayer-how-it-works",
					href: "/multiplayer/how-multiplayer-works/",
					title: "How Halloween: The Game Multiplayer Works",
					description: "1 Michael vs 4 Civilians multiplayer loop: 4 maps, Civilian and Michael objectives, private AI matches, and what remains unknown about bot fill.",
					eyebrow: "Multiplayer Guide",
					image: "covers/gameplay/rachel-gameplay.png",
				},
				{
					pageId: "multiplayer-how-to-escape",
					href: "/multiplayer/how-to-escape/",
					title: "Halloween The Game Escape Routes — Car, Cellar, Gate & Police Wagon",
					description: "Fast-verified multiplayer escape decision guide: what to do after finding a Sedan, Storm Cellar, Outer Gate, or Police Wagon cue, with current UNKNOWNs preserved.",
					eyebrow: "Escape Guide",
					image: "covers/gameplay/rachel-gameplay.png",
				},
				{
					pageId: "multiplayer-crossplay",
					href: "/multiplayer/crossplay/",
					title: "Halloween: The Game Crossplay — What Is Officially Confirmed",
					description: "Xbox storefront cross-platform indicators, confirmed platforms, Patch 1.0.1 party/lobby status, and the remaining unknown matrix.",
					eyebrow: "Crossplay",
					image: "covers/gameplay/extended-first-look.jpg",
				},
				{
					pageId: "bots-private-lobbies-offline",
					href: "/bots-private-lobbies-offline/",
					title: "Does Halloween: The Game Have Offline Bots? — Yes (Private AI Matches Confirmed)",
					description: "Yes — IllFonic has officially announced private matches against AI. The developer’s Progression & Customization and reveal/storefront messaging described playing against bots offline; private matches with friends are supported in live-period coverage (TheGamer, Sep 4, 2026). Fully network‑offline/no‑internet play is not confirmed in live builds.",
					eyebrow: "Offline Bots",
					image: "covers/michael/police-lurking.jpg",
				},
				{
					pageId: "match-length-timer",
					href: "/match-length-timer/",
					title: "How Long Are Halloween: The Game Matches? 12‑Minute Timer Explained",
					description: "Short answer: there is no official published match timer in the supplied evidence. Earlier footage often shows sessions around ~12 minutes, but that is observational — not confirmed rules.",
					eyebrow: "Match Length",
					image: "covers/gameplay/rabbit-in-red-lounge.jpg",
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
					question: "How does the matchmaking queue work?",
					answer: "Role queues and private matches are covered; Killer Tokens are secondary-reported; public AI backfill is unknown.",
					pageId: "multiplayer-matchmaking-queue",
					href: "/multiplayer/matchmaking-queue/",
				},
				{
					question: "Which escape should I pursue?",
					answer: "Use the current match HUD/objective: Sedan, Storm Cellar, Outer Gate, and Police Wagon routes have different reported requirements, while exact capacity and some interaction details remain unknown.",
					pageId: "multiplayer-how-to-escape",
					href: "/multiplayer/how-to-escape/",
				},
			],
		},
		{
			id: "single-player",
			eyebrow: "Story Mode",
			title: "Single Player",
			description: "Michael Myers story chapters, replay structure, and unlocks.",
			href: "/single-player/",
			visual: "covers/michael/singleplayer-haddonfield.jpg",
			pages: [
				{
					pageId: "single-player-hub",
					href: "/single-player/",
					title: "Halloween: The Game Single Player — Story Mode & Chapters",
					description: "A six-chapter Michael Myers Story Mode walkthrough covering observed first-clear progression, current objectives, replay cleanup, and evidence boundaries.",
					eyebrow: "Story Mode",
					image: "covers/michael/singleplayer-haddonfield.jpg",
				},
				{
					pageId: "loomis-logs",
					href: "/loomis-logs/",
					title: "Halloween: The Game Loomis Log Locations — All 14 Story Recordings",
					description: "Find all 14 Story Mode recordings: 11 numbered Loomis Logs plus three other recordings, with Chapter 4 and Chapter 5 access and marker caveats kept explicit.",
					eyebrow: "Collectibles",
					image: "covers/michael/singleplayer-haddonfield.jpg",
				},
				{
					pageId: "story-challenges",
					href: "/challenges/",
					title: "Halloween: The Game — All Story Challenges",
					description: "See the six objective wordings for the Prologue and Chapters 1–5, with the Chapter 2 sixth-challenge and version-sensitive tracking caveat clearly separated.",
					eyebrow: "Story Challenges",
					image: "covers/michael/singleplayer-haddonfield.jpg",
				},
				{
					pageId: "single-player-chapter-5-challenges",
					href: "/single-player/chapter-5-challenges/",
					title: "Halloween: The Game — All Chapter 5 Challenges and Challenge 6 Troubleshooting",
					description: "Complete all six Chapter 5 challenges with exact current-build wording, then troubleshoot Challenge 6 with one verified parked-police-car route: melee attack, sewer escape, and results-screen confirmation.",
					eyebrow: "Chapter 5 Challenges",
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
			description: "System requirements, Steam Deck checks, and PC launch notes.",
			href: "/pc/",
			visual: "covers/maps/orange-grove-park.jpg",
			pages: [
				{
					pageId: "pc-hub",
					href: "/pc/",
					title: "Halloween: The Game on PC — Requirements & Launch Checks",
					description: "PC storefronts, system requirements, Steam Deck status links, and current compatibility UNKNOWNs.",
					eyebrow: "PC Guide",
					image: "hero/halloween-keyart.jpg",
				},
				{
					pageId: "pc-system-requirements",
					href: "/pc/system-requirements/",
					title: "Halloween: The Game System Requirements — Minimum & Recommended PC Specs",
					description: "Minimum and Recommended PC specs for Halloween: The Game: Windows 11, SSD/NVMe, Easy Anti-Cheat, 1080p30 / 4K30 store targets, and what is still not confirmed.",
					eyebrow: "System Requirements",
					image: "covers/gameplay/extended-first-look.jpg",
				},
				{
					pageId: "steam-deck",
					href: "/steam-deck/",
					title: "Halloween: The Game Steam Deck — Compatibility & Launch Status",
					description: "What is and isn't known about playing Halloween: The Game on Steam Deck: PC requirements, controller support, and current compatibility UNKNOWNs.",
					eyebrow: "Steam Deck Status",
					image: "covers/gameplay/rachel-gameplay.png",
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
					answer: "Not verified—see the Steam Deck status page for compatibility checks.",
					pageId: "steam-deck",
					href: "/steam-deck/",
				},
			],
		},
	],
	trust: {
		enabled: true,
		pages: {
			privacy: {
				enabled: true,
				slug: "privacy",
				path: "/privacy/",
				title: "Privacy",
				robots: "noindex,follow",
			},
		},
	},
	analytics: {
		enabled: true,
		siteId: "halloween-the-game",
		gameSlug: "halloween-the-game",
		templateVersion: "2.0.0",
		launchDate: "2026-09-08",
		ga4: { enabled: true },
		vercelAnalytics: { enabled: true },
	},
	monetization: {
		enabled: true,
		affiliate: {
			enabled: false,
			disclosure: false,
		},
		ads: {
			enabled: true,
			scriptSrc: "https://pl31121382.profitableratecpmnetwork.com/48fe22f744a00606ab2616e732ff6e3a/invoke.js",
			containerId: "container-48fe22f744a00606ab2616e732ff6e3a",
		},
	},
	social: {
		defaultImage: {
			asset: "social/halloween-social.jpg",
			alt: "Halloween: The Game Guide — Maps, Characters, Multiplayer & Launch Answers",
		},
	},
};
