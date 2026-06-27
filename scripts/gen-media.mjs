// Curate + optimize a subset of event photos from .source-media into public/media.
import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, ".source-media");
const OUT = join(ROOT, "public", "media", "gallery");
await mkdir(OUT, { recursive: true });

const all = (await readdir(SRC))
  .filter((f) => /\.(jpe?g)$/i.test(f))
  .sort();

// Spread a curated subset across the full shoot.
const COUNT = 30;
const step = Math.max(1, Math.floor(all.length / COUNT));
const picks = [];
for (let i = 0; i < all.length && picks.length < COUNT; i += step) picks.push(all[i]);

const manifest = [];
let idx = 0;
for (const file of picks) {
  const id = `xpl-${String(idx + 1).padStart(2, "0")}`;
  const input = join(SRC, file);
  try {
    const meta = await sharp(input).metadata();
    const landscape = (meta.width ?? 0) >= (meta.height ?? 0);
    // Full (max 1600w) + thumb (max 800w), both WebP.
    await sharp(input).rotate().resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 78 }).toFile(join(OUT, `${id}.webp`));
    await sharp(input).rotate().resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 72 }).toFile(join(OUT, `${id}-thumb.webp`));
    manifest.push({ id, src: `/media/gallery/${id}.webp`, thumb: `/media/gallery/${id}-thumb.webp`, orientation: landscape ? "landscape" : "portrait" });
    console.log("✓", id, file, landscape ? "(landscape)" : "(portrait)");
    idx++;
  } catch (e) {
    console.warn("skip", file, e.message);
  }
}

await writeFile(join(ROOT, "src", "lib", "gallery.json"), JSON.stringify(manifest, null, 2));
console.log(`\nWrote ${manifest.length} images + manifest.`);
