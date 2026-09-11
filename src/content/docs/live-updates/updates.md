---
title: "Halloween: The Game Updates — Latest Patch & Known Issues"
description: "Current Patch 1.0.1 status, verified launch changes, and bounded known-issue notes linked to the guides that own each player task."
category: live-updates
slug: updates
status: confirmed
featured: false
role: core
assetType: article
sidebar:
  order: 1
intents:
  - halloween-updates
  - halloween-patch-1-0-1
  - halloween-known-issues
quickAnswer: "Halloween: The Game is out now on Patch 1.0.1. Challenge and achievement tracking, cross-play parties, Civilian escape discovery, Michael abilities, Perk Decks, maps, and Repair Kits all received verified changes; remaining edge cases stay bounded rather than assumed fixed."
relations:
  -
    slug: challenges
    type: next-step
  -
    slug: multiplayer/crossplay
    type: next-step
  -
    slug: michael-myers/abilities
    type: next-step
  -
    slug: progression-perks
    type: next-step
  -
    slug: maps
    type: related
cover: ../../../assets/hero/halloween-keyart.jpg
coverMedia:
  alt: "Halloween: The Game key art"
  kind: cover
  aspectRatio: 16:9
  sourceLabel: Official
changeSummary: "G043 P3 — current Patch 1.0.1 hub with bounded known-issue status and owner links."
eyebrow: Latest Patch
facts:
  -
    label: Current patch
    value: "Patch 1.0.1 — September 8, 2026 release"
  -
    label: Tracking status
    value: "Additional challenge and achievement fixes; some outliers may remain"
  -
    label: Current-state scope
    value: Verified launch changes linked to their canonical gameplay owners
  -
    label: Unknowns
    value: "No invented crash workaround, exact counts, route proof, or universal resolution claim"
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/updates.md
-->
Halloween: The Game is out now on **Patch 1.0.1** (September 8, 2026). This page is a current-state hub: it summarizes the verified launch changes and sends each player task to the guide that owns the details. It is not a second copy of the full patch notes.

## Patch 1.0.1 at a glance

### Challenges and achievements

Patch 1.0.1 includes additional fixes for challenge and achievement tracking. IllFonic says some outliers may remain and that further fixes are planned, so a single missed registration is not proof that an objective is impossible. Use the exact objective wording and confirm registration in the in-game UI. See [all Story Challenges](/challenges/), [Chapter 4 Challenge 6](/challenges/chapter-4-challenge-6/), and [Trophies & Achievements](/trophies-achievements/).

### Cross-play parties and lobbies

The patch addressed an Early Access cross-play party/lobby issue: party members should follow their leader into a matchmade lobby instead of being kicked to the main menu or dropped from the party. That change does not establish that every cross-play edge case is resolved. See [Crossplay](/multiplayer/crossplay/) for the supported platform boundaries.

### Civilian escapes and public matches

Patch 1.0.1 improves Police NPC pathing, Residents pathing into Escapes, and Civilian Escape discovery distance. It also increases the pre-match countdown when a Public Match lobby is not full and enables variable weather properly in Public Matches. These changes make the intended objective easier to surface; they do not prove fixed escape routes, exact capacity, or universal matchmaking behavior. Use [How to Escape](/multiplayer/how-to-escape/) for the current verified guidance and its remaining unknowns, and [Matchmaking / Queue](/multiplayer/matchmaking-queue/) for queue behavior.

### Michael: Stalk, Detection Pulse, and Evil Presence

The patch changes several Michael interactions:

- Evil Presence increases stamina consumption.
- Stalked targets have reduced Stamina Regen Rate and increased Stamina Regen Delay; those effects scale with Stalk level.
- Repeated blinds have stronger diminishing returns.
- Detection Pulse is more effective at locating Residents in Hiding Spots.
- Stalk Markers persist longer after line of sight breaks.
- Stalk level 1 and 2 targets struggle free more easily when grabbed.

Fixes also cover Shape Dash visual effects after Shape Jump, a Michael invisibility case, and Reality Tear use while getting up. The official notes do not establish exact numeric values, guaranteed executions, or a universal Stalk sequence. See [Michael abilities and builds](/michael-myers/abilities/).

### Perk Decks and rolls

A Perk Deck can contain no more than two copies of the same Perk. Decks that exceeded that limit were automatically unequipped to comply. Patch 1.0.1 also increased the XP required for the initial in-game Perk Rolls (the exact amount is not published) and fixed a Perk-rolling menu lock issue. See [Progression & Perks](/progression-perks/) and the [Perk Cards list](/perk-cards/) for the owner pages.

### Maps and Repair Kits

Public Matches should not repeat a map until all available maps have cycled. The Repair Kit count per match increased, but the official notes do not give an exact count. The patch also fixed inaccessible interaction locations, Hiding Spot collision cases, a hidden dead-body visibility case, and wooden-board escape blockers disappearing. These fixes do not establish fixed item spawns, precise Repair Kit counts, or map meta. See the canonical [Maps](/maps/) guide.

## What remains unresolved

The verified launch facts above do not support a crash workaround, an exact cross-play pairing matrix, a universal escape route, fixed item counts, or a claim that every tracking and stability edge case is fixed. Keep checking the in-game UI and the linked owner pages as the live build changes.

## Official status

Patch 1.0.1 shipped with the September 8, 2026 release. For the source announcement, see [Halloween: The Game — Out now (Patch 1.0.1)](https://halloweengame.com/news/halloween-the-game-out-now/).
