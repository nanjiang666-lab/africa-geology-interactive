# Africa — Geology & Mineral Deposits (Interactive Map)

Hover-based interactive geology and mineral deposit map of Africa.
All content in English; no Chinese in UI, tooltips, or legends.

## Run

```bash
cd /Users/jiangnannan/Desktop/africa-geology-interactive_final_english_hover_complete
npm install        # first time only
npm run dev
```

Then open **http://localhost:5175/** in your browser.

## Build for deployment

```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

## How to use

| Action | Result |
|--------|--------|
| Hover over a colored map region | English geological unit tooltip |
| Hover over a colored symbol (●■◆▲) | English mineral name + location tooltip |
| Click legend section header | Collapse/expand that legend section |

## What the symbols mean

| Shape | Example minerals |
|-------|-----------------|
| Circle | Gold, Copper, PGM, Nickel, Cobalt, Oil, Phosphate |
| Square | Iron Ore, Manganese, Chromite, Coal, Graphite |
| Diamond | Diamond |
| Triangle ▲ | Bauxite, Uranium |
| Triangle ▼ | Natural Gas |

Symbol size = deposit class: large = world-class, medium = large, small = medium/small.

## Files

```
src/
  data/
    geologyLegend.ts   — 16 geological units with RGB swatches + English labels
    mineralSymbols.ts  — 16 mineral types with shape/color definitions
    mineralPoints.ts   — 34 documented deposits with coordinates + locations
  components/
    MapArea.tsx        — map image + canvas hover + mineral symbol overlay
    LegendPanel.tsx    — right-side legend panel (geology + minerals)
    UnifiedTooltip.tsx — shared tooltip for both hover types
    SymbolIcon.tsx     — renders SVG symbols (circle/square/diamond/triangle)
METHODOLOGY.md         — full technical notes on color extraction and matching
```
