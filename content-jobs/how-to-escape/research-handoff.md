# How to Escape Haddonfield — implementation handoff

This is the implementation record for the supplied `Research Handoff — How to Escape Haddonfield.md` and Sep 7 delta. It is not a new research pass.

## Existing Content Check

`NEW_JOB`. No independent multiplayer `/multiplayer/how-to-escape/` owner or `EVIDENCE_COMPLETE` pack exists. `single-player-growth` is a different single-player owner. `arrest-michael-myers` owns the Detain mechanic and is reused only for the alternate match-ending objective and Police Wagon HUD evidence.

## Player task

`I found this item / exit → what should I do next?` The page must connect the discovered item or exit to its next action, expected HUD/map cue, recovery when the cue is missing, resident evacuation, and a decision about whether to commit.

## Authority and boundary

- Do not repeat Web, Reddit, SERP, Steam, or competitor research.
- Official multiplayer evidence supports randomized escape options, changing item/route locations, resident safety objectives, and noise when an escape starts.
- The handoff's Cellar, Outer Gate, Sedan, Police Wagon route recipes are candidate claims until current-build gameplay prompts prove them.
- Exact capacity is conflicting and remains `UNKNOWN`; never write fixed 3/4/5.
- Missing Sedan destination markers and Cellar boards/Fire Axe failures are current-build observed reports only, not universal mechanics.
- Arrest Michael is an alternate match-ending objective linked to the existing Arrest page.

## Writer gate

`NOT_READY`: current-build evidence is missing for route-family completeness, Cellar variants, Outer Gate recipe, Sedan order, Police Wagon escape unlock, map markers, NPC evacuation behavior, and capacity. Do not invoke APIMart Writer until those evidence gaps are closed.

## Media contract

When capture is available: preserve source-native originals; do not re-encode from lossy derivatives; bind every frame to a concrete claim/state/next action; place evidence step-adjacent; use readable desktop HUD width; expose a high-resolution master; and verify production `currentSrc`, natural dimensions, rendered width, and secondary compression separately from Evidence Status.
