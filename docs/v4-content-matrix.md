# V4 Content Matrix — Halloween: The Game

**Research date:** 2026-09-02  
**Strategy:** Website 2.0 shell (`Halloween_The_Game` design port) + V4 content contract. See `docs/website-2.0-migration.md`. *(Supersedes V2.2 Experience shell.)*  
**Scope:** All surfaces defined in `site-spec.yaml` — **19 guide pages**, **1 homepage**, **6 route/category discovery surfaces** = **26 rows**  
**Primitive reference:** `game-wiki-starter/src/v4/primitives.ts`, `page-composer.ts` prototype recipes

### Site-spec field mapping (V4 → generator)

| V4 primitive | site-spec / content field |
| --- | --- |
| **A01** Answer Header | `title`, `eyebrow`, `description` (meta + page identity) |
| **A02** Quick Answer | `quickAnswer` |
| **A03** Task Context | Markdown intro / scope paragraph (H2 lead-in) |
| **E01** Fact Card | `facts[]` (`label`, `value`) |
| **E02** Entity Grid | Route `pages[]` roster / hub member cards |
| **E03** Entity Table | Markdown comparison tables (maps, editions, specs) |
| **D01** Comparison Table | Edition/sku tables in markdown |
| **D03** Choice Matrix | “If you want X → choose Y” blocks |
| **P01** Requirements | Prerequisites / eligibility lists |
| **P02** Step Sequence | Numbered how-to sections |
| **P03** Progress Sequence | Story chapter structure (high level only) |
| **P04** Failure & Recovery | “What if wrong edition / wrong region” recovery |
| **L01** Location Facts | Map landmark fact groups |
| **L02** Map | **Omit pre-launch** (no map asset/data) |
| **S02** Platform State | Crossplay / platform badges |
| **S04** Data Freshness | `trust.lastVerified`, launch verification callouts |
| **N01** Related Next Step | `relations[]` |

---

## Homepage discovery → V4 discovery surfaces

Configured in `site-spec.yaml` → `homepage` and `routes`.

| site-spec module | V4 discovery surface | Content contract | Notes |
| --- | --- | --- | --- |
| `heroBadge` + `primaryCta` / `secondaryCta` | **Compact identity header** + primary task CTA | A01 + link to `early-access-release-time` | Avoid oversized hero; launch-window priority |
| `statusItems` | **Status strip** (Hot Now / launch state) | S04 + E01 fact rows | Advance Access, release date, pillar list |
| `startHere` | **Start Here** task entrances | N01-style curated links | P0 launch guides first |
| `routes` (6 categories) | **High-value browse groups** | P2 category cards + `fastAnswers` | Category landings = `noindex,follow` navigation |
| `popularQuestions` | **Popular questions** | A02 snippets → pageId | 9 FAQ intents mapped |
| `featured` pages (via `pages[].featured`) | **Featured / updated surfaces** | Hub pages with `featured: true` | Maps, characters, Michael, multiplayer, story, PC, launch guides |

**Homepage row (synthetic pageId: `homepage`)**

| Field | Value |
| --- | --- |
| **pageId** | `homepage` |
| **title / slug** | Halloween: The Game Guide — `/` |
| **category** | hub |
| **V4 prototype** | Discovery (not P1–P10 answer page) |
| **primaryTask** | `planning` |
| **query** | halloween the game guide |
| **playerProblem** | “What should I read first before launch?” |
| **Required primitives** | A01 (site title), S04 (status strip), Start Here links (N01), browse groups (E02), popular questions (A02 teasers) |
| **Evidence confidence** | VERIFIED (launch dates); PROVISIONAL (anything beyond FAQ) |
| **Priority** | **P0** |
| **Notes** | V2.2 shell renders existing `GamePortal` homepage; V4 contract governs copy density in status/start-here/FAQ modules |

---

## Route / category discovery surfaces (6)

