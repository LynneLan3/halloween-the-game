# SEO Research — Halloween: The Game

**Research date:** 2026-09-02  
**Site:** halloween-the-game (`steam_app_id: 3219630`)  
**Release status:** Pre-release (Advance Access window opens 2026-09-04; full digital release 2026-09-08)  
**Strategy context:** Website 2.0 shell (Astro port of `LynneLan3/Halloween_The_Game`) + V4 content contract. See `docs/website-2.0-migration.md`.

---

## What is this game?

**Halloween: The Game** is an official asymmetrical horror sandbox from **IllFonic** (developer) and **IllFonic Publishing** (with **Gun Interactive** as co-publisher), licensed from **Compass International Pictures** / the 1978 John Carpenter film. Players can:

- Control **Michael Myers** (the Killer) or **Civilians** (“Heroes of Haddonfield”) in **1v4 online multiplayer** on Haddonfield maps.
- Play a **standalone single-player story** as Michael Myers, reimagining events around “The Night He Came Home.”
- Practice in **offline bot matches** (separate from story mode), per Gamescom 2025 / reliable press coverage citing IllFonic.

The game is built in **Unreal Engine 5**, targets **PC (Steam + Epic)**, **PlayStation 5**, and **Xbox Series X|S**, and is positioned as a replayable horror sandbox with dynamic objectives, NPC interactions, police escalation, and Michael’s stalking/shadow toolkit.

