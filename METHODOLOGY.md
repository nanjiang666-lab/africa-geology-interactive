# Methodology Note

## 1. Geology Color Hover

**How it works:**
1. On page load, the source map image (`africa-geology-map.png`, 1338×1262 px) is
   drawn onto a hidden HTML5 `<canvas>` element at full natural resolution.
2. On every `mousemove` over the map, the cursor's container-relative position is
   converted to image-pixel coordinates.
3. A 5×5 pixel window is sampled with `getImageData()` and averaged (near-black
   border pixels are excluded from the average).
4. Three exclusion rules filter non-geological pixels:
   - near-white (all channels > 238) → ocean / blank background → no tooltip
   - near-black (all < 30) → border / coastline lines → no tooltip
   - near-achromatic gray (channel range < 18, max < 195) → graticule lines → no tooltip
5. The averaged RGB is compared against 16 legend entries using RGB Euclidean
   distance; the closest match within `MAX_COLOR_DIST = 68` is accepted.
6. A special check for ocean blue-gray (~rgb(129,150,183), threshold 52) labels
   water bodies.

**Legend color extraction:**
Swatch colours were extracted by scanning a 20-pixel strip (original image x = 83–102)
at each of 16 row midpoints identified visually in the legend box (y = 882–1226).
Values are averages over those strips.

**Known limitations:**
- Anti-aliased region edges may match neighbouring colour entries.
- Some less-common formation colours (e.g. very small outcrops) may fall outside
  the threshold and show no tooltip.
- The distance threshold (68) can be tightened in `geologyLegend.ts` to reduce
  false matches.

---

## 2. Mineral Symbol Hover

**How it works:**
1. 34 documented mineral deposits are rendered as CSS-positioned `<div>` elements
   (`position: absolute; left: xPct%; top: yPct%`) over the map image.
2. Each div contains a small inline SVG symbol (circle, square, diamond, triangle).
3. `onMouseEnter` on a mineral div sets tooltip priority to "mineral" and suppresses
   the geology canvas sampling for that region.
4. `onMouseLeave` reverts to geology hover.

**Symbol coordinates:**
All coordinates are expressed as % of image dimensions. They were assigned by
comparing each deposit's known country/region to the source map geography.
Confidence levels:
- **high** — major well-documented deposit clearly identifiable on map
- **medium** — approximate regional placement; deposit may be ±50–100 km off
- **low** — only country-level placement possible

---

## 3. Legend Translation

**Geology legend (16 entries):**
Translated from Chinese geological time-period terminology:
- 新生代 → Cenozoic · 中生代 → Mesozoic · 古生代 → Paleozoic
- 新元古代 → Neoproterozoic · 中元古代 → Mesoproterozoic · 古元古代 → Paleoproterozoic
- 太古代 (新/中/始) → Neoarchean / Mesoarchean / Eoarchean
- 侵入岩 → intrusive rocks · 变质岩 → metamorphic rocks · 沉积岩 → sedimentary rocks

**Mineral legend (16 types):**
Direct mineral name translations from the original legend plus commonly mapped
additional deposits:
- 金矿→Gold · 铂族金属→PGM · 金刚石→Diamond · 铜矿→Copper · 铁矿→Iron Ore
- 锰矿→Manganese · 铬矿→Chromite · 钴矿→Cobalt · 镍矿→Nickel · 铝土矿→Bauxite
- 铀矿→Uranium · 磷矿→Phosphate · 石油→Petroleum · 天然气→Natural Gas
- 煤矿→Coal · 石墨→Graphite

---

## 4. Where Uncertainty Remains

| Area | Issue |
|------|-------|
| Geology row 4 (`#8095b5` blue-gray) | Mesozoic intrusive vs. metamorphic — assignment inferred from row order |
| Geology rows 12–16 (dark Archean) | Purple/brown dark shades are visually similar; assignments follow legend row order |
| Mineral coordinates (confidence: medium) | 8 deposits have ±50–100 km placement uncertainty |
| Mineral symbol shapes | Approximated from the original legend; exact shapes may differ for some entries |
| DH test / Doornik-Hansen statistic | (Maasoumi paper only, not relevant here) |
