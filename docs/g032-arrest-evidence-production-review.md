# G032 Arrest Evidence Production Review

Page: `/michael-myers/how-to-arrest/`  
Date: 2026-09-06  
Scope: one real page visual-quality pass (not a shared-skill rewrite).

## Screenshots rejected (and why)

| Prior asset | Why rejected |
| --- | --- |
| All first-ship `640×360` Bryce frames | Source was yt-dlp format 18 (360p) despite listing 1080p/1440p. Soft Detain / handcuff UI. |
| All first-ship Bryce frames with intact facecam | Top-left real-person facecam competed with HUD and failed 精品 presentation. |
| First-ship D3AD frames at `640×360` | Same 360p path; Detain UI readable but not publish-grade sharpness. |
| Playwright first attempt with Auto 360p | Player stayed on Auto 360p; large display size ≠ HD stream. |
| Black / zero-dim canvas seeks | Seek without `seeked` + readyState checks produced empty or stale frames. |
| Delirious arrest banter frames (~14:50) | Talk / joke beats; no clean Detain UI for claims. |

## Final adopted sources / timestamps

| Claim | Source | Timestamp | Publish note |
| --- | --- | --- | --- |
| Police Reinforcements perk | Bryce `EN2Ik4aHgBE` | 1:45 | Facecam cropped (~32% left) |
| CB radio | Bryce | 1:30 | Facecam cropped |
| POLICE WAGON CALLED | Delirious collab `Qny8MsFE670` | 11:33 | Facecam cropped; closes prior unknown |
| A COP HAS ARRIVED | D3AD `fJsZDScSAYU` | 2:02 | No facecam; subtitle band cropped |
| Handcuff readiness | Bryce | 2:18 | Facecam cropped |
| `[E] Detain Michael` | Bryce | 2:25 | Facecam cropped + annotation |
| `[E] Detain Michael` (cross-check) | D3AD | 7:44 | No facecam; in-match grayscale |
| Detain minigame | Bryce | 2:28 | Facecam cropped |
| MICHAEL DETAINED! | Bryce | 2:38 | Facecam cropped |

Independent gameplay sources retained: Bryce + D3AD (core chain). Third source (Delirious collab) used for POLICE WAGON only.

## What facecam actually broke

- Stole first visual attention from Detain / handcuff UI on mobile.
- Made “evidence screenshot” look like a stream clip, not a mechanic proof.
- Left-edge blue LED room bleed survived a shallow 22% crop; needed ~32% left crop to fully remove.

## Resolution standard that mattered here

- Listing `1080p` on YouTube is not enough; published pixels must come from a **1080p decoded stream** (`video.videoWidth/Height`).
- Display screenshot of a 360p stream at 1344×756 still fails.
- After crop, ~1306×1080 from a true 1080p stream was acceptable for core UI.
- D3AD Detain grayscale is an in-match filter, not a capture failure; UI text must still be eye-readable.

## Real limits of automatic capture (this page)

- yt-dlp adaptive 720p/1080p for these videos returned **HTTP 403** (SABR / client gating). Format 18 (360p) still worked — and was the trap that shipped first.
- Cookies from Safari/Chrome did not unlock adaptive formats in this session.
- Reliable path here: Playwright Chrome → force player Quality **1080p** → `canvas.drawImage(video)` at native size → then crop facecam.
- Seek must wait for `seeked` + non-zero `videoWidth` + non-black sample, or frames silently stay on the wrong beat.

## Rules this page proved necessary

1. **Visual QA is part of EVIDENCE_COMPLETE**, not only claim coverage.
2. **Reject facecam by default**; crop only when critical UI survives.
3. **Measure stream resolution (`videoWidth`), not file display size.**
4. **Do not AI-upscale 360p** to fake HD.
5. **Core Arrest UI** (Detain prompt / handcuff / DETAINED) must be readable without zoom guesswork.
6. Keep **≥2 independent gameplay sources** for the detain interaction itself.

## Preferences that are not ready as shared rules

- Exact 32% left crop ratio (source-dependent).
- Always adding a third video when two already cover the claim.
- Preferring color over in-match grayscale when the grayscale frame is the clearest second source.
- Caption phrasing style (“Look for …”) — useful here, not yet a factory contract.
- Playwright-only capture as the only allowed method (yt-dlp may work in other networks/clients).
