# Oikos /full → multi-page build brief (in progress 2026-05-31)

## Task from Allen
Rework the finalized page at https://allenanant.github.io/oikos-cinematic/full/ into a 3-page site.
Source repo: `~/Documents/Oikos/` (Syncthing folder — git/cat/copy STALL here; work from a /tmp copy, deploy for previews).
Stack: Next.js 16 + React 19 + TS, static export, base path `/oikos-cinematic`. Deploy = build `web/`, copy `out/*` to repo root, push `cinematic` remote.

### Current /full composition (page.tsx confirmed)
CinematicHero (video scrub fwd) → Overture → Signature → Cinema (video scrub REVERSE, hero-v2.mp4) → Whisper → Material → Atelier → Philosophy → Transform → Spread → Consult → FullFooter → Reveals.
Components live in `web/src/components/full/` + `web/src/components/cinematic/`. CSS = `web/src/app/full/full.css` (50.9KB). Fonts in `layout.tsx` (Fraunces + Inter + Cormorant Garamond). Nav = FullNav (glass pill, lotus logo, tint toggles on `.on-light` when scrollY > innerHeight*1.05).

## Standing rules (memory)
- Oikos = OFFICES, biophilic restructure. Not homes, not gifting. No humans/silhouettes in imagery/video.
- Fonts: brand DNA is EB Garamond + Inter historically, but /full uses Fraunces + Inter + Cormorant. Keep /full's actual fonts.
- Imagery: Pexels direct URLs ("biophilic office", "lime plaster"). EL blocks human portraits.
- Don't push parent working tree to oikos-cinematic incorrectly; follow rm/cp/push flow.

## NEW CONTENT TO BUILD (Allen's spec)

### PAGE 1 — HOME (/full)
- Hero: "We restructure offices that forgot how to breathe" → "Design a sustainable life that looks as beautiful as it is responsible."
- Belief: "We believe sustainability isn't just about reducing harm, it is about designing places that nurture both people and the planet."
- "Most 'green' offices stop at a planted wall. Real sustainable design works at a deeper level. With Oikos, you can design a workspace that is truly sustainable and better to work in."
- WHAT WE DO (3, each with image):
  1. Workspace Design — A full revision of where you work, from first concept to final fitting.
  2. Biophilic & Wellbeing — Light, air, greenery and natural materials, arranged to stimulate each sense.
  3. Sustainable Sourcing — Materials chosen to last and to stand up to scrutiny.
- WHY IT MATTERS: "A workspace designed this way does more than look right. In post-occupancy studies of biophilic office redesigns, productivity has risen by around 18%, sense of wellbeing at work by close to 28%, and productive meetings by over 20%." (stat counters: 18% / 28% / 20%)
- WHY CHOOSE OIKOS (toward end): "At Oikos, sustainability isn't about perfection; it's about intention. We help you bring purpose, creativity, and authenticity into the way you live and work."
- CLOSING: "Tell us about the space you have in mind. Every project begins with a conversation. Begin with your space →" + soft wide aspirational image (finished room bathed in light, from the doorway) + note "Take your first step towards a sustainable future."

### PAGE 2 — ABOUT (new route /about)
- Hero: "We restructure offices into rooms that breathe."
- Etymology: "Oikos. Greek for home. The root, also, of both ecology and economy. The way a household is kept, and the world that keeps it." + "Your workplace is your other home. Thus Oikos started with a simple conviction: it ought to be kept with the same care."
- 3 cards (each image):
  - 01 Light, brought to the middle. / Daylight-led restructure / "Pull light into the most dead centre of your space, through the core." IMG: deep floor-plate, light at centre.
  - 02 Fresh air that you actually feel / Planting as a working system / "We treat planting as air infrastructure, not decoration." IMG: structural living wall.
  - 03 Quiet, built in. / Acoustics as material / "We build quiet from the materials up, each design tuned by measurement. The easiest way to feel expensive is to be quiet." IMG: calm soft-surfaced workspace.
- Our Expertise (paragraph as given).
- Closing: "Empower your business with sustainable practices. Share details of your project with us today, and take the first step towards a greener and more responsible future."

### PAGE 3 — SERVICES (new route /services)
Layout: text-led, ONE column, generous space. One quiet detail image at top (workspace corner, planting + oak). Long scroll. No icon grids, no tiles. Restraint.
- ① OPENING: "Restructures the workplace as a climate — light, air, quiet, material."
- ② FOUR SERVICES:
  - 01 Workplace restructure. "We restructure offices from the climate up. Light is re-planned. Air and planting are designed as a single system. Acoustics are tuned by measurement. Materials are chosen for how they age, not how they photograph. Concept through completion." For: companies redesigning the office their team works in every day.
  - 02 A reading of the room. "A short, standalone engagement. Before any design begins, we read the room. You receive a written reading and a set of moves the room is asking for, ranked by what it would change. A reading is useful on its own, many offices need fixing, not redesigning, and it is how every full restructure begins." For: companies who suspect their office is the problem, and want to know what it is before committing.
  - 03 Material direction. "If you have an architect or a designer already, and what you're missing is the material conviction the room deserves, then we come in as a specialist layer. Sourcing, vetting, sample assembly, defensible claims. We hand the design team a palette that holds up to a question." For: projects with a designer in place that want materials chosen by someone who works in them every day.
  - 04 Aftercare. "Aftercare is the engagement that begins when most studios leave — six months of post-handover work, a written care calendar, scheduled visits, and the planting kept alive by people who know why it was specified. Included with every restructure. Available on its own to projects we didn't design, where the room is good but the room is dying." For: finished spaces that need to stay finished.
- ③ "how we work" beat — NO COPY PROVIDED by Allen (numbering skips ③). DRAFT restrained copy in Oikos voice + flag to Allen.
- ④ CLOSING: "Tell us about the room. Begin a brief →"

### NAV
Extend FullNav from logo-only pill to: logo + Home / About / Services + CTA. Keep glass pill + tint-toggle aesthetic. Links must work under base path /oikos-cinematic across routes.

## OPEN DECISIONS (made, may revisit with Allen)
- Home: follow new lean spec; KEEP CinematicHero + one video scrub (Cinema) + reuse Transform before/after as proof. Retire Material/Atelier/Spread/Philosophy from home (move Philosophy-style numbering into Services). Confirm with Allen after first deploy.
- New routes: /about and /services (siblings of /full). Update deploy to copy about/ services/ too.
- Services ③ "how we work": draft copy, flag.

## INFRA TODO
- Confirm git remotes + deploy flow from a /tmp copy (parent repo git stalls in Syncthing).
- next.config.ts: had `typescript.ignoreBuildErrors` + bogus eslint key (Next16 warns). Verify before build.
- Build: `cd web && NEXT_PUBLIC_BASE_PATH=/oikos-cinematic npm run build` then copy out/{cinematic,full,about,services,_next} to root, push cinematic remote.
- next dev hangs in Syncthing folder — use build + `npx serve out/` for local preview, or browser-harness on live.

## STATUS
- [x] Read page.tsx, FullNav location, confirmed live routes (full, cinematic, cinematic-v2..v5, cinematic-index all 200)
- [ ] Read full.css (50.9KB — needs chunked read), all components, layout fonts, CinematicHero, Consult, Reveals
- [ ] Set up /tmp working copy + confirm git/deploy
- [ ] Build home rework + About + Services + nav
- [ ] Build, deploy, verify on live, show Allen
