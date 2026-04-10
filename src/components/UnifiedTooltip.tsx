import React from 'react';
import { TooltipState } from '../types';
import { MINERAL_SYMBOLS } from '../data/mineralSymbols';
import SymbolIcon from './SymbolIcon';

const CARD_W   = 278;
const OFFSET_X = 18;
const OFFSET_Y = 10;

const ERA_COLOR: Record<string, string> = {
  'Cenozoic':                            '#5A6A2A',
  'Mesozoic':                            '#2A6060',
  'Paleozoic':                           '#6A4020',
  'Neoproterozoic':                      '#3A2A6A',
  'Neoproterozoic–Paleoproterozoic':     '#4A2A6A',
  'Proterozoic':                         '#5A2A6A',
  'Archean':                             '#2A2A5A',
  'Eoarchean':                           '#3A1A3A',
  'Paleoarchean':                        '#4A1A4A',
};

const CATEGORY_COLOR: Record<string, string> = {
  'Precious Metals':  '#8B6914',
  'Gemstones':        '#1A4A8A',
  'Base Metals':      '#3A6B3A',
  'Ferrous Metals':   '#6B1A1A',
  'Energy':           '#6B3A1A',
  'Energy Minerals':  '#5A1A6B',
  'Industrial Minerals': '#6B5A2A',
};

function toHex(rgb: [number, number, number]) {
  return '#' + rgb.map(v => v.toString(16).padStart(2, '0')).join('');
}

export default function UnifiedTooltip({ kind, screenX, screenY, geoEntry, isWater, sampledRgb, mineral }: TooltipState) {
  if (kind === 'none') return null;

  const left = screenX + OFFSET_X + CARD_W > window.innerWidth
    ? screenX - CARD_W - OFFSET_X
    : screenX + OFFSET_X;
  const top = Math.min(screenY + OFFSET_Y, window.innerHeight - 200);

  // ── MINERAL tooltip ──────────────────────────────────────────────────────────
  if (kind === 'mineral' && mineral) {
    const sym = MINERAL_SYMBOLS.find(s => s.id === mineral.mineralId);
    const catColor = sym ? (CATEGORY_COLOR[sym.category] ?? '#555') : '#555';

    return (
      <div style={card(left, top)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          {sym && (
            <SymbolIcon
              shape={sym.shape}
              fill={sym.fillColor}
              stroke={sym.strokeColor}
              size={14}
            />
          )}
          <span style={{ fontWeight: 700, fontSize: 14 }}>
            {mineral.englishMineralName}
          </span>
        </div>

        <div style={{ marginBottom: 6 }}>
          <span style={badge(catColor)}>{sym?.category ?? 'Mineral'}</span>
          <span style={badge('#556')}>
            {mineral.sizeClass === 'world-class' ? 'World-class' :
             mineral.sizeClass === 'large' ? 'Large deposit' :
             mineral.sizeClass === 'medium' ? 'Medium deposit' : 'Small deposit'}
          </span>
        </div>

        <div style={{ fontSize: 13, marginBottom: 5 }}>
          <span style={{ color: '#666' }}>Location: </span>
          <strong>{mineral.englishLocation}</strong>
        </div>

        {mineral.notes && (
          <div style={{ fontSize: 11.5, color: '#333', lineHeight: 1.6, borderTop: '1px solid #e8e4de', paddingTop: 5 }}>
            {mineral.notes}
          </div>
        )}

        {mineral.confidence !== 'high' && (
          <div style={{ fontSize: 10.5, color: '#999', marginTop: 4, fontStyle: 'italic' }}>
            Location confidence: {mineral.confidence}
          </div>
        )}
      </div>
    );
  }

  // ── GEOLOGY tooltip ──────────────────────────────────────────────────────────
  if (kind === 'geology') {
    if (isWater) {
      return (
        <div style={card(left, top)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ ...swatch, background: '#8196b3' }} />
            <span style={{ fontWeight: 700, fontSize: 13 }}>Ocean / Water Body</span>
          </div>
        </div>
      );
    }

    if (!geoEntry) return null;

    const eraColor = ERA_COLOR[geoEntry.era] ?? '#444';
    const legendHex = toHex(geoEntry.rgb);
    const sampleHex = sampledRgb ? toHex(sampledRgb) : legendHex;

    return (
      <div style={card(left, top)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ ...swatch, background: `rgb(${geoEntry.rgb.join(',')})` }} />
          <span style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.3 }}>
            {geoEntry.englishLabel}
          </span>
        </div>

        <div style={{ marginBottom: 6 }}>
          <span style={badge(eraColor)}>{geoEntry.era}</span>
        </div>

        <div style={{ fontSize: 11.5, color: '#333', lineHeight: 1.6, borderTop: '1px solid #e8e4de', paddingTop: 5 }}>
          {geoEntry.notes}
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 5, fontSize: 10.5, color: '#aaa', fontFamily: 'monospace' }}>
          <span>legend: {legendHex}</span>
          {sampleHex !== legendHex && <span>pixel: {sampleHex}</span>}
        </div>
      </div>
    );
  }

  return null;
}

const card = (left: number, top: number): React.CSSProperties => ({
  position: 'fixed', left, top,
  zIndex: 300, pointerEvents: 'none',
  width: CARD_W,
  background: 'rgba(255,255,255,0.98)',
  border: '1px solid #c0b8a8',
  borderRadius: 4,
  boxShadow: '0 4px 20px rgba(0,0,0,0.20)',
  padding: '10px 13px',
  fontFamily: 'Georgia, serif',
});

const swatch: React.CSSProperties = {
  display: 'inline-block',
  width: 14, height: 14,
  borderRadius: 2,
  border: '1px solid rgba(0,0,0,0.2)',
  flexShrink: 0,
};

function badge(bg: string): React.CSSProperties {
  return {
    display: 'inline-block',
    background: bg,
    color: '#f5f0e8',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.04em',
    padding: '2px 6px',
    borderRadius: 3,
    textTransform: 'uppercase',
    marginRight: 4,
  };
}
