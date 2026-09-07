# Chapter 5 Challenges — Evidence Handoff

Status: `READY_FOR_WRITER:YES`

V4 status: `FAST_VERIFIED`.

Target player task: diagnose why destroying a police car did not complete Chapter 5 Challenge 6. This is a troubleshooting-first evidence task, not a generic list of six challenges.

## Existing evidence reuse

`content-jobs/single-player-growth/` is inherited only for Story Mode context:

- V1 (`SR3vu4G0t1Q`) has a prior Chapter 5 police/search anchor at `01:58:30`.
- Its independently captured V1 window at `02:00:40` visibly shows the HUD state `Fully Stalked Police` after an officer interaction. This is direct gameplay observation, not a Challenge 4 completion receipt.
- The existing independent Main Wave Story run has already captured `FIND A WAY TO ESCAPE HADDONFIELD` (`01:18:05`) and `DISCOVER TRAIN TRACKS ESCAPE` (`01:20:40`). It establishes a run-scoped escape branch only; it does not establish Challenge 6.

No existing Chapter 5 Challenges owner or page was found. No page source is created while the central answer remains unresolved.

## Source registry

| ID | Role | Source | Permitted use |
| --- | --- | --- | --- |
| `o1-hotfix-1` | `OFFICIAL_BUILD_BOUNDARY` | https://halloweengame.com/news/early-access-hotfix-1/ | Hotfix 1 fixed several challenge-tracking issues; further fixes were still being prepared. No Chapter-5-specific conclusion. |
| `c1-destructoid-c5` | `COMPETITOR_CANDIDATE` | https://www.destructoid.com/all-chapter-5-challenges-in-halloween-the-game-and-how-to-complete-them/ | Candidate six-challenge list and `any police car` recipe only. |
| `c2-allthingshow-c5` | `COMPETITOR_CORROBORATION` | https://allthings.how/halloween-the-game-how-to-complete-every-chapter-5-challenge/ | Candidate list and `parked patrol car` recipe only. |
| `c3-steam-shakes-c5` | `COMPETITOR_CONFLICT` | https://steamcommunity.com/app/3219630/guides/ | A current guide summary calls Chapter 5 Challenge 6 movie-accurate. This conflicts with the two lists and cannot establish wording. |
| `r1-police-car-failure` | `COMMUNITY_CANDIDATE` | https://www.reddit.com/r/TheHalloweenGame/comments/1w89l64/trouble_with_challenge/ | Candidate hypotheses: random car may not register; two cars or the north/train-track car may be relevant; tracking may be inconsistent. |
| `r2-moving-car-claim` | `PRIORITY_CONFLICT` | https://www.reddit.com/r/TheHalloweenGame/comments/1w97b44/officer_hawkins_tell_me_what_happened_in_here/ | Candidate claim that the driven car is required. It conflicts with every other candidate. |
| `v1-mkiceandfire` | `PRIMARY_DIRECT_GAMEPLAY` | https://www.youtube.com/watch?v=SR3vu4G0t1Q | Targeted Chapter 5 inspection only. Current metadata: public, 8035 seconds; currently downloadable stream is 640×360/30fps. |
| `v2-shirrako` | `SECONDARY_DIRECT_GAMEPLAY` | https://www.youtube.com/watch?v=lbFsmgPv1zU | Current metadata: public, 4917 seconds; currently downloadable stream is 640×360/30fps; no chapters or subtitles, so no safe Chapter 5 locator. |
| `v3-rabidretrospectgames` | `TERTIARY_DIRECT_GAMEPLAY` | https://www.youtube.com/watch?v=IdFo547v_9w | Checked only after V1/V2 remained unresolved. Current metadata: public, 17845 seconds; currently downloadable stream is 640×360/30fps; no chapters or usable subtitles, so no safe Chapter 5 locator. |
| `v4-deere-ch5-challenges` | `PRIMARY_DIRECT_GAMEPLAY` | https://www.youtube.com/watch?v=QANWfnpqRDU | Dedicated Chapter 5 Challenges source. Public, 166 seconds, actual maximum video stream 3840×2160/30fps; English automatic captions available (`en-orig` downloaded; `en` endpoint returned HTTP 429); seven chapters including Challenge 6 at 02:20. Description identifies the six challenges and says police cars are stationed around the suburbs, melee attacks demolish them, then completing the level yields the challenge. |

## Direct verification receipt

V1 was not blind-scanned. The verified existing Chapter 5 anchors were used for two bounded current-video windows:

