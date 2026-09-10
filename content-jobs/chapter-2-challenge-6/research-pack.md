# Halloween: The Game — Chapter 2 Challenge 6 Evidence Pack
Research date: 2026-09-10
Site: https://www.halloweengameguide.wiki/
Repository: LynneLan3/halloween-the-game
Canonical local checkout: /Users/lanling/Code/hot_words_websites/halloween-the-game

## Research decision

The previous “guaranteed Chapter 2 Challenge 6 solution” remains unverified.

However, a narrower and more useful launch-intent page now passes Evidence Gate:

**Primary intent:** Chapter 2 Challenge 6 not working / no-alert challenge / Patch 1.0.1 tracking status
**Target owner:** `/challenges/chapter-2-challenge-6/`

The page must NOT promise a guaranteed completion route. It should give:
1. the exact current objective;
2. the best-supported clean attempt;
3. the observed post-1.0.1 success/failure split;
4. what is and is not proven;
5. a clear “likely tracking issue” path when a clean run still does not register.

## Current canonical site state

The existing `/challenges/` hub already lists:
- Chapter 2 Challenge 6: `Complete the chapter without alerting anyone`
- Patch 1.0.1 tracking fixes
- explicit warning that some outliers may remain
- no guaranteed workaround

Current source:
`site-input/pages/challenges.md`

The current hub intentionally says Chapter 2 Challenge 6 should become a child page only after new demand/evidence. This pack supplies enough evidence for the **bug-status + best-supported-attempt** child-page framing, not for a guaranteed-solution framing.

Current production/navigation branch visible remotely:
`codex/halloween-post-launch-ia-maintenance`
Remote HEAD observed during research:
`48d558bca6e3b8ed8905576bf951e73f1d34b450`
Executor must verify the latest production-equivalent ref before editing.

## Demand / SERP findings

### Demand is active and specific

Current community discussions repeatedly mention Chapter 2 Challenge 6 as the last or most frustrating challenge needed for the Ghost Michael reward.

Post-launch reports include:
- repeated retries with clean no-alert play but no registration;
- successful registration for some players after Patch 1.0.1;
- conflicting claims that Normal or Hard difficulty caused the challenge to pop;
- continued September 9–10 reports that the challenge is still broken.

### SERP gap

Current SERP is fragmented:
- some Chapter 2 guides now list all six challenges;
- at least one established guide still only lists five and omits Challenge 6;
- broad chapter pages often describe the no-alert objective as if it were deterministic;
- community evidence shows the actual user problem is frequently **“I did it correctly and it still did not register.”**

This creates a better intent opportunity than a generic “all Chapter 2 challenges” duplicate:
**`Chapter 2 Challenge 6 not working / how to attempt it / Patch 1.0.1 status`**

## Verified facts

### V1 — Exact objective

Chapter 2 Challenge 6:
`Complete the chapter without alerting anyone`

### V2 — Patch 1.0.1 did not claim all challenge tracking was fully fixed

IllFonic’s September 8 Patch 1.0.1 says it added challenge/achievement tracking fixes while continuing to identify outliers for future fixes.

Safe implication:
- a failed clean run after 1.0.1 is not proof the player misunderstood the objective;
- do not state “Patch 1.0.1 fixed Chapter 2 Challenge 6.”

### V3 — Best-supported attempt condition

The strongest repeated community pattern is:
- get `Surprise` on the important/special Chapter 2 targets, commonly Eric, Tanya and Rachel;
- do not trigger a red alert/detection icon;
- finish the chapter rather than quitting immediately.

One post-patch success report also used Tier 3 Stalk “to be safe” and killed Slab after Rachel.

Boundary:
- Tier 3 Stalk is **not proven to be a Challenge 6 requirement**.
- Slab-after-Rachel is **not proven to be a universal required order**.

### V4 — Difficulty is not a reliable fix

Evidence conflicts:
- one Steam success report says Normal;
- one post-patch Reddit success report says Hard;
- another player reports trying Hard with Surprise/no-alert conditions and still failing.

Therefore Normal/Hard may only be listed as anecdotal, unproven workarounds.

### V5 — Same clean-looking attempt can still fail

Post-1.0.1 reports explicitly describe:
- Surprise on all three special targets;
- no visible detection;
- chapter finished;
- Challenge 6 still not registering.

This supports the page’s actual value proposition:
**challenge execution + current tracking status**, not a fabricated guaranteed route.

## Best-supported player guidance

Safe bounded attempt:

1. Update to the latest game build.
2. Start a fresh Chapter 2 attempt.
3. Keep the run strictly no-alert; avoid red alert/detection states.
4. On Eric, Tanya and Rachel, aim to get the on-screen `Surprise` result.
5. Finish the chapter completely.
6. Check the challenge list/reward state after completion.
7. If the run was clean but Challenge 6 remains incomplete, treat it as a likely tracking outlier rather than assuming an undocumented difficulty/order requirement.

