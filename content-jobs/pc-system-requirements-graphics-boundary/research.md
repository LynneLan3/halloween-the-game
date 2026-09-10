# Writer Research — UPDATE `/pc/system-requirements/` graphics boundary

Source of truth: `Halloween-Graphics-FPS-Evidence-Pack-2026-09-10.md` only.
Do not research or invent extra facts.

## Intent Brief

```json
{
  "primaryQuery": "Halloween The Game system requirements",
  "queryCluster": [
    "Halloween The Game system requirements",
    "Halloween The Game PC requirements",
    "Halloween The Game minimum specs"
  ],
  "userJob": "Confirm official PC minimum and recommended specs, keep the 30 FPS store targets clear, and route graphics/FPS tuning to the dedicated performance owner.",
  "serpPromise": "Official Steam/Epic PC requirements with 1080p@30 and 4K@30 targets, plus a current-build graphics-control boundary that routes tuning to /pc/best-settings-fps/.",
  "intentOwnerStatus": "KEEP"
}
```

## Page Goal

UPDATE the existing page at `/pc/system-requirements/`.
Keep the existing URL. Do not create a new page.
Do not turn this page into a second full performance guide.

## Operation Scope

Preserve:
- Official Steam/Epic minimum and recommended requirements table and explanations
- 1080p@30 and 4K@30 official targets
- Windows 11, DX12, SSD/NVMe, storage, memory/GPU baseline
- Easy Anti-Cheat confirmation already on the page
- “No official 60 FPS hardware configuration published”
- “Stores do not publish measured benchmark results”
- Engine and controller support
- Common mistakes that remain valid
- Existing related links and sources

Replace ONLY the stale pre-launch renderer-feature boundary.

Current stale wording to remove/rewrite:
- Language that says stores do not publish optimized presets / upscaling / renderer feature support and instructs readers not to infer DLSS/FSR/ray tracing support as a blanket release-state content boundary.

New bounded state must distinguish:

OFFICIAL STORE FACT:
- Steam’s requirements do not publish a formal renderer-feature support matrix or measured benchmark set.
- Official materials still do not publish a 60 FPS hardware configuration.
- Stores still do not publish measured FPS benchmarks.

CURRENT-BUILD OBSERVED:
- Launch-build testing/player evidence shows graphics controls for Ray Tracing, upscaling, and frame-generation-related options.
- Exact availability and performance depend on hardware, driver, and build.
- Do not present these controls as an IllFonic-official support matrix.

Route tuning/troubleshooting questions to:
{{page:pc-best-settings-fps}}

Also keep/add related links:
- {{page:pc-hub}}
- {{page:steam-deck}}
- {{page:pc-best-settings-fps}}

## Must Preserve Exact Tokens

{{page:pc-hub}}
{{page:steam-deck}}
{{page:pc-best-settings-fps}}
{{page:multiplayer-crossplay}}
{{page:early-access-release-time}}

## Must Include Facts

- Minimum and Recommended specs unchanged from current official store listing.
- Minimum target remains 1080p @ 30 fps; Recommended remains 4K @ 30 fps.
- No official 60 FPS configuration is published.
- Stores do not publish measured FPS benchmarks.
- Steam requirements do not publish a formal renderer-feature support matrix.
- Current-build observed controls include Ray Tracing, upscaling, and frame-generation-related options; availability/performance vary by hardware/driver/build.
- Point readers to {{page:pc-best-settings-fps}} for best settings / FPS troubleshooting.

## Forbidden Claims

- Do not duplicate the full performance guide here.
- Do not invent FPS gains, GPU benchmark tables, best-driver advice, or universal Frame Generation support.
- Do not claim Patch 1.0.1 fixed or worsened FPS.
- Do not remove Easy Anti-Cheat, Windows 11, SSD/NVMe, or official 30 FPS target facts.
- Do not invent media.

## Sources

- https://store.steampowered.com/app/3219630/Halloween_The_Game/
- https://store.epicgames.com/p/halloween-f3e2dd
- Evidence Pack current-build graphics observations and Destructoid/Steam/Reddit corroboration for observed controls only
- Performance owner route: {{page:pc-best-settings-fps}}
