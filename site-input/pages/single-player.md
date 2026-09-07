# Halloween: The Game Single Player — Story Mode & Chapters

Quick answer

Story Mode is a single-player narrative containing 6 total chapters: a Prologue plus five numbered chapters (Chapters 1–5). In the successful runs reviewed, the campaign proceeds with the Prologue first and then Chapters 1–5 in that named order. The chapter progressions below are observed sequences from those runs, not guaranteed requirements. Optional challenges and collectibles are replay content tied to the six playable chapters. Current Early Access community reports describe possible save/reset, challenge/log registration, relock/loop, and Chapter 4 AI/timing problems; those reports are not confirmed as universal and do not establish a guaranteed workaround.

First-clear state map (observed)

- Prologue → Chapter 1 → Chapter 2 → Chapter 3 → Chapter 4 → Chapter 5.

## Prologue — observed route

In the successful runs reviewed:

1. Clear the initial orderly encounters.
2. Follow the power/gate progression cue.
3. Continue toward the station wagon.

![Michael reaches the station wagon route at the end of the observed Prologue sequence](../../../assets/evidence/single-player-growth/v01-prologue-1505-frame.webp)

*Prologue station-wagon route state.*

## Chapter 1 — observed progression

1. Encounter the Rabbit in Red sequence.
2. Follow the red/noise tracking segments.
3. Continue toward the mechanic progression state.

![The observed Chapter 1 sequence reaches the mechanic progression state](../../../assets/evidence/single-player-growth/v01-ch1-3220-frame.webp)

*Chapter 1 mechanic progression state.*

## Chapter 2 — observed progression

1. Advance through the hardware-store and mask-related progression.
2. Continue through named-target objectives.
3. Follow the Judith Myers tombstone sequence.
4. Return toward the car as the route moves toward closure.

## Chapter 3 — observed progression

1. Enter the Myers House sequence.
2. Complete the house/flashback material.
3. Continue to later neighborhood objectives.

![Michael inside the Myers House during the observed Chapter 3 sequence](../../../assets/evidence/single-player-growth/v01-ch3-7224-frame.webp)

*Myers House sequence in Chapter 3.*

## Chapter 4 — observed progression

1. Follow the Wallace House event chain.
2. Continue through the observed Bob/Lynda states.
3. Follow the later event-chain progression toward the Laurie phase.

![The Wallace House is the active objective during the observed Chapter 4 route](../../../assets/evidence/single-player-growth/f07-correct-frame.webp)

*Wallace House objective in Chapter 4.*

### Chapter 4 Challenges — Quick Answer

The observed Early Access route that completes Challenges 3, 5 and 6 in one run is: follow the Wallace House chain (dog → Annie/laundry → Annie/car), stalk Bob and Lynda together from the living-room closet, pin Bob to the kitchen wall and remove his glasses, collect the Sheet from the upstairs bedroom and keep it equipped, execute Lynda with the telephone, stage the bodies, let Laurie discover the scene, then follow the Laurie chase/closet sequence through the final attack/cutscene. This ordering and these actions are the currently observed route (video and community corroboration) — they are practical steps players should attempt, but community reports and the Early Access Hotfix 1 do not guarantee universal challenge registration. If you complete these steps and a challenge does not register, follow the troubleshooting guidance below.

#### Challenge 3 — Lynda on the telephone while wearing the Sheet

Observed route (use numbered steps in player order):

1. Complete the Annie car sequence before attempting the upstairs/Sheet portion.
2. Follow Bob into the kitchen and reach the Level-3 stalk condition on Bob; pin him to the kitchen wall.
3. Remove Bob's glasses (community reports link the glasses to the later Sheet interaction).
4. Go upstairs, pick up the Sheet from the bedroom, and keep the Sheet equipped.
5. Wait for Lynda to get up and use the telephone, then perform the telephone execution while the Sheet is equipped.

Notes and evidence boundary:
- The route above is observed in current Early Access gameplay (approx. 27:57–30:39 in the CovoCava run). The glasses-before-Sheet ordering is a community-correlated lead; it remains UNPROVEN as a formal mechanic until captured in-game or confirmed by the developer.
- If the Sheet is picked up but not equipped at the telephone strike, the observed runs suggest the challenge may not register. Treat equipment state strictly during the telephone execution.

#### Challenge 4 — Bloodthirsty / Weapon Execution (distinct observation)

Observed footage (timestamped): approximately 26:00–26:15 in the referenced gameplay shows Michael building Bloodlust on an unrelated Resident and opening the Weapon Execution choice menu.

