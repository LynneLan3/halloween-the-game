# Website 2.0 Migration Spec — Halloween: The Game

**Status:** APPROVED (architecture locked)  
**Date:** 2026-09-02  
**Site:** `halloween-the-game` · `halloweengameguide.wiki`

---

## Decision record

| Decision | Choice |
| --- | --- |
| Player-facing shell | **Website 2.0** — visual/UX from `LynneLan3/Halloween_The_Game` |
| Implementation | **Astro SSG + CSS/component port** (not a standalone Vite SPA) |
| Content pipeline | Keep `site-spec.yaml` + `site-input/` + `npm run site:generate` |
| Content contract | V4 section semantics (`docs/v4-content-matrix.md`) |
| Guide inner pages | **Same design system extension** (no separate Figma; extend homepage tokens) |
| Deprecated | V2.2 Experience shell (`exp-*`, `GameShell*`, `experience-*.css` player routes) |

**UI source of truth:** `git@github.com:LynneLan3/Halloween_The_Game.git` (`main`)  
**Content source of truth:** this repo (`site-input/`, `docs/seo-research.md`)

---

## What Website 2.0 is

```
Halloween_The_Game design (React reference)
  → ported to Astro components + site-2.0.css
  → bound to site.generated.ts / docs collection
  → static build, same Vercel deployment, URL parity preserved
```

Website 2.0 is **not** a content rewrite. It is a **shell replacement** using verified copy already on the live site.

---

## Reference frontend inventory (`Halloween_The_Game`)

| Asset | Path | Port target |
| --- | --- | --- |
| Layout + sections | `src/App.tsx` | Decompose into `src/components/site2/` |
| Visual system | `src/index.css` | `src/styles/site-2.0.css` (+ optional partials) |
| Fonts | Google Fonts in CSS | Same families in `Head` override |
| Icons | `lucide-react` | `lucide-astro` or inline SVG (match stroke weight) |
| Images (design) | Pexels URLs | **Replace** with Steam assets from `site-spec` `assets` |
| Routing | Anchor-only SPA | Real Astro static routes |

### Homepage sections (freeze order)

1. `topbar` — brand, nav, search trigger  
2. `hero` — eyebrow, H1, tagline, CTAs, release-status  
3. `trending` (`#guides`) — Start here / 4 cards  
4. `map-section` (`#maps`) — 1 featured + 2 map cards  
5. `sides-section` (`#michael-myers`) — Killer vs Heroes split  
6. `questions` (`#multiplayer`) — Popular questions grid  
7. `category-section` (`#characters`) — 6 pillar tiles  
8. `featured` (`#featured`) — Featured guide spread  
9. `release-strip` — launch countdown strip  
10. `footer` — trust links, disclaimer  

Responsive breakpoints from design: **900px**, **640px** — do not change without explicit approval.

---

## Target directory layout (implementation)

```text
src/
  components/site2/
    Site2Shell.astro          # html/body wrapper, font + css imports
    Site2Topbar.astro
    Site2Hero.astro
    Site2StartHere.astro      # trending grid
    Site2MapShowcase.astro
    Site2SideChooser.astro
    Site2PopularQuestions.astro
    Site2CategoryGrid.astro
    Site2FeaturedGuide.astro
    Site2ReleaseStrip.astro
    Site2Footer.astro
    guide/
      Site2GuideLayout.astro  # shared guide chrome
      Site2GuideHeader.astro  # A01 + A02 + facts row
      Site2GuideBody.astro    # markdown slot
      Site2GuideFooter.astro  # evidence, next steps, trust
  layouts/
    Site2HomeLayout.astro
    Site2GuideLayout.astro
    Site2RouteLayout.astro    # route hub (P2 browse)
  styles/
    site-2.0.css              # ported from Halloween_The_Game index.css
    site-2.0-guide.css        # guide-specific extension
```

Starlight remains for MD collection loading; **player-visible** pages use `Site2*` layouts via overrides.

---

## Data binding — homepage

| Site2 component | `site-spec` / runtime source |
| --- | --- |
| `Site2Hero` | `game.hubTitle`, `game.tagline`, `homepage.heroBadge`, `homepage.primaryCta`, `homepage.secondaryCta`, `homepage.statusItems`, `assets.halloween-hero` |
| `Site2StartHere` | `homepage.startHere[]` → resolve page title, href, `quickAnswer` teaser |
| `Site2MapShowcase` | `routes[id=maps].pages` + map page `facts` / cover assets |
| `Site2SideChooser` | Links to `michael-myers-hub`, `characters-hub` + cover images |
| `Site2PopularQuestions` | `homepage.popularQuestions[]` |
| `Site2CategoryGrid` | `routes[]` (6 pillars): title, description, `visualAssetId` |
| `Site2FeaturedGuide` | First `featured: true` + `role: core` guide |
| `Site2ReleaseStrip` | `homepage.statusItems` + `game.releaseDate` |
| `Site2Topbar` nav | Maps, Characters, Michael Myers, Multiplayer, Guides + search |

**Rule:** Never render hardcoded strings from the Bolt prototype when `site-spec` has a verified value.

---

## Guide page template (design system extension)

No mock exists in `Halloween_The_Game`. Extend the same tokens:

