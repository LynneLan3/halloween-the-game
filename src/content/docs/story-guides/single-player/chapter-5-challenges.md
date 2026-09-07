---
title: "Halloween: The Game — All Chapter 5 Challenges and Challenge 6 Troubleshooting"
description: "Complete all six Chapter 5 challenges with exact current-build wording, then troubleshoot Challenge 6 with one verified parked-police-car route: melee attack, sewer escape, and results-screen confirmation."
category: story-guides
slug: single-player/chapter-5-challenges
status: confirmed
featured: false
role: core
assetType: article
sidebar:
  order: 2
intents:
  - chapter-5-challenges
  - challenge-6-police-car
  - police-car-not-counting
quickAnswer: "The current build lists six Chapter 5 challenges. Challenge 6 reads 'Destroy any police car before you escape.' A verified successful route used a parked police car at a residential intersection, melee attacks, a sewer escape, and a checked post-chapter results screen; competing vehicle rules remain unconfirmed."
relations:
  -
    slug: single-player
    type: related
  -
    slug: early-access-release-time
    type: related
changeSummary: Current-build Chapter 5 challenge list and one bounded Challenge 6 route.
eyebrow: Chapter 5 Challenges
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/single-player/chapter-5-challenges.md
-->
Confirmed facts
- The six Chapter 5 challenge cards and their current-build wording are:
  - "Use Blackout to disable 2 cop flashlights at once"
  - "Kill a Cop with a Pitchfork Execution"
  - "Kill at least 3 other Residents before escaping"
  - "Fully Stalk any police in the Wallace's house"
  - "Escape without Loomis detecting you"
  - "Destroy any police car before you escape" (Challenge 6)
- Early Access Hotfix 1 fixed several challenge-tracking issues; additional fixes were still being prepared.
- In the separate gameplay capture at 02:00:40 the HUD displays "Fully Stalked Police" after the player stalks a police target.
- An inherited independent Story run visibly reaches the Chapter 5 escape objective and then a train-track escape branch (observed sequence).
- In the verified gameplay footage, the observed sequence that registered Challenge 6 was: melee-hit a parked police car at a suburban intersection, continue to a sewer escape, then see the results screen with Challenge 6 checked (observed sequence).

Chapter 5 challenge walkthrough
Use these routes to work through the first five challenges. The completion cue is listed after each procedure; mechanics that are not directly confirmed remain in the notes below.

Challenge 1 — "Use Blackout to disable 2 cop flashlights at once"
How to complete it:
1. Draw a few cops together.
2. Activate Blackout once while those cops are present.
3. Confirm the Challenge 1 completion card.
![Challenge 1 Blackout completion frame](/evidence/chapter-5-challenges/challenge-1-blackout-complete-t0025.webp)
*Completion cue at 00:25. The exact internal Blackout range and flashlight-state rules remain unverified.*

Challenge 2 — "Kill a Cop with a Pitchfork Execution"
How to complete it:
1. Find a pitchfork pickup; the video notes weapon spawns are RNG.
2. Use a Pitchfork Execution on a cop.
3. Confirm the Challenge 2 completion card.
![Challenge 2 pitchfork completion frame](/evidence/chapter-5-challenges/challenge-2-pitchfork-complete-t0103.webp)
*Gameplay frame showing Challenge 2 completion after a Pitchfork Execution (01:03). The footage notes weapon spawns are RNG; no fixed spawn was established.*

Tip: regain abilities with Bloodthirst, then use first-person stalk to help locate weapons. No fixed pitchfork spawn is confirmed.

Challenge 3 — "Kill at least 3 other Residents before escaping"
How to complete it:
1. Use the map to identify houses marked with question marks.
2. Enter those houses and kill residents.
3. Confirm the Challenge 3 completion card before escaping; the selected frames do not independently count all three kills.
![Challenge 3 resident kills completion frame](/evidence/chapter-5-challenges/challenge-3-resident-complete-t0129.webp)
*Gameplay frame showing Challenge 3 completion after resident kills (01:29). The three individual kills are not all independently countable in the selected frame sequence.*

Challenge 4 — "Fully Stalk any police in the Wallace's house"
How to complete it:
1. Go to Wallace's house—the footage describes it as the house where Annie was babysitting.
2. Find a police target and stalk them up to a visible stalk count of three.
3. Stop when the HUD shows "Fully Stalked Police", then confirm Challenge 4 completion.
![Challenge 4 fully stalked HUD frame](/evidence/chapter-5-challenges/challenge-4-fully-stalked-t0144.webp)
*The visible cue is "Fully Stalked Police" (01:44); a separate capture also shows the same HUD state.*

Challenge 5 — "Escape without Loomis detecting you"
How to complete it:
1. Check the map for Loomis's large red smudge.
2. Avoid Loomis's red smudge area and follow the waypoint to the escape objective.
3. Complete the level and check the final results screen for Challenge 5.
![Challenge 5 Loomis map cue frame](/evidence/chapter-5-challenges/challenge-5-map-loomis-cue-t0159.webp)
*The map cue is shown at 01:59. Exact detection radius, line of sight, and timer remain unestablished.*

