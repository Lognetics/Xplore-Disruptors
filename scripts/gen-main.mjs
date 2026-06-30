// Process the uploaded logo + "Xplore Main images" into web-ready assets.
import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, ".source-media", "main");

// ---- Logo ----
const BRAND = join(ROOT, "public", "brand");
await mkdir(BRAND, { recursive: true });
await sharp(join(SRC, "Xplore Logo.PNG"))
  .trim()
  .resize({ width: 760, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(join(BRAND, "xplore-logo.png"));
console.log("✓ brand/xplore-logo.png");

// ---- Featured images ----
const OUT = join(ROOT, "public", "media", "main");
await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC))
  .filter((f) => /\.(jpe?g)$/i.test(f))
  .sort();

const manifest = [];
let i = 0;
for (const file of files) {
  const id = `main-${String(i + 1).padStart(2, "0")}`;
  try {
    const meta = await sharp(join(SRC, file)).metadata();
    const landscape = (meta.width ?? 0) >= (meta.height ?? 0);
    await sharp(join(SRC, file)).rotate().resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 }).toFile(join(OUT, `${id}.webp`));
    await sharp(join(SRC, file)).rotate().resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 74 }).toFile(join(OUT, `${id}-thumb.webp`));
    manifest.push({ id, src: `/media/main/${id}.webp`, thumb: `/media/main/${id}-thumb.webp`, orientation: landscape ? "landscape" : "portrait" });
    console.log("✓", id, file, landscape ? "(landscape)" : "(portrait)");
    i++;
  } catch (e) {
    console.warn("skip", file, e.message);
  }
}

await writeFile(join(ROOT, "src", "lib", "main-gallery.json"), JSON.stringify(manifest, null, 2));
console.log(`\nWrote ${manifest.length} featured images + manifest.`);
