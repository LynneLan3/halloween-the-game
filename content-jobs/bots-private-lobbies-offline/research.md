# Writer Research Brief: Halloween Offline Bots (CTR Intent Ownership)

## Page Goal

Update the existing page only:
https://www.halloweengameguide.wiki/bots-private-lobbies-offline/

Keep URL `/bots-private-lobbies-offline/`. Do not create a new page. Do not change the slug.

This page owns offline bots / bots / private matches vs AI intent.

Baseline (GSC): 553 impressions / 2.17% CTR / pos 6.73

---

## Intent Brief

```json
{
  "primaryQuery": "halloween the game offline bots",
  "queryCluster": [
    "halloween the game offline bots",
    "does halloween the game have bots",
    "halloween the game bots",
    "halloween the game private matches ai",
    "halloween the game offline mode"
  ],
  "userJob": "Confirm whether Halloween: The Game has bots / AI opponents, how private matches against AI relate to offline play, and what is still unverified.",
  "intentOwnerStatus": "KEEP",
  "serpPromise": "Yes — IllFonic confirms private matches against AI and announced offline bot play; network-offline play still needs separate verification.",
  "secondaryIntents": [
    { "query": "halloween the game private matches against AI", "action": "KEEP_SUPPORTING" },
    { "query": "halloween the game offline mode", "action": "KEEP_SUPPORTING" },
    { "query": "halloween the game private lobbies", "action": "KEEP_SUPPORTING" }
  ]
}
```

---

## Primary Intent

halloween the game offline bots / does halloween the game have bots / halloween the game bots

### Secondary Intents

- private matches vs AI
- offline mode (without equating to confirmed network-offline)

Story Mode belongs to {{page:single-player-hub}} — mention only as a separate mode boundary.

---

## Official Facts (research date 2026-09-04)

From [Progression & Customization overview](https://halloweengame.com/news/progression-customization-overview/) (IllFonic, 2 Sep 2026):

IllFonic explicitly lists three play options:

- singleplayer story mode
- **private matches against AI**
- online 1v4 matchmaking

STATUS: OFFICIALLY CONFIRMED announcement. Do **not** treat private-match AI as unconfirmed or third-party-only.

Original reveal / storefront copy described playing against bots offline (contemporaneous coverage preserves that wording). That supports announced offline bot play intent, but **does not** by itself prove fully network-disconnected play in the shipping build.

Private matches with friends: announced via IllFonic matchmaking materials (roles can be specified or randomized). Supporting coverage: https://bloody-disgusting.com/video-games/3965607/new-video-delves-into-halloween-the-game-matchmaking-watch/

---

## Critical Boundary (must keep)

**Do not** equate `private matches against AI` with “fully network-offline / no internet required.”

If official sources do not explicitly confirm zero-network offline execution, keep that as **Not verified / still needs live-build confirmation**.

---

## Superseded Claims — MUST DELETE / REPLACE

Remove:

- Any judgment that private match AI is unconfirmed / only third-party reported
- Soft language that treats Progression & Customization AI confirmation as uncertain rumor

Keep as still unknown:

- exact menu paths, bot counts, difficulty, role/side vs AI
- public matchmaking AI backfill
- whether offline/bot play runs with no internet connection in practice
- XP/reward differences for AI matches

---

## Title Direction (required)

Halloween: The Game Offline Bots — Private Matches vs AI

Do not use: Ultimate Guide, Complete Guide.

H1 must match title. Lead with Offline Bots.

## Meta description (required)

First sentence must directly answer the user question (does it have bots / offline bots?). Then distinguish private matches against AI vs offline wording, and note network-offline verification is still pending.

## Quick Answer (required — answer-first)

Meta/Quick Answer first beat must answer YES / confirmed bots & private AI matches immediately. Then:

1. IllFonic confirms private matches against AI (Progression & Customization).
2. Original official reveal wording described playing against bots offline.
3. Private matches with friends are announced.
4. Do not assume private AI matches equal fully disconnected offline play.
5. Story Mode is a separate single-player experience from offline bot play and private matches against AI.

---

## Required body structure

1. Quick Answer
2. What IllFonic has confirmed about bots / AI
3. Offline bots vs private matches against AI (boundary section)
4. Private matches with friends
5. What is still not confirmed (include network-offline)
6. Common mistakes
7. Bots vs Story Mode → {{page:single-player-hub}}
8. Sources + See also {{hub}}

---

## Sources

- [Progression & Customization overview](https://halloweengame.com/news/progression-customization-overview/)
- [Single & Multiplayer overview](https://halloweengame.com/news/single-and-multiplayer/)
- [Halloween: The Game — Steam](https://store.steampowered.com/app/3219630/Halloween/)
- [Gamespot reveal coverage](https://www.gamespot.com/articles/halloween-the-game-coming-from-friday-the-13th-devs-features-single-player/1100-6534148/)
- [Bloody Disgusting matchmaking coverage](https://bloody-disgusting.com/video-games/3965607/new-video-delves-into-halloween-the-game-matchmaking-watch/)

## Must Preserve Exact Tokens

{{page:single-player-hub}}
{{hub}}

## Forbidden Claims

- Do not claim fully offline/no-internet play is confirmed.
- Do not invent bot difficulty, counts, menu paths, or AI backfill.
- Do not invent multiple killers / AI Michael roster expansions.
- Do not append research headings or bare token lists.
