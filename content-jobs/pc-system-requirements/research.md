# Writer Research Brief: Halloween PC System Requirements

## Page Goal

Update the existing page:
https://www.halloweengameguide.wiki/pc/system-requirements/

Keep the existing URL. Do not create a new page.
Do not split into multiple pages yet.

Primary intent: **Halloween: The Game system requirements / PC requirements**

---

## Current Search Performance

Observed GSC signal:

- 34 impressions / 0 clicks
- avg position 6.94
- page is growing quickly

Decision: keep one page for now; do not split.

---

## Primary Intent

Halloween: The Game system requirements

### Secondary Intents

- Halloween: The Game PC requirements
- Minimum vs Recommended specs
- Windows 11 / SSD / storage / Easy Anti-Cheat PC requirements

Do NOT dilute with Steam Deck as a main body section. Steam Deck may appear only as a natural related link.

---

## Official Specs (Steam + Epic — currently identical)

### Minimum

- OS: Windows 11 64-bit
- CPU: Intel LGA 1200+ / AMD AM4+
- Memory: 16 GB RAM
- GPU: GTX 1660+ / RX 590+ / Arc A770+
- Performance target: 1080p @ 30 fps
- API: DirectX 12
- Storage: 45 GB SSD/NVMe
- Network: Broadband Internet (listed on Steam)

### Recommended

- OS: Windows 11 64-bit
- CPU: Intel LGA 1700+ / AMD AM5+
- Memory: 32 GB RAM
- GPU: RTX 3000 series / RX 7000 series
- Performance target: 4K @ 30 fps
- API: DirectX 12
- Storage: 45 GB SSD/NVMe

Steam currently confirms:

- Kernel Level Easy Anti-Cheat
- Easy Anti-Cheat requires manual removal after uninstall

Steam and Epic currently publish the same specs. Do not infer that measured performance is identical across storefront builds.

Sources:

- https://store.steampowered.com/app/3219630/Halloween_The_Game/
- https://store.epicgames.com/p/halloween-f3e2dd

---

## Must State Clearly

- Official materials do **not** publish a 60 FPS configuration.
- Windows 10 is **not** listed in the current requirements.
- SSD/NVMe is required — do not imply a normal HDD meets the requirement.
- CPU wording is platform/socket wording (LGA 1200+, AM4+, LGA 1700+, AM5+) — do not convert into specific i5/Ryzen model numbers.
- Steam/Epic published specs currently match, but do not claim verified identical real-world performance across storefronts.

---

## Required Update Direction

The writer should update:

- SEO title (as H1 / page title promise)
- Meta description (include in a short lead or Quick Answer framing if the existing source has no YAML frontmatter; if returning body-only Markdown, put the title promise in the H1 and keep description intent covered by Quick Answer)
- H1
- Above-fold Quick Answer
- Body structure below

Title target:

Halloween: The Game System Requirements — Minimum & Recommended PC Specs

Keep “Halloween: The Game System Requirements” near the front.

Do not use: Ultimate Guide, Complete Guide.

Description target — cover:

- Minimum and Recommended PC specs
- Windows 11
- SSD/NVMe
- Easy Anti-Cheat confirmation
- What is still not confirmed (60 FPS / benchmarks)

Quick Answer must answer immediately:

- Minimum and Recommended headline specs
- Official targets are 1080p30 (minimum) and 4K30 (recommended)
- No official 60 FPS config is published
- Windows 11 + SSD/NVMe + Easy Anti-Cheat as key PC requirements

Required body structure:

1. Quick Answer
2. Minimum vs Recommended comparison table
3. What the minimum specs mean
4. What the recommended specs mean
5. Windows 11 / SSD / 45GB / EAC PC requirements
6. What is NOT confirmed (60 FPS, graphics preset, actual benchmarks)
7. Related link to Steam Deck only (short, not a main section)
8. Sources

Existing useful confirmed items that may remain if still accurate:

- Unreal Engine 5
- Full controller support

Remove or replace the old “Anti-cheat — provisional” framing. EAC is now confirmed on Steam, including kernel-level and manual-removal notes.

Do not change the URL.

---

## Source Rules

Sources must use Markdown links:

- [Halloween: The Game on Steam](https://store.steampowered.com/app/3219630/Halloween_The_Game/)
- [Halloween: The Game on Epic Games Store](https://store.epicgames.com/p/halloween-f3e2dd)

Do not invent new URLs.

Internal tokens must appear exactly, inside natural Markdown links where used:

{{page:steam-deck}}
{{page:pc-hub}}

Do not append research-brief headings or token lists to the final page.

The existing formal source has **no YAML frontmatter**. Match that format: return Markdown body only (H1 + body). Do not invent a frontmatter block.

## Must Preserve Exact Tokens

{{page:steam-deck}}
{{page:pc-hub}}

## Must Include Facts

- Minimum specs include Windows 11 64-bit, 16 GB RAM, GTX 1660+ / RX 590+ / Arc A770+, 1080p @ 30 fps, DirectX 12, and 45 GB SSD/NVMe.
- Recommended specs include Windows 11 64-bit, 32 GB RAM, RTX 3000 series / RX 7000 series, 4K @ 30 fps, DirectX 12, and 45 GB SSD/NVMe.
- CPU requirements are listed as Intel LGA 1200+ / AMD AM4+ (minimum) and Intel LGA 1700+ / AMD AM5+ (recommended).
- Steam lists Broadband Internet on the minimum requirements.
- Steam confirms Kernel Level Easy Anti-Cheat and that Easy Anti-Cheat requires manual removal after uninstall.
- Steam and Epic currently publish matching system requirements.
- No official 60 FPS configuration is published.

## Forbidden Claims

- Do not publish an official 1080p60 or other 60 FPS configuration.
- Do not invent DLSS, FSR, or ray tracing support.
- Do not invent specific CPU model numbers (for example i5 / Ryzen SKUs).
- Do not publish actual FPS benchmarks.
- Do not describe Easy Anti-Cheat as provisional or unverified.
- Do not claim Windows 10 is supported.
- Do not imply a normal HDD meets the storage requirement.
- Do not claim Steam and Epic builds have identical measured performance.
