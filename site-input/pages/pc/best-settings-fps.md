# Halloween: The Game — Best PC Settings for Stable FPS

Quick answer
- Start at native resolution / 100% Resolution Scale, turn Motion Blur Off, and turn Ray Tracing Off (or lower it as a separate test) before changing several other settings.
- Use a 60 FPS cap as a tested stability baseline (this is a diagnostic test, not an official or guaranteed target).
- Reduce expensive visuals first: Shadows, Global Illumination, Reflections, Effects, Foliage, and Shading. Keep Anti‑Aliasing Medium, Post‑Process Medium, Textures Medium, and View Distance Medium as the tested starting baseline.
- If the GPU is the limiting component, test one supported upscaler mode at a time; do not assume it will help a CPU-bound or game-side performance problem.
- Test Frame Generation/DLSS separately — current reports show inconsistent or no-gain behavior on some systems; generated frames can add latency or artifacts and may need to be turned off if they don’t help.
- Patch 1.0.1 (Sept 8) includes crash fixes and multiple gameplay/bug fixes but does not document a broad PC FPS/optimization pass; do not assume it guarantees stable 60 FPS.
- Test one Story Mode scene and one multiplayer match separately before judging whether a change helped — some players report Story Mode can behave worse than multiplayer.

Official store hardware / FPS target context
- Steam minimum: Windows 11 64-bit; Intel LGA 1200+ / AMD AM4+ (Zen 2+); 16 GB RAM; GTX 1660+ / RX 590+ / Arc A770+; 1080p@30fps; DirectX 12; 45 GB; SSD/NVMe required.
- Steam recommended: Windows 11 64-bit; Intel LGA 1700+ / AMD AM5+; 32 GB RAM; RTX 3000 series / RX 7000 series; 4k@30fps; DirectX 12; 45 GB; SSD/NVMe required.
- IllFonic/Steam currently publish 30 FPS performance targets for minimum and recommended tiers. There is no official 60 FPS PC hardware configuration in the store requirements. (Do not infer from these entries that recommended hardware cannot exceed 30 FPS or that the listed targets were measured at native resolution or assume upscaling.)

Tested starting preset (one launch-build test configuration)
This is a tested starting preset — a good first baseline if stability matters; it comes from one current PC configuration tested by Destructoid.
- Test system: Ryzen 7 5700X, Radeon 9060 XT 16 GB, 32 GB DDR4.
- Preset values:
  - Resolution: native
  - Vsync: Off initially (test On if multiplayer lag/freezes are observed)
  - Frame Rate Limit: 60 FPS
  - Gamma: default
  - Motion Blur: Off
  - Ray Tracing: Off
  - Upscaling Method: Off initially
  - Resolution Scale: 100%
  - Upscaling Quality: Performance if upscaling becomes necessary
  - FSR Frame Generation: Off
  - Anti‑Aliasing: Medium
  - Effects: Low
  - Foliage: Low
  - Post‑Process: Medium
  - Shading: Low
  - Shadows: Low
  - Textures: Medium
  - View Distance: Medium
  - Global Illumination: Low
  - Reflections: Low
- Labeling reminder: this is one launch-build test configuration, not an official recommended set, not guaranteed to produce 60 FPS on all PCs.

Evidence-aware settings table

