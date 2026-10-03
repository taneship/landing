// Writes the social images (one per language) and the raster icons into public/.
// Run it with `npm run images` after changing a title below or public/favicon.svg, then commit the files.
// The images are committed, not built on the host: their text is drawn with the fonts of this machine.

import { readFile, writeFile } from 'node:fs/promises';

import sharp from 'sharp';

const publicFolder = new URL('../public/', import.meta.url);

const socialImages = {
    en: {
        title: ['The Laravel React starter kit', 'that stays clean when', 'agents write the code'],
        editions: 'Free, MIT  ·  Pro and Teams coming soon',
    },
    fr: {
        title: ['Le starter kit Laravel React', 'qui reste propre quand des', 'agents écrivent le code'],
        editions: 'Free, MIT  ·  Pro et Teams bientôt disponibles',
    },
    es: {
        title: ['El starter kit de Laravel y React', 'que sigue limpio cuando los', 'agentes escriben el código'],
        editions: 'Free, MIT  ·  Pro y Teams próximamente',
    },
};

const fonts = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";

function socialImage({ title, editions }) {
    const lines = title
        .map((line, index) => `<tspan x="80" dy="${index === 0 ? 0 : 84}">${line}</tspan>`)
        .join('');

    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
        <rect width="1200" height="630" fill="#0a0a0a" />
        <rect x="80" y="72" width="56" height="56" rx="12" fill="#fafafa" />
        <path d="M94 88h28v7.4h-10.3V114h-7.4V95.4H94z" fill="#0a0a0a" />
        <text x="156" y="113" font-family="${fonts}" font-size="36" font-weight="600" fill="#fafafa">Taneship</text>
        <text x="80" y="268" font-family="${fonts}" font-size="68" font-weight="700" fill="#fafafa">${lines}</text>
        <text x="80" y="508" font-family="${fonts}" font-size="30" fill="#a3a3a3">Laravel 13  ·  Inertia 3  ·  React 19  ·  TypeScript  ·  shadcn/ui</text>
        <text x="80" y="558" font-family="${fonts}" font-size="30" fill="#a3a3a3">${editions}</text>
    </svg>`;
}

/** An .ico file that holds one PNG image. */
function icoOf(png, size) {
    const header = Buffer.alloc(22);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: icon
    header.writeUInt16LE(1, 4); // one image
    header.writeUInt8(size, 6); // width
    header.writeUInt8(size, 7); // height
    header.writeUInt8(0, 8); // no palette
    header.writeUInt8(0, 9); // reserved
    header.writeUInt16LE(1, 10); // color planes
    header.writeUInt16LE(32, 12); // bits per pixel
    header.writeUInt32LE(png.length, 14); // size of the image
    header.writeUInt32LE(22, 18); // offset of the image

    return Buffer.concat([header, png]);
}

for (const [locale, content] of Object.entries(socialImages)) {
    await sharp(Buffer.from(socialImage(content)))
        .png()
        .toFile(new URL(`og/${locale}.png`, publicFolder).pathname);
}

const favicon = await readFile(new URL('favicon.svg', publicFolder));

await sharp(favicon, { density: 400 })
    .resize(180, 180)
    .png()
    .toFile(new URL('apple-touch-icon.png', publicFolder).pathname);

const faviconPng = await sharp(favicon, { density: 400 }).resize(32, 32).png().toBuffer();
await writeFile(new URL('favicon.ico', publicFolder), icoOf(faviconPng, 32));
