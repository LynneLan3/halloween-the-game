# Halloween: The Game `/single-player/` — GROWTH WALKTHROUGH Evidence Pack Research

Status: WEB_RESEARCH_COMPLETE / VIDEO_SEGMENTATION_AND_FRAME_CAPTURE_PENDING_LOCAL
Target: `/single-player/`
Decision: UPDATE
Lifecycle: GROWTH
Intent: WALKTHROUGH
Prototype inheritance: P6 Progression + P4 Procedure + selective P5 Location

## Player task

Finish the Prologue and five numbered Story Mode chapters without getting pulled off the required route by optional challenges; recognize the state that advances each chapter; distinguish a missed gameplay state from a possible Early Access tracking/save issue.

## Existing-page gap

The current page is still pre-launch: it confirms six chapters and optional/replay content but explicitly says no chapter-by-chapter walkthrough yet and leaves chapter names/objectives as launch-verification pending. It now needs post-launch conversion rather than incremental copy expansion.

## Demand signal

Current project GSC monitoring on 2026-09-06 shows `/single-player/` receiving strong post-EA growth and new query variants around chapter count, chapters, walkthrough, and Chapter 4 challenges. Treat exact day totals as incomplete realtime data, but the intent migration is clear: REFERENCE -> WALKTHROUGH / PROGRESSION.

## External competitive baseline

### Destructoid
Source: https://www.destructoid.com/complete-halloween-the-game-walkthrough/
Strengths:
- Strong domain authority.
- Real gameplay screenshots placed beside steps.
- Useful Prologue and Chapter 1 action order.
Weakness:
- The current "complete" walkthrough is only complete through Prologue + Chapter 1 and says to stay tuned for more.

### Into Indie Games
Hub: https://intoindiegames.com/walkthrough-hub/halloween-the-game-walkthrough-hub/
Prologue: https://intoindiegames.com/walkthroughs/halloween-the-game-walkthrough-prologue-escape-from-smiths-grove/
Chapter 1: https://intoindiegames.com/walkthroughs/halloween-the-game-walkthrough-chapter-one-the-road-to-haddonfield/
Chapter 2: https://intoindiegames.com/walkthroughs/halloween-the-game-walkthrough-chapter-two-main-street/
Chapters 4-5: https://intoindiegames.com/walkthroughs/halloween-the-game-walkthrough-chapters-four-and-five-the-babysitters-into-the-shadows/
Strengths:
- Full six-part campaign coverage.
- Detailed objective-by-objective procedures.
- Screenshot-dense.
Weakness:
- Mostly traditional step list; weaker at current-state diagnosis, recovery boundaries, and separating route error from tracking bugs.

### Whisper of the House
Full walkthrough: https://www.whisperofthehouse.com/halloween-the-game/walkthrough
Main Street: https://www.whisperofthehouse.com/halloween-the-game/main-street-walkthrough
The Babysitters: https://www.whisperofthehouse.com/halloween-the-game/the-babysitters-walkthrough
Endings: https://www.whisperofthehouse.com/halloween-the-game/endings
Strengths:
- Best current state-aware competitor.
- Explicitly separates first clear from optional challenge cleanup.
- Treats Main Street and The Babysitters as state/timing problems rather than simple kill lists.
- Explains ending branch commitment points.
Implication:
- "Do first clear before challenges" is now baseline, not unique contribution.

## Official evidence boundary

1. https://halloweengame.com/news/unleash-hell-upon-haddonfield/
   - Story Mode is a reimagined extended cut from Michael's perspective.
   - Each chapter has secondary challenges and collectibles.
   - Multiple difficulties exist.

2. https://halloweengame.com/news/progression-customization-overview/
   - Optional singleplayer challenges exist for all six playable chapters.
   - They unlock alternate outfits/cosmetics, including a legendary completion reward.

3. https://halloweengame.com/news/the-night-he-came-home-reimagined/
   - Defined chapters, cinematics, Loomis narration.
   - Difficulties, optional objectives, collectibles, multiple endings.

4. https://halloweengame.com/news/legacy-characters-reimagined/
   - Annie, Bob, Lynda and Laurie have interactive story-mode appearances.

Do not attribute exact chapter names, routes, challenge timing, or ending mechanics to official sources unless a current official source explicitly shows them.

## Complete Story Mode video sources

