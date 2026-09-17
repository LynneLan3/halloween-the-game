# Halloween: The Game — Offline Bots CTR Update Research Pack

**Research date:** 2026-09-18  
**Site:** Halloween: The Game  
**Production:** https://www.halloweengameguide.wiki/  
**Target page:** https://www.halloweengameguide.wiki/bots-private-lobbies-offline/  
**Repository:** `LynneLan3/halloween-the-game`  
**Canonical local checkout:** `/Users/lanling/Code/hot_words_websites/halloween-the-game`  
**Canonical source file:** `site-input/pages/bots-private-lobbies-offline.md`  
**Decision:** `OPTIMIZE`

---

## 1. Task

```yaml
task:
  type: existing-page GSC-driven content update
  project: Halloween: The Game
research:
  status: complete
  external_research_allowed_for_implementation: false
target:
  page: /bots-private-lobbies-offline/
  action: update existing canonical input only; keep URL unchanged
```

## 2. Problem

The page has meaningful Google visibility but weak click capture, and two earlier CTR-oriented title/meta interventions did not solve the problem.

The more important finding is that the current page is factually stale after release. It still presents private AI matches as only third-party reported, uses pre-launch/future tense, and carries several unrelated pre-launch sections. First-party post-launch evidence now answers the core query more directly.

This is therefore **not another generic title rewrite**. It is a current-state / intent-alignment update of one already-ranking page.

---

## 3. GSC signals

Source: live `热词站_GSC每日监控` Google Sheet.

### Current page-level snapshot
Generated 2026-09-15; data cutoff around 2026-09-14 05:00 PT; marked incomplete by the monitor.

| Page | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| `/bots-private-lobbies-offline/` | 9 | 632 | 1.42% | 6.70 |

This is the largest actionable Halloween CTR page in the current realtime page monitor.

### Persistent query family

Representative rows from `Query页面明细`:

- `halloween game offline bots`
- `halloween the game offline bots`
- `does halloween the game have offline bots`
- `halloween the game bots`
- `can you play against bots in halloween the game`
- `can you play halloween the game with bots`
- `can you play halloween the game offline`

Across multiple dates from 2026-09-02 through 2026-09-12, these queries repeatedly appeared around positions 6–9 while often receiving zero clicks.

Examples:

- 2026-09-12: `does halloween the game have offline bots` — 6 impressions, 0 clicks, position 6.0
- 2026-09-12: `can you play against bots in halloween the game` — 7 impressions, 0 clicks, position 7.6
- 2026-09-10: `halloween the game offline bots` — 16 impressions, 0 clicks, position 7.4
- 2026-09-10: `does halloween the game have offline bots` — 11 impressions, 0 clicks, position 7.1
- 2026-09-03: `halloween the game offline bots` — 47 impressions, 1 click, position 7.3
- 2026-09-03: `does halloween the game have offline bots` — 27 impressions, 0 clicks, position 8.0
- 2026-09-03: `will halloween the game have offline bots` — 22 impressions, 0 clicks, position 7.7

### Previous interventions

The content update ledger shows CTR-related updates on 2026-09-04 and 2026-09-05. Those changes already moved the title/meta toward bots/offline intent, but the page continued to show weak CTR afterward.

Therefore, a third title-only change is not justified.

### Lifecycle evidence

The live `站点状态` row reports GSC runtime stage `TRACTION`. Under the canonical Lifecycle Contract, `GSC TRACTION → Lifecycle GROWTH`.

---

## 4. Current production/source problem

The current canonical source and production page still contain pre-launch framing such as:

- private lobbies described as third-party reported and not officially duplicated;
- `You can expect ... at launch`;
- unrelated sections about Australia classification, Steam Deck/EAC, match timers, and Advance Access;
- broad metadata that mixes bots, private lobbies, crossplay, Steam Deck, and Australia.

This weakens the match to the dominant search task: **Can I play Halloween: The Game against bots / offline / in a private AI match?**

The current URL already ranks and must be preserved.

---

## 5. VERIFIED evidence

### A. Private matches against AI are first-party confirmed

Official IllFonic / Halloween site, 2026-09-02:

https://halloweengame.com/news/progression-customization-overview/

The official progression overview explicitly lists three ways to play, including **private matches against AI**.

**Supported claim:** Halloween: The Game officially supports private matches against AI.

### B. A shipped mode named “Offline Play” exists

Official Hotfix 1, 2026-09-05:

https://halloweengame.com/news/early-access-hotfix-1/

The patch notes state that an issue affecting **Offline Play** and the login queue was fixed.

**Supported claim:** a mode / feature officially named “Offline Play” existed in the shipping build by 2026-09-05.

### C. The game is released, not pre-launch

Official launch post, 2026-09-08:

https://halloweengame.com/news/halloween-the-game-out-now/

**Supported claim:** Halloween: The Game officially launched on 2026-09-08.

---

## 6. UNKNOWN / NEEDS_VERIFICATION

Do **not** infer or invent any of the following from the evidence above:

- exact menu path to start a private AI / Offline Play match;
- number of bots;
- AI difficulty options;
- whether Michael and/or Civilians can each be AI-controlled;
- whether bot matches award XP, challenges, or normal progression;
- whether “Offline Play” and “private matches against AI” are exactly the same UI mode;
- whether the game can be played with the machine fully disconnected from the internet;
- whether online private lobbies use AI backfill when human slots are empty.

These remain outside the verified answer unless the controller supplies later evidence.

---

## 7. Current SERP / competitor observation

Current search results include pages with more direct intent framing such as:

- `Halloween: How to Play Offline With Bots`
- `Does Halloween: The Game Have Offline Bots?`

