// geologyLegend.ts
//
// Colors extracted by sampling the left edge of each legend swatch (original image
// x = 83–102 px) at 16 distinct row midpoints.  English labels follow standard
// Chinese geological time-period terminology.
//
// MAX_COLOR_DIST: RGB Euclidean distance threshold.  Sampled pixels farther than
// this from every entry show no tooltip.
//
// EXCLUSION RULES applied before matching:
//   • near-white (all channels > 238)  → ocean / blank background → skip
//   • near-black (all channels < 30)   → border lines → skip
//   • near-achromatic gray (range < 18, max < 195) → graticule lines → skip

export const MAX_COLOR_DIST = 68;

export interface GeologyEntry {
  id: string;
  englishLabel: string;
  chineseLabel: string;
  rgb: [number, number, number];
  era: string;       // used for badge colour in tooltip
  notes: string;
}

export const GEOLOGY_LEGEND: GeologyEntry[] = [
  // ── CENOZOIC ─────────────────────────────────────────────────────────────────
  {
    id: 'cenozoic-sed',
    englishLabel: 'Cenozoic Sedimentary Rocks',
    chineseLabel: '新生代沉积岩',
    rgb: [227, 225, 160],
    era: 'Cenozoic',
    notes: 'Quaternary and Neogene continental, fluvial, and coastal sediments. Widespread across the Sahara, Congo Basin, and major river deltas.',
  },
  {
    id: 'cenozoic-vol',
    englishLabel: 'Cenozoic Volcanic Rocks',
    chineseLabel: '新生代火山岩',
    rgb: [216, 189, 127],
    era: 'Cenozoic',
    notes: 'Tertiary to Quaternary basaltic and felsic volcanics, especially associated with the East African Rift System.',
  },
  // ── MESOZOIC ─────────────────────────────────────────────────────────────────
  {
    id: 'mesozoic-sed-vol',
    englishLabel: 'Mesozoic Sedimentary and Volcanic Rocks',
    chineseLabel: '中生代沉积岩与火山岩',
    rgb: [126, 160, 112],
    era: 'Mesozoic',
    notes: 'Cretaceous and Jurassic continental and marine sequences, including Karoo-equivalent deposits and early Atlantic-margin sediments.',
  },
  {
    id: 'mesozoic-intrusive-vol',
    englishLabel: 'Mesozoic Intrusive and Volcanic Rocks',
    chineseLabel: '中生代侵入岩及火山岩',
    rgb: [128, 149, 181],
    era: 'Mesozoic',
    notes: 'Mesozoic magmatic intrusions and volcanic sequences, including Karoo large-igneous-province dolerite dykes and sills.',
  },
  // ── PALEOZOIC ────────────────────────────────────────────────────────────────
  {
    id: 'paleozoic-ign-meta',
    englishLabel: 'Paleozoic Igneous and Metamorphic Rocks',
    chineseLabel: '古生代岩浆岩与变质岩',
    rgb: [124, 126, 75],
    era: 'Paleozoic',
    notes: 'Paleozoic-age granites, gneisses and fold-belt sequences; includes Cape Fold Belt equivalents in southern Africa.',
  },
  {
    id: 'paleozoic-granite',
    englishLabel: 'Paleozoic Granite',
    chineseLabel: '古生代花岗岩',
    rgb: [171, 94, 57],
    era: 'Paleozoic',
    notes: 'Late-Paleozoic (Variscan/Hercynian) granite intrusions.',
  },
  // ── NEOPROTEROZOIC ───────────────────────────────────────────────────────────
  {
    id: 'neoproterozoic-sed',
    englishLabel: 'Neoproterozoic Sedimentary Rocks',
    chineseLabel: '新元古代沉积岩',
    rgb: [195, 215, 207],
    era: 'Neoproterozoic',
    notes: 'Pan-African sedimentary basins and passive-margin sequences (~1000–541 Ma).',
  },
  {
    id: 'neoproterozoic-sed-vol',
    englishLabel: 'Neoproterozoic Sedimentary and Volcanic Rocks',
    chineseLabel: '新元古代沉积岩与火山岩',
    rgb: [212, 206, 107],
    era: 'Neoproterozoic',
    notes: 'Mixed sedimentary and volcanic sequences in Neoproterozoic mobile belts.',
  },
  {
    id: 'neoproterozoic-meta',
    englishLabel: 'Neoproterozoic Metamorphic Rocks',
    chineseLabel: '新元古代变质岩',
    rgb: [212, 178, 180],
    era: 'Neoproterozoic',
    notes: 'Pan-African orogenic metamorphic belts; widespread in North Africa and East Africa.',
  },
  {
    id: 'neo-paleo-intrusive',
    englishLabel: 'Neoproterozoic–Paleoproterozoic Intrusive Rocks',
    chineseLabel: '新元古代至古元古代侵入岩',
    rgb: [190, 145, 73],
    era: 'Neoproterozoic–Paleoproterozoic',
    notes: 'Granites and granitoids emplaced during Pan-African to Eburnean orogenies.',
  },
  // ── MESO- / PALEOPROTEROZOIC ─────────────────────────────────────────────────
  {
    id: 'proterozoic-sed-vol',
    englishLabel: 'Meso- to Paleoproterozoic Sedimentary and Volcanic Rocks',
    chineseLabel: '中/古元古代沉积岩与火山岩',
    rgb: [168, 122, 126],
    era: 'Proterozoic',
    notes: 'Proterozoic supracrustal sequences (~2500–1000 Ma); includes greenstone-belt equivalents.',
  },
  // ── ARCHEAN ──────────────────────────────────────────────────────────────────
  {
    id: 'mesoarchean-gneiss',
    englishLabel: 'Mesoarchean Gneiss',
    chineseLabel: '中太古代片麻岩',
    rgb: [144, 63, 110],
    era: 'Archean',
    notes: 'High-grade metamorphic gneisses of Mesoarchean age (~3200–2800 Ma); preserved in the cores of ancient cratons.',
  },
  {
    id: 'mesoarchean-sed-orthogneiss',
    englishLabel: 'Mesoarchean Sedimentary Rocks and Orthogneiss',
    chineseLabel: '中太古代沉积岩与深成片麻岩',
    rgb: [188, 150, 106],
    era: 'Archean',
    notes: 'Mesoarchean supracrustal sequences intruded by tonalitic and granodioritic orthogneiss.',
  },
  {
    id: 'archean-basement',
    englishLabel: 'Archean Basement Complex',
    chineseLabel: '太古代结晶基底',
    rgb: [43, 39, 68],
    era: 'Archean',
    notes: 'Undivided Archean crystalline basement forming the cores of African cratons (Kaapvaal, Zimbabwe, Tanzanian, West African).',
  },
  {
    id: 'eoarchean-gneiss',
    englishLabel: 'Eoarchean / Paleoarchean Gneiss Complex',
    chineseLabel: '始太古代片麻杂岩',
    rgb: [80, 30, 25],
    era: 'Eoarchean',
    notes: 'Oldest crustal fragments (> 3600 Ma); heterogeneous TTG (tonalite-trondhjemite-granodiorite) gneiss complexes.',
  },
  {
    id: 'ancient-meta',
    englishLabel: 'Ancient Metamorphic Complex',
    chineseLabel: '古太古代变质杂岩',
    rgb: [91, 42, 83],
    era: 'Paleoarchean',
    notes: 'Deep metamorphic assemblages of Paleoarchean age; includes ultramafic and mafic granulite sequences.',
  },
];

// Legend area in the source image (image-fraction coordinates, 1338×1262 px).
// The English legend overlay covers exactly this region.
export const LEGEND_AREA = {
  left:   70  / 1338,
  right:  680 / 1338,
  top:    820 / 1262,
  bottom: 1245 / 1262,
};