### VIDEO-01 — Primary
Title: HALLOWEEN THE GAME Gameplay Walkthrough Singleplayer FULL GAME [4K 60FPS] - No Commentary
Channel: MKIceAndFire
YouTube: https://www.youtube.com/watch?v=SR3vu4G0t1Q
Runtime observed in search index: 2:13:56
Published: 2026-09-03
Role: PRIMARY_VIDEO_EVIDENCE
Reason: full campaign, 4K/60, no commentary/facecam, high current view volume.

### VIDEO-02 — Cross-validation
Title: Halloween: The Game — Full Game Playthrough [4K PS5 Pro No Commentary]
Channel: Main Wave Gaming
YouTube: https://www.youtube.com/watch?v=d9Rk9PvL6Aw
Published: 2026-09-04
Role: SECONDARY_VIDEO_EVIDENCE
Reason: independently described by publisher site as a complete start-to-finish single-player campaign on PS5 Pro in 4K with no commentary.

Two independent complete playthroughs are sufficient for this pack. Do not force a third weak/partial source.

## Chapter order — externally corroborated

1. Prologue — Escape From Smith's Grove
2. Chapter 1 — The Road To Haddonfield
3. Chapter 2 — Main Street
4. Chapter 3 — Returning Home
5. Chapter 4 — The Babysitters
6. Chapter 5 — Into The Shadows

Exact per-video timestamps MUST be extracted from VIDEO-01 and VIDEO-02 locally. Do not estimate timestamps from third-party runtime tables.

Required segmentation output per video:
- chapter_start
- chapter_end
- title_card_or_transition_proof
- current build/platform if visible
- confidence

## Chapter route facts for cross-validation

### Prologue — Escape From Smith's Grove
Core route supported by Destructoid + Into Indie Games:
- deal with/tutorial around orderlies
- objective shifts to lowering/opening the gate
- turn off/interfere with the power box
- pry/open the gate
- reach the station wagon unnoticed
Main route rule: once the gate/exit objective is active, remaining orderlies are optional unless pursuing challenges.

### Chapter 1 — The Road To Haddonfield
Supported by Destructoid + Into Indie Games:
- kill the initial bikers
- progress through Rabbit in Red
- defeat the gun biker / advance the chase
- Shape Jump becomes relevant
- follow red/noise tracking to the mechanic
- killing/catching the mechanic closes the chapter
Challenge kills inside Rabbit in Red are optional for first clear.

### Chapter 2 — Main Street
Supported by Into Indie Games + Whisper:
- enter/phase through hardware-store route
- acquire Michael's mask
- continue named-target objectives
- later required body-cleanup objective
- cemetery / Judith Myers tombstone sequence
- bring the tombstone back toward the car to finish the chapter
Important state rule: target-specific challenge conditions can be missed even while story progression remains valid.

### Chapter 3 — Returning Home
Supported by Whisper + chapter-specific search evidence:
- go to Myers house before optional neighborhood hunting
- house entry triggers required childhood flashback
- back/inside/upstairs/mask/Judith sequence
- chapter returns to present and opens into neighborhood objectives
Main route rule: once the HUD moves to escape/next-state, stop clearing optional houses.

### Chapter 4 — The Babysitters
Supported by Into Indie Games + Whisper + official legacy-character evidence:
- Wallace House is the progression anchor
- Annie/Bob/Lynda/Laurie move through a scripted event chain
- Bob/Lynda living-room state is temporary
- Sheet becomes available after Bob's part of the sequence
- Lynda telephone sequence depends on the Sheet state for the challenge
- late objective changes to Laurie chase / stop her calling for help
- Loomis confrontation closes the chapter
Important rule: this chapter behaves like an event-state machine, not a neighborhood sweep.

### Chapter 5 — Into The Shadows
Supported by Into Indie Games + Whisper:
- police pressure / search phase
- wait until a real escape objective becomes available
- then commit to an exit rather than continuing unrelated fights
- confirmed routes in current competitor evidence: railroad, sewer, cornfield
- branch commitment is visible via HUD/landmark state; ending sequence then resolves
For first-clear copy, explain one clear route and treat alternates as replay cleanup rather than forcing all endings into the main path.

## 11 high-Information-Gain visual states

Capture ONLY these core publication candidates unless evidence shows a more useful equivalent.

### FRAME-01 — Prologue gate/power transition
Chapter: Prologue
What it proves: the route has shifted from orderlies to the gate/power objective.
Preferred visual: HUD/objective + visible power box/gate context.

