import { GALLERY, type GalleryImage } from "@/lib/mock";
import mainGallery from "@/lib/main-gallery.json";

/** Featured "main" images the client uploaded — used prominently on home + page heroes. */
export const MAIN_GALLERY = mainGallery as GalleryImage[];

export type ImagePool = "event" | "main";
const pool = (p: ImagePool) => (p === "main" ? MAIN_GALLERY : GALLERY);

/** Deterministic small hash so each page picks a stable, distinct image set. */
export function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Returns `count` images starting at `offset`, cycling through the chosen pool. */
export function imageSet(offset: number, count: number, src: ImagePool = "event"): GalleryImage[] {
  const list = pool(src);
  const n = list.length;
  const start = ((offset % n) + n) % n;
  return Array.from({ length: count }, (_, i) => list[(start + i) % n]);
}

/**
 * Returns `count` images spread evenly across the pool (stride = n/count),
 * so each showcase shows varied, non-adjacent photos instead of near-duplicates.
 */
export function imageSpread(offset: number, count: number, src: ImagePool = "event"): GalleryImage[] {
  const list = pool(src);
  const n = list.length;
  const stride = Math.max(1, Math.floor(n / count));
  const start = ((offset % n) + n) % n;
  return Array.from({ length: count }, (_, i) => list[(start + i * stride) % n]);
}
