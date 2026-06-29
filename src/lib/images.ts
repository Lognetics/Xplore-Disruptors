import { GALLERY, type GalleryImage } from "@/lib/mock";

/** Deterministic small hash so each page picks a stable, distinct image set. */
export function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Returns `count` gallery images starting at `offset`, cycling through the set. */
export function imageSet(offset: number, count: number): GalleryImage[] {
  const n = GALLERY.length;
  const start = ((offset % n) + n) % n;
  return Array.from({ length: count }, (_, i) => GALLERY[(start + i) % n]);
}

/**
 * Returns `count` images spread evenly across the whole gallery (stride = n/count),
 * so each showcase shows varied, non-adjacent photos instead of near-duplicates.
 */
export function imageSpread(offset: number, count: number): GalleryImage[] {
  const n = GALLERY.length;
  const stride = Math.max(1, Math.floor(n / count));
  const start = ((offset % n) + n) % n;
  return Array.from({ length: count }, (_, i) => GALLERY[(start + i * stride) % n]);
}