| Zone | V4 primitive | Visual treatment |
| --- | --- | --- |
| Top | A01 Answer header | Dark `section` band; Barlow H1; orange eyebrow |
| Quick answer | A02 | Cream panel on navy (inverse of `questions` cards) |
| Facts | E01 | Compact label/value rows (hero `release-status` style) |
| Body | H2 sections | `DM Sans` 13–14px; max-width reading column |
| Evidence / trust | — | Muted panel + source links (footer link styles) |
| Next steps | N01 | `trend-card` or `category-tile` mini variant |

Prototype-specific optional blocks (from `v4-content-matrix.md`):

- **P2 hub** → `Site2CategoryGrid` + child link list  
- **P3 comparison** → table styled like `questions-grid` rows  
- **P4 procedure** → numbered steps with orange index (`question-card > span`)  
- **P5 location** → `map-card` landmark layout  

---

## Route & URL map (parity — do not change slugs)

| URL pattern | Current V2.2 | Website 2.0 layout |
| --- | --- | --- |
| `/` | Experience homepage | `Site2HomeLayout` |
| `/{guide-slug}/` | Experience guide | `Site2GuideLayout` |
| `/guides/` | Guide library index | Site2 list (new component) |
| `/routes/` | Route index | `Site2RouteLayout` index |
| `/routes/{routeId}/` | Route hub | `Site2RouteLayout` hub |
| `/{category}/` | Starlight category landing | Keep `noindex,follow`; Site2 minimal browse shell |
| Trust pages | `TrustPageLayout` | Restyle with Site2 footer/topbar only |

All 19 guide slugs in `site-spec.yaml` must remain valid after migration.

---

## Implementation phases

### P0 — Freeze & reference (0.5d)

- [ ] Clone `Halloween_The_Game` adjacent to repo (read-only reference)
- [ ] Export homepage screenshots at 1440 / 390 for regression
- [ ] Copy `index.css` → `src/styles/site-2.0.css` (no logic change)

### P1 — Shell components (2–3d)

- [ ] Build `Site2Shell` + `Site2Topbar` + `Site2Footer`
- [ ] Port homepage sections P0→P9 with **placeholder props**
- [ ] Wire `PageFrame` override: `isExperienceHomepage` → Site2 home (feature flag `SITE2_SHELL=1`)

### P2 — Homepage data (1–2d)

- [ ] Bind all sections to `game` + `site.generated.ts` homepage block
- [ ] Swap Pexels → Steam assets
- [ ] Visual diff vs Bolt reference

### P3 — Guide template (3–4d)

- [ ] `Site2GuideLayout` + header/body/footer
- [ ] Replace `ExperienceGuideHeader` / `ExperienceGuideSections` for guide routes
- [ ] Map `quickAnswer`, `facts`, markdown body, `relations`, `trust`

### P4 — Routes & library (2d)

- [ ] Site2 route hub + routes index
- [ ] `/guides/` library grid

### P5 — Production integrations (1d)

- [ ] `AdScript`, `VercelAnalytics`, canonical, `SocialMeta`
- [ ] Pagefind search UI in `Site2Topbar` search panel
- [ ] Sitemap / robots unchanged behavior

### P6 — Cutover (1d)

- [ ] Remove V2.2 player CSS from build path
- [ ] `npm run validate:generated` + visual + SEO checklist
- [ ] Preview deploy → user sign-off → production

---

## V2.2 deprecation list (after cutover)

Remove or stop importing from player paths:

```text
src/components/experience/          (except shared utils if reused)
src/styles/experience.css
src/styles/experience-homepage.css
src/styles/experience-guide.css
src/styles/routes.css               (replace with site-2.0-route.css)
```

Keep:

```text
scripts/generate-site.ts
site-spec.yaml / site-input/
src/content/docs/
src/lib/guides.ts, paths.ts, page-relations.ts
AdScript, Analytics, affiliate, indexnow scripts
```

---

## SEO & validation checklist (cutover gate)

- [ ] All indexable guides return 200 with self-canonical to `halloweengameguide.wiki`
- [ ] Category landings: `noindex,follow`, excluded from sitemap
- [ ] `sitemap-index.xml` lists all 19 guides + homepage + `/guides/`
- [ ] No Agefield / template / wrong-game residue
- [ ] Homepage LCP image = `halloween-hero` (not Pexels)
- [ ] Internal links: hub → guides → next-step relations intact
- [ ] `npm run validate:generated` passes
- [ ] Production build ≥ 36 static pages

---

## Content rules (unchanged from research)

- Copy from `site-input/` / `docs/seo-research.md` — not from Bolt prototype strings  
- EAC: provisional only until Steam store confirms  
- Australia Deluxe: provisional wording  
- Private lobbies: secondary sources only  
- Deluxe upgrade Advance Access: **Not Announced**  
- No physical Oct 6 release claim  

---

## Risks

| Risk | Mitigation |
| --- | --- |
| Guide pages have no Bolt mock | Approved: design-system extension template |
| CSS port drift | Pixel regression screenshots at P1/P2 |
| Starlight override complexity | Feature flag `SITE2_SHELL` during parallel dev |
| Search UX gap | Reuse Pagefind; search panel = existing index |

---

## Related docs

- `docs/seo-research.md` — evidence  
- `docs/v4-content-matrix.md` — per-page content primitives (UI column maps to Site2 components)  
- `LynneLan3/Halloween_The_Game` — visual reference only  

---

*Next implementation step: P0 — port `index.css` and scaffold `src/components/site2/` with feature flag.*
