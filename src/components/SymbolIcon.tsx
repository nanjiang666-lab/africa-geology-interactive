import React from 'react';
import { SymbolShape } from '../data/mineralSymbols';

interface Props {
  shape: SymbolShape;
  fill: string;
  stroke: string;
  size: number;   // outer bounding box px
}

export default function SymbolIcon({ shape, fill, stroke, size }: Props) {
  const s = size;
  const sw = Math.max(1, size * 0.12); // stroke width

  if (shape === 'circle') {
    const r = s / 2 - sw / 2;
    return (
      <svg width={s} height={s} style={{ display: 'block' }}>
        <circle cx={s/2} cy={s/2} r={r} fill={fill} stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }

  if (shape === 'square') {
    const pad = sw / 2;
    return (
      <svg width={s} height={s} style={{ display: 'block' }}>
        <rect x={pad} y={pad} width={s - sw} height={s - sw}
          fill={fill} stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }

  if (shape === 'diamond') {
    const cx = s / 2, cy = s / 2, r = s / 2 - sw;
    const pts = `${cx},${sw} ${s-sw},${cy} ${cx},${s-sw} ${sw},${cy}`;
    return (
      <svg width={s} height={s} style={{ display: 'block' }}>
        <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }

  if (shape === 'triangle-up') {
    const pts = `${s/2},${sw} ${s-sw},${s-sw} ${sw},${s-sw}`;
    return (
      <svg width={s} height={s} style={{ display: 'block' }}>
        <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }

  if (shape === 'triangle-down') {
    const pts = `${sw},${sw} ${s-sw},${sw} ${s/2},${s-sw}`;
    return (
      <svg width={s} height={s} style={{ display: 'block' }}>
        <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }

  if (shape === 'star') {
    // 5-pointed star
    const cx = s/2, cy = s/2;
    const outerR = s/2 - sw, innerR = outerR * 0.4;
    let pts = '';
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      const r2 = i % 2 === 0 ? outerR : innerR;
      pts += `${cx + r2 * Math.cos(angle)},${cy + r2 * Math.sin(angle)} `;
    }
    return (
      <svg width={s} height={s} style={{ display: 'block' }}>
        <polygon points={pts.trim()} fill={fill} stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }

  return null;
}
