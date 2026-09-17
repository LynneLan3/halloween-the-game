# Writer Research Brief: Halloween Offline Bots / Private AI (CTR Intent Realignment)

## Page Goal

Update the existing page only:
https://www.halloweengameguide.wiki/bots-private-lobbies-offline/

Keep URL `/bots-private-lobbies-offline/` unchanged. Do not create a new page. Do not change the slug.

This is a current-state / intent-alignment update after launch — not a title-only rewrite.

Prior title/meta CTR interventions (2026-09-04 / 2026-09-05) did not fix weak click capture. Recenter the whole page on the bots / private-AI / Offline Play question.

Baseline (GSC page snapshot ~2026-09-14): 9 clicks / 632 impressions / 1.42% CTR / avg position 6.70.

---

## Intent Brief

```json
{
  "primaryQuery": "halloween game offline bots",
  "queryCluster": [
    "halloween game offline bots",
    "halloween the game offline bots",
    "does halloween the game have offline bots",
    "halloween the game bots",
    "can you play against bots in halloween the game",
    "can you play halloween the game with bots",
    "can you play halloween the game offline"
  ],
  "userJob": "Confirm whether Halloween: The Game supports playing against bots / AI offline or in a private AI match, and separate that from the single-player story mode.",
  "serpPromise": "A direct current-state answer: private matches against AI are officially confirmed, Offline Play is a shipped feature name, story mode is separate, and exact menu/settings/no-internet details remain undocumented.",
  "intentOwnerStatus": "KEEP",
  "mustCarryFacts": [
    "Private matches against AI are officially confirmed by IllFonic (2026-09-02 progression overview).",
    "A shipped mode/feature named Offline Play is officially confirmed (Early Access Hotfix 1, 2026-09-05).",
    "Halloween: The Game officially launched on 2026-09-08.",
    "Single-player story mode is separate from private AI / Offline Play matches.",
    "Exact menu path, bot count, AI difficulty, role AI control, XP/progression in bot matches, exact Offline Play vs private-AI UI equivalence, and fully disconnected offline play remain UNKNOWN.",
    "Whether online private lobbies use AI backfill when human slots are empty remains UNKNOWN / not officially confirmed."
  ],
  "forbiddenClaims": [
    "Do not say private AI matches are only third-party reported.",
    "Do not use pre-launch / future-tense framing such as 'you can expect ... at launch'.",
    "Do not invent menu paths, bot counts, difficulty options, or XP rules.",
    "Do not claim the game works with the machine fully disconnected from the internet.",
    "Do not claim online private lobbies get AI backfill.",
    "Do not claim offline bot play is Michael-only.",
    "Do not expand Australia classification, Steam Deck/EAC, match timers, or Advance Access into full sections on this page."
  ]
}
```

---

## Primary Intent

Can I play Halloween: The Game against bots / AI, and is there an offline or private AI mode?

### Secondary Intents

- Is the single-player story mode separate from private AI matches?
- What is officially confirmed versus still undocumented?
- Does “offline” definitely mean no internet connection? → unresolved.
- Can bots fill online private lobbies? → unresolved / secondary FAQ only.

---

## Confirmed Facts (VERIFIED — first-party)

| Fact | Status | Source |
|---|---|---|
| Halloween: The Game officially supports **private matches against AI** | CONFIRMED | Official IllFonic progression/customization overview, 2026-09-02: https://halloweengame.com/news/progression-customization-overview/ — lists three ways to play, including private matches against AI |
| A shipped mode/feature named **Offline Play** exists | CONFIRMED | Official Early Access Hotfix 1, 2026-09-05: https://halloweengame.com/news/early-access-hotfix-1/ — patch notes fix an issue affecting Offline Play and the login queue |
| The game is released (not pre-launch) | CONFIRMED | Official launch post, 2026-09-08: https://halloweengame.com/news/halloween-the-game-out-now/ |
| Single-player story mode exists and is separate from private AI / Offline Play matches | CONFIRMED | Prior official store/press framing; keep as separate from bots/AI matches |

Use **current released-state language**, not future tense.

---

## UNKNOWN / NEEDS_VERIFICATION (do not invent)

