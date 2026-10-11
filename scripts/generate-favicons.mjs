/**
 * Renders PNG favicons from the Ud mark (U + accent d).
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const pathU =
  'M4 10h2.35v6.55a3.25 3.25 0 0 0 6.5 0V10h2.35v6.8a6.05 6.05 0 0 1-12.1 0V10z';
const pathD =
  'M15.85 7.75h2.15v10.75h-2.15V7.75z M20.85 12.45a3.35 3.35 0 1 1 0 6.7a3.35 3.35 0 1 1 0-6.7';

const ACCENT = '#3b82f6';

function iconSvg({ fillU, background }) {
  const bg = background
    ? `<rect width="32" height="32" rx="7" fill="${background}"/>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  ${bg}
  <path fill="${fillU}" fill-rule="evenodd" d="${pathU}"/>
  <path fill="${ACCENT}" fill-rule="evenodd" d="${pathD}"/>
</svg>`;
}

const sizes = [
  { name: 'favicon-16x16.png', size: 16, fillU: '#171717', background: null },
  { name: 'favicon-32x32.png', size: 32, fillU: '#171717', background: null },
  { name: 'apple-touch-icon.png', size: 180, fillU: '#f5f5f5', background: '#0a0a0a' },
  { name: 'favicon-192x192.png', size: 192, fillU: '#f5f5f5', background: '#0a0a0a' },
  { name: 'favicon-512x512.png', size: 512, fillU: '#f5f5f5', background: '#0a0a0a' },
];

for (const { name, size, fillU, background } of sizes) {
  const svg = iconSvg({ fillU, background });
  const png = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  writeFileSync(join(publicDir, name), png);
}

console.log('Generated PNG favicons in public/');