These are **P2 collection-browse** navigation pages (`noindex,follow`), not indexable guides.

| pageId (route) | title | slug | V4 prototype | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `route-maps` | Maps | `/maps` (category) | P2 | `collection-browse` | halloween the game maps | “What maps exist?” | A01, E02 (4 map links), A02 via `fastAnswers`, N01 | VERIFIED (3 maps) | P1 | `fastAnswers` already in spec |
| `route-characters` | Characters | `/characters` | P2 | `collection-browse` | halloween the game characters | “Who can I play?” | A01, E02, A02 fastAnswers, N01 | VERIFIED (roster count) | P1 | Single hub child today |
| `route-michael-myers` | Michael Myers | `/michael-myers` | P2 | `collection-browse` | michael myers halloween game | “How does Michael work?” | A01, E02 (2 pages), fastAnswers, N01 | VERIFIED | P1 | Killer pillar |
| `route-multiplayer` | Multiplayer | `/multiplayer` | P2 | `collection-browse` | halloween the game multiplayer | “How does multiplayer work?” | A01, E02 (5 pages), fastAnswers, N01 | VERIFIED | P0 | Highest traffic pillar |
| `route-single-player` | Single Player | `/single-player` | P2 | `collection-browse` | halloween the game single player | “Is there a story mode?” | A01, E02, fastAnswers, N01 | VERIFIED | P1 | One hub child |
| `route-pc` | PC | `/pc` | P2 | `collection-browse` | halloween the game pc requirements | “Can my PC run it?” | A01, E02 (3 pages), fastAnswers, N01 | VERIFIED (specs) | P0 | Links to requirements + Deck |

---

## Guide pages — full matrix (19)

### Maps (4 pages)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives → site-spec fields | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `maps-hub` | Maps — `/maps` | map-guides | **P2** | `collection-browse` | how many maps in halloween the game | “How many maps and what are they?” | A02→`quickAnswer`; E01→`facts`; E03 table in markdown; E02 member links; N01→`relations` | VERIFIED | **P0** | Omit L02 map canvas pre-launch |
| `maps-haddonfield-heights` | Haddonfield Heights — `/maps/haddonfield-heights` | map-guides | **P5** | `location` | haddonfield heights map | “What’s on this map?” | A02; L01 landmark facts→`facts` + H2 sections; E01; P04 launch-pending spawns; N01 | VERIFIED (landmarks); PROVISIONAL (PAX demo beats) | P1 | No spawn routes |
| `maps-haddonfield-town-center` | Town Center — `/maps/haddonfield-town-center` | map-guides | **P5** | `location` | haddonfield town center map | “Which businesses are playable?” | A02; L01; E01 business list; E03 optional POI table; N01 | VERIFIED | P1 | Cemetery as playspace is key differentiator |
| `maps-orange-grove-estates` | Orange Grove Estates — `/maps/orange-grove-estates` | map-guides | **P5** | `location` | orange grove estates map | “What’s unique about this suburb map?” | A02; L01; E01; markdown H2 (Wallace/Doyle, park); N01 | VERIFIED | P1 | Multi-story + open sightlines |

### Characters (1 page)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `characters-hub` | Characters — `/characters` | character-guides | **P2** | `collection-browse` | halloween the game playable characters | “Who is in the roster?” | A02; E01 roster facts; E03 name tables (new/legacy/Deluxe); D03 edition choice pointer; N01 | VERIFIED (names/count); MISSING (stats) | **P0** | Do not add per-character child pages pre-launch |

### Michael Myers (2 pages)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `michael-myers-hub` | Michael Myers — `/michael-myers` | killer-guides | **P7** | `mechanics` | michael myers halloween game | “How does Michael play?” | A02; E01 objectives; A03 rules; E03 objective table; P04 detention caveat; N01 | VERIFIED | **P0** | “Can’t kill” wording must match official copy |
| `michael-myers-abilities` | Abilities — `/michael-myers/abilities` | killer-guides | **P7** | `mechanics` | michael myers abilities halloween game | “What abilities does Michael have?” | A02; E01 per-ability facts; markdown H2 per ability; A03 constraints (darkness/LOS); N01 | VERIFIED | **P0** | Omit cooldown numbers |

