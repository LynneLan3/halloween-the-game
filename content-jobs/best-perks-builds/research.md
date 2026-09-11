# Halloween: The Game Best Perks & Builds — Research Pack

Research scope: the completed Best Perks / Builds round supplied in the implementation request. Implementation must not repeat SERP, GSC, Reddit, Steam, competitor, or other external research.

Research date: 2026-09-11. Site: `LynneLan3/halloween-the-game`. Game: Halloween: The Game (Steam App 3219630).

## Intent and canonical routing

- New canonical page: `/best-perks-builds/`.
- `/progression-perks/` remains the Perk system and progression reference owner.
- `/perk-cards/` remains the dated card-list and deck-mechanics reference owner.
- This page owns decision guidance for `best perks`, `best perk build`, `escape build`, `survivor build`, and `anti Michael perks`.
- Do not create a universal S/A/B/C card tier list or duplicate the full card database.
- The page should link to `/progression-perks/` for system/progression mechanics and link back from that reference to this decision guide.

## Verified evidence

- Official material confirms the Civilian loop: Civilian Perk Points roll into cards, owned cards form decks, and in-match rolls are randomized.
- The current live-documented card evidence confirms the following functional directions:
  - Unwinded — reduce stamina consumption.
  - Adrenaline — faster stamina recharge.
  - Survival Intuition — automatically reveal a random escape location.
  - Exit Strategy — increase escape-route discovery distance.
  - Slippery — reduce grab-struggle minigame difficulty.
  - Ghost — increase Stalk degradation rate.
  - Elusory — slow Stalk progress applied to you.
  - Sixth Sense — hear Michael's Shape Jump breathing from farther away.
  - Repair Expert — chance not to consume a repair kit.
  - Scavenger — gain more progress in the hiding-spot rummage minigame.
  - Trespasser — pick locked doors via a hold interaction.
  - Knockout — keep Michael down longer when contributing to a knockdown.
  - Pied Piper — increase follower capacity.
  - Panic Contagion — gain movement speed after helping a resident escape.
  - Shared Desperation — Residents you arm deal more damage.
  - Convincing Plea — reduce incoming cop-wave timing after filling the badge.
  - Frantic — add more Police presence after completing a call.
  - Shield Of Law — reduce Fear gain near a Police officer.
- Patch 1.0.1 changed the stamina/Stalk environment: base stamina regeneration delay increased; Evil Presence stamina consumption increased; Stalk reduces stamina regeneration and increases regeneration delay; higher Athleticism stamina and regeneration were weakened.
- The official effects above establish what each card does. They do not establish a developer tier list, universal best choices, exact magnitudes, or a winning meta.

## Editorial recommendation boundary

Recommendations are editorial, role-based combinations derived from the verified effect directions and the supplied Patch 1.0.1 context. Label them as recommendations, not official rankings or objective balance facts.

Prioritize these questions:

1. Best overall starter perks.
2. Best escape build.
3. Best chase / anti-Michael build.
4. Best objective / repair build.
5. Best Residents / Police support build.
6. Why Patch 1.0.1 changes stamina-perk priority.
7. Which perks are strong only in specific conditions.

Suggested build candidates (Writer may choose the clearest combinations, but must stay within the verified effect list):

- Starter / general survivor: Unwinded, Adrenaline, Sixth Sense, with Slippery as a swap when grabs are the main failure point.
- Escape / discovery: Survival Intuition, Exit Strategy, Adrenaline or Unwinded, with Panic Contagion when the player regularly completes Resident rescues.
- Chase / anti-Michael: Ghost, Elusory, Sixth Sense, with Slippery or Knockout depending on whether the player is escaping grabs or coordinating a knockdown.
- Objective / repair: Repair Expert, Trespasser, Scavenger, with Exit Strategy or Convincing Plea for the objective path.
- Residents / Police support: Pied Piper, Shared Desperation, Shield Of Law, with Frantic or Convincing Plea when the Police-call role is actually being played.

These combinations are not an official tier list. Do not claim that any build is best in every match, that effects stack in a specific way, or that a card is mandatory.

## Must preserve as UNKNOWN / not established

- No percentages, roll odds, exact stamina values, exact perk values, cooldowns, durations, or universal meta claims.
- No claim that all cards in a saved deck activate simultaneously.
- No claim that same-name Traits and Perk Cards stack or have identical scaling.
- No claim that a build guarantees escape, a knockdown, an arrest, or survival.
- No claim that the supplied candidates form a complete pool.
- Exact duplicate-card stacking beyond the official Patch 1.0.1 deck cap remains unknown.
- A perk can be powerful but condition-dependent: rescue timing, Police proximity, locked-door/objective access, grab state, Stalk pressure, or team coordination can determine usefulness.

## Media state

- Reuse candidate: existing official Perk Cards UI cover asset `progression-perk-cards` / `site-input/assets/covers/progression/po-perk-cards.jpg`.
- No candidate-specific functional gameplay/perk UI evidence is supplied for the recommended builds.
- Publish a verified simple text-first version with the existing legal official UI cover.
- Media enhancement backlog: verified collection/deck-editor frame, in-match three-card choice, and functional screenshots showing the relevant candidate effects. Media does not block this implementation.

## Local evidence references

- `site-input/pages/perk-cards.md` — current card effects, official versus corroborated boundaries, and unknowns.
- `site-input/pages/progression-perks.md` — Perk Points → cards → decks system owner.
- `site-input/pages/updates.md` — Patch 1.0.1 Stalk, Evil Presence, and deck changes.
- `site-input/pages/civilian-tier-list.md` — Patch 1.0.1 Athleticism context and existing editorial recommendation boundary.

## Source references already present in the supplied/local evidence

- Official Progression and Customization Overview — https://halloweengame.com/news/progression-customization-overview/
- Official Patch 1.0.1 launch notes — https://halloweengame.com/news/halloween-the-game-out-now/
- Current live-documented card list — https://mobalytics.gg/gamebase/guides/halloween-the-game-all-perk-cards-overview

## Writer constraints

- Generate formal English through the Shared Article Writer, APIMart, default model `gpt-5-mini`.
- Keep verified card effects and editorial recommendations visibly separate.
- Use a direct Quick Answer and scannable build sections; do not generate a complete card database.
- Include links to `/progression-perks/` and `/perk-cards/` where relevant, plus the existing Civilian and multiplayer owners when useful.
- Do not expose the words Research Pack, Writer, APIMart, evidence boundary, or internal implementation instructions in public copy.
