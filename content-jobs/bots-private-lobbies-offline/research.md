# Writer Research Brief: Halloween Offline Bots (GSC Intent Refresh 2026-09-05)

## Page Goal

Update the existing page only:
https://www.halloweengameguide.wiki/bots-private-lobbies-offline/

Keep URL `/bots-private-lobbies-offline/`. Do not create a new page. Do not change the slug.

This page owns offline bots / bots / private matches vs AI / offline mode intent.

GSC (current): 678 impressions / 12 clicks / CTR 1.77% / avg position 6.85.

pageType: answer/reference
metadataUpdate: REQUIRED

---

## Intent Brief

```json
{
  "primaryQuery": "does halloween the game have offline bots",
  "queryCluster": [
    "does halloween the game have offline bots",
    "halloween the game offline bots",
    "halloween game offline bots",
    "halloween the game bots",
    "will halloween the game have offline bots",
    "halloween the game offline mode"
  ],
  "userJob": "Immediately learn whether the game supports bots, and how bots, private matches, and true offline mode differ.",
  "intentOwnerStatus": "KEEP",
  "serpPromise": "Lead with a clear yes/no, then explain what the current live build actually supports.",
  "secondaryIntents": [
    { "query": "halloween the game private matches against AI", "action": "KEEP_SUPPORTING" },
    { "query": "halloween the game offline mode", "action": "KEEP_SUPPORTING" },
    { "query": "halloween the game private lobbies", "action": "KEEP_SUPPORTING" }
  ]
}
```

---

## Primary Intent

does halloween the game have offline bots / halloween the game offline bots / halloween the game bots

### Secondary Intents

- private matches vs AI
- offline mode (without equating to confirmed network-offline)
- private lobbies with friends

Story Mode belongs to {{page:single-player-hub}} — mention only as a separate mode boundary.

---

## Official / live-build Facts (research date 2026-09-05)

Advance Access / Early Access began Friday, September 4, 2026 at 9:00 AM PT for Digital Deluxe.

### Confirmed (official)

