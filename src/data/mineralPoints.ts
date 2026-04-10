// mineralPoints.ts
//
// 34 documented mineral deposits across Africa.
// Coordinates are expressed as percentages of the source image (1338×1262 px).
// All position values are approximate; confidence levels indicate how precisely
// the dot aligns with the deposit's known map location.
//
// METHODOLOGY: Deposits selected from publicly documented sources (BGS, USGS, mining
// company reports).  Coordinates assigned by comparing known country/region geography
// to the source map.  Deposits with uncertain map alignment are flagged
// confidence: 'medium' or 'low'.

import { SizeClass } from './mineralSymbols';

export interface MineralPoint {
  id: string;
  mineralId: string;          // matches MineralSymbol.id
  englishMineralName: string;
  englishLocation: string;    // "Deposit / Region, Country"
  xPct: number;               // left %, 0–100
  yPct: number;               // top  %, 0–100
  sizeClass: SizeClass;
  notes: string;
  confidence: 'high' | 'medium' | 'low';
}

export const MINERAL_POINTS: MineralPoint[] = [
  // ── GOLD ──────────────────────────────────────────────────────────────────────
  {
    id: 'gh-gold-ashanti',
    mineralId: 'gold',
    englishMineralName: 'Gold',
    englishLocation: 'Ashanti / Obuasi, Ghana',
    xPct: 17.5, yPct: 51.0,
    sizeClass: 'world-class',
    notes: 'Ashanti Goldfield — one of the largest gold mines in the world; Ghana\'s primary gold producer.',
    confidence: 'high',
  },
  {
    id: 'ml-gold-loulo',
    mineralId: 'gold',
    englishMineralName: 'Gold',
    englishLocation: 'Loulo-Gounkoto, Mali',
    xPct: 18.5, yPct: 36.5,
    sizeClass: 'world-class',
    notes: 'World-class gold camp operated by Barrick; Mali is one of Africa\'s top-5 gold producers.',
    confidence: 'high',
  },
  {
    id: 'za-gold-wits',
    mineralId: 'gold',
    englishMineralName: 'Gold',
    englishLocation: 'Witwatersrand Basin, South Africa',
    xPct: 44.0, yPct: 88.0,
    sizeClass: 'world-class',
    notes: 'Produced ~40% of all gold ever mined on Earth.',
    confidence: 'high',
  },
  {
    id: 'tz-gold-victoria',
    mineralId: 'gold',
    englishMineralName: 'Gold',
    englishLocation: 'Lake Victoria Goldfields, Tanzania',
    xPct: 50.5, yPct: 64.5,
    sizeClass: 'world-class',
    notes: 'Geita and Bulyanhulu mines in the Lake Victoria Greenstone Belt.',
    confidence: 'high',
  },
  {
    id: 'zw-gold-gweru',
    mineralId: 'gold',
    englishMineralName: 'Gold',
    englishLocation: 'Central Zimbabwe (Gweru area)',
    xPct: 47.5, yPct: 77.5,
    sizeClass: 'large',
    notes: 'Zimbabwe Craton greenstone belt gold; mined since early colonial period.',
    confidence: 'medium',
  },
  // ── PLATINUM GROUP METALS ────────────────────────────────────────────────────
  {
    id: 'za-pgm-bushveld',
    mineralId: 'platinum',
    englishMineralName: 'Platinum Group Metals',
    englishLocation: 'Bushveld Complex, South Africa',
    xPct: 43.5, yPct: 85.5,
    sizeClass: 'world-class',
    notes: 'Holds ~80% of global PGM reserves; world\'s largest PGM producer.',
    confidence: 'high',
  },
  {
    id: 'zw-pgm-great-dyke',
    mineralId: 'platinum',
    englishMineralName: 'Platinum Group Metals',
    englishLocation: 'Great Dyke, Zimbabwe',
    xPct: 47.0, yPct: 78.5,
    sizeClass: 'world-class',
    notes: 'World\'s second-largest PGM resource; Zimplats is the primary operator.',
    confidence: 'high',
  },
  // ── DIAMONDS ─────────────────────────────────────────────────────────────────
  {
    id: 'bw-diamond-jwaneng',
    mineralId: 'diamond',
    englishMineralName: 'Diamond',
    englishLocation: 'Jwaneng / Orapa, Botswana',
    xPct: 43.0, yPct: 82.0,
    sizeClass: 'world-class',
    notes: 'Jwaneng is the world\'s richest diamond mine by value; Orapa is the largest by area.',
    confidence: 'high',
  },
  {
    id: 'za-diamond-kimberley',
    mineralId: 'diamond',
    englishMineralName: 'Diamond',
    englishLocation: 'Kimberley / Venetia, South Africa',
    xPct: 40.5, yPct: 86.0,
    sizeClass: 'world-class',
    notes: 'Kimberley gave its name to kimberlite rock; Venetia is South Africa\'s largest active diamond mine.',
    confidence: 'high',
  },
  {
    id: 'sl-diamond-koidu',
    mineralId: 'diamond',
    englishMineralName: 'Diamond',
    englishLocation: 'Koidu / Kono District, Sierra Leone',
    xPct: 12.0, yPct: 50.0,
    sizeClass: 'world-class',
    notes: 'Produced some of the world\'s largest gem diamonds including the 969-carat Star of Sierra Leone.',
    confidence: 'high',
  },
  {
    id: 'cd-diamond-mbuji',
    mineralId: 'diamond',
    englishMineralName: 'Diamond',
    englishLocation: 'Mbuji-Mayi / Kasai, DR Congo',
    xPct: 36.5, yPct: 60.5,
    sizeClass: 'world-class',
    notes: 'One of the world\'s leading sources of industrial and gem diamonds.',
    confidence: 'high',
  },
  // ── COPPER ───────────────────────────────────────────────────────────────────
  {
    id: 'zm-copper-copperbelt',
    mineralId: 'copper',
    englishMineralName: 'Copper',
    englishLocation: 'Copperbelt (Kitwe / Ndola), Zambia',
    xPct: 44.5, yPct: 72.0,
    sizeClass: 'world-class',
    notes: 'Major copper mining region continuously mined since the 1930s.',
    confidence: 'high',
  },
  {
    id: 'cd-copper-katanga',
    mineralId: 'copper',
    englishMineralName: 'Copper',
    englishLocation: 'Katanga Province, DR Congo',
    xPct: 39.5, yPct: 66.0,
    sizeClass: 'world-class',
    notes: 'Part of the Central African Copperbelt; Tenke Fungurume is a world-class deposit.',
    confidence: 'high',
  },
  // ── COBALT ───────────────────────────────────────────────────────────────────
  {
    id: 'cd-cobalt-katanga',
    mineralId: 'cobalt',
    englishMineralName: 'Cobalt',
    englishLocation: 'Katanga Province, DR Congo',
    xPct: 40.5, yPct: 64.0,
    sizeClass: 'world-class',
    notes: 'DRC produces >70% of global cobalt; Katanga copper-cobalt belt.',
    confidence: 'high',
  },
  // ── IRON ORE ─────────────────────────────────────────────────────────────────
  {
    id: 'mr-iron-guelb',
    mineralId: 'iron',
    englishMineralName: 'Iron Ore',
    englishLocation: 'Guelb el Rhein / Zouerate, Mauritania',
    xPct: 11.5, yPct: 30.0,
    sizeClass: 'world-class',
    notes: 'Mauritania\'s Tiris Zemmour iron ore deposits; mined since the 1960s.',
    confidence: 'high',
  },
  {
    id: 'gn-iron-simandou',
    mineralId: 'iron',
    englishMineralName: 'Iron Ore',
    englishLocation: 'Simandou, Guinea',
    xPct: 14.0, yPct: 47.0,
    sizeClass: 'world-class',
    notes: 'Among the world\'s largest untapped high-grade iron ore deposits.',
    confidence: 'medium',
  },
  // ── MANGANESE ────────────────────────────────────────────────────────────────
  {
    id: 'za-mn-kalahari',
    mineralId: 'manganese',
    englishMineralName: 'Manganese',
    englishLocation: 'Kalahari Manganese Field, South Africa',
    xPct: 41.0, yPct: 84.5,
    sizeClass: 'world-class',
    notes: 'World\'s largest known manganese ore deposit; ~80% of global reserves.',
    confidence: 'high',
  },
  {
    id: 'ga-mn-moanda',
    mineralId: 'manganese',
    englishMineralName: 'Manganese',
    englishLocation: 'Moanda, Gabon',
    xPct: 27.5, yPct: 60.5,
    sizeClass: 'world-class',
    notes: 'One of the world\'s largest manganese ore bodies; reserves > 200 million tonnes.',
    confidence: 'high',
  },
  // ── CHROMITE ─────────────────────────────────────────────────────────────────
  {
    id: 'za-chrome-bushveld',
    mineralId: 'chromite',
    englishMineralName: 'Chromite',
    englishLocation: 'Bushveld Complex, South Africa',
    xPct: 44.0, yPct: 85.0,
    sizeClass: 'world-class',
    notes: 'South Africa holds >70% of world chromite reserves.',
    confidence: 'high',
  },
  {
    id: 'zw-chrome-great-dyke',
    mineralId: 'chromite',
    englishMineralName: 'Chromite',
    englishLocation: 'Great Dyke, Zimbabwe',
    xPct: 48.5, yPct: 78.5,
    sizeClass: 'world-class',
    notes: 'Major chromite resource along the Great Dyke intrusion.',
    confidence: 'high',
  },
  // ── NICKEL ───────────────────────────────────────────────────────────────────
  {
    id: 'bw-nickel-selebi',
    mineralId: 'nickel',
    englishMineralName: 'Nickel',
    englishLocation: 'Selebi-Phikwe, Botswana',
    xPct: 46.0, yPct: 81.5,
    sizeClass: 'large',
    notes: 'Copper-nickel sulphide deposit; mined for several decades.',
    confidence: 'medium',
  },
  {
    id: 'zb-nickel-bindura',
    mineralId: 'nickel',
    englishMineralName: 'Nickel',
    englishLocation: 'Bindura, Zimbabwe',
    xPct: 49.0, yPct: 76.5,
    sizeClass: 'large',
    notes: 'Bindura Nickel Corporation; Zimbabwe Craton sulphide deposits.',
    confidence: 'medium',
  },
  // ── BAUXITE ──────────────────────────────────────────────────────────────────
  {
    id: 'gn-bauxite-sangaredi',
    mineralId: 'bauxite',
    englishMineralName: 'Bauxite',
    englishLocation: 'Sangarédi, Guinea',
    xPct: 13.0, yPct: 46.5,
    sizeClass: 'world-class',
    notes: 'Guinea holds ~33% of global bauxite reserves; highest-grade deposits.',
    confidence: 'high',
  },
  {
    id: 'gh-bauxite-awaso',
    mineralId: 'bauxite',
    englishMineralName: 'Bauxite',
    englishLocation: 'Awaso, Ghana',
    xPct: 17.0, yPct: 50.5,
    sizeClass: 'large',
    notes: 'Ghana Bauxite Company deposits at Awaso.',
    confidence: 'medium',
  },
  // ── URANIUM ──────────────────────────────────────────────────────────────────
  {
    id: 'ne-uranium-arlit',
    mineralId: 'uranium',
    englishMineralName: 'Uranium',
    englishLocation: 'Arlit, Niger',
    xPct: 28.5, yPct: 35.0,
    sizeClass: 'world-class',
    notes: 'Arlit deposits mined by SOMAIR/COMINAK; Niger was a top global producer.',
    confidence: 'high',
  },
  {
    id: 'na-uranium-rossing',
    mineralId: 'uranium',
    englishMineralName: 'Uranium',
    englishLocation: 'Rössing, Namibia',
    xPct: 35.5, yPct: 83.5,
    sizeClass: 'world-class',
    notes: 'One of the world\'s largest open-pit uranium mines; operated since 1976.',
    confidence: 'high',
  },
  // ── PHOSPHATE ────────────────────────────────────────────────────────────────
  {
    id: 'ma-phosphate-khouribga',
    mineralId: 'phosphate',
    englishMineralName: 'Phosphate',
    englishLocation: 'Khouribga Basin, Morocco',
    xPct: 17.5, yPct: 14.0,
    sizeClass: 'world-class',
    notes: 'Morocco holds ~70% of world phosphate reserves; Khouribga is the largest single deposit.',
    confidence: 'high',
  },
  // ── PETROLEUM ────────────────────────────────────────────────────────────────
  {
    id: 'ng-oil-niger-delta',
    mineralId: 'oil',
    englishMineralName: 'Petroleum',
    englishLocation: 'Niger Delta, Nigeria',
    xPct: 25.5, yPct: 52.5,
    sizeClass: 'world-class',
    notes: 'Largest oil producing area in sub-Saharan Africa; peak ~2 million bbl/day.',
    confidence: 'high',
  },
  {
    id: 'ly-oil-sirte',
    mineralId: 'oil',
    englishMineralName: 'Petroleum',
    englishLocation: 'Sirte Basin, Libya',
    xPct: 34.5, yPct: 18.0,
    sizeClass: 'world-class',
    notes: 'Africa\'s largest proven oil reserves (~48 billion barrels).',
    confidence: 'high',
  },
  {
    id: 'ao-oil-cabinda',
    mineralId: 'oil',
    englishMineralName: 'Petroleum',
    englishLocation: 'Offshore Cabinda, Angola',
    xPct: 30.0, yPct: 68.5,
    sizeClass: 'world-class',
    notes: 'Angola\'s offshore deepwater production; sub-Saharan Africa\'s 2nd-largest producer.',
    confidence: 'high',
  },
  // ── NATURAL GAS ──────────────────────────────────────────────────────────────
  {
    id: 'dz-gas-hassi',
    mineralId: 'gas',
    englishMineralName: 'Natural Gas',
    englishLocation: 'Hassi R\'Mel, Algeria',
    xPct: 27.0, yPct: 16.5,
    sizeClass: 'world-class',
    notes: 'One of the largest natural gas fields in the world.',
    confidence: 'high',
  },
  // ── COAL ─────────────────────────────────────────────────────────────────────
  {
    id: 'za-coal-mpumalanga',
    mineralId: 'coal',
    englishMineralName: 'Coal',
    englishLocation: 'Mpumalanga Coalfields, South Africa',
    xPct: 47.5, yPct: 86.5,
    sizeClass: 'world-class',
    notes: 'Supplies > 90% of South Africa\'s domestic power generation.',
    confidence: 'high',
  },
  {
    id: 'mz-coal-moatize',
    mineralId: 'coal',
    englishMineralName: 'Coal',
    englishLocation: 'Moatize Basin, Mozambique',
    xPct: 52.5, yPct: 79.5,
    sizeClass: 'world-class',
    notes: 'High-quality coking coal; reserves estimated > 2 billion tonnes.',
    confidence: 'high',
  },
  // ── GRAPHITE ─────────────────────────────────────────────────────────────────
  {
    id: 'mg-graphite-mada',
    mineralId: 'graphite',
    englishMineralName: 'Graphite',
    englishLocation: 'Eastern Belt, Madagascar',
    xPct: 63.0, yPct: 73.0,
    sizeClass: 'world-class',
    notes: 'Madagascar is one of the world\'s largest high-purity flake graphite producers.',
    confidence: 'medium',
  },
];
