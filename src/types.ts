import { GeologyEntry } from './data/geologyLegend';
import { MineralPoint } from './data/mineralPoints';

export type HoverKind = 'geology' | 'mineral' | 'none';

export interface TooltipState {
  kind: HoverKind;
  screenX: number;
  screenY: number;
  // geology
  geoEntry: GeologyEntry | null;
  isWater: boolean;
  sampledRgb: [number, number, number] | null;
  // mineral
  mineral: MineralPoint | null;
}
