# Oikos site — source & deployment

## What lives where

- `web/` — the **complete Next.js source** for oikosbyangelina.com. Restored 2026-07-09
  from the original dev working tree, plus every edit Angelina made directly to the
  compiled site up to that date (SEO renames, condensed service pages, contact redesign,
  minimal footer, Terms & Privacy pages, contact@oikosbyangelina.com everywhere).
- Repo root (`about/`, `services/`, `contact/`, `_next/`, ...) — the **old compiled
  static export** (built with `NEXT_PUBLIC_BASE_PATH=/oikos-cinematic` for GitHub Pages
  preview). Kept as the historical reference the source was verified against.
  **Do not hand-edit these files anymore — edit `web/src` and rebuild.**

## Build

```bash
cd web
npm install
npm run build   # next build + promotes out/full/index.html to out/index.html
```

Output lands in `web/out/`. The promote step makes `/` serve the cinematic homepage,
exactly like production.

## Hosting (Vercel)

`vercel.json` at the repo root is already configured:
build = `cd web && npm install && npm run build`, output = `web/out`.
Point the Vercel project's Git integration at this repo's `main` and every push
deploys automatically.

Live production currently deploys from the separate `oikos-site` repo (a frozen
static snapshot). Switching Vercel to this repo is the one remaining step — after
that, Angelina edits `web/src`, pushes, and the site updates.

## Verification story (2026-07-09)

Every page of a fresh `web/` build was diffed against the compiled export containing
Angelina's latest edits. Remaining differences are framework noise only (hashed chunk
names, React `<!-- -->` markers, HTML entity escaping). Screenshots of home, services,
service-detail, contact and terms match the design pixel-for-pixel.