| Setting | Recommended starting value | Why to test it | Evidence strength |
|---|---|---|---|
| Resolution / Resolution Scale | Native / 100% | Establishes a reproducible baseline before changing upscaling. | Safer baseline |
| Motion Blur | Off | Removes a motion-related visual effect and keeps the baseline easier to compare. | Player-correlated |
| Ray Tracing | Off; test Lower only if available | Reduces a potentially expensive GPU feature before broader cuts. | Safer baseline |
| Shadows | Low | A high-cost visual setting worth testing early for GPU load and frame-time stability. | Player-correlated |
| Global Illumination | Low | Tests scene-lighting cost without claiming a fixed FPS gain. | Player-correlated |
| Reflections | Low | Tests reflection cost, which can vary by scene. | Player-correlated |
| Effects | Low | Tests particle and effect density in a controlled pass. | Player-correlated |
| Foliage | Low | Tests outdoor rendering load and scene-specific spikes. | Player-correlated |
| Shading | Low | Tests material and shading complexity. | Player-correlated |
| Anti-Aliasing | Medium | Preserves a readable image while matching the named single-system baseline. | Single-system test |
| Post-Process | Medium | Keeps a middle-quality comparison point from the single-system test. | Single-system test |
| Textures | Medium | Avoids assuming textures are the main FPS limiter; VRAM behavior varies by system. | Single-system test |
| View Distance | Medium | Preserves visibility while providing a consistent comparison point. | Single-system test |
| Upscaling Method | Off initially; test one supported mode if GPU-bound | Tests render resolution separately from other changes and may help when the GPU is the bottleneck. | Player-correlated |
| Frame Generation | Off initially; test separately | Reports show inconsistent or no-gain behavior on some systems, with possible artifacts or latency. | Player-correlated / unverified behavior |
| Frame Rate Limit | 60 FPS as a stability diagnostic | Provides one A/B stability point; it is not an official universal target. | Safer baseline |
| Vsync | Off initially; test On for tearing or multiplayer instability | Compares frame pacing and latency trade-offs without promising one universal result. | Single-system test |

Diagnostic troubleshooting order (follow this sequence; treat each step as a diagnostic test)
1. Confirm minimum build: verify Windows 11 64-bit, sufficient CPU socket generation (Intel LGA 1200+/AMD AM4+ Zen 2+ minimum), at least 16 GB RAM, and SSD/NVMe storage per the store baseline. If the PC misses the baseline, address that before deeper tuning.
2. Ray Tracing Off — turn it Off first. Ray Tracing is one of the most costly GPU features; disabling it is the safest initial cut.
3. Motion Blur Off — turn Motion Blur Off to remove a lightweight but sometimes expensive post-process effect and eliminate motion‑related rendering expense/artifacts.
4. 60 FPS cap as the first A/B stability test — set Frame Rate Limit to 60 FPS and test for stability. Treat this as a diagnostic baseline (one tested stability point), not an officially supported universal target.
5. Lower expensive visuals next (in roughly this priority): set Effects = Low, Foliage = Low, Shading = Low, Shadows = Low, Global Illumination = Low, Reflections = Low. Leave Anti‑Aliasing = Medium, Post‑Process = Medium, Textures = Medium, View Distance = Medium as the tested starting point.
6. Test native resolution / 100% Resolution Scale first if practical — try to confirm behavior at native resolution before switching to upscaling; many problems are easier to reproduce or rule out at native resolution.
7. If performance is still below your target, test one supported upscaler mode at a time (e.g., FSR or DLSS if present on your build), with Upscaling Quality set to Performance for the largest uplift. Only change one upscaler setting per test so you can measure the effect.
8. Test Frame Generation separately — enable FSR Frame Generation or DLSS Frame Generation (if shown as available) only as a separate experiment. If it does not increase displayed FPS or causes instability/artifacts, turn it back off.
9. Compare modes: run the same short Scene in Story Mode and the same-length multiplayer match to compare performance. Do not extrapolate results from only one mode; some players report Story Mode (especially early scenes/executions) can run worse than multiplayer.
10. If performance changed after a driver update, re-test with upscaling and Frame Generation disabled and verify driver state before attributing the change to Patch 1.0.1 or the game build.

Low but steady FPS

- Symptom: FPS is consistently below the player’s target, but frame delivery is otherwise steady and there are no obvious hitches.
- Follow the diagnostic order above, prioritizing GPU-costly settings and native-resolution testing. If the GPU is the limiting component, test one supported upscaler at a time.
- Some players report meaningful improvement after lowering settings to Medium or Low, while others report low FPS even at the lowest settings. There is no universal preset that guarantees a target FPS across hardware.