### Multiplayer (5 pages)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `multiplayer-hub` | Multiplayer — `/multiplayer` | multiplayer-guides | **P7** | `mechanics` | halloween the game multiplayer | “What is the multiplayer format?” | A02; E01; E03 role/objective table; N01 | VERIFIED | **P0** | Hub for 1v4 pillar |
| `multiplayer-how-it-works` | How multiplayer works — `/multiplayer/how-multiplayer-works` | multiplayer-guides | **P4** | `procedure` | how does halloween multiplayer work | “Walk me through a match” | A02; P02 step sequence in markdown; E01; P01 prerequisites (platform/online); N01 | VERIFIED (loop); PROVISIONAL (ordering) | **P0** | Steps are illustrative, not official script |
| `multiplayer-crossplay` | Crossplay — `/multiplayer/crossplay` | multiplayer-guides | **P3** | `choice-comparison` | halloween the game crossplay | “Can I play with friends on other platforms?” | A02; S02 platform state; E01; D03 “what we know / don’t know”; P04 wrong assumptions | VERIFIED (indicator); MISSING (matrix) | P1 | Launch verify settings menu |
| `bots-private-lobbies-offline` | Bots & private lobbies — `/bots-private-lobbies-offline` | guides | **P3** | `choice-comparison` | halloween the game bots offline | “Can I play solo / offline?” | A02; E01 confirmed vs not; D03 mode matrix; P04; N01 | VERIFIED (story+bots); PROVISIONAL (private lobbies) | **P0** | High pre-launch anxiety page |
| `match-length-timer` | Match length — `/match-length-timer` | guides | **P7** | `mechanics` | how long are halloween the game matches | “Is there a 12-minute timer?” | A02; A03 observational vs official; E01; S04 `lastVerified`; P04 | MISSING (official timer); PROVISIONAL (~12 min footage) | P2 | Title mentions 12 min but page must debunk as rule |

### Single player (1 page)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `single-player-hub` | Single player — `/single-player` | story-guides | **P6** | `progression` | halloween the game story mode | “Is there single player?” | A02; E01; P03 chapter count milestone (no names); E01 replay extras; N01 | VERIFIED (6 chapters); MISSING (names/steps) | P1 | No walkthrough sections |

### PC (3 pages)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `pc-hub` | PC — `/pc` | pc-guides | **P2** | `collection-browse` | halloween the game pc | “What do PC players need to know?” | A02; E01; N01 to requirements/Deck | VERIFIED | P1 | Bridge hub |
| `pc-system-requirements` | System requirements — `/pc/system-requirements` | pc-guides | **P1** | `entity-lookup` | halloween the game system requirements | “Can my PC run it?” | A02; E03 spec tables; E01; S04 launch FPS caveat | VERIFIED | **P0** | Mirror Steam exactly |
| `steam-deck` | Steam Deck — `/steam-deck` | reference | **P3** | `choice-comparison` | halloween the game steam deck | “Will it work on Deck?” | A02; S02; P01 checklist; P04; E01 | MISSING (Deck); PROVISIONAL (EAC) | P1 | Do not claim Verified |

### Launch guides (2 pages)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `early-access-release-time` | Early access timing — `/early-access-release-time` | guides | **P10** | `planning` | halloween the game early access time | “What time can I play Sep 4?” | A02; E01; P02 timezone conversion steps; S04; P01 eligibility; N01 | VERIFIED (9 AM PT) | **P0** | Update live on Sep 4 |
| `standard-vs-deluxe-upgrade` | Standard vs Deluxe — `/standard-vs-deluxe-upgrade` | guides | **P3** | `choice-comparison` | halloween the game deluxe worth it | “Which edition / can I upgrade?” | A02; D01 edition table; D03 decision paths; E01; P04 Phantom skin warning | VERIFIED | **P0** | Phantom vs Inmate is common mistake |