### FRAME-02 — Prologue station-wagon stealth finish
Chapter: Prologue
What it proves: final stealth objective / correct finish route after the gate opens.
Preferred visual: station wagon approach with objective text or clear completion context.

### FRAME-03 — Chapter 1 Shape Jump / mechanic tracking state
Chapter: 1
What it proves: after the Rabbit in Red/gun-biker section, progression changes to Shape Jump/noise tracking toward the mechanic.
Preferred visual: ability/UI + red ping/noise cue or mechanic objective.

### FRAME-04 — Chapter 2 mask acquisition
Chapter: 2
What it proves: hardware-store entry/Phase Jump leads to the mask and unlocks the next story state.
Preferred visual: mask interaction or immediate post-pickup objective state.

### FRAME-05 — Chapter 2 tombstone-to-car transition
Chapter: 2
What it proves: story progression has moved from target hunting to the Judith Myers cemetery/tombstone finish.
Preferred visual: tombstone + return-to-car/current objective.

### FRAME-06 — Chapter 3 Myers-house flashback transition
Chapter: 3
What it proves: entering the Myers house is the required state change before optional neighborhood hunting.
Preferred visual: flashback/young Michael mask sequence or objective-confirming transition.

### FRAME-07 — Chapter 4 Wallace House / Bob-Lynda active state
Chapter: 4
What it proves: the Wallace House is the progression anchor and Bob/Lynda are in the temporary scripted scene.
Preferred visual: identifiable Wallace House/living-room state + relevant objective.

### FRAME-08 — Chapter 4 Sheet unlock / disguise state
Chapter: 4
What it proves: Bob's sequence has advanced far enough for the Sheet/Lynda setup.
Preferred visual: Sheet pickup/equipped state + Lynda/telephone context.

### FRAME-09 — Chapter 4 Laurie chase objective
Chapter: 4
What it proves: setup phase is over; player should abandon missed side objectives and stay on Laurie.
Preferred visual: HUD objective equivalent to "KILL LAURIE BEFORE SHE CALLS FOR HELP".

### FRAME-10 — Chapter 5 exit-available state
Chapter: 5
What it proves: police-pressure phase has advanced to a real escape objective.
Preferred visual: first explicit escape HUD state with surrounding landmark.

### FRAME-11 — Chapter 5 branch commitment/completion cue
Chapter: 5
What it proves: player has committed to a specific ending route and should stop searching elsewhere.
Preference: railroad timer if present in the primary route; otherwise use a clearly corroborated sewer/cornfield branch HUD + landmark.

Every captured asset must store:
- video_source_id
- timestamp
- chapter
- current_state
- what_it_proves
- next_action
- claim_refs
- publication_qa result
- version/build/platform when visible

## Publication QA

Core requirements:
- prefer source-native 1080p+ frames
- no facecam or overlays obscuring gameplay/UI
- HUD/objective text readable on desktop and mobile crop
- no severe motion blur/compression
- crop only when it improves the evidence without hiding state context
- each core visual claim must PASS publication QA before Evidence Pack can become EVIDENCE_COMPLETE

## Community bug evidence — keep separate from route facts

Status for all claims below: COMMUNITY_CORROBORATED / VERSION_SCOPED / EARLY_ACCESS
Verification date: 2026-09-06

### BUG-01 Story progress can fail to save / chapter selection can reset
Reddit evidence:
- https://www.reddit.com/r/TheHalloweenGame/comments/1w7c72e/cant_save_progress_in_the_single_player_mode/
- https://www.reddit.com/r/TheHalloweenGame/comments/1w7dt2z/story_mode_not_saving_or_unlocking_challenges/
- https://www.reddit.com/r/TheHalloweenGame/comments/1w7a3hc/story_mode_bug/
Observed pattern: multiple independent users report returning to menu/crashing and only Prologue or earlier chapters remaining selectable.
Boundary: do not claim universal reproduction or a guaranteed workaround.

### BUG-02 Story challenges / Loomis Logs can fail to register
Reddit evidence:
- https://www.reddit.com/r/TheHalloweenGame/comments/1w7dt2z/story_mode_not_saving_or_unlocking_challenges/
- https://www.reddit.com/r/TheHalloweenGame/comments/1w87akq/challenge_tracking_issues/
- https://www.reddit.com/r/TheHalloweenGame/comments/1w8ifrf/bug_after_bug/
Observed pattern: correct-looking challenge actions sometimes do not register; some users report later/retry success without changing the route.
Boundary: distinguish a missed challenge state from possible tracking failure.