Stutter / hitching

- Symptom: short stalls, spikes, or uneven frame delivery even when the average FPS looks acceptable.
- Keep this separate from consistently low FPS. Test the 60 FPS cap as a frame-pacing A/B check, disable Frame Generation while isolating the problem, and compare one Story Mode scene with one multiplayer match.
- If stutter persists while Low and High perform similarly, do not promise that further slider reductions will fix it. The current evidence does not verify a single graphics-setting cause.

Crashes

- A crash-to-desktop or app close is a different problem from low FPS or stutter. This page does not claim a crash workaround; use [System requirements]({{page:pc-system-requirements}}) to confirm the official baseline and keep crash reporting separate from graphics tuning.
- Patch 1.0.1 included multiple crash fixes, but that does not establish a universal crash fix or a PC performance fix.

Lowering settings doesn't help?

- Multiple player reports, including reports from high-end GPU owners such as RTX 5080 and RTX 5090 users, still describe low FPS or stuttering at Low settings.
- If Low and High perform similarly, do not keep promising that another small settings reduction will solve the problem. This pattern may reflect a game-side optimization issue, driver interaction, or another bottleneck, but the current evidence does not verify which one.
- Reproduce the issue with the same short scene or match, test native resolution and one upscaler at a time, record the hardware/driver/build, and use that evidence for a targeted support report.

Frame Generation / DLSS current reliability boundary
- Current Steam/Reddit reports show DLSS/Frame Generation can fail to increase FPS or behave inconsistently on some systems. Treat Frame Generation as an experimental, per-system test.
- Community workarounds such as NVIDIA Smooth Motion / NVIDIA App overrides exist for some hardware, but these are experimental community approaches, not IllFonic fixes — do not make them your default recommendation.
- Generated frames can add latency and visible artifacts on some systems. Test with and without Frame Generation and judge input feel and visual integrity for your setup. If generated frames do not help displayed FPS or cause artifacts, switch them off.

Story Mode vs multiplayer testing note
- Some players report Story Mode, especially early campaign scenes and executions, running worse than multiplayer on the launch build. Test one short Story scene and one short multiplayer match separately to compare stability before concluding a change helped overall performance.
- Do not assume Story Mode always runs worse, and do not attribute Story Mode problems to a single unproven cause (e.g., rain or a confirmed engine bug) without direct evidence.

Patch 1.0.1 performance status (Sept 8)
- IllFonic’s Patch 1.0.1 lists crossplay fixes, NPC pathing, challenge/achievement tracking fixes, stamina/balance changes, escape discovery changes, various crash fixes, and multiple gameplay/bug fixes.
- Patch 1.0.1 does not list a PC performance optimization fix. It does not document a broad PC FPS optimization pass, DLSS/frame-generation fix, shader-stutter overhaul, or a general graphics setting rework. It includes crash fixes, but players should not assume the Day One Patch guarantees stable 60 FPS.

What is still unknown / not proven
- Exact FPS for any specific GPU/CPU combination.
- Exact performance gain from any single graphics setting on every system.
- Whether 60 FPS cap is universally better for every user/setup.
- Exact source of any Story Mode performance loss.
- Whether rain causes the Story Mode problems.
- Shader compilation behavior and its effect on first-run stutter.
- The best NVIDIA or AMD driver version for this build.
- DLSS Frame Generation support matrix across RTX generations.
- Whether NVIDIA Smooth Motion is stable or recommended for this game.
- Exact latency or artifact penalty of generated frames on each GPU.
- Whether FSR and DLSS can be active simultaneously in every configuration.
- Any official IllFonic statement beyond the store requirements and Patch 1.0.1 notes above.

Common mistakes to avoid
- Changing multiple upscaler/frame-generation/driver settings at once — this makes it impossible to tell what helped or hurt.
- Treating the tested starting preset as a universal recommendation — it’s one launch-build test configuration.
- Assuming Patch 1.0.1 fixed or worsened FPS without proper A/B testing (test with upscaling/FG disabled to compare).
- Leaving Ray Tracing or Motion Blur enabled while troubleshooting baseline stability.
- Extrapolating Story Mode results to multiplayer (or vice versa) without separate tests.

