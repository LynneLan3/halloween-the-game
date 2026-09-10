---
title: "Halloween: The Game System Requirements — Minimum & Recommended PC Specs"
description: "Minimum and Recommended PC specs for Halloween: The Game: Windows 11, SSD/NVMe, Easy Anti-Cheat, 1080p30 / 4K30 store targets, and current-build graphics-control routing."
category: pc-guides
slug: pc/system-requirements
status: needs-verification
featured: true
role: core
assetType: article
sidebar:
  order: 2
intents:
  - system-requirements
  - pc-requirements
quickAnswer: "Minimum: Windows 11 64-bit, 16 GB RAM, GTX 1660+ / RX 590+ / Arc A770+, 1080p @ 30 fps, DirectX 12, 45 GB SSD/NVMe. Recommended: 32 GB RAM, RTX 3000 / RX 7000 series, 4K @ 30 fps. Steam confirms Kernel Level Easy Anti-Cheat. No official 60 FPS config is published. For Ray Tracing / upscaling / FPS tuning, see the best settings guide."
relations:
  -
    slug: pc
    type: related
  -
    slug: pc/best-settings-fps
    type: next-step
  -
    slug: steam-deck
    type: next-step
cover: ../../../../assets/covers/gameplay/extended-first-look.jpg
coverMedia:
  alt: "Haddonfield street at night in Halloween: The Game"
  kind: cover
  aspectRatio: 16:9
  sourceLabel: Official
changeSummary: "Post-launch UPDATE — separate official store facts from current-build observed graphics controls; route FPS tuning to best-settings-fps."
eyebrow: System Requirements
facts:
  -
    label: Minimum
    value: "Windows 11 64-bit, 16 GB RAM, GTX 1660+ / RX 590+ / Arc A770+, 1080p @ 30 fps, 45 GB SSD/NVMe"
  -
    label: Recommended
    value: "Windows 11 64-bit, 32 GB RAM, RTX 3000 / RX 7000 series, 4K @ 30 fps, 45 GB SSD/NVMe"
  -
    label: Easy Anti-Cheat
    value: "Steam confirms Kernel Level Easy Anti-Cheat; manual removal required after uninstall"
  -
    label: Not published
    value: "No official 60 FPS configuration; Windows 10 is not listed"
---
<!--
  This file is generated from site-spec.yaml.
  Do not edit directly.
  Run npm run site:generate instead.
  Source: site-input/pages/pc/system-requirements.md
-->
# Halloween: The Game System Requirements — Minimum & Recommended PC Specs

Quick answer
- Minimum (headline): Windows 11 64-bit, Intel LGA 1200+ / AMD AM4+ CPU sockets, 16 GB RAM, NVIDIA GTX 1660+ / AMD RX 590+ / Intel Arc A770+ GPU, DirectX 12, 45 GB — SSD/NVMe required. Official performance target: 1080p @ 30 fps.
- Recommended (headline): Windows 11 64-bit, Intel LGA 1700+ / AMD AM5+ CPU sockets, 32 GB RAM, NVIDIA RTX 3000 series / AMD RX 7000 series GPU, DirectX 12, 45 GB — SSD/NVMe required. Official performance target: 4K @ 30 fps.
- Important note on renderer features and controls: Official store pages do not publish a renderer-feature support matrix or measured FPS benchmarks. However, launch-build testing and player reports show in-game graphics controls for Ray Tracing, upscaling, and frame-generation–related options; exact availability and performance depend on hardware, driver, and build. For tuning and troubleshooting (settings, FPS, and performance guidance) see [Best PC Settings / FPS](/pc/best-settings-fps/).

Minimum vs Recommended (official store specs)

| Spec | Minimum | Recommended |
| --- | ---: | ---: |
| OS | Windows 11 64-bit | Windows 11 64-bit |
| CPU (store wording) | Intel LGA 1200+ / AMD AM4+ | Intel LGA 1700+ / AMD AM5+ |
| Memory | 16 GB RAM | 32 GB RAM |
| GPU | NVIDIA GTX 1660+ / AMD RX 590+ / Intel Arc A770+ | NVIDIA RTX 3000 series / AMD RX 7000 series |
| Performance target | 1080p @ 30 fps | 4K @ 30 fps |
| API | DirectX 12 | DirectX 12 |
| Network | Broadband internet connection (listed on Steam) | — |
| Storage | 45 GB — SSD / NVMe required | 45 GB — SSD / NVMe required |