- What the capture shows: Bloodlust buildup on a Resident and the Weapon Execution UI being available.
- Useful player interpretation: this is a preparation route for a Bloodthirsty-style execution objective in the current build.
- Unknowns (do not assume numbers): the exact Bloodthirsty level required, the target-health threshold the Resident must be at, which execution prompt must be selected, and whether the challenge panel will register on-screen after an execution are all UNKNOWN based on the supplied evidence.
- Actionable takeaway: if you intend to pursue this challenge, focus on building Bloodlust and watching for the Weapon Execution prompt; do not assume a specific numeric Bloodthirsty value will be required.

#### Challenge 5 — fully stalk Bob and Lynda while they are making out

Observed procedure and strengthened diagnosis:

1. Enter the living-room closet opposite the couch to establish the viewing angle.
2. Stalk both Bob and Lynda together while they remain on the couch.
3. Work toward reaching Tier 3 (Level 3) stalk on both targets before the scene advances or they separate.
4. Let the scene advance only after both characters have reached the intended stalk level.

Important reproduction notes:
- Video evidence places this sequence at approx. 28:40–29:12 in the observed run.
- Community reports indicate success is more likely if both reach Tier 3 before leaving the couch; this is a reported workaround (player inference), not an officially documented mechanic.
- If the pair separate before you reach the stalk level target, that is a STATE_WINDOW_MISSED — restart the sequence from the closet vantage and repeat.
- If both reach the reported stalk level but the challenge does not register, consider ROUTE_ERROR (missed step earlier in the chain) or POSSIBLE_EA_TRACKING_ISSUE; capture your build/platform and the HUD/challenge-panel state for reporting.

#### Challenge 6 — match the film plot (Laurie late-state troubleshooting is the centerpiece)

Ordered steps to reproduce the movie-accurate run (player order):

1. Kill the dog without prematurely alerting or diverting Annie; the dog trigger must fire without breaking subsequent Annie behavior.
2. Lock Annie in the laundry room and wait for the laundry-room dialogue/cutscene to finish; do not rush away until the state advances.
3. Let Annie return to the car and complete the car kill (Shape jump/car strangle). The observed run shows this at approx. 27:57–28:26.
4. Enter the living room closet and stalk Bob and Lynda together; get the living-room sequence to advance with them still staged properly.
5. Allow Lynda to go upstairs. A commonly reported workaround to keep Lynda upstairs is to close the bedroom door before performing Bob's final wall kill; this is community-reported, not developer-confirmed.
6. Pin Bob to the kitchen wall and reach Level 3 on Bob; remove his glasses.
7. Go upstairs, pick up the Sheet, keep the Sheet equipped.
8. Return downstairs and perform the telephone execution on Lynda while the Sheet is equipped.
9. Stage Bob and Lynda's bodies where the route expects, then wait for Laurie to discover the scene.
10. Stalk Laurie through the living-room/closet sequence; allow the intended upstairs closet interaction and the final grab/attack/cutscene to resolve naturally.

Late-state troubleshooting focus (why runs fail to register):
- The Laurie sequence has the most reported variability. In observed footage the creator pulls Laurie from an upstairs closet and then receives a decisive strike (approx. 31:16–32:53). Reports differ on whether a single knife hit, a grab after the second closet, or a hanger attack is the critical registration event. These discrepancies are PLAYER_WORKAROUND candidates, not confirmed triggers.
- If Laurie uses a non-canonical closet or the final attack/cutscene does not play, this is commonly reproduced as a STATE_WINDOW_MISSED or AI-timing variance. In those cases, replay the chapter from the start and re-run the ordered steps, ensuring each earlier cutscene/dialogue completes before moving forward.
- If you perform every ordered step above and the chapter completes without the challenge checking, treat the run as a POSSIBLE_EA_TRACKING_ISSUE. Record platform, full build/hotfix version, whether the challenge HUD flashed, whether the in-game challenge panel showed completion, and the exact sequence/timestamps before reporting.

Developer hotfix context:
- Early Access Hotfix 1 (2026-09-05) states it fixed “several challenges that were not tracking properly” but does not enumerate which Chapter 4 items were addressed. Do not assume Hotfix 1 resolves all Chapter 4 registration failures; use the capture-and-report workflow above if you still see failures.

#### Observed route, common workarounds, and unknowns (summary)

- Observed route (one-run approach): dog → lock Annie in laundry → Annie car kill → stalk Bob/Lynda in living-room closet → Lynda upstairs → pin Bob to kitchen wall → remove glasses → take Sheet → equip Sheet → Lynda telephone kill → stage bodies → let Laurie discover → follow Laurie closet/chase → final attack/cutscene.
- Reported player workarounds: closing the bedroom door before killing Bob to keep Lynda upstairs; forcing both Bob and Lynda to Tier 3 while together on the couch for Challenge 5.
- Unknown / unproven: precise Bloodthirsty numeric thresholds for Challenge 4, whether Bob’s glasses are a formal prerequisite for the Sheet interaction, the exact Laurie final-hit trigger that counts for Challenge 6, and which (if any) Chapter 4 challenges were altered by Hotfix 1.

