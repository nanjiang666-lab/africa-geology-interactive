import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GEOLOGY_LEGEND, LEGEND_AREA, MAX_COLOR_DIST } from '../data/geologyLegend';
import { TooltipState } from '../types';
import UnifiedTooltip from './UnifiedTooltip';

const IMG_W = 1338;
const IMG_H = 1262;

// ── Color helpers ──────────────────────────────────────────────────────────────
function rgbDist(a: [number,number,number], b: [number,number,number]) {
  return Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2 + (a[2]-b[2])**2);
}

function avgSample(data: Uint8ClampedArray): [number,number,number] | null {
  let r=0,g=0,b=0,n=0;
  for (let i=0; i<data.length; i+=4) {
    if (data[i]<25 && data[i+1]<25 && data[i+2]<25) continue;
    r+=data[i]; g+=data[i+1]; b+=data[i+2]; n++;
  }
  return n ? [Math.round(r/n), Math.round(g/n), Math.round(b/n)] : null;
}

function isNonGeo(c: [number,number,number]): boolean {
  const [r,g,b]=c;
  if (r>238 && g>238 && b>238) return true;
  if (r<30  && g<30  && b<30)  return true;
  const diff = Math.max(r,g,b) - Math.min(r,g,b);
  if (diff<18 && Math.max(r,g,b)<195) return true;
  return false;
}

function classify(c: [number,number,number]) {
  let best=null as (typeof GEOLOGY_LEGEND[number])|null, bestD=Infinity;
  for (const e of GEOLOGY_LEGEND) {
    const d = rgbDist(c, e.rgb);
    if (d < bestD) { bestD=d; best=e; }
  }
  return best && bestD < MAX_COLOR_DIST ? { entry: best, dist: bestD } : null;
}

// ── Component ─────────────────────────────────────────────────────────────────
const INIT_TT: TooltipState = {
  kind: 'none', screenX: 0, screenY: 0,
  geoEntry: null, isWater: false, sampledRgb: null, mineral: null,
};

export default function MapArea() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef       = useRef<CanvasRenderingContext2D | null>(null);
  const [tt, setTt] = useState<TooltipState>(INIT_TT);

  // Load image into off-screen canvas for pixel sampling
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = IMG_W; canvas.height = IMG_H;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => { ctx.drawImage(img,0,0,IMG_W,IMG_H); ctxRef.current=ctx; };
    img.src = '/africa-geology-map.png';
  }, []);

  // ── Geology hover ─────────────────────────────────────────────────────────
  const onMapMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const ctx = ctxRef.current;
    const cont = containerRef.current;
    if (!ctx || !cont) return;

    const rect = cont.getBoundingClientRect();
    const normX = (e.clientX - rect.left)  / rect.width;
    const normY = (e.clientY - rect.top)   / rect.height;

    // Skip legend area in bottom-left of image
    if (normX >= LEGEND_AREA.left && normX <= LEGEND_AREA.right &&
        normY >= LEGEND_AREA.top  && normY <= LEGEND_AREA.bottom) {
      setTt(INIT_TT); return;
    }

    const ix = Math.round(normX * IMG_W);
    const iy = Math.round(normY * IMG_H);
    const sx = Math.max(0, ix-2), sy = Math.max(0, iy-2);
    const sw = Math.min(5, IMG_W-sx), sh = Math.min(5, IMG_H-sy);
    if (sw<=0||sh<=0) return;

    const avg = avgSample(ctx.getImageData(sx,sy,sw,sh).data);
    if (!avg) { setTt(INIT_TT); return; }
    if (isNonGeo(avg)) { setTt(INIT_TT); return; }

    // Water check
    if (rgbDist(avg, [129,150,183]) < 52) {
      setTt({ kind:'geology', screenX:e.clientX, screenY:e.clientY,
        geoEntry:null, isWater:true, sampledRgb:avg, mineral:null });
      return;
    }

    const match = classify(avg);
    if (match) {
      setTt({ kind:'geology', screenX:e.clientX, screenY:e.clientY,
        geoEntry:match.entry, isWater:false, sampledRgb:avg, mineral:null });
    } else {
      setTt(INIT_TT);
    }
  }, []);

  const onMapLeave = useCallback(() => { setTt(INIT_TT); }, []);

  return (
    <>
      {/* Map wrapper */}
      <div
        ref={containerRef}
        onMouseMove={onMapMove}
        onMouseLeave={onMapLeave}
        style={{
          position: 'relative',
          display: 'inline-block',
          lineHeight: 0,
          cursor: 'crosshair',
          boxShadow: '0 2px 14px rgba(0,0,0,0.22)',
          borderRadius: 2,
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        {/* Base map image */}
        <img
          src="/africa-geology-map.png"
          alt="Africa Geology Map"
          style={{ display:'block', width:'100%', height:'auto', userSelect:'none' }}
          draggable={false}
        />
      </div>

      {/* Tooltip */}
      <UnifiedTooltip {...tt} />
    </>
  );
}
