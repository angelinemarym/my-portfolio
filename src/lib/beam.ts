// Adapted from the supplied BeamWordmarkFooter reference.
export const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
export const beamTarget = (u: number) =>
  30 + 52 * clamp(Number.isFinite(u) ? u : 0.5, 0, 1);
export const drift = (t: number) =>
  58 + 9 * (0.7 * Math.sin(t * 0.21) + 0.3 * Math.sin(t * 0.077 + 1.3));
export const approach = (from: number, to: number, k: number, dt: number) =>
  to + (from - to) * Math.pow(1 - clamp(k, 0, 1), clamp(dt, 0, 0.1) * 60);