A notable competitor weakness is that at least one post-launch guide still claims no official page confirms private AI matches. The 2026-09-02 official progression post does confirm **private matches against AI**, giving this site an opportunity to provide a more precise first-party-backed answer.

Other competitor claims such as “offline bot play is Michael-only” were not supported by the first-party evidence collected in this research and must **not** be copied.

Competitor pages are intent evidence, not factual authority.

---

## 8. Primary intent

**Can I play Halloween: The Game against bots / AI, and is there an offline or private AI mode?**

### Secondary intents

- Is the single-player story mode separate from private AI matches?
- What is officially confirmed versus still undocumented?
- Does “offline” definitely mean no internet connection? → answer must remain unresolved.
- Can bots fill online private lobbies? → unresolved / secondary FAQ only.

---

## 9. Recommended changes

1. **Keep the existing URL unchanged.**
2. Recenter the entire page around the bots / private-AI / Offline Play question.
3. Above the fold, answer the confirmed facts immediately:
   - private matches against AI are officially confirmed;
   - a shipped feature named Offline Play is officially confirmed;
   - the single-player story mode is separate;
   - exact menu/settings/no-internet behavior are not officially documented in the evidence pack.
4. Replace pre-launch/future tense with current released-state language.
5. Update the source hierarchy so the 2026-09-02 progression overview and 2026-09-05 hotfix are the primary evidence for the core answer.
6. Remove the full Australia classification section from this page; at most retain a small internal link to its dedicated page if contextually useful.
7. Remove the Steam Deck/EAC section from this page; route to its dedicated page only if useful.
8. Remove the match-timer discussion from this page; route to the dedicated page only if useful.
9. Remove expired Advance Access / launch-preparation material from this page.
10. Keep online AI-backfill uncertainty small and clearly separated from the confirmed private-AI answer.
11. Let the existing Shared Article Writer/APIMart generate final English title, description, H1, Quick Answer, body wording, and FAQ from this research packet.
12. Title/meta intent should lead with the exact user task (`offline bots`, `play against bots`, `private AI`) instead of combining unrelated product topics. Do not hand-lock a new title outside the Writer.
13. Do not create a new page, redirect, new hub, or site-wide refactor in this task.

---

## 10. Internal links

Only retain internal links that help the user continue from this specific question. Candidate dedicated pages already referenced by the site include:

- single-player page
- Steam Deck page
- Australia release-status page
- match-length page

Do not expand those pages in this task.

---

## 11. Media state

No functional menu-path screenshot is verified in this pack.

For this bounded factual availability update, functional media is **not required** to publish the confirmed answer. A later verified screenshot showing the actual Offline Play / private AI UI would be a useful enhancement.

Do not fabricate menu screenshots, UI labels, bot-count controls, or procedural steps.

---

## 12. Content Routing Receipt

```text
CONTENT ROUTING
Site lifecycle: GROWTH
Content stage: GROWTH
Intent: MECHANIC
Article class: UPDATE
Evidence gate: PASS — private matches against AI, Offline Play existence, and release state are first-party verified; exact menu/settings/no-internet behavior remains explicitly UNKNOWN
Media gate: N/A for this bounded factual update; verified menu/UI screenshot is an enhancement backlog, not a publication blocker
Writer: Shared Article Writer / APIMart, existing-page update mode
Publish state: READY_FOR_WRITER
Reason: persistent GSC bots/offline query family + meaningful impressions/position + prior title-only experiments did not solve CTR + current page contains stale pre-launch facts contradicted by newer first-party evidence
```

---

## 13. Excluded scope

Do not modify during this task:

- `/progression-perks/`
- `/perk-cards/`
- `/best-perks-builds/`
- `/pc/best-settings-fps/`
- homepage / navigation / hubs except an unavoidable generated dependency
- generator/template behavior
- Control Center / GSC monitoring system
- unrelated SEO pages
- any facts not covered by this packet

Those will be evaluated separately after this page update is isolated.

---

## 14. Implementation constraints

- Implementation agent role: **implementation only**.
- Do not repeat Google/SERP/Reddit/Steam/competitor/gameplay research.
- If a new factual gap is discovered, stop that affected claim and report it to the controller.
- Do not hand-edit generator-managed output.
- Edit canonical inputs only.
- Preserve unrelated local work.
- Do not push directly to `main`.
- Do not deploy or push in this first execution unless explicitly authorized later.

### Mandatory repo self-check before edits

```bash
cd /Users/lanling/Code/hot_words_websites/halloween-the-game
pwd
git remote -v
git branch --show-current
git rev-parse HEAD
git status --short
```

Repository identity must resolve to `LynneLan3/halloween-the-game`.

### Normal generated-site validation

Use the repository’s existing Writer/content pipeline for the affected page, then:

```bash
npm run verify:context
npm run site:generate -- --spec site-spec.yaml
npm run validate:generated
```

If the current repository scripts define a more specific existing Writer/update command, use that canonical command rather than inventing a new content-generation path.

---

## 15. Delivery for this execution

```yaml
delivery:
  build: true
  local_validation: true
  commit: optional checkpoint only if the existing workflow requires it
  push: false
  deploy: false
```

Return:

- exact files changed;
- old → new intent/structure summary;
- Writer command actually used;
- `verify:context` result;
- generation result;
- `validate:generated` result;
- any evidence gap or conflict;
- `git diff --stat`;
- do not publish yet.

---

## 16. Post-production measurement rule

After a later approved production deployment:

- move the page to `COOLDOWN`;
- do not re-optimize from same-day partial GSC data;
- use a complete 3–7 day post-change GSC window;
- compare the same bots/offline query family, not only page aggregate CTR;
- watch CTR and position together so a ranking shift is not mistaken for a snippet win/loss.