Optional note:
- some successful players used Tier 3 Stalk on the special targets to reduce ambiguity;
- present it only as extra caution, not a proven condition.

## Failure / troubleshooting states

Safe to include:
- Any visible red alert/detection event makes the run suspect; retry fresh.
- Missing `Surprise` on a key target lowers confidence the run stayed fully unalerted.
- Finish the chapter before judging registration.
- A clean completed run can still fail to register on Patch 1.0.1.
- Switching Normal/Hard is anecdotal and inconsistent.
- If challenge progress is failing elsewhere or a chapter loops/restarts, the player may be hitting a broader Story Mode progression/tracking bug.

Do NOT include:
- “Tier 3 is mandatory for Challenge 6.”
- “Kill Slab after Rachel or it will fail.”
- “Hard mode fixes it.”
- “Normal mode fixes it.”
- “This route guarantees completion.”
- invented alert thresholds, timers, detection formulas, or reward timing.

## Media state

Media gate: MISSING for a complete functional end-to-end proof.

No reliable indexed video was found that proves, in one current-build run:
1. Challenge 6 incomplete before run;
2. no-alert states through required targets;
3. end-of-chapter completion;
4. Challenge 6 checked after run;
5. current build/platform visible.

This does NOT block a verified simple version because the core answer is current tracking status + bounded attempt.

Enhancement backlog:
- capture current-build challenge-list before frame;
- capture Surprise/no-red-alert examples on Eric/Tanya/Rachel;
- capture end-of-chapter results;
- capture challenge-list after frame on a successful post-1.0.1 run;
- record platform/build.

If a fully verified successful run is later obtained, upgrade the page from “best-supported attempt / bug status” to a stronger route guide.

## Competitor / conflict notes

1. Destructoid’s September 5 Chapter 2 guide lists only five challenges and omits Challenge 6.
2. Other current guide sites list all six but tend to present the no-alert condition as straightforward, underrepresenting the tracking bug.
3. Current community discussions are more useful for the real bug-status intent than generic Chapter 2 walkthroughs.

## Sources

Official:
- https://halloweengame.com/news/halloween-the-game-out-now/

Community / corroboration:
- https://www.reddit.com/r/TheHalloweenGame/comments/1watckz/101_patch_notes/
- https://steamcommunity.com/app/3219630/discussions/0/592940297913362893/
- https://www.reddit.com/r/TheHalloweenGame/comments/1wbh18y/the_pain_its_over/
- https://www.reddit.com/r/TheHalloweenGame/comments/1w7ucz2/important_bug_ps5_chapter_1_progression_bug/
- https://www.reddit.com/r/TheHalloweenGame/comments/1wb9umd/story_mode_progression_bug_chapters_restart/

Current guides / SERP:
- https://www.whisperofthehouse.com/halloween-the-game/main-street-walkthrough
- https://togame.io/a/halloween-the-game-campaign-achievements/
- https://www.destructoid.com/all-chapter-2-challenges-in-halloween-the-game-and-how-to-complete-them/
- https://thehalloweengame.wiki/challenges/chapter-2

## Content Routing Receipt

CONTENT ROUTING
Site lifecycle: PUBLISHED
Content stage: LAUNCH
Intent: QUEST_PROGRESSION + NEWS_UPDATE
Article class: PREMIUM_PROBLEM_SOLVING
Evidence gate: PASS for “not working / best-supported attempt / Patch 1.0.1 status”; FAIL for any guaranteed-completion claim
Media gate: MISSING — no complete current-build before→clean-run→after proof; capture as enhancement backlog
Writer: YES, bounded verified-simple-version only
Publish state: READY_FOR_WRITER
Reason: The exact objective, current patch boundary, best-supported attempt, and continuing post-patch tracking failures are corroborated strongly enough to answer the real player problem. A deterministic hidden trigger or guaranteed route remains UNKNOWN.

## Writer allowlist

The final page may say:
- exact Challenge 6 objective;
- Patch 1.0.1 added tracking fixes but official notes say outliers remain;
- strongest current attempt is Surprise on Eric/Tanya/Rachel + no red alert + finish chapter;
- some post-patch players report success;
- others report clean-looking attempts still failing;
- Normal/Hard claims conflict;
- Tier 3/order details are optional success-run observations, not requirements;
- if a clean run still fails, it can be a tracking problem rather than player error.

## Writer blocklist

Do not say:
- guaranteed solution;
- exact hidden trigger confirmed;
- Tier 3 required;
- a specific difficulty required;
- Slab/Rachel order required;
- Patch 1.0.1 fully fixed it;
- media-proof language implying end-to-end verified success capture exists.

## Implementation scope

Create:
- `/challenges/chapter-2-challenge-6/`

Update:
- `/challenges/` only enough to link to the child owner and replace the “potential later child page” note.

Integrate with existing Story/Challenges distribution where the current IA expects sibling owners, without redesigning navigation.

Do not modify unrelated Story pages.
Do not reopen Chapter 4 or Chapter 5 research.
Do not expand into Endings or Graphics/FPS in this implementation.