From [Progression & Customization overview](https://halloweengame.com/news/progression-customization-overview/) (IllFonic, 2 Sep 2026):

IllFonic explicitly lists three play options:

- singleplayer story mode
- **private matches against AI**
- online 1v4 matchmaking

STATUS: OFFICIALLY CONFIRMED announcement for private matches against AI.

Original reveal / storefront copy described playing against bots offline (contemporaneous coverage preserves that wording, e.g. Gamespot reveal coverage). That supports announced offline-bot intent, but **does not** by itself prove fully network-disconnected play in the shipping / Advance Access build.

### Live-period supporting evidence (private matches with friends)

[TheGamer multiplayer guide](https://www.thegamer.com/halloween-the-game-multiplayer-friends-crossplay-guide/) (published Sep 4, 2026) covers live-period private matches with friends: players can create a private match and invite friends; crossplay friend codes are described. Treat private-with-friends as supported in live-period reliable coverage.

### Still NOT upgraded to confirmed (no reliable live-build evidence found)

Only reliable evidence may promote unknown → confirmed. Do **not** upgrade these:

- Fully network-offline / zero-internet bot play in the live Advance Access build
- Exact menu paths / UI labels for private-AI or “offline” bot modes
- Bot counts, difficulty, AI side/role availability
- Private-slot auto-fill with bots
- Public matchmaking AI backfill
- XP / reward differences for AI matches

Do **not** cite unreliable SEO/modding guides (for example xmodhub-style pages) as live-build proof.

---

## Critical Boundary (must keep)

**Do not** equate `private matches against AI` with “fully network-offline / no internet required.”

If official sources and reliable live coverage do not explicitly confirm zero-network offline execution, keep that as **Not verified**.

Distinguish clearly in Quick Answer:

1. Bots / private matches against AI — yes, officially announced
2. Private matches with friends — announced and covered in live-period reliable media
3. True network-offline mode — not confirmed

---

## Superseded Claims — MUST DELETE / REPLACE

Remove:

- Framing that Advance Access has not started yet / “verify at Advance Access” as if EA never opened
- Soft language that treats Progression & Customization AI confirmation as uncertain rumor
- Any judgment that private match AI is only third-party reported

Keep as still unknown (unless new reliable evidence appears — none found on 2026-09-05 for network-offline):

- exact menu paths, bot counts, difficulty, role/side vs AI
- public matchmaking AI backfill
- whether offline/bot play runs with no internet connection in practice
- XP/reward differences for AI matches

---

## Required Update Direction (metadataUpdate: REQUIRED)

Regenerate SEO Title, Meta description, and H1 from the Intent Brief. Current Title is too catalog/reference-like for the dominant question-form query `does halloween the game have offline bots`. Lead with the yes/no SERP promise.

### SEO Title

Must fit the question-form bots / offline bots intent. Prefer a clear answer-leaning Title over a pure catalog label. Do not use Ultimate Guide / Complete Guide. H1 must match the Title promise.

### Meta description

First sentence must directly answer yes/no (does it have bots / offline bots?). Then distinguish:

- private matches against AI (official)
- private matches with friends (live-period coverage)
- true network-offline (not confirmed)

### Quick Answer (required — answer-first)

Meta/Quick Answer first beat must answer YES / confirmed bots & private AI matches immediately. Then:

1. IllFonic confirms private matches against AI (Progression & Customization).
2. Original official reveal wording described playing against bots offline.
3. Private matches with friends are supported in live-period reliable coverage.
4. Do not assume private AI matches equal fully disconnected offline play — that remains unverified.
5. Story Mode is a separate single-player experience from offline bot play and private matches against AI.

---

## Required body structure (answer/reference)

1. Quick Answer (yes/no first)
2. What IllFonic has confirmed about bots / AI
3. Offline bots vs private matches against AI vs true offline mode (boundary section)
4. Private matches with friends (include live-period coverage carefully)
5. What is still not confirmed (include network-offline; do not invent live confirmations)
6. Common mistakes
7. Bots vs Story Mode → {{page:single-player-hub}}
8. Sources + See also {{hub}}

Do not pad for word count.

---

## Sources

- [Progression & Customization overview](https://halloweengame.com/news/progression-customization-overview/)
- [Single & Multiplayer overview](https://halloweengame.com/news/single-and-multiplayer/)
- [Halloween: The Game — Steam](https://store.steampowered.com/app/3219630/Halloween/)
- [Gamespot reveal coverage](https://www.gamespot.com/articles/halloween-the-game-coming-from-friday-the-13th-devs-features-single-player/1100-6534148/)
- [Bloody Disgusting matchmaking coverage](https://bloody-disgusting.com/video-games/3965607/new-video-delves-into-halloween-the-game-matchmaking-watch/)
- [TheGamer — How To Play With Friends (Sep 4, 2026)](https://www.thegamer.com/halloween-the-game-multiplayer-friends-crossplay-guide/)

## Must Preserve Exact Tokens

{{page:single-player-hub}}
{{hub}}

## Must Include Facts

- IllFonic has officially announced private matches against AI.
- Original official announcement copy described playing against bots offline.
- Private matches with friends are announced and covered in live-period reliable media (TheGamer, Sep 4, 2026).
- Story Mode is a separate single-player experience from offline bot play and private matches against AI.
- Online multiplayer remains a 1v4 player structure.
- Fully network-offline / zero-internet bot play is still not confirmed by reliable live-build evidence.

## Forbidden Claims

- Do not claim fully offline/no-internet play is confirmed.
- Do not invent bot difficulty, counts, menu paths, or AI backfill.
- Do not invent multiple killers / AI Michael roster expansions.
- Do not use unreliable modding/SEO guides as confirmation.
- Do not state or imply that multiple killers or a selectable killer roster are confirmed.
- Do not append research headings or bare token lists.
