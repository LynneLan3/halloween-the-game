# Writer Research — Halloween: The Game PC best settings / FPS

Source of truth: `Halloween-Graphics-FPS-Evidence-Pack-2026-09-10.md` only.
Do not research, invent, or recall extra facts outside this brief.
Do not invent screenshots, graphs, FPS gains, driver versions, or video timestamps.

## Intent Brief

```json
{
  "primaryQuery": "Halloween The Game best settings",
  "queryCluster": [
    "Halloween The Game best settings",
    "Halloween The Game best graphics settings",
    "Halloween The Game FPS fix",
    "Halloween The Game low FPS",
    "Halloween The Game stuttering",
    "Halloween The Game DLSS not working",
    "Halloween The Game frame generation not working",
    "Halloween The Game PC optimization"
  ],
  "userJob": "Stabilize Halloween: The Game PC performance with a current-build settings baseline, a diagnostic troubleshooting order, and clear Frame Generation / Story Mode boundaries.",
  "serpPromise": "One current-build PC performance owner: tested starting preset, Ray Tracing and Motion Blur first cuts, 60 FPS stability baseline, upscaling vs Frame Generation guidance, Patch 1.0.1 status, and Story vs multiplayer test notes.",
  "intentOwnerStatus": "KEEP"
}
```

## Page Goal

CREATE one dedicated canonical owner at `/pc/best-settings-fps/`.

This single page owns the graphics/FPS query cluster. Do not suggest splitting into `/fps-fix/`, `/best-graphics-settings/`, `/dlss/`, or `/frame-generation/`.

Article class: DEEP_GUIDE
Content stage: LAUNCH
Media gate: MISSING — no owned current-build settings/FPS captures. Write without fabricated media. Do not invent `[IMAGE:...]` placeholders that claim owned proof.

## Primary Intent

Halloween The Game best settings / best graphics settings / FPS fix / low FPS / stuttering / DLSS not working / Frame Generation not working / PC optimization.

## Player Task

Improve unstable or low PC FPS using a bounded diagnostic settings path for the current launch build, without treating any one preset as official or universal.

## Article Type

DEEP_GUIDE / troubleshooting settings guide

## Required Page Structure

1. Quick Answer / first useful block (must communicate the substance below)
2. Official hardware / FPS target context (30 FPS store targets; no official 60 FPS config)
3. Tested starting preset (labeled correctly)
4. Diagnostic troubleshooting order
5. Frame Generation / DLSS current reliability boundary
6. Story Mode vs multiplayer testing note
7. Patch 1.0.1 performance status
8. What is still unknown / not proven
9. Related links using exact tokens below
10. FAQ
11. Sources

## Quick Answer Must Communicate (substance, not keyword stuffing)

- Ray Tracing Off is the safest first performance cut.
- Motion Blur Off.
- A 60 FPS cap is a tested stability baseline, not an official or guaranteed target.
- Lower Shadows, Global Illumination, Reflections, Effects, Foliage and Shading before aggressively cutting Textures/View Distance.
- If performance is still poor, test supported upscaling deliberately.
- Do not assume Frame Generation will fix low FPS; current reports show inconsistent/no-gain behavior on some systems.
- Patch 1.0.1 includes crash fixes but does not document a broad PC FPS optimization fix.
- Some players report Story Mode running worse than multiplayer, so test both separately.

## Must Include Facts

### Official store targets
- Steam minimum: Windows 11 64-bit; Intel LGA 1200+ / AMD AM4+ (Zen 2+); 16 GB RAM; GTX 1660+ / RX 590+ / Arc A770+; 1080p@30fps; DirectX 12; 45 GB; SSD/NVMe required.
- Steam recommended: Windows 11 64-bit; Intel LGA 1700+ / AMD AM5+; 32 GB RAM; RTX 3000 series / RX 7000 series; 4k@30fps; DirectX 12; 45 GB; SSD/NVMe required.
- IllFonic/Steam currently publish 30 FPS performance targets for minimum and recommended tiers.
- There is no official 60 FPS PC hardware configuration in the store requirements.
- Do not infer that recommended hardware cannot exceed 30 FPS, or that listed targets were measured at native resolution, or that they assume/do not assume upscaling.

