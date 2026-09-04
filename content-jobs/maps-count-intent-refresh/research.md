# Writer Research Brief: Maps Count Intent Capture

## Page Goal

Update existing page (do **not** create a new URL):
https://www.halloweengameguide.wiki/maps/

Make `/maps/` the **sole primary landing page** for map-count and map-list intents.

Do **not** create `/how-many-maps/` or any other new route.

---

## Primary Intent

how many maps will halloween the game have / halloween the game how many maps / halloween the game maps / all halloween the game maps / halloween the game launch maps / halloween the game map list

### Secondary Intents

- Named launch map list
- Landmark → which map
- Difference between the four maps
- Where to read each dedicated map guide

---

## GSC Routing Context (pre–Batch A; do not treat as current /maps/ failure)

Latest data cutoff: 2026-09-03 15:00 PT

- "how many maps will halloween the game have" — 2 impressions, avg pos 9 — wrongly landing on homepage `/`
- "halloween the game how many maps" — 1 impression, avg pos 7 — wrongly landing on homepage `/`

Goal: establish clear routing ownership on `/maps/`.

---

## Official Facts

Halloween: The Game launches with **4 unique multiplayer maps**:

1. **Haddonfield Heights** — residential neighborhood; Myers house; Strode house; Lampkin Lane; water tower
2. **Haddonfield Town Center** — downtown / commercial district; Nichols Hardware; A-Side Music Store; Hill Garden Center; Patty's Pub
3. **Orange Grove Estates** — upscale residential; larger multi-level homes; Doyle residence; Wallace residence; playground
4. **East Haddonfield** — rural / agricultural / industrial outskirts; grain mill; silos; farmland; Rabbit in Red Lounge; Phelps Garage; Midwest Feed Company

Official sources:

- https://halloweengame.com/news/the-locations-of-halloween-the-game/
- https://halloweengame.com/news/halloween-the-game-launch-and-early-access/

Also keep existing reliable map-reveal sources already on the page (Heights flythrough, Town Center, Orange Grove Estates, PAX, multiplayer overview) when useful.

East Haddonfield is confirmed to appear in at least one single-player chapter. Do **not** infer that the other three maps each map 1:1 to story chapters.

---

## SEO Title (required update)

Halloween: The Game Maps — All 4 Launch Maps & Locations

## H1 (required update)

Halloween: The Game Maps: All 4 Launch Locations

## Meta description direction (required update)

State directly that the game has **4** launch multiplayer maps, list all four names, and note the page compares confirmed landmarks / settings.

## Quick Answer (required — first sentence must be exact)

Halloween: The Game launches with 4 multiplayer maps: Haddonfield Heights, Haddonfield Town Center, Orange Grove Estates, and East Haddonfield.

Do **not** put background before that sentence. Optional short follow-on may note this hub compares confirmed landmarks/settings and that exact spawns/routes/meta remain launch verification pending.

---

## Required structure

1. Quick Answer (lead with the exact first sentence above)
2. All 4 launch maps at a glance — compact comparison table immediately after Quick Answer:
   - Columns: Map | Setting | Key confirmed landmarks | Dedicated guide
   - All four maps in the table
   - Map names must be natural Markdown links to each dedicated guide token
   - Dedicated guide column also links to the same page tokens
3. Haddonfield Heights (short; landmark focus; one visual if available)
4. Haddonfield Town Center
5. Orange Grove Estates
6. East Haddonfield
7. How the four maps differ
8. What is confirmed vs still unknown
9. FAQ
10. Sources

Return Markdown body with H1.

Do **not** write generic Haddonfield lore. Primary job: how many / names / differences / where to go next.

Preserve existing reliable Sources links and child map links. Keep useful confirmed landmark detail; remove stale framing that treats the launch set as incomplete “3 confirmed” copy (current page already says four — strengthen count-first ownership).

---

## FAQ Intent (required)

### First FAQ question (must be first)

**How many maps are in Halloween: The Game?**

Answer directly: 4 launch multiplayer maps, and list all four names.

### Continue covering

- What are all four Halloween: The Game maps?
- Which map has the Myers house?
- Which map has the Doyle and Wallace houses?
- Which map has Nichols Hardware?
- Which map has Rabbit in Red Lounge?
- Will there be more maps after launch?

Last answer only: post-launch map roadmap is **not confirmed**. Do not invent DLC map counts or release dates.

---

## Source Rules

Sources as Markdown links (keep / restore these where applicable):

