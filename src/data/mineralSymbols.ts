// mineralSymbols.ts
//
// Translated from the original map's mineral legend (right section of the legend box).
// Original legend encodes: mineral type (symbol shape + color) × size class
//   超大型 = world-class  大型 = large  中型 = medium  小型 = small
//
// Shape choices approximate the original printed symbol style.
// Colors are visually matched to the original legend swatches.

export type SymbolShape = 'circle' | 'square' | 'diamond' | 'triangle-up' | 'triangle-down' | 'star';

export interface MineralSymbol {
  id: string;
  englishName: string;
  chineseName: string;
  shape: SymbolShape;
  fillColor: string;
  strokeColor: string;
  category: string;
  notes: string;
}

export const MINERAL_SYMBOLS: MineralSymbol[] = [
  {
    id: 'gold',
    englishName: 'Gold',
    chineseName: '金矿',
    shape: 'circle',
    fillColor: '#D4A017',
    strokeColor: '#8B6914',
    category: 'Precious Metals',
    notes: 'Circle symbol; gold fill. Sizes vary by deposit class.',
  },
  {
    id: 'platinum',
    englishName: 'Platinum Group Metals (PGM)',
    chineseName: '铂族金属',
    shape: 'circle',
    fillColor: '#C0C0C0',
    strokeColor: '#555',
    category: 'Precious Metals',
    notes: 'Circle symbol; silver-gray fill.',
  },
  {
    id: 'diamond',
    englishName: 'Diamond',
    chineseName: '金刚石',
    shape: 'diamond',
    fillColor: '#4A90D9',
    strokeColor: '#1A4A8A',
    category: 'Gemstones',
    notes: 'Diamond (rotated square) symbol; blue fill.',
  },
  {
    id: 'copper',
    englishName: 'Copper',
    chineseName: '铜矿',
    shape: 'circle',
    fillColor: '#B87333',
    strokeColor: '#6B3A1A',
    category: 'Base Metals',
    notes: 'Circle symbol; copper fill.',
  },
  {
    id: 'iron',
    englishName: 'Iron Ore',
    chineseName: '铁矿',
    shape: 'square',
    fillColor: '#8B1A1A',
    strokeColor: '#4A0A0A',
    category: 'Ferrous Metals',
    notes: 'Square symbol; dark red fill.',
  },
  {
    id: 'manganese',
    englishName: 'Manganese',
    chineseName: '锰矿',
    shape: 'square',
    fillColor: '#7B3B8B',
    strokeColor: '#3A1A4A',
    category: 'Ferrous Metals',
    notes: 'Square symbol; purple fill.',
  },
  {
    id: 'chromite',
    englishName: 'Chromite',
    chineseName: '铬矿',
    shape: 'square',
    fillColor: '#2D6B2D',
    strokeColor: '#1A3A1A',
    category: 'Ferrous Metals',
    notes: 'Square symbol; dark green fill.',
  },
  {
    id: 'cobalt',
    englishName: 'Cobalt',
    chineseName: '钴矿',
    shape: 'circle',
    fillColor: '#1A7A7A',
    strokeColor: '#0A3A3A',
    category: 'Base Metals',
    notes: 'Circle symbol; teal fill.',
  },
  {
    id: 'nickel',
    englishName: 'Nickel',
    chineseName: '镍矿',
    shape: 'circle',
    fillColor: '#7A8B2D',
    strokeColor: '#3A4A0A',
    category: 'Base Metals',
    notes: 'Circle symbol; olive-green fill.',
  },
  {
    id: 'bauxite',
    englishName: 'Bauxite',
    chineseName: '铝土矿',
    shape: 'triangle-up',
    fillColor: '#CC5500',
    strokeColor: '#7A2A00',
    category: 'Industrial Minerals',
    notes: 'Triangle symbol; orange fill.',
  },
  {
    id: 'uranium',
    englishName: 'Uranium',
    chineseName: '铀矿',
    shape: 'triangle-up',
    fillColor: '#6B2D8B',
    strokeColor: '#3A0A5A',
    category: 'Energy Minerals',
    notes: 'Triangle symbol; purple fill.',
  },
  {
    id: 'phosphate',
    englishName: 'Phosphate',
    chineseName: '磷矿',
    shape: 'circle',
    fillColor: '#8B7040',
    strokeColor: '#4A3A1A',
    category: 'Industrial Minerals',
    notes: 'Circle symbol; brown fill.',
  },
  {
    id: 'oil',
    englishName: 'Petroleum',
    chineseName: '石油',
    shape: 'circle',
    fillColor: '#1A1A1A',
    strokeColor: '#555',
    category: 'Energy',
    notes: 'Circle symbol; black fill.',
  },
  {
    id: 'gas',
    englishName: 'Natural Gas',
    chineseName: '天然气',
    shape: 'triangle-down',
    fillColor: '#E88010',
    strokeColor: '#8B4000',
    category: 'Energy',
    notes: 'Inverted triangle; orange fill.',
  },
  {
    id: 'coal',
    englishName: 'Coal',
    chineseName: '煤矿',
    shape: 'square',
    fillColor: '#303030',
    strokeColor: '#111',
    category: 'Energy',
    notes: 'Square symbol; dark fill.',
  },
  {
    id: 'graphite',
    englishName: 'Graphite',
    chineseName: '石墨',
    shape: 'square',
    fillColor: '#606060',
    strokeColor: '#222',
    category: 'Industrial Minerals',
    notes: 'Square symbol; medium-gray fill.',
  },
  {
    id: 'tantalum',
    englishName: 'Tantalum',
    chineseName: '钽矿',
    shape: 'square',
    fillColor: '#4A6B8B',
    strokeColor: '#1A3A5A',
    category: 'Industrial Minerals',
    notes: 'Square symbol; steel-blue fill.',
  },
  {
    id: 'lead-zinc',
    englishName: 'Lead–Zinc',
    chineseName: '铅锌',
    shape: 'circle',
    fillColor: '#7A8A9A',
    strokeColor: '#3A4A5A',
    category: 'Base Metals',
    notes: 'Circle symbol; blue-gray fill.',
  },
];

// Size classes from the original legend (超大型/大型/中型/小型)
export type SizeClass = 'world-class' | 'large' | 'medium' | 'small';

export const SIZE_PX: Record<SizeClass, number> = {
  'world-class': 13,
  'large':       10,
  'medium':       8,
  'small':        6,
};