### BUG-03 Chapter completion may loop/relock temporarily
Reddit evidence:
- https://www.reddit.com/r/TheHalloweenGame/comments/1w7eou4/list_of_issuesbugs/
Observed pattern: players report completing Rabbit in Red/Main Street and being returned to or locked on the same chapter; at least one later report says the next chapter appeared without repeating it again.
Boundary: community-only; no hidden requirement should be invented to explain it.

### BUG-04 Chapter 4 challenge state can be disrupted by AI/timing behavior
Reddit evidence:
- https://www.reddit.com/r/TheHalloweenGame/comments/1w80lhg/chapter_4_of_the_single_player_campaign_the/
Observed pattern: users report Lynda moving out of expected scripted state and film-plot challenge difficulty/tracking confusion.
Boundary: current EA report, not a universal hard rule.

## Failure & recovery taxonomy for the article

1. ROUTE_ERROR
   - HUD/objective has advanced but player is still acting on an older target.
   - Recovery: follow the current required objective.

2. STATE_WINDOW_MISSED
   - Optional challenge interaction/timing has already passed in this run.
   - Recovery: finish the story, replay the chapter for the missed challenge.

3. POSSIBLE_EA_TRACKING_ISSUE
   - Route/state appears correct but progress/challenge does not register, or chapter selection resets.
   - Recovery language: report current community evidence only; do not invent a hidden requirement or guarantee a workaround.

## Unique contribution contract

The article must NOT compete by being longer.
It must provide:

1. Six-chapter STATE MAP
   current_state -> meaning -> next_required_action -> completion_signal

2. Step-adjacent functional visual proof
   only 11 high-IG frames, each with what_it_proves

3. FIRST CLEAR vs CHALLENGE CLEANUP separation
   baseline competitor requirement, not claimed as unique innovation

4. STUCK OR BUG? diagnosis
   route error vs missed state window vs possible EA tracking issue

5. Version-scoped uncertainty
   Early Access bug notes explicitly dated; unknown/conflicting claims stay UNKNOWN/COMMUNITY_CORROBORATED rather than becoming hard requirements

## Claim-language boundaries

- OFFICIAL: six playable chapters; optional challenges; rewards; multiple endings; story-mode legacy character appearances.
- VIDEO_OBSERVED: exact title-card order, HUD text, route state changes, completion signals, visible branch commitment — only after local video extraction.
- COMMUNITY_CORROBORATED: save reset, challenge tracking, chapter loop, Chapter 4 AI/timing reports.
- INFERENCE/RECOMMENDATION: first-clear routing preferences, which ending is easiest first, when to postpone optional objectives.
- UNKNOWN: any exact mechanic/timing not independently verified by video or reliable cross-source evidence.

## Writer contract

APIMart Writer receives this pack only after:
- both complete videos are segmented by chapter with actual timestamps
- the 11 core frames are captured and publication-QA PASS
- core route facts have at least two-source support or one strong video observation + one reliable page source
- community bug claims remain separate/version-scoped

Writer structure should be task-derived, not template-derived:

1. Quick answer + six-chapter order
2. First-clear state map
3. Prologue through Chapter 5, each as:
   - current state
   - what the player should see
   - next required action
   - evidence frame
   - completion signal
   - failure/recovery only where real
4. First clear vs challenge cleanup
5. Stuck or bug? Early Access box
6. Replay/endings next step
7. Sources/version note

Do not duplicate full challenge lists into the main walkthrough.
Do not create chapter child pages in this production unless current query evidence independently justifies them.

## Current readiness

Demand: PASS
Intent ownership: PASS
Competitor gap: PASS
Official factual boundary: PASS
Chapter route research: PASS_WITH_VIDEO_CONFIRMATION_REQUIRED
Video source discovery: PASS (2 complete independent sources)
Exact timestamp segmentation: PENDING_LOCAL
11 publication frames: PENDING_LOCAL
Community bug pack: PASS / COMMUNITY_CORROBORATED / VERSION_SCOPED
Writer: BLOCKED until video segmentation + publication QA complete
Evidence Pack readiness: FAST_VERIFIED, not yet EVIDENCE_COMPLETE