- Exact menu path to start a private AI / Offline Play match
- Number of bots
- AI difficulty options
- Whether Michael and/or Civilians can each be AI-controlled
- Whether bot matches award XP, challenges, or normal progression
- Whether “Offline Play” and “private matches against AI” are exactly the same UI mode
- Whether the game can be played with the machine fully disconnected from the internet
- Whether online private lobbies use AI backfill when human slots are empty

These must stay clearly unresolved if mentioned.

---

## Required Update Direction

1. Recenter the entire page around bots / private-AI / Offline Play.
2. Above the fold, answer confirmed facts immediately:
   - private matches against AI are officially confirmed;
   - Offline Play is an officially named shipped feature;
   - single-player story mode is separate;
   - exact menu/settings/no-internet behavior are not officially documented in this evidence set.
3. Replace pre-launch/future tense with current released-state language.
4. Primary evidence for the core answer: 2026-09-02 progression overview + 2026-09-05 Hotfix 1.
5. **Remove** the full Australia classification section (at most one small internal link if contextually useful).
6. **Remove** the Steam Deck/EAC section (at most a small link if useful).
7. **Remove** match-timer discussion as a full section (at most a small link if useful).
8. **Remove** expired Advance Access / launch-preparation material.
9. Keep online AI-backfill uncertainty small and clearly separated from the confirmed private-AI answer.
10. Title/meta must lead with the user task (`offline bots`, `play against bots`, `private AI`) — do not mix Steam Deck, Australia, crossplay, or other unrelated product topics into title/meta.
11. Do not hand-lock an exact title string outside Writer judgment; Writer owns final Title / Meta / H1 / Quick Answer / body / FAQ.

---

## Suggested Structure (Writer may refine)

1. H1 + Quick Answer answering bots / Offline Play / private AI now
2. Confirmed: private matches against AI + Offline Play
3. Story mode vs private AI / Offline Play (separate)
4. What is still undocumented (menu path, bot settings, no-internet meaning, XP)
5. Short FAQ covering secondary intents (including AI-backfill uncertainty)
6. Related links (story / multiplayer / optional Deck / Australia / match-length only as light pointers)
7. Sources (prefer the three first-party posts above; drop stale pre-launch-only sources that no longer support the core answer)

---

## Internal Links

Prefer Markdown links wrapping placeholders:

- Story mode: [single-player story mode]({{page:single-player-hub}})
- Multiplayer hub: [multiplayer]({{page:multiplayer-hub}})
- Optional light pointers only if useful: [Steam Deck]({{page:steam-deck}}), [Australia release status]({{page:australia-release-status}}), [match length]({{page:match-length-timer}})
- Hub: [homepage]({{hub}})

Do not expand those destination pages.

---

## Media

No verified menu-path screenshot. Omit fabricated UI images. Functional media is not required for this bounded factual update.

---

## Must Preserve Exact Tokens

{{page:single-player-hub}}
{{page:multiplayer-hub}}
{{hub}}
{{page:steam-deck}}
{{page:australia-release-status}}
{{page:match-length-timer}}

---

## Must Include Facts

- Private matches against AI are officially confirmed (IllFonic progression overview, 2026-09-02).
- Offline Play is an officially named shipped feature (Hotfix 1, 2026-09-05).
- Game launched 2026-09-08.
- Single-player story mode is separate from private AI / Offline Play.
- Menu path / bot count / difficulty / XP / fully disconnected offline / online AI backfill remain unconfirmed.

---

## Forbidden Claims

- Private AI matches are “only third-party reported”
- Pre-launch “you can expect … at launch” framing
- Exact menu steps, bot counts, difficulty options, XP/progression rules for bot matches
- Fully disconnected offline play as confirmed
- Online private-lobby AI backfill as confirmed
- Offline bot play is Michael-only
- Full Australia / Steam Deck / match-timer / Advance Access sections on this page

---

## Content Routing Receipt (context only — do not publish)

```text
CONTENT ROUTING
Site lifecycle: GROWTH
Content stage: GROWTH
Intent: MECHANIC
Article class: UPDATE
Evidence gate: PASS
Media gate: N/A for this bounded factual update
Writer: Shared Article Writer / APIMart, existing-page update mode
Publish state: READY_FOR_WRITER
```