| Timestamp | Visible state | Result |
| --- | --- | --- |
| `01:58:30` | Officer interaction, active objective `BREAK OFF THE TRACKS` | No Challenge list, police-car destruction, Challenge 6 notification, or save receipt visible. |
| `02:00:40` | HUD displays `Fully Stalked Police` after stalking a police target | Supports only the observed police-stalk state. No Challenge list, police-car destruction, Challenge 6 notification, or save receipt visible. |

Both current captures decoded at 640×360. They are direct gameplay observations but fail publication-media requirements and cannot prove fine UI text beyond the visible state recorded above.

## V4 direct verification receipt

V4 is a dedicated 2:46 Chapter 5 Challenges video, so only the chapter windows and immediate result transition were inspected:

| Timestamp | Visible / indexed state | Result |
| --- | --- | --- |
| `02:20-02:22` | Chapter 5 results/list screen shows all six cards. Challenge 1: `Use Blackout to disable 2 cop flashlights at once.` Challenge 2: `Kill a Cop with a Pitchfork Execution.` Challenge 3: `Kill at least 3 other Residents before escaping.` Challenge 4: `Fully Stalk any police in the Wallace's house.` Challenge 5: `Escape without Loomis detecting you.` Challenge 6: `Destroy any police car before you escape.` | Direct current-build six-card UI evidence. |
| `02:22-02:32` | A police-marked patrol car is stationary at a suburban street intersection beside a stop sign/house frontage. The player repeatedly hits it with a melee weapon. No earlier destroyed police car is shown; this is the only shown target. | Supports a working parked-car sequence. Does not prove parked is the only valid target. |
| `02:32-02:34` | The car melee sequence ends and the edit transitions to the sewer escape interaction. No clear smoke/fire/explosion or in-run Challenge 6 notification is visible. | Destruction state and completion timing remain bounded UNKNOWN. |
| `02:34-02:40` | The player performs `ESCAPE THROUGH THE SEWER`. | Supports escape after the shown car sequence. |
| `02:42-02:46` | Chapter 5 results screen shows all six cards checked, including Challenge 6. | Post-escape result/completion evidence; it does not distinguish completion-at-destruction from save-at-escape. |

V4 exact-source metadata: actual source-native `3840×2160/30fps`, 166 seconds, no creator-authored subtitle track, English automatic-caption track available, chapters at `00:00`, `00:09`, `00:28`, `01:04`, `01:29`, `01:49`, and `02:20`; description includes the same six challenge descriptions and timestamps. Publication captures are under `content-jobs/chapter-5-challenges/video-evidence/v4/`; only claim-specific native-resolution frames are selected.

## Conflict boundary

The universal valid Challenge 6 target remains `UNKNOWN`, while V4 directly supports one route:

- `any police car` (C1),
- `parked patrol car` (C2),
- one random car plus the north/train-track car (R1), and
- a moving/driven police car (R2)

are competing candidate descriptions, not universal game facts. V4 supports the narrower statement: `A parked police car can count in the shown sequence.` It does not test moving/driven, north/train-track, or two-car alternatives, and it provides no failed comparison run.

Destruction boundary: V4 shows intact police-car context, repeated melee hits, and then a post-escape results screen with Challenge 6 checked. It does not visibly establish `smoking` versus `explosion/final destroyed state`, nor whether the check is awarded immediately or only persisted at escape.

## Required next evidence

Return to source discovery only for media that directly shows, in one current-build sequence:

1. Chapter 5 Challenge UI and exact Challenge 6 wording.
2. The selected police-car target before damage, including parked versus moving/driven state and location context.
3. Damage progression and visibly destroyed state.
4. The Challenge 6 completion notification/counter change.
5. Escape or chapter-end save state after the completion cue.
6. A second run if target specificity or tracking behavior remains inconsistent.

## Final V4 gate

`READY_FOR_WRITER:YES`.

Reason: V4 supplies the six exact UI wordings, Challenge 6 wording, one verified successful parked-car route, escape context, and a post-escape checked result at publication-grade source resolution. Universal vehicle mechanics, exact destruction threshold, and completion-versus-save timing remain UNKNOWN and must stay bounded in the article. Do not seek V5 in this task.

Writer and page publication are authorized by this `READY_FOR_WRITER:YES` handoff. Keep the article limited to the verified route and the stated UNKNOWN boundaries; do not expand to new source research or a new V5.