### Patch 1.0.1
- IllFonic’s September 8 Patch 1.0.1 lists crossplay fixes, NPC pathing, challenge/achievement tracking fixes, stamina/balance changes, escape discovery changes, various crash fixes, and multiple gameplay/bug fixes.
- It does not advertise a general PC optimization pass, FPS fix, DLSS fix, frame-generation fix, shader-stutter fix, or graphics-setting overhaul.
- Safe claim: Patch 1.0.1 includes crash fixes, but IllFonic did not document a broad PC FPS/optimization fix in these notes.
- Players should not assume the Day One Patch guarantees stable 60 FPS.
- Do NOT say Patch 1.0.1 made performance worse, or that it fixed performance.

### Current-build observed graphics controls
Treat as CURRENT-BUILD OBSERVED evidence, not an IllFonic-official feature matrix:
- Launch-build settings menu documented in Destructoid testing includes: native resolution, Vsync, Frame Rate Limit, Motion Blur, Ray Tracing, Upscaling Method, Resolution Scale, Upscaling Quality, FSR Frame Generation, Anti-Aliasing, Effects, Foliage, Post-Process, Shading, Shadows, Textures, View Distance, Global Illumination, Reflections.
- Current Steam/Reddit reports additionally reference DLSS / DLAA, Ray Tracing, Ray Reconstruction, FSR, FSR Frame Generation, and later reports of DLSS frame-generation controls.
- Exact available options can vary by GPU/vendor/driver/build.
- Do not promise DLSS Frame Generation availability on every NVIDIA GPU.

### Tested starting preset (Destructoid — one named test configuration)
Test system: Ryzen 7 5700X, Radeon 9060 XT 16 GB, 32 GB DDR4.

Preset values:
- Resolution: native
- Vsync: Off initially; test On if multiplayer lag/freezes are observed
- Frame Rate Limit: 60 FPS
- Gamma: default
- Motion Blur: Off
- Ray Tracing: Off
- Upscaling Method: Off initially
- Resolution Scale: 100%
- Upscaling Quality: Performance if upscaling becomes necessary
- FSR Frame Generation: Off
- Anti-Aliasing: Medium
- Effects: Low
- Foliage: Low
- Post-Process: Medium
- Shading: Low
- Shadows: Low
- Textures: Medium
- View Distance: Medium
- Global Illumination: Low
- Reflections: Low

REQUIRED LABELING:
- Call it a “tested starting preset” / “good first baseline if stability matters” / “one launch-build test configuration”.
- MUST NOT call it official recommended settings, best for every PC, guaranteed 60 FPS, “these settings add X% FPS”, or “60 FPS is the game’s official cap”.
- The source’s “above 60 seems to stutter” observation is one test result, not a universal game rule. You may mention it only as that one test observation, not as a game-wide rule.

### Low-FPS / hardware inconsistency
- Launch PC performance is inconsistent across hardware.
- High-end GPU ownership does not guarantee stable high FPS.
- Current Steam/Reddit reports include performance problems across multiple GPU tiers (examples may be mentioned as community reports only, never as expected FPS tables).
- Do NOT create RTX 3060 / 4070 / 5070 / 5090 benchmark tables, expected-FPS calculators, or universal GPU-tier FPS promises.

### Story Mode boundary
Allowed:
- Some players report Story Mode, especially early campaign scenes and executions, running worse than multiplayer.
- Test Story and multiplayer separately before judging whether a settings change helped.
Forbidden:
- Story Mode always runs worse.
- Rain is confirmed as the cause.
- Executions have a confirmed specific engine bug.

### Frame Generation boundary
Allowed:
- Current Steam/Reddit reports show DLSS/Frame Generation can fail to increase FPS or behave inconsistently.
- NVIDIA Smooth Motion / NVIDIA App overrides exist as experimental community workarounds for some hardware.
Required caveats:
- Hardware/support varies.
- Generated frames can add latency/artifacts.
- Community workaround is not an IllFonic fix.
- Do not make Frame Generation or Smooth Motion the default recommendation.
Forbidden:
- “Frame Generation is broken for everyone”
- “Smooth Motion fixes Halloween”
- “x6 gives X% more FPS”
- Support claims across all RTX generations
- Generated frames equal better input latency or real rendered FPS

### Driver / sudden regression anecdote
Allowed:
- If performance suddenly changes after a GPU driver update, compare with upscaling disabled and check driver state before attributing the change to Patch 1.0.1.
Forbidden:
- Prescribing a specific driver version
- Driver rollback as a standard fix
- “Patch 1.0.1 broke FPS”

## Required Troubleshooting Order

Structure the practical guide around this diagnostic sequence. Frame each step as diagnostic, not a guaranteed fix:

1. Confirm the PC meets or exceeds the official store baseline (hardware/storage/OS).
2. Turn Ray Tracing Off.
3. Turn Motion Blur Off.
4. Use a 60 FPS cap as the first A/B stability test.
5. Lower expensive visuals: Effects Low, Foliage Low, Shading Low, Shadows Low, Global Illumination Low, Reflections Low; keep Anti-Aliasing Medium, Post-Process Medium, Textures Medium, View Distance Medium as the tested starting point.
6. Test native resolution / 100% scale first if practical.
7. If still below the desired target, test one supported upscaler mode at a time.
8. Test Frame Generation separately; if it does not improve displayed FPS or causes instability/artifacts, turn it back off.
9. Compare one Story Mode scene and one multiplayer match; do not extrapolate from only one mode.
10. If performance changed suddenly after a driver update, test with upscaling/FG disabled and verify driver state before blaming Patch 1.0.1.

## Must Preserve Exact Tokens

{{page:pc-hub}}
{{page:pc-system-requirements}}
{{page:steam-deck}}

## Related Links

- PC hub: {{page:pc-hub}}
- System requirements: {{page:pc-system-requirements}}
- Steam Deck: {{page:steam-deck}}

## Forbidden Claims

- Per-GPU benchmark tables or invented FPS gains
- Invented “best driver”
- Universal 60 FPS guarantee
- Universal Frame Generation support
- Shader-compilation claims
- Confirmed rain causation
- Official optimization ETA
- Exact performance gain from any individual setting
- Whether 60 FPS cap is universally better
- Exact source of Story Mode performance loss
- Exact latency/artifact penalty of generated frames
- Whether FSR/DLSS can be active simultaneously in every current configuration
- Official IllFonic DLSS/FSR/Ray Tracing support statement
- Fabricated screenshots, graphs, or video timestamps

## Known Unknowns / Keep Out Of Verified Prose Or Clearly Label

- Exact FPS for each GPU/CPU combination
- Exact performance gain from any individual setting
- Whether 60 FPS cap is universally better
- Exact source of Story Mode performance loss
- Rain as confirmed cause
- Shader compilation behavior
- Best NVIDIA/AMD driver
- DLSS Frame Generation support matrix across RTX generations
- Whether NVIDIA Smooth Motion is stable/recommended for this game
- Exact latency/artifact penalty of generated frames
- Whether FSR/DLSS can be active simultaneously in every configuration
- Official DLSS/FSR/Ray Tracing support statement from IllFonic
- Any official PC optimization ETA

## Media

Media gate is MISSING. Do not invent owned screenshots or graphs.
Enhancement backlog exists separately; do not claim owned captures exist.

## Unique Contribution

Combine:
1. Official 30 FPS hardware targets
2. Launch/current-build tested baseline
3. Current Patch 1.0.1 status
4. Low-FPS/stutter troubleshooting order
5. DLSS / Frame Generation current reliability boundary
6. Story-vs-multiplayer test guidance
7. Explicit what-is-not-proven section

## Sources

Official:
- https://store.steampowered.com/app/3219630/Halloween_The_Game/
- https://halloweengame.com/news/halloween-the-game-out-now/
- https://halloweengame.com/news/early-access-hotfix-1/

Independent tested settings:
- https://www.destructoid.com/best-halloween-the-game-graphics-settings-for-no-lag-and-max-fps/

Steam community:
- https://steamcommunity.com/app/3219630/discussions/0/592940297913352954/
- https://steamcommunity.com/app/3219630/discussions/0/565919334592951727/
- https://steamcommunity.com/app/3219630/discussions/0/592940620292554950/

Reddit:
- https://www.reddit.com/r/TheHalloweenGame/comments/1w79r47/the_pc_performance_is_atrocious/
- https://www.reddit.com/r/TheHalloweenGame/comments/1wax79l/fps_problem_on_pc/
- https://www.reddit.com/r/TheHalloweenGame/comments/1wbyczy/anybody_having_60_or_more_fps_on_pc/
- https://www.reddit.com/r/TheHalloweenGame/comments/1waxksp/dlssframe_g%C3%A9n%C3%A9ration_are_broken/
- https://www.reddit.com/r/TheHalloweenGame/comments/1wavcv3/just_got_the_game/
- https://www.reddit.com/r/TheHalloweenGame/comments/1w9wrul/anyone_else_getting_even_worse_fps_today_im_on_pc/