What happens next (practical next steps)
- Follow the Diagnostic troubleshooting order above and record results after each change.
- If a single upscaler or Frame Generation setting helps consistently, keep it enabled and re-test other visual settings to refine quality.
- If performance remains unstable across multiple tests and you meet the store baseline, follow community discussion threads for reports on your GPU/driver — but do not assume an immediate official optimization ETA.

Related links
- [PC hub]({{page:pc-hub}})
- [System requirements]({{page:pc-system-requirements}})
- [Steam Deck]({{page:steam-deck}})

FAQ
Q: Is there an official 60 FPS configuration for Halloween: The Game?
A: No. The Steam store lists 30 FPS targets for minimum and recommended hardware and does not include an official 60 FPS PC hardware configuration. A 60 FPS cap can be used as a tested stability baseline, but it is not an official guaranteed target.

Q: Did Patch 1.0.1 fix general PC FPS or DLSS/frame-generation issues?
A: Patch 1.0.1 (Sept 8) includes crossplay fixes, NPC/pathing/achievement fixes, stamina/balance changes, escape discovery changes, crash fixes, and multiple gameplay/bug fixes. IllFonic did not document a broad PC FPS/optimization pass in these notes — do not assume the patch guarantees stable 60 FPS.

Q: Should I enable Frame Generation to fix low FPS?
A: Test Frame Generation (FSR/DLSS frame-generation) separately. Current reports show it can be inconsistent and sometimes provide no gain or cause artifacts/latency. If it doesn’t improve displayed FPS or causes instability on your system, turn it off.

Q: Which settings should I reduce first to improve FPS?
A: Start by turning Ray Tracing Off and Motion Blur Off, then lower Shadows, Global Illumination, Reflections, Effects, Foliage, and Shading. Keep Anti‑Aliasing Medium, Post‑Process Medium, Textures Medium, and View Distance Medium while you evaluate the effect.

Q: Why does Story Mode feel worse than multiplayer for some players?
A: Some players report worse Story Mode performance in certain early scenes/executions on the launch build. This is a reported behavior; test Story and multiplayer separately before concluding whether a change helped. The exact cause is not proven in current evidence.

Sources
- Steam store page: https://store.steampowered.com/app/3219630/Halloween_The_Game/
- IllFonic Early Access Hotfix 1: https://halloweengame.com/news/early-access-hotfix-1/
- IllFonic announcement: https://halloweengame.com/news/halloween-the-game-out-now/
- Destructoid tested settings: https://www.destructoid.com/best-halloween-the-game-graphics-settings-for-no-lag-and-max-fps/
- Steam community discussions:  
  - https://steamcommunity.com/app/3219630/discussions/0/592940297913352954/  
  - https://steamcommunity.com/app/3219630/discussions/0/565919334592951727/  
  - https://steamcommunity.com/app/3219630/discussions/0/592940620292554950/
- Reddit reports (community performance and FG/DLSS reports):  
  - https://www.reddit.com/r/TheHalloweenGame/comments/1w79r47/the_pc_performance_is_atrocious/  
  - https://www.reddit.com/r/TheHalloweenGame/comments/1wax79l/fps_problem_on_pc/  
  - https://www.reddit.com/r/TheHalloweenGame/comments/1wbyczy/anybody_having_60_or_more_fps_on_pc/  
  - https://www.reddit.com/r/TheHalloweenGame/comments/1waxksp/dlssframe_g%C3%A9n%C3%A9ration_are_broken/  
  - https://www.reddit.com/r/TheHalloweenGame/comments/1wavcv3/just_got_the_game/  
  - https://www.reddit.com/r/TheHalloweenGame/comments/1w9wrul/anyone_else_getting_even_worse_fps_today_im_on_pc/