One verified successful Challenge 6 route (observed)
The following is the observed sequence from the successful verified run reviewed. This is an observed route, not a universal rule; use it as a reproducible test-case.

1. Play through Chapter 5 until you reach the suburban-street area where a parked police car appears at an intersection (observed in the verified run).
   ![Parked police car at the suburban intersection](/evidence/chapter-5-challenges/parked-police-car-context-t02342.webp)
   *Parked police car at the suburban intersection used in the observed run (02:22–02:32).*
2. Melee-attack the parked police car until it visibly takes damage in the footage (the observed run used melee attacks at that vehicle).
   ![Melee attack frame from the observed run](/evidence/chapter-5-challenges/melee-damage-t02429.webp)
   *Selected gameplay frame from the melee attack sequence (02:24–02:32). This frame does not establish a universal destruction threshold.*
3. Continue the run to the sewer escape route used in that session.
   ![Sewer escape used after the parked-car interaction in the observed run](/evidence/chapter-5-challenges/escape-sewer-t02434.webp)
   *Sewer escape used after the parked-car interaction in the observed run (02:34–02:40).*
4. On the post-chapter results screen in that run, Challenge 6 ("Destroy any police car before you escape") appears checked along with the other five Chapter 5 challenges.
   ![Results screen showing all six Chapter 5 challenges checked](/evidence/chapter-5-challenges/results-all-six-checked-t02442.webp)
   *Post-chapter results screen showing all six Chapter 5 challenges checked (02:42–02:46).*

Troubleshooting: what to do if a destroyed police car didn't register
1. Reproduce the verified route exactly as a controlled test: hit a parked police car at a suburban intersection with melee (as in the reviewed run), complete the escape (sewer branch in that footage), then check the post‑chapter results screen for Challenge 6. The observed sequence registered in that run.
2. Record your test (clip or capture) so you can confirm what happened and compare to the verified footage timestamps.
3. If the run still does not register Challenge 6:
   - Repeat the same tested route once more to rule out a one-off tracking failure.
   - Avoid assuming hidden requirements (e.g., smoke, explosion, a second car, or a specific car spawn location) — the single verified run does not confirm additional requirements.
   - Note that Early Access Hotfix 1 fixed several challenge-tracking issues generally, but no Chapter 5 Challenge 6‑specific fix is confirmed in the footage reviewed.
4. If multiple reproductions fail, treat the behavior as an unresolved tracking discrepancy and report it with your capture and exact steps. Provide your capture when reporting — the footage reviewed preserves uncertainty about some tracking failures.

Common mistakes to avoid
- Treating the single successful verified run as proof that every parked or moving police car will register Challenge 6. One observed sequence does not resolve competing reports.
- Checking only the in-run HUD for Challenge 6 confirmation; in the observed run the final confirmation appeared on the post‑chapter results screen.
- Assuming Early Access Hotfix 1 guaranteed all Chapter 5 challenge tracking is flawless — Hotfix 1 fixed several issues, but further fixes were still being prepared and no Challenge 6‑specific patch is confirmed.

FAQ (required / unresolved)
Q: Does destroying a moving/driving police car count the same as a parked one?
A: The available run that registered Challenge 6 used a parked police car at a suburban intersection. Competing reports about moving/driving cars, northern/train-track cars, or destroying two cars are unresolved by this single run and therefore are not confirmed requirements.

Q: If I hit a police car and nothing registers, is it definitely a bug?
A: Not necessarily. First reproduce the verified route and verify on the post‑chapter results screen. If multiple reproductions fail, file a report including capture footage — the current footage preserves uncertainty about some tracking failures.

Known unknowns / verification pending
- Exact damage/visual threshold necessary to count a destroyed police car (smoke, fire, explosion, or mere melee damage): unknown.
- Whether the car must be parked (not moving) or must be a specific spawn/location: unresolved by the single verified run.
- Whether Challenge 6 requires the car's destruction to happen before escape vs. within a specific timing window: unresolved.
- The internal Blackout range and flashlight-state implementation for Challenge 1 remain unverified.
- No second independent reproduction is present in the footage reviewed to confirm universality; additional tests are needed.

Sources
- Gameplay footage: https://www.youtube.com/watch?v=QANWfnpqRDU — timestamps used:
  - 00:09–00:25 — Challenge 1 chapter and completion card
  - 00:28–01:03 — Challenge 2 chapter and completion card
  - 01:04–01:29 — Challenge 3 chapter and completion card
  - 01:29–01:44 — Challenge 4 chapter and Fully Stalked Police cue
  - 01:49–01:59 — Challenge 5 chapter and Loomis map cue
  - 02:20–02:22 — Chapter 5 challenge list visible (supports the six challenge wordings)
  - 02:22–02:32 — parked police car at suburban intersection (context for the observed parked-car interaction)
  - 02:34–02:40 — sewer escape footage (observed escape branch in the same run)
  - 02:42–02:46 — results screen showing Challenge 6 checked (observed)
- Separate gameplay context at 02:00:40 shows the observed "Fully Stalked Police" HUD state.
- Official Early Access Hotfix 1 context: several challenge-tracking issues were fixed; a Chapter 5 Challenge 6-specific fix is not confirmed in the footage reviewed.