**Primary sources:** [Steam App 3219630](https://store.steampowered.com/app/3219630/Halloween_The_Game/), [halloweengame.com](https://halloweengame.com/), [Preorder FAQ](https://halloweengame.com/news/preorder/), [Multiplayer Gameplay Overview](https://halloweengame.com/news/multiplayer-gameplay-overview/)

---

## What is currently confirmed (2026-09-02)

### Release, editions, and pricing

| Claim | Status | Source |
| --- | --- | --- |
| Full digital release **September 8, 2026** | **VERIFIED** | Steam API `release_date`, Xbox store, IllFonic news posts |
| **Advance Access** begins **Friday, September 4, 2026, 9:00 AM PT** | **VERIFIED** | [Official preorder FAQ](https://halloweengame.com/news/preorder/) |
| Advance Access tied to **Digital Deluxe pre-order** (Standard pre-order does not list gameplay Early Access) | **VERIFIED** | Preorder page + FAQ |
| **Standard $39.99 USD** / **Digital Deluxe $59.99 USD** | **VERIFIED** | Preorder FAQ; Steam package pricing |
| **Digital Deluxe Edition Upgrade** at launch (Inmate skin + Richard & Alexis civilians; Phantom skin **not** included) | **VERIFIED** | Preorder FAQ |
| **Phantom Michael Myers skin** = digital pre-order exclusive, not sold after pre-order period | **VERIFIED** | Preorder FAQ |
| PC storefronts: **Steam (3219630)** and **Epic Games Store** | **VERIFIED** | Steam API; Orange Grove Estates post |
| Digital pre-orders opened **June 6, 2026** | **VERIFIED** | Preorder news post |

### Platforms and technical baseline (PC)

| Claim | Status | Source |
| --- | --- | --- |
| Platforms: **PC, PS5, Xbox Series X\|S** | **VERIFIED** | Steam, Xbox, official map posts |
| **Unreal Engine 5** | **VERIFIED** | Steam store description |
| **Windows 11 64-bit**, **DX12**, **45 GB SSD/NVMe**, **16 GB min / 32 GB rec RAM** | **VERIFIED** | Steam API `pc_requirements` |
| Min GPU: **GTX 1660+ / RX 590+ / Arc A770+** (1080p@30); Rec: **RTX 3000 / RX 7000** (4K@30) | **VERIFIED** | Steam API |
| **Full controller support** on PC | **VERIFIED** | Steam API `controller_support: full` |
| Content: violence, blood/gore, **beer and marijuana** inventory use, some single-player nudity | **VERIFIED** | Steam `content_descriptors` |

### Multiplayer format and loop

| Claim | Status | Source |
| --- | --- | --- |
| **1 Michael vs 4 Civilians** (up to 5 online players) | **VERIFIED** | Multiplayer overview post; Steam description |
| Civilian goals: locate/warn residents, gather items, contact police, pursue **randomized escapes**, detain Michael | **VERIFIED** | Multiplayer overview |
| Michael goals: kill residents + **Special Targets** (time-limited, greater rewards) | **VERIFIED** | Multiplayer overview |
| Eliminated Civilians may return as **Sheriff's Deputy** or **Dr. Loomis** | **VERIFIED** | Multiplayer overview; Bloody Disgusting (quoting IllFonic) |
| Michael **cannot be killed**; can be **detained** and returned to **Smith's Grove** | **VERIFIED** | Multiplayer overview |
| **Escape and item locations vary** between matches | **VERIFIED** | Multiplayer overview |
| Michael abilities: **Killer Sense**, **Stalk**, **Shape Jump**, **Shape Dash**, **blackouts** / light manipulation | **VERIFIED** | Multiplayer overview |
| **Cross-platform multiplayer** indicated on Xbox store | **VERIFIED** (indicator only) | Xbox Digital Deluxe listing |

### Maps (3 revealed)

| Map | Key confirmed landmarks / traits | Source |
| --- | --- | --- |
| **Haddonfield Heights** | Residential; Myers house, water tower, Lampkin Lane | [Map flythrough post](https://halloweengame.com/news/haddonfield-heights-map-flythrough/) |
| **Haddonfield Town Center** | Nichols Hardware, Patty's Pub, A-Side Music, Hill Garden Center, Post Office, Margie's Auto Repair, **Haddonfield Cemetery** (playspace) | [Town Center post](https://halloweengame.com/news/haddonfield-town-center/) |
| **Orange Grove Estates** | Multi-story homes, park/playground, Wallace & Doyle houses, fences/hedges, vehicles/bikes | [Orange Grove post](https://halloweengame.com/news/orange-grove-estates/) |

PAX East 2026 demo footage (trunk searches, barricading, hiding) is cited in existing site content; treat gameplay specifics from demo as **demonstration**, not final balance.

### Characters

| Claim | Status | Source |
| --- | --- | --- |
| **10 Standard Civilians**: Jennifer, Tanya, Rachel, Eric, Marcus, Thomas + legacy Bob, Lynda, Annie, Laurie | **VERIFIED** | Existing site content aligns with IllFonic “Heroes of Haddonfield” posts (not re-fetched individually; hub claims match preorder/multiplayer materials) |
| **Deluxe exclusives**: Richard, Alexis | **VERIFIED** | Preorder page |
| Each Civilian has **unique stats, traits, personality** | **VERIFIED** | Multiplayer overview |
| **Numeric stat tables / perk trees** | **NOT PUBLISHED** | IllFonic says more details coming |

### Single-player story

| Claim | Status | Source |
| --- | --- | --- |
| **Yes — single-player story** as Michael Myers | **VERIFIED** | Steam description; Gamescom 2025 coverage (GameSpot) |
| **Six chapters**; **Dr. Samuel Loomis** narration; reimagines 1978 film events | **VERIFIED** | Existing site content; IGN interview cited in site-input |
| Fixed core objectives + sandbox execution; multiple difficulties | **VERIFIED** | Site-input / IGN materials |
| Replay extras: challenges, collectibles, lore, executions, cosmetics | **VERIFIED** | Site-input (IllFonic-listed categories) |

### Offline / modes

| Claim | Status | Source |
| --- | --- | --- |
| **Offline bot play** (separate from story) | **VERIFIED** | GameSpot Gamescom 2025 article; Bloody Disgusting (IllFonic statement) |
| **Single-player story** distinct from bot skirmishes | **VERIFIED** | Same sources + Steam categories |

### Australia classification

| Claim | Status | Source |
| --- | --- | --- |
| Base game **Refused Classification (RC)** in Australia (July 22, 2026 decision reported) | **VERIFIED** | [Classification Board statement via Press Start](https://press-start.com.au/news/playstation/2026/08/14/halloween-the-game-classification-board-statement/) |
| Reason: **illicit drug use linked to gameplay advantage/reward** (marijuana/joint item) | **VERIFIED** | Board statement; The Guardian |
| IllFonic stated **AU/NZ sales blocked** | **VERIFIED** | Press Start (publisher statement) |
| Separate **Digital Deluxe IARC R18+** listing reported; base SKU still RC | **PROVISIONAL** | Secondary reporting (POPTOPIC, Press Start follow-ups) — **not** an official reclassification |

---

## Validation of existing site-spec / site-input claims

Audit against primary sources on **2026-09-02**:

| Existing claim | Verdict | Notes |
| --- | --- | --- |
| 3 maps, named landmarks | **VALID** | Matches official map reveal posts |
| 1v4 multiplayer, Deputy/Loomis returns, detention | **VALID** | Matches multiplayer overview |
| Michael ability names and themes | **VALID** | Matches multiplayer overview |
| 10 + 2 Deluxe civilians, named roster | **VALID** | Consistent with preorder + overview; individual character pages not yet justified |
| Six-chapter story, Loomis narration | **VALID** | Supported by press/dev materials |
| Sep 4 9 AM PT Advance Access; Sep 8 release | **VALID** | FAQ is definitive; **ignore** secondary outlets citing 10 AM PT (e.g. consolepcgaming.com) |
| Standard/Deluxe pricing and upgrade path | **VALID** | FAQ |
| Steam PC requirements table | **VALID** | Matches Steam API exactly |
| **Easy Anti-Cheat** + kernel notice on Steam | **PROVISIONAL** | Site-input cites PCGamingWiki + Steam; EAC **not** present in Steam API JSON fields reviewed — verify live store anti-cheat badge at launch |
| Full crossplay matrix (Steam ↔ Epic ↔ PS5 ↔ Xbox) | **NOT CONFIRMED** | Only platform indicators; site correctly marks launch verification pending |
| Private lobbies with role assignment | **PROVISIONAL** | Playfront reporting only; site correctly labels secondary |
| AI/bot backfill in private online lobbies | **NOT ANNOUNCED** | Site correctly omits as fact |
| ~12-minute match timer | **NOT OFFICIAL** | Site correctly treats as observational footage only |
| Australia “unbanned” via Deluxe SKU | **DO NOT CLAIM** | Site correctly treats Deluxe IARC as provisional; base RC stands in official database |
| PAX demo gameplay (trunk search, barricade, hide) | **PROVISIONAL** | Cited in site-input; demo behavior may differ at launch |

---

## Useful user / search intents

Pre-release intent clusters (ordered by launch-window priority):

1. **Launch timing** — Advance Access start time, time zones, countdown, full release date
2. **Edition choice** — Standard vs Deluxe, upgrade path, Phantom vs Inmate skins, is Early Access worth it?
3. **Platform availability** — PC/PS5/Xbox, Steam vs Epic, **Australia ban/status**
4. **Core game understanding** — What is the game? Multiplayer format? Single-player? Bots/offline?
5. **Maps** — How many maps? Map names? Landmarks per map?
6. **Characters** — Playable roster? Laurie/Annie? Deluxe exclusives?
7. **Michael Myers** — Abilities? Can he be killed? Objectives?
8. **Multiplayer mechanics** — How matches work, crossplay, match length, private lobbies
9. **PC readiness** — System requirements, Steam Deck, EAC
10. **Post-launch (deferred)** — Builds, tier lists, walkthroughs, perk meta, map callouts

---

## Guide pages justified (current site-spec matrix)

All **19 pages** in `site-spec.yaml` are justified for the Sep 2026 launch window. Rationale summary:

| Pillar | Pages | Justification |
| --- | --- | --- |
| **Launch / editions** | `early-access-release-time`, `standard-vs-deluxe-upgrade` | High-volume pre-release queries; official FAQ-backed |
| **Maps** | `maps-hub` + 3 map guides | Three official map reveals; clear entity-lookup and browse intent |
| **Characters** | `characters-hub` | Roster confusion (10 vs 12, legacy names); no per-character pages until stats exist |
| **Michael Myers** | `michael-myers-hub`, `michael-myers-abilities` | Killer is primary search entity; abilities officially documented |
| **Multiplayer** | `multiplayer-hub`, `multiplayer-how-it-works`, `multiplayer-crossplay`, `bots-private-lobbies-offline`, `match-length-timer` | Core mode questions; crossplay/bots/timer are high-anxiety pre-launch topics |
| **Story** | `single-player-hub` | Confirmed mode; chapter walkthroughs **not** justified pre-launch |
| **PC** | `pc-hub`, `pc-system-requirements`, `steam-deck` | Store-listed specs; Deck/EAC anxiety |
| **Reference** | `australia-release-status` | RC story drives regional search spike; legally sensitive — evidence discipline required |

**Homepage + 6 route/category surfaces** (`maps`, `characters`, `michael-myers`, `multiplayer`, `single-player`, `pc`) support discovery; not separate guide articles.

---

## Claims with reliable sources (citation index)

**Tier 1 — Official (use freely with link)**

- [halloweengame.com/news/preorder/](https://halloweengame.com/news/preorder/) — pricing, FAQ, Advance Access time, SKU contents
- [halloweengame.com/news/multiplayer-gameplay-overview/](https://halloweengame.com/news/multiplayer-gameplay-overview/) — 1v4 loop, abilities, Deputy/Loomis, detention
- Map reveal posts (Heights, Town Center, Orange Grove)
- [Steam App 3219630](https://store.steampowered.com/app/3219630/Halloween_The_Game/) — requirements, description, pricing, content descriptors
- [Xbox Digital Deluxe](https://www.xbox.com/en-GB/games/store/halloween-digital-deluxe-edition/9NV36NPTFZDN) — cross-platform indicators, edition copy

**Tier 2 — Reliable game media (use with attribution)**

- [GameSpot Gamescom 2025](https://www.gamespot.com/articles/halloween-the-game-coming-from-friday-the-13th-devs-features-single-player/1100-6534148/) — story + offline bots + platforms
- [Bloody Disgusting multiplayer deep dive](https://bloody-disgusting.com/video-games/3942984/halloween-video-game-multiplayer-gameplay-revealed-in-new-deep-dive-video/) — offline bots, Sep 8 date
- [IGN interview](https://www.ign.com/articles/halloween-revealed-by-friday-the-13th-the-game-developer-ign-interviews-illfonic-on-the-single-player-story-mode-working-with-john-carpenter-and-more) — story mode detail (cited in site-input)
- [Press Start — Classification Board statement](https://press-start.com.au/news/playstation/2026/08/14/halloween-the-game-classification-board-statement/) — Australia RC

**Tier 3 — Secondary / provisional (label clearly)**

- [Playfront — private lobbies / matchmaking tokens](https://playfront.de/en/halloween-the-game-setzt-auf-rollenbasiertes-matchmaking-mit-token-system-fuer-killer/)
- [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Halloween:_The_Game) — EAC middleware
- Preview footage / Twitch stream recaps (e.g. HGL perk/currency mentions) — **do not promote to site facts without official confirmation**

---

## Potentially useful claims still unconfirmed

| Topic | What players ask | Status |
| --- | --- | --- |
| **Full crossplay matrix** | Can Steam play with Epic/PS5/Xbox? | Xbox indicates cross-play; pairing details **not published** |
| **Advance Access for post-preorder Deluxe buyers** | If I buy Deluxe on Sep 3, do I get Sep 4 access? | FAQ ties Early Access to **Deluxe pre-order**; upgrade/later purchase **not announced** |
| **Exact Deluxe upgrade price** per storefront | How much to upgrade? | Upgrade SKU exists; **prices not in FAQ** |
| **Private lobby features** | Custom games? Role pick? | **Playfront only** — needs official duplicate |
| **AI backfill in online private lobbies** | Bots fill empty slots? | **Not announced** |
| **Official match timer / length** | Is it 12 minutes? | **No published rule**; ~12 min is footage observation |
| **Character stat numbers, perks, meta** | Best Civilian? Perk rolls? | Twitch stream reporting (Jul 2026) — **not on official site**; omit from launch content |
| **In-game currency / monetization** | MTX? Battle pass? | Mentioned in stream reporting — **not confirmed** in primary materials |
| **Chapter names and walkthrough steps** | Story guide per chapter | Six chapters confirmed; **names/steps not published** |
| **Map spawns, routes, meta** | Best escape, item locations | **Launch verification** |
| **Steam Deck / Proton + EAC** | Does it work? | **Unknown**; no Valve Verified badge |
| **EAC on Steam store page** | Kernel notice | **Verify live** — API snapshot did not include anti-cheat field |
| **Australia Deluxe SKU sale legality** | Can AU buy Deluxe? | IARC R18+ listing is **provisional**; base RC **still official** |
| **Physical release date** | Oct 6, 2026 (console boxes) | Reported via Dread Central in tertiary press — **not in site-spec**; treat as **unconfirmed** unless Nighthawk/IllFonic primary post added |
| **Preload timing** | When can I download? | **Not clearly confirmed** in FAQ |

---

## Content intentionally omitted (insufficient evidence)

Do **not** create these pages pre-launch:

| Omitted page type | Reason |
| --- | --- |
| Per-character guides (`/characters/laurie-strode/`, etc.) | No official stat sheets or ability pages per Civilian |
| Chapter walkthroughs (`/single-player/chapter-1/`) | Chapter count only; no official step-by-step |
| Map tactic/meta guides (spawns, routes, tier lists) | No official spawn tables |
| “Best Michael build” / perk tier lists | Perk/currency systems reported only in stream coverage |
| Weapon/item encyclopedia | No verified item database |
| Achievement / trophy guide | List exists on Steam categories but no curated official checklist tied to steps |
| Crossplay how-to / account linking guide | Matrix unpublished |
| “Unbanned in Australia” celebratory page | Risk of misstating legal status |
| Dead by Daylight / F13 comparison articles | Out of scope; risks wrong-game residue |

---

## Launch-window verification checklist (post Sep 4)

After Advance Access begins, re-verify and update `trust.lastVerified` on:

1. Advance Access actually unlocks at **9:00 AM PT** for Deluxe pre-orders
2. Crossplay settings in-game (platform pairings)
3. Match timer / end conditions on scoreboard or patch notes
4. Private lobby UI and bot-fill behavior
5. Steam Deck badge / ProtonDB / EAC behavior
6. Australia storefront SKUs and Classification Board entries
7. EAC / anti-cheat notice on live Steam page
8. Any Deluxe-upgrade buyers and Advance Access eligibility

---

## Risks and editorial guardrails

- **Drug-use mechanic** is both a **classification driver** (Australia) and **Steam content descriptor** — mention factually, never glamorize.
- **Do not fabricate** execution lists, perk trees, chapter names, or map callouts.
- Prefer **official FAQ time (9 AM PT)** over conflicting press tables.
- Mark all preview-footage-derived timings as **observational**.
- Australia page must **not** imply RC lifted without Classification Board or IllFonic primary confirmation.

---

*Internal production artifact. Not public website content.*
