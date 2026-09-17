# Title/Meta Field-Level Repair Only — Offline Bots Page

## Page Goal

Field-level repair for:
https://www.halloweengameguide.wiki/bots-private-lobbies-offline/

Keep URL `/bots-private-lobbies-offline/` unchanged.

This is **NOT** a full article rewrite. Repair only Title and Meta description (and align H1 with the new Title). Preserve the already-validated body structure and factual content.

---

## Problem

Current Title is keyword-stacked synonym list:

`Offline bots / Play against bots / Private AI — Does Halloween: The Game support offline bot matches?`

It repeats the same search task as a slash-separated keyword list. Title must naturally express **one** primary search task.

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
  "userJob": "Confirm whether Halloween: The Game supports playing against bots / AI offline or in a private AI match.",
  "serpPromise": "A direct current-state answer that private matches against AI and Offline Play are officially confirmed, with story mode separate and undocumented details left open.",
  "intentOwnerStatus": "KEEP",
  "mustCarryFacts": [
    "Private matches against AI are officially confirmed (IllFonic 2026-09-02).",
    "Offline Play is a shipped feature name (Hotfix 1, 2026-09-05).",
    "Single-player story mode is separate.",
    "Menu path / bot settings / fully disconnected play / online AI backfill remain undocumented."
  ],
  "forbiddenClaims": [
    "Do not invent menu paths, bot counts, difficulty, XP, or no-internet confirmation.",
    "Do not claim online private lobbies get AI backfill.",
    "Do not use slash-separated synonym keyword lists in Title.",
    "Do not expand Australia, Steam Deck, match timers, or Advance Access into Title/Meta."
  ]
}
```

---

## Repair Scope

### Rewrite
- frontmatter `title`
- frontmatter `description`
- H1 only so it matches the repaired Title naturally

### Preserve exactly
- All body sections after H1
- Quick answer content
- Confirmed / undocumented sections
- FAQ
- Related links with `{{page:...}}` / `{{hub}}` tokens
- Sources
- slug / category / status

---

## Title requirements

- Natural English expressing one primary task (offline bots / play against bots).
- Not a keyword list joined by `/`.
- May mention private AI or Offline Play once if natural, not as stacked synonyms.
- Prefer readable SERP style such as a clear question or concise promise — Writer chooses the exact wording.

## Meta requirements

- Lead with confirmed Offline Play / private matches against AI in released state.
- Note story mode is separate and some details remain undocumented.
- Under ~155 characters.
- Do NOT mention Steam Deck, Australia, crossplay, Advance Access, or match timers.

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

(Only for Title/Meta truthfulness — do not rewrite body facts.)

- Private matches against AI confirmed
- Offline Play confirmed as shipped feature name
- Story mode separate
- Some details still undocumented

---

## Forbidden Claims

- Slash-stacked Title like `Offline bots / Play against bots / Private AI — ...`
- Body restructuring
- New sections
- Invented UI/menu/bot/XP/no-internet claims
