# Chapter 5 Challenges — Evidence Handoff

Status: `READY_FOR_WRITER:NO`

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

## Direct verification receipt

V1 was not blind-scanned. The verified existing Chapter 5 anchors were used for two bounded current-video windows:

| Timestamp | Visible state | Result |
| --- | --- | --- |
| `01:58:30` | Officer interaction, active objective `BREAK OFF THE TRACKS` | No Challenge list, police-car destruction, Challenge 6 notification, or save receipt visible. |
| `02:00:40` | HUD displays `Fully Stalked Police` after stalking a police target | Supports only the observed police-stalk state. No Challenge list, police-car destruction, Challenge 6 notification, or save receipt visible. |

Both current captures decoded at 640×360. They are direct gameplay observations but fail publication-media requirements and cannot prove fine UI text beyond the visible state recorded above.

## Conflict boundary

The valid Challenge 6 target remains `UNKNOWN`:

- `any police car` (C1),
- `parked patrol car` (C2),
- one random car plus the north/train-track car (R1), and
- a moving/driven police car (R2)

are competing candidate descriptions, not game facts. Do not decide by repetition or majority.

## Required next evidence

Return to source discovery only for media that directly shows, in one current-build sequence:

1. Chapter 5 Challenge UI and exact Challenge 6 wording.
2. The selected police-car target before damage, including parked versus moving/driven state and location context.
3. Damage progression and visibly destroyed state.
4. The Challenge 6 completion notification/counter change.
5. Escape or chapter-end save state after the completion cue.
6. A second run if target specificity or tracking behavior remains inconsistent.

No Writer, page generation, media publication, push, or deployment is authorized by this `READY_FOR_WRITER:NO` handoff.