[IMAGE: Steam store system requirements panel screenshot]

What the minimum specs mean
1. The minimum column is the official baseline on the store pages: Windows 11 64-bit, socket-level CPU wording (Intel LGA 1200+ / AMD AM4+), 16 GB RAM, the listed GTX 1660+/RX 590+/Arc A770+ class GPUs, DirectX 12, and 45 GB on an SSD/NVMe drive.
2. The listed performance target for minimum hardware is 1080p at 30 frames per second (1080p @ 30 fps) — this is the store’s stated target, not an independent benchmark.
3. Steam’s minimum requirements also list Broadband Internet.

What the recommended specs mean
1. The recommended column is the store’s guidance for higher-fidelity play: Windows 11 64-bit, newer CPU sockets (Intel LGA 1700+ / AMD AM5+), 32 GB RAM, RTX 3000 / RX 7000 class GPUs, DirectX 12, and the same 45 GB SSD/NVMe requirement.
2. The recommended performance target listed on the stores is 4K @ 30 fps. No higher-refresh official configuration is published.

Windows 11, SSD/NVMe, 45 GB, and Easy Anti-Cheat (EAC)
- OS: Windows 11 64-bit is the only OS listed in the official store requirements. Windows 10 is not listed.
- Storage: The store text specifies 45 GB and explicitly requires an SSD / NVMe. Do not assume a standard mechanical HDD meets the storage requirement.
- Anti-cheat: Steam’s store page confirms Easy Anti-Cheat at kernel level for the PC build and notes that Easy Anti-Cheat requires manual removal after uninstall. Treat EAC as an active, confirmed part of the PC build per Steam’s listing.
- Network: Steam lists Broadband Internet as part of the minimum requirements.

Official store facts vs current-build observations
- Official store facts
  - Steam and Epic store pages do not publish a formal renderer-feature support matrix.
  - The stores do not publish measured FPS benchmark results.
  - The stores do not publish any official 60 FPS hardware configuration (no official 1080p@60 or 4K@60 configuration is listed).
- Current-build observed (launch / player testing)
  - Launch-build testing and community reports show in-game graphics controls for Ray Tracing, upscaling, and frame-generation–related options are present in the current build.
  - Exact availability, naming, and performance of those options depend on your hardware, GPU driver, and the current game build.
  - Do not treat the observed in-game controls as an official store-side support matrix or definitive compatibility statement.

If you want to tune graphics or troubleshoot FPS, go to [Best PC Settings / FPS](/pc/best-settings-fps/) for the dedicated performance and settings guide — this page does not duplicate that troubleshooting guidance.

Engine and controller support (confirmed on store)
- Built on Unreal Engine 5.
- Full controller support is listed.

Common mistakes
- Assuming Windows 10 is supported — the official requirements list Windows 11 only.
- Installing to or relying on a mechanical HDD — the stores require SSD/NVMe for the 45 GB install.
- Expecting an official 60 FPS or higher-refresh configuration — none is published.
- Treating Easy Anti-Cheat as optional or provisional — Steam lists EAC at kernel level and notes manual removal after uninstall.
- Assuming the presence of in-game options equals an official, store-published compatibility matrix — observed controls vary by build and hardware.

What happens next / verification
- The official store pages (Steam and Epic) are the authoritative baseline for requirements; check them for updates. The stores currently match on system requirements, but measured performance, option availability, and configuration changes can appear in later patches or developer notes.
- For performance tuning, driver notes, and step-by-step troubleshooting, follow the dedicated performance guide at [Best PC Settings / FPS](/pc/best-settings-fps/).
- Related pages: [PC hub](/pc/), [Steam Deck checklist](/steam-deck/), [crossplay guide](/multiplayer/crossplay/), [Advance Access timing](/early-access-release-time/), and the performance tuning guide [Best PC Settings / FPS](/pc/best-settings-fps/).

Sources
- [Halloween: The Game on Steam](https://store.steampowered.com/app/3219630/Halloween_The_Game/)
- [Halloween: The Game on Epic Games Store](https://store.epicgames.com/p/halloween-f3e2dd)
