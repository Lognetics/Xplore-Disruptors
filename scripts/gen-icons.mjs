// Generates PWA + Apple icons from the brand X mark using sharp.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "icons");
await mkdir(OUT, { recursive: true });

// X blades (same geometry as the React XMark, scaled to a 0..64 viewBox).
const blades = `
  <path d="M6 7 L20 7 L34 26 L27 35 Z M37 39 L44 30 L58 57 L44 57 Z" fill="url(#g)"/>
  <path d="M44 7 L58 7 L26 57 L12 57 L30 33 Z" fill="url(#g)" opacity="0.92"/>
`;

function svg({ size, padding = 0, bg = true }) {
  const scale = (size * (1 - padding * 2)) / 64;
  const offset = size * padding;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"
        gradientTransform="translate(${offset},${offset}) scale(${scale})">
        <stop offset="0" stop-color="#4a97ff"/>
        <stop offset="0.55" stop-color="#0a54f5"/>
        <stop offset="1" stop-color="#ff6b2c"/>
      </linearGradient>
      <radialGradient id="bg" cx="0.5" cy="0.3" r="0.9">
        <stop offset="0" stop-color="#0d1430"/>
        <stop offset="1" stop-color="#05070e"/>
      </radialGradient>
    </defs>
    ${bg ? `<rect width="${size}" height="${size}" rx="${size * 0.22}" fill="url(#bg)"/>` : ""}
    <g transform="translate(${offset},${offset}) scale(${scale})">${blades}</g>
  </svg>`;
}

const targets = [
  { name: "icon-192.png", size: 192, padding: 0.18 },
  { name: "icon-512.png", size: 512, padding: 0.18 },
  { name: "maskable-512.png", size: 512, padding: 0.26 }, // extra safe-zone padding
  { name: "apple-touch-icon.png", size: 180, padding: 0.16 },
];

for (const t of targets) {
  await sharp(Buffer.from(svg({ size: t.size, padding: t.padding })))
    .png()
    .toFile(join(OUT, t.name));
  console.log("✓", t.name);
}

// Favicon (32px, transparent, no bg) into /public
await sharp(Buffer.from(svg({ size: 64, padding: 0.05, bg: false })))
  .resize(48, 48)
  .png()
  .toFile(join(process.cwd(), "public", "favicon.png"));
console.log("✓ favicon.png");
