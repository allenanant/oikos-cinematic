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

The Vercel project `oikos` is linked to this repo (`main`), with dashboard settings:
Root Directory = `web`, Build Command = `npm run build`, Output Directory = `out`,
Framework = Other (static). `web/vercel.json` keeps trailing slashes on.
Every push to `main` builds and deploys production automatically — for Allen and
for Angelina.

Rollback target if a deploy ever misbehaves: `dpl_7FSurjEyr9EVf3gRvrnk8NiiJLEV`
(the frozen June 19 snapshot from `oikos-site`).

## Verification story (2026-07-09)

Every page of a fresh `web/` build was diffed against the compiled export containing
Angelina's latest edits. Remaining differences are framework noise only (hashed chunk
names, React `<!-- -->` markers, HTML entity escaping). Screenshots of home, services,
service-detail, contact and terms match the design pixel-for-pixel.