#### Troubleshooting (if a challenge does not register)

1. Verify in-order completion: make sure every listed cutscene/dialogue (laundry room, Annie car return, living-room scene) finishes before you move on.
2. If Lynda comes downstairs prematurely, retry with the bedroom door closed before killing Bob — log this as a workaround test.
3. If the living-room pair separates before you reach the desired stalk level, restart the living-room sequence from the closet (STATE_WINDOW_MISSED).
4. If Laurie’s closet/attack sequence does not play or uses a different closet, replay the chapter from the start and repeat the ordered route; if failure persists after multiple clean runs, treat it as POSSIBLE_EA_TRACKING_ISSUE.
5. If a challenge looks correctly executed but does not check: record platform, exact build/hotfix, whether the HUD flashed a challenge completion, and provide timestamps/screenshots of the final scene and challenge panel. These data points help distinguish ROUTE_ERROR from tracking bugs.

#### Common mistakes to avoid

- Rushing past the laundry-room dialogue/cutscene before Annie’s state finishes — this commonly desynchronizes later states.
- Picking up the Sheet but not keeping it equipped during Lynda’s telephone execution.
- Viewing the Bob/Lynda scene from an incorrect angle (not inside the opposite living-room closet) which can prevent both stalk meters from escalating.
- Assuming Hotfix 1 fixed all Chapter 4 tracking; it fixed “several” unspecified issues only.

#### What to do next if you still can't get a challenge to register

- Replay the chapter from the start and carefully follow the ordered steps above.
- Capture video (or precise timestamps/screenshots), note the build/hotfix version, and record whether the in-game challenge HUD flashed.
- Report the structured evidence to support (developer) bug triage: platform, build version, exact sequence, whether the challenge panel showed completion, and whether a checkpoint reload was involved.
- If your run is clean and you still fail to receive the challenge, label the report with POSSIBLE_EA_TRACKING_ISSUE and include any ROUTE_ERROR checks you ran.

Source evidence: CovoCava Early Access gameplay (Chapter 4 segment approx. 26:52–32:53), official Early Access Hotfix 1 notes, Destructoid and Into Indie Games walkthroughs, and multiple community reports cited for workaround and failure leads.

## Chapter 5 — observed progression

1. Continue through the police/search-pressure phase.
2. Follow the escape objective when it appears.
3. In VIDEO-02, the observed run reaches a train-track escape branch. This is run-specific evidence, not a universal ending requirement.

![The escape objective is active in the observed Chapter 5 run](../../../assets/evidence/single-player-growth/v02-ch5-esc-frame.webp)

*Chapter 5 escape objective.*

![The observed run commits to the train-track escape branch](../../../assets/evidence/single-player-growth/v02-ch5-rail-frame.webp)

*Chapter 5 train-track escape branch.*

## First clear vs challenge cleanup

The chapter route above is for first-clear progression. Optional challenges and collectibles are replay content tied to the six chapters. Return to the relevant chapter for cleanup instead of letting an optional challenge derail the first clear.

## Stuck or bug? Early Access note

Community reports describe possible save/reset, challenge or Loomis Log registration, relock/loop, and Chapter 4 AI/timing problems. These reports are version-scoped Early Access observations, are not confirmed as universal, and have no guaranteed workaround. A missed optional timing window is different from a possible tracking or save issue: first check the current objective and state, then replay the chapter or consult current support/community updates if progress did not register.

## Replay, endings, and next step

After a first clear, replay individual chapters for optional challenges and collectibles. Chapter 5 ending routes remain partially unresolved in the current evidence; the train-track branch is directly observed in VIDEO-02 only.

## Sources and verified date

- [Unleash Hell Upon Haddonfield — Halloween: The Game](https://halloweengame.com/news/unleash-hell-upon-haddonfield/)
- [Halloween the Game single-player review — VGC](https://www.videogameschronicle.com/review/halloween-the-game-single-player-review-is-there-enough-here-for-solo-players/) (reviewed 2026-09-04)
- Gameplay cross-checks: MKIceAndFire, [VIDEO-01](https://www.youtube.com/watch?v=SR3vu4G0t1Q); Main Wave Gaming, [VIDEO-02](https://www.youtube.com/watch?v=d9Rk9PvL6Aw). Reviewed 2026-09-06.