### Reference (1 page)

| pageId | title / slug | category | P# | primaryTask | query | playerProblem | Required primitives | Evidence | Priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `australia-release-status` | Australia status — `/australia-release-status` | reference | **P1** | `entity-lookup` | halloween the game banned australia | “Can I buy it in Australia?” | A02; E01; S04 `trust`; A03 legal context; P04; evidence section | VERIFIED (RC); PROVISIONAL (Deluxe IARC) | P1 | Sensitive — no “unbanned” headline |

---

## Priority tier summary

| Tier | Count | pageIds |
| --- | --- | --- |
| **P0 launch-window** | 12 | `homepage`, `early-access-release-time`, `standard-vs-deluxe-upgrade`, `maps-hub`, `characters-hub`, `michael-myers-hub`, `michael-myers-abilities`, `multiplayer-hub`, `multiplayer-how-it-works`, `bots-private-lobbies-offline`, `pc-system-requirements`, `route-multiplayer`, `route-pc` |
| **P1** | 11 | All map detail pages, `single-player-hub`, `pc-hub`, `steam-deck`, `multiplayer-crossplay`, `australia-release-status`, remaining routes |
| **P2** | 1 | `match-length-timer` (useful but debunk-style; lower SEO urgency pre-launch) |

---

## Cross-page V4 content rules (V2.2 shell)

1. **Every guide** must ship `quickAnswer` (A02) + `facts` (E01) + at least one evidence-backed markdown H2 before optional depth.
2. **`relations`** (N01) required on all pages — already in spec; maintain hub ↔ spoke integrity.
3. **Omit** L02 interactive maps, X04 calculators, D02 rankings, P03 named chapter walkthroughs until post-launch data exists.
4. **Conditional primitives** (mark `conditional` in V4 resolver terms):
   - P02 steps on `multiplayer-how-it-works` — illustrative only
   - P04 recovery blocks on edition/regional pages
   - S02 on `multiplayer-crossplay`, `steam-deck`
5. **Trust block** (`trust` in site-spec): use on `australia-release-status`; consider adding to `match-length-timer` and `steam-deck` after content pass.
6. **Category pages** (`guides`, `reference`): indexable guides use default index; route category landings stay `noindex,follow` per factory SEO contract.

---

## Blockers / decisions for user

| # | Decision | Options | Recommendation |
| --- | --- | --- | --- |
| 1 | **Australia Deluxe SKU** | Treat as sale-ready vs maintain RC caution | Keep **PROVISIONAL** wording until Classification Board or IllFonic primary statement |
| 2 | **EAC / kernel notice** | Claim on `pc-hub` / `steam-deck` | Verify live Steam store anti-cheat field before asserting in `facts` |
| 3 | **Private lobbies** | Promote Playfront claims vs wait | Keep labeled **secondary**; do not add to `facts` as confirmed |
| 4 | **~12-minute timer in title** | SEO click-through vs accuracy | Keep page but A02 must say **no official timer** (current site-input aligns) |
| 5 | **Post-launch expansion** | Per-character / chapter pages | Defer until Advance Access evidence; do not add to site-spec without new research packet |
| 6 | **Physical release Oct 6** | Add to launch page or omit | **Omit** until primary publisher source added |

---

## Page count

| Surface type | Count |
| --- | --- |
| Guide pages (`site-spec.pages`) | **19** |
| Homepage | **1** |
| Route/category discovery | **6** |
| **Total matrix rows** | **26** |

*(User estimate ~24 likely excluded homepage and/or counted only guide pages + select routes.)*

---

*Internal production artifact. Companion to `docs/seo-research.md`. Do not modify `site-spec.yaml` until content pass is approved.*
