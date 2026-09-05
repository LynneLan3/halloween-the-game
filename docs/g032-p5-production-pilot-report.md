# G032 P5 Production Pilot Report — Haddonfield Heights

Date: 2026-09-06  
Branch: `cursor/site-2-0-shell-migration`  
Commit deployed: `c2f6633e7d6fb5c58089eb3016a54f9dcf646ccf`  
Page pack: `content-jobs/haddonfield-heights-g032-p4/`

## Production URL

https://www.halloweengameguide.wiki/maps/haddonfield-heights/

## Deployment

| Field | Value |
| --- | --- |
| Result | `PUBLISH_COMPLETE` |
| Deployment | `dpl_7CzXzeTugnzLpsHpSrgPxJC9upwV` |
| Deployment URL | https://halloween-the-game-guide-b3en8e483-lynnelan3s-projects.vercel.app |
| Alias | https://www.halloweengameguide.wiki |
| IndexNow | PASS (4 URLs) |
| Ledger writeback | PASS |
| BatchID | `halloween-the-game\|g032-p5-heights\|20260906` |
| Receipt | `docs/publish-receipts/g032-p5-haddonfield-heights-20260906.json` |

Publisher used: existing `npm run publish:production` (no shared-dev-skills / ai-work-rules edits).

## Readiness

| Gate | Status |
| --- | --- |
| Pack readiness | **FAST_VERIFIED** (unchanged) |
| EVIDENCE_COMPLETE upgrade | **Not applied** |
| Video role (cl-hh-003) | `SUPPORTING_VISUAL` |
| Open HUMAN_CAPTURE_TASK | none (DONE) |
| Blocking UNKNOWN claim | `cl-hh-004` (spawns / fixed escapes / official top-down map) |

Stronger real frame exists at IllFonic flythrough ~0:42 (visible Haddonfield water tower lettering) under shared-dev-skills P3 artifacts. It does **not** clear `cl-hh-004` UNKNOWN known-unknowns, and a single-landmark stronger frame does not convert the multi-landmark claim into durable PROOF for all three named landmarks. Per pilot rules: no forced production content update.

## Publish result — live verification

| Check | Result |
| --- | --- |
| HTTP | 200 |
| Title | Haddonfield Heights Map — Halloween: The Game Landmarks Guide |
| Meta description | illustrative IllFonic flythrough; spawns/routes launch verification pending |
| Canonical | https://www.halloweengameguide.wiki/maps/haddonfield-heights/ |
| Quick Answer | present (four launch maps + landmarks + known unknowns) |
| Evidence image | `heights-flythrough-t12` webp live 200 |
| Caption | Illustrative… not a substitute for named landmark confirmation |
| Attribution / timestamp | IllFonic flythrough @ 0:12 → YouTube `C2iqQykoqB8&t=12s` |
| public-copy hygiene | PASS (dist + live page; 0 findings) |
| SUPPORTING_VISUAL overclaim | none — public copy does not treat frame as landmark proof |
| Sitemap | `sitemap-index.xml` → `sitemap-0.xml` includes `/maps/haddonfield-heights/` |
| Internal nav | `/maps/` and `/routes/maps/` link to Heights |

## Update actually occurred?

| Kind | Happened? |
| --- | --- |
| Production deploy of P4 FAST_VERIFIED Heights page | **Yes** |
| FAST_VERIFIED → EVIDENCE_COMPLETE pack/page upgrade | **No** |
| Additional evidence asset swap (e.g. t42 water tower) | **No** |

## Shared runtime blocker?

**None observed** that requires shared-dev-skills changes.

Notes (non-blocking):

- Astro emits `sitemap-index.xml` / `sitemap-0.xml`; bare `/sitemap.xml` 404 is expected for this stack and is linked correctly via `<link rel="sitemap">`.
- Publish summary printed empty `InterventionIDs` / `BaselineDataDate` while Ledger writeback still PASS — observational only; not treated as a cross-repo blocker in this pilot.

## Constraints honored

- Did not modify `shared-dev-skills`
- Did not modify `ai-work-rules`
- Did not add new product features
- Used only completed P2/P3/P4 capabilities + existing Heights FAST_VERIFIED page
