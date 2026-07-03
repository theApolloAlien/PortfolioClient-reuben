# Reuben Tay · Portfolio

**Live: [portfolio-reuben.vercel.app](https://portfolio-reuben.vercel.app)**

Single-page portfolio for Reuben Tay (Cybersecurity & Cloud Architecture, CS @ NTU).

Vite + React. Dark "command deck" aesthetic: oversized Anton display type, JetBrains Mono HUD labels, a single amber accent on near-black, pixel-robot section mascots, glass panels with corner brackets, and a restrained sci-fi animation system (scramble headers, count-up stats, timeline draw). All motion respects `prefers-reduced-motion`.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
```

## Content

All copy lives in [src/content.js](src/content.js): identity/links, about, experience, projects, skills, certifications, leadership. Edit there; components render from it.

The hero photo is `public/reuben.png` (transparent cutout; the baked-in "WORK" arc at the bottom is hidden by a CSS mask fade on `.hero-photo`).
