import React, { useState } from 'react';
import { GEOLOGY_LEGEND } from '../data/geologyLegend';
import { MINERAL_SYMBOLS, SIZE_PX } from '../data/mineralSymbols';
import SymbolIcon from './SymbolIcon';

// Group geology entries by era section
const GEO_SECTIONS = [
  { section: 'Cenozoic',     ids: ['cenozoic-sed','cenozoic-vol'] },
  { section: 'Mesozoic',     ids: ['mesozoic-sed-vol','mesozoic-intrusive-vol'] },
  { section: 'Paleozoic',    ids: ['paleozoic-ign-meta','paleozoic-granite'] },
  { section: 'Neoproterozoic', ids: ['neoproterozoic-sed','neoproterozoic-sed-vol','neoproterozoic-meta','neo-paleo-intrusive'] },
  { section: 'Proterozoic',  ids: ['proterozoic-sed-vol'] },
  { section: 'Archean',      ids: ['mesoarchean-gneiss','mesoarchean-sed-orthogneiss','archean-basement'] },
  { section: 'Eoarchean',    ids: ['eoarchean-gneiss','ancient-meta'] },
];

// Mineral order matching the original map legend
const MIN_ORDER = [
  'iron','manganese','tantalum','nickel','bauxite','copper','chromite',
  'uranium','lead-zinc','diamond','gold','phosphate','platinum','cobalt','graphite',
];

const SECTION_COLOR: Record<string,string> = {
  'Cenozoic':         '#5A6A2A', 'Mesozoic':         '#2A6060',
  'Paleozoic':        '#6A4020', 'Neoproterozoic':   '#3A2A6A',
  'Proterozoic':      '#5A2A6A', 'Archean':          '#2A2A5A',
  'Eoarchean':        '#3A1A3A', 'Precious Metals':  '#8B6914',
  'Base Metals':      '#3A6B3A', 'Ferrous / Steel':  '#6B1A1A',
  'Energy':           '#6B3A1A', 'Industrial':       '#6B5A2A',
};

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{
      fontSize: 9.5, fontWeight: 700, letterSpacing: '0.06em',
      textTransform: 'uppercase', color: SECTION_COLOR[label] ?? '#555',
      marginTop: 7, marginBottom: 2,
      paddingBottom: 2, borderBottom: '1px solid #e0d8cc',
    }}>
      {label}
    </div>
  );
}

export default function LegendPanel() {
  const [geoOpen, setGeoOpen] = useState(true);
  const [minOpen, setMinOpen] = useState(true);

  return (
    <div style={{
      width: 248,
      flexShrink: 0,
      borderLeft: '1px solid #d0c8b8',
      overflowY: 'auto',
      background: '#faf8f3',
      fontFamily: 'Georgia, serif',
      padding: '10px 10px 20px',
    }}>

      {/* ── GEOLOGICAL LEGEND ───────────────────────────────────────────────── */}
      <div
        onClick={() => setGeoOpen(o => !o)}
        style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
          textTransform: 'uppercase', color: '#333',
          cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: 4, borderBottom: '1.5px solid #b0a898',
          marginBottom: 4, userSelect: 'none',
        }}
      >
        <span>Geological Units</span>
        <span style={{ fontSize: 9, color: '#999' }}>{geoOpen ? '▲' : '▼'}</span>
      </div>

      {geoOpen && (
        <>
          {GEO_SECTIONS.map(({ section, ids }) => {
            const entries = ids.map(id => GEOLOGY_LEGEND.find(e => e.id === id)).filter(Boolean) as typeof GEOLOGY_LEGEND;
            if (!entries.length) return null;
            return (
              <React.Fragment key={section}>
                <SectionHeader label={section} />
                {entries.map(e => (
                  <div key={e.id} style={{ display:'flex', alignItems:'center', gap:6, padding:'2.5px 0' }}>
                    <span style={{
                      display:'inline-block', width:14, height:10, flexShrink:0,
                      background:`rgb(${e.rgb.join(',')})`,
                      border:'0.5px solid rgba(0,0,0,0.25)', borderRadius:1,
                    }} />
                    <span style={{ fontSize:10.5, lineHeight:1.3, color:'#222' }}>
                      {e.englishLabel}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            );
          })}
          {/* Water */}
          <SectionHeader label="Water" />
          <div style={{ display:'flex', alignItems:'center', gap:6, padding:'2.5px 0' }}>
            <span style={{ display:'inline-block', width:14, height:10, flexShrink:0, background:'rgb(129,150,183)', border:'0.5px solid rgba(0,0,0,0.25)', borderRadius:1 }} />
            <span style={{ fontSize:10.5, color:'#222' }}>Ocean / Water Body</span>
          </div>
        </>
      )}

      {/* ── MINERAL LEGEND ──────────────────────────────────────────────────── */}
      <div
        onClick={() => setMinOpen(o => !o)}
        style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
          textTransform: 'uppercase', color: '#333',
          cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: 4, borderBottom: '1.5px solid #b0a898',
          marginTop: 14, marginBottom: 4, userSelect: 'none',
        }}
      >
        <span>Mineral Deposits</span>
        <span style={{ fontSize: 9, color: '#999' }}>{minOpen ? '▲' : '▼'}</span>
      </div>

      {minOpen && (
        <>
          {/* Size key */}
          <div style={{ marginBottom:6, fontSize:9.5, color:'#666' }}>
            <span style={{ fontWeight:600 }}>Symbol size: </span>
            {(['world-class','large','medium','small'] as const).map(s => (
              <span key={s} style={{ marginRight:6, whiteSpace:'nowrap' }}>
                <svg width={SIZE_PX[s]} height={SIZE_PX[s]} style={{ display:'inline-block', verticalAlign:'middle', marginRight:2 }}>
                  <circle cx={SIZE_PX[s]/2} cy={SIZE_PX[s]/2} r={SIZE_PX[s]/2-1} fill="#888" />
                </svg>
                {s === 'world-class' ? 'World-class' : s.charAt(0).toUpperCase()+s.slice(1)}
              </span>
            ))}
          </div>

          {MIN_ORDER.map(id => {
            const s = MINERAL_SYMBOLS.find(s => s.id === id);
            if (!s) return null;
            return (
              <div key={s.id} style={{ display:'flex', alignItems:'center', gap:6, padding:'2.5px 0' }}>
                <span style={{ flexShrink:0 }}>
                  <SymbolIcon shape={s.shape} fill={s.fillColor} stroke={s.strokeColor} size={12} />
                </span>
                <span style={{ fontSize:10.5, color:'#222' }}>{s.englishName}</span>
              </div>
            );
          })}
        </>
      )}

      {/* Footnote */}
      <div style={{
        marginTop:14, paddingTop:8, borderTop:'1px solid #e0d8cc',
        fontSize:9, color:'#aaa', lineHeight:1.5, fontStyle:'italic',
      }}>
        Hover over map regions for geology labels.
      </div>
    </div>
  );
}