- [The Locations of Halloween: The Game](https://halloweengame.com/news/the-locations-of-halloween-the-game/)
- [Halloween: The Game Launch and Early Access](https://halloweengame.com/news/halloween-the-game-launch-and-early-access/)
- [Haddonfield Heights map flythrough — Halloween: The Game](https://halloweengame.com/news/haddonfield-heights-map-flythrough/)
- [Haddonfield Town Center — Halloween: The Game](https://halloweengame.com/news/haddonfield-town-center/)
- [Orange Grove Estates — Halloween: The Game](https://halloweengame.com/news/orange-grove-estates/)
- [PAX East 2026 — Halloween: The Game](https://halloweengame.com/news/pax-east-2026/)
- [Multiplayer gameplay overview — Halloween: The Game](https://halloweengame.com/news/multiplayer-gameplay-overview/)

Internal tokens must appear inside natural Markdown links:

{{page:maps-haddonfield-heights}}
{{page:maps-haddonfield-town-center}}
{{page:maps-orange-grove-estates}}
{{page:maps-east-haddonfield}}
{{page:multiplayer-how-it-works}}

## Must Preserve Exact Tokens

{{page:maps-haddonfield-heights}}
{{page:maps-haddonfield-town-center}}
{{page:maps-orange-grove-estates}}
{{page:maps-east-haddonfield}}
{{page:multiplayer-how-it-works}}

## Must Include Facts

- Halloween: The Game launches with 4 unique multiplayer maps.
- The four maps are Haddonfield Heights, Haddonfield Town Center, Orange Grove Estates, and East Haddonfield.
- Haddonfield Heights: residential; Myers house; Lampkin Lane; water tower (Strode house may be mentioned as confirmed neighborhood landmark).
- Haddonfield Town Center: downtown / commercial; Nichols Hardware; A-Side Music Store; Hill Garden Center; Patty's Pub.
- Orange Grove Estates: upscale residential; multi-level homes; Doyle and Wallace residences; playground.
- East Haddonfield: rural / agricultural / industrial outskirts; Rabbit in Red Lounge; Phelps Garage; Midwest Feed Company.
- Exact item spawns, fixed escape routes, and map meta are not published — launch verification pending.
- Post-launch map roadmap is not confirmed.

## Forbidden Claims

- Fixed item spawn locations
- Fixed escape routes
- Best map / difficulty ranking / map dimensions
- Public map voting / rotation mechanics
- Post-launch map roadmap, DLC map counts, or release dates
- Treating the four multiplayer maps as a complete single-player chapter location list
- Inferring that Heights / Town Center / Orange Grove each correspond to story chapters because East Haddonfield appears in one chapter
- AI-generated maps, forged top-down maps, or guessed route diagrams
- Remote image URLs

## Visual Assets

Strong visual page. Reuse existing official local assets only. Place each image near the matching map section (not a detached gallery). Use Local asset path values exactly in Markdown image syntax. Do not hotlink remote Image URL values.

- Asset ID: heights-residential
  - Local asset path: src/assets/covers/maps/haddonfield-heights-01.jpg
  - Shows / evidence: Official Haddonfield Heights residential / neighborhood view
  - Intended section: Haddonfield Heights
  - Alt: Haddonfield Heights residential neighborhood on Halloween: The Game
  - Caption: Official Haddonfield Heights map view — residential neighborhood setting
  - Evidence status: usable local official

- Asset ID: town-center-nichols
  - Local asset path: src/assets/covers/maps/town-center-nichols-hardware.jpg
  - Shows / evidence: Nichols Hardware storefront on Town Center
  - Intended section: Haddonfield Town Center
  - Alt: Nichols Hardware on Haddonfield Town Center map
  - Caption: Official Town Center landmark — Nichols Hardware
  - Evidence status: usable local official

- Asset ID: orange-grove-playground
  - Local asset path: src/assets/covers/maps/orange-grove-playground.jpg
  - Shows / evidence: Neighborhood playground on Orange Grove Estates
  - Intended section: Orange Grove Estates
  - Alt: Playground on Orange Grove Estates map
  - Caption: Official Orange Grove Estates park / playground landmark
  - Evidence status: usable local official

- Asset ID: east-rabbit-lounge
  - Local asset path: src/assets/covers/maps/east-haddonfield-rabbit-lounge.jpg
  - Shows / evidence: Rabbit in Red Lounge neon exterior on East Haddonfield
  - Intended section: East Haddonfield
  - Alt: Rabbit in Red Lounge neon exterior on East Haddonfield
  - Caption: Official East Haddonfield landmark — The Rabbit in Red Lounge
  - Evidence status: usable local official

If an asset cannot be placed cleanly, omit that image rather than inventing a substitute.

## Update Mode Notes

- Existing source: `site-input/pages/maps.md` (Markdown body only; no YAML frontmatter)
- Preserve reliable confirmed landmark detail, Sources, and child map page links
- Strengthen count-first intent ownership (title/H1/Quick Answer/table/FAQ)
- Do not append research-brief headings or token lists to the article
