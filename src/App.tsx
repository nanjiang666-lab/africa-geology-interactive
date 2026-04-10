import React from 'react';
import MapArea from './components/MapArea';
import LegendPanel from './components/LegendPanel';

export default function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#ede9e0' }}>

      {/* Header */}
      <header style={{
        flexShrink: 0,
        height: 52,
        background: '#1e1a14',
        color: '#e8e0d0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        fontFamily: 'Georgia, serif',
      }}>
        <div>
          <span style={{ fontWeight: 700, fontSize: 15.5, letterSpacing: '0.02em' }}>
            Africa — Geology &amp; Mineral Deposits
          </span>
          <span style={{ marginLeft: 14, fontSize: 11.5, color: '#a09078' }}>
            Interactive Map
          </span>
        </div>
        <div style={{ fontSize: 11, color: '#a09078' }}>
          hover regions → geology · hover symbols → minerals
        </div>
      </header>

      {/* Body: map + legend side by side */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

        {/* Map scroll area */}
        <div style={{ flex: 1, overflow: 'auto', minWidth: 0, padding: '16px 12px 16px 16px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <MapArea />
        </div>

        {/* Legend panel — always visible, never on top of map */}
        <LegendPanel />
      </div>
    </div>
  );
}
