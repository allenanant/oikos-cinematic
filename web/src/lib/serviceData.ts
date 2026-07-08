// Content for the four internal service-detail pages under /services/<slug>/.
// Voice: quiet-luxury editorial, British spelling, no em dashes. Headlines may
// mark one emphasis word with *asterisks* (rendered as italic terracotta <em>).
// Approach headings and the optional included-eyebrow render their LAST word
// in the terracotta accent automatically.

export type ServiceStep = {
  n: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};
export type ServiceItem = { title: string; body: string };
export type ServiceFaq = { q: string; a: string };

export type ServiceData = {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  hero: { h1: string; dek: string; image: string; alt: string };
  approach: { heading: string; wide?: boolean; steps: ServiceStep[] };
  included: { eyebrow?: string; heading: string; items: ServiceItem[] };
  detail: { heading: string; body: string[]; image: string; alt: string; caption?: string };
  faq: ServiceFaq[];
  related: string[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "workplace-restructure",
    title: "Sustainable workplace design",
    eyebrow: "the full-scope engagement",
    metaTitle: "Sustainable workplace design · Oikos",
    metaDescription:
      "Sustainable workplace design that treats the office as one system — light, air, planting, acoustics and materials, tuned by measurement. Concept to completion in Delhi.",
    hero: {
      h1: "Sustainable workplace design",
      dek: "A complete office redesign. Light, air, planting, acoustics and materials, rebuilt as one system around the way your team actually works.",
      image:
        "https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1300&fit=crop",
      alt: "An office atrium with daylight falling through greenery onto a deep floor-plate",
    },
    approach: {
      heading: "How a restructure is run",
      steps: [
        {
          n: "01",
          title: "Read the room",
          body: "Before any design, we measure what the room is doing: light, air, sound and comfort. You receive a ranked set of moves.",
          image: "https://images.pexels.com/photos/5483233/pexels-photo-5483233.jpeg?w=1000",
          alt: "A bare open-plan office before restructure",
        },
        {
          n: "02",
          title: "Design the climate",
          body: "Light is re-planned first, then air and planting designed as one system, sized to the room rather than scattered as decoration.",
          image: "https://images.pexels.com/photos/13012256/pexels-photo-13012256.jpeg?w=1000",
          alt: "Workplace with hanging plants and natural light",
        },
        {
          n: "03",
          title: "Source with conviction",
          body: "Every material chosen for how it ages and where it comes from: solid timber, lime and clay, natural fibres, low-emission finishes.",
          image: "https://images.pexels.com/photos/30211145/pexels-photo-30211145.jpeg?w=1000",
          alt: "A slatted oak surface, a natural material",
        },
        {
          n: "04",
          title: "Build, then stay",
          body: "We run it to completion with your contractor, re-measure at handover, then stay for six months of aftercare.",
          image: "https://images.pexels.com/photos/37472187/pexels-photo-37472187.jpeg?w=1000",
          alt: "A restructured, light-filled workplace",
        },
      ],
    },
    included: {
      eyebrow: "what you get",
      heading: "What the engagement includes",
      items: [
        {
          title: "A measured reading",
          body: "A full survey of the floor: daylight, glare, reverberation time, background noise floor, air quality and temperature, logged over a working week and written up plain.",
        },
        {
          title: "A re-planned light scheme",
          body: "Daylight brought toward the centre of the plate, glare controlled, and electric light specified to a warm, low-glare spectrum that the eye can sit under all day.",
        },
        {
          title: "Air and planting as one system",
          body: "Planting sized and placed as air infrastructure, paired with ventilation strategy, with species chosen for the room's light, humidity and the people who will actually tend it.",
        },
        {
          title: "Acoustics tuned by measurement",
          body: "Quiet built from natural-fibre absorption and sensible layout, designed to a reverberation target and verified on site, so meetings stop bleeding into the open plan.",
        },
        {
          title: "A defensible material palette",
          body: "Solid timber, lime and clay plaster, wool, linen and felt, with traceable sourcing and low-emission finishes. Samples assembled and signed off before anything is ordered.",
        },
        {
          title: "Six months of aftercare",
          body: "Post-handover work, a written care calendar, scheduled visits, and living things kept alive by people who specified them. Included with every restructure.",
        },
      ],
    },
    detail: {
      heading: "Material, chosen for the decade ahead",
      body: [
        "We choose materials for how they age. Solid oak and ash develop a patina; veneers and laminates chip and date. Lime and clay plasters move air and buffer humidity where painted plasterboard simply seals it in. Wool, linen and natural-fibre felt soften sound honestly, and they do it without the synthetic off-gassing that quietly fouls indoor air.",
        "We align the work with recognised standards: WELL for the human side of light, air, acoustics and thermal comfort, and LEED or BREEAM for the building's environmental performance.",
        "We believe each material has a job in the climate of the room, a known origin, and a known way of growing old well.",
      ],
      image:
        "https://images.pexels.com/photos/17056994/pexels-photo-17056994/free-photo-of-decorative-wall-of-brick-pots-with-plants.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&fit=crop",
      alt: "A structural planted wall of terracotta pots beside warm timber and daylight",
      caption: "Planting treated as air infrastructure, set against timber and earth-toned plaster.",
    },
    faq: [
      {
        q: "Does a restructure require the team to relocate?",
        a: "No, in almost every case. Work is sequenced around occupancy (by zone, by floor, by hours), so we move through the building while it remains in use. A short, fully vacated phase may be required for the final installation of planting and acoustics; this is agreed at the outset.",
      },
      {
        q: "How is the planting maintained once installed?",
        a: "Every restructure ships with a written planting register, which includes details of species, position, irrigation regime, replacement intervals, and a horticulturist visits on a fixed schedule for the first six months. After that, the register is yours to keep, or we continue the care under a separate agreement.",
      },
      {
        q: "Can you align the project with WELL, LEED or BREEAM?",
        a: "Yes, where it is honest to do so. We design to the substance behind those standards as a matter of course: daylight, clean air, measured quiet, thermal comfort and low-emission materials. We can run a formal certification when it earns its cost, and we will say plainly when it does not.",
      },
      {
        q: "What happens to what's already in the building?",
        a: "Existing materials are assessed at the first reading and sorted into three categories — kept, repurposed within the room, or removed. Furniture in good condition is reupholstered or reworked where possible; what cannot be kept is returned to the supply chain through partners we work with.",
      },
    ],
    related: ["reading-of-the-room", "aftercare"],
  },
  {
    slug: "reading-of-the-room",
    title: "Biophilic design consultation",
    eyebrow: "a short standalone engagement",
    metaTitle: "Biophilic design consultation · Oikos",
    metaDescription:
      "A biophilic design consultation for your office — we read the space for light, air, quiet and material, then hand you a written assessment and a ranked set of moves.",
    hero: {
      h1: "Biophilic design consultation",
      dek: "A short, standalone study of what your office is really doing, written up as a ranked set of moves the room is asking for.",
      image:
        "https://images.pexels.com/photos/35566906/pexels-photo-35566906/free-photo-of-modern-office-atrium-with-greenery.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&fit=crop",
      alt: "An office atrium with daylight reaching deep into the floor plate and structural planting at the core",
    },
    approach: {
      heading: "How a reading is done",
      steps: [
        {
          n: "01",
          title: "We measure the climate, not the look",
          body: "We log daylight, glare, sound and air across the floor, not just how it looks.",
          image: "https://images.pexels.com/photos/19837082/pexels-photo-19837082.jpeg?w=1000",
          alt: "Sunlight falling across an office at desk height",
        },
        {
          n: "02",
          title: "We read the materials in the room",
          body: "Surface by surface, we find what’s making the room loud, cold or tiring.",
          image: "https://images.pexels.com/photos/7941435/pexels-photo-7941435.jpeg?w=1000",
          alt: "A plaster wall surface, read material by material",
        },
        {
          n: "03",
          title: "We watch how the room is used",
          body: "We sit in it and watch how people actually use the space through the day.",
          image: "https://images.pexels.com/photos/7653461/pexels-photo-7653461.jpeg?w=1000",
          alt: "People using the workspace through the day",
        },
        {
          n: "04",
          title: "We write the reading",
          body: "You get a written reading in plain English: what the room is doing, and a ranked set of moves.",
          image: "https://images.pexels.com/photos/6779632/pexels-photo-6779632.jpeg?w=1000",
          alt: "The reading written up by hand",
        },
      ],
    },
    included: {
      heading: "What you receive",
      items: [
        {
          title: "The written reading",
          body: "A fifteen to twenty page document, in plain language, that you own outright. It states what is wrong, why, and what each fix would change. You can act on it yourself, hand it to your own contractor, or bring it back to us. It is yours either way.",
        },
        {
          title: "The ranked moves",
          body: "Every recommendation ordered by what it changes per pound spent, from a planting regime and acoustic panels you could action next week, to the structural light and air work that needs a full restructure. Each move carries its measured evidence and a cost band, so nothing on the list is a guess.",
        },
        {
          title: "The measured baseline",
          body: "Your daylight, air and acoustic readings recorded against recognised benchmarks, the WELL air and light thresholds among them, so you can see exactly where the room sits today and have something to measure any future work against.",
        },
        {
          title: "A walkthrough conversation",
          body: "We talk you through the reading in person or on a call, answer the awkward questions, and help you decide what is worth doing now, what can wait, and whether the room needs fixing or redesigning.",
        },
      ],
    },
    detail: {
      heading: "Where your change begins",
      body: [
        "Plenty of offices are good rooms being let down by two or three fixable things, and the reading finds them, ranks them, and sends you off to fix them.",
        "When a reading does lead to a restructure, nothing is repeated. The week we spent measuring becomes the foundation of the design, the baseline we improve against, and the reason the brief is right from the first drawing.",
      ],
      image:
        "https://images.pexels.com/photos/36287488/pexels-photo-36287488/free-photo-of-modern-office-interior-in-milano-with-green-plants.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1350&fit=crop",
      alt: "A calm office interior with warm daylight, soft surfaces and structural planting",
    },
    faq: [
      {
        q: "How long does a reading take, and how disruptive is it?",
        a: "We are on site across a normal working week, roughly five days, because the measurements that matter only show up while the office is being used. There is no construction and nothing to clear. We log light, air and sound in the background while your team works as usual. You receive the written reading about a week after we leave.",
      },
      {
        q: "Do I have to commit to a full restructure afterwards?",
        a: "No. A reading is deliberately standalone. Many offices need fixing rather than redesigning, and if that is yours, the document will say so and send you off to do it, with us or without us. If you do go on to a full restructure, the reading fee comes off the design stage, so the work is never paid for twice.",
      },
      {
        q: "What exactly do you measure?",
        a: "Daylight in lux at desk height across the floor and through the day, CO2 in parts per million in the rooms people actually use, reverberation and ambient noise in decibels, and the condition of any existing planting and surfaces. We record everything against recognised benchmarks, including the WELL air and light thresholds, so the readings mean something beyond our opinion.",
      },
      {
        q: "Can I use the reading with my own architect or contractor?",
        a: "Yes. The document is written in plain English and you own it. Plenty of clients take a reading straight to the team they already have. The ranked moves and the measured baseline are exactly what a good designer or contractor needs to scope the work properly.",
      },
    ],
    related: ["workplace-restructure", "aftercare"],
  },
  {
    slug: "material-direction",
    title: "Sustainable material sourcing",
    eyebrow: "a specialist layer",
    metaTitle: "Sustainable material sourcing · Oikos",
    metaDescription:
      "Sustainable material sourcing and specification for projects that already have an architect — we source, vet and assemble a palette with defensible sustainability claims.",
    hero: {
      h1: "Sustainable material sourcing",
      dek: "The material decision is the one a building lives with longest. We source it, vet it, sample it in real light, and write claims you can defend.",
      image:
        "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&fit=crop",
      alt: "A table of natural material samples: timber, stone, cork and woven textile in warm daylight",
    },
    approach: {
      heading: "How the layer works",
      steps: [
        {
          n: "01",
          title: "We read the palette you have",
          body: "We start from your drawings and mark what’s decided, what’s a placeholder, and what’s a claim.",
          image: "https://images.pexels.com/photos/34573691/pexels-photo-34573691.jpeg?w=1000",
          alt: "The existing palette in drawings and specification",
        },
        {
          n: "02",
          title: "We source against the room, not the catalogue",
          body: "We go to the makers: certified timber, lime and clay, natural textiles, full ingredient disclosure.",
          image: "https://images.pexels.com/photos/12278589/pexels-photo-12278589.jpeg?w=1000",
          alt: "Timber sourced from named mills",
        },
        {
          n: "03",
          title: "We assemble samples for the actual light",
          body: "We build sample sets and view them in your space, at the times of day the room is used.",
          image: "https://images.pexels.com/photos/6583373/pexels-photo-6583373.jpeg?w=1000",
          alt: "Physical sample sets assembled for the light",
        },
        {
          n: "04",
          title: "We write claims you can defend",
          body: "Every material comes with its receipt: certification, VOC figures, end-of-life route, and its maker.",
          image: "https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg?w=1000",
          alt: "Material claims documented and defensible",
        },
      ],
    },
    included: {
      heading: "What we hand the design team",
      items: [
        {
          title: "A vetted material schedule",
          body: "Every selection named to the specific product, finish, and maker, with substitutes ranked behind each one in case of a lead-time problem. No generic line items that a contractor can quietly downgrade.",
        },
        {
          title: "Physical sample boxes",
          body: "Two assembled sets: one for the studio, one to live on site under real light. Soft and hard materials shown together in the adjacencies they will actually meet, not as isolated swatches on a card.",
        },
        {
          title: "A claims dossier",
          body: "One page per material: certification numbers, recycled and bio-based content, VOC and formaldehyde figures, fire classification, and the documented end-of-life route. Written to survive a procurement audit and to slot into a green-building submission.",
        },
        {
          title: "A sourcing map",
          body: "Where each material comes from, the named supplier, minimum order, lead time, and an honest note on price volatility. So the people ordering know exactly what they are committing to.",
        },
        {
          title: "Notes on ageing and care",
          body: "How each surface behaves over five years: what patinas, what scratches, what needs re-oiling, and what should never see a standard cleaning product. The room stays good because someone wrote down how to keep it good.",
        },
      ],
    },
    detail: {
      heading: "Material built to last",
      body: [
        "Daylight in a working office moves through a wide swing of colour temperature across the day, and most acoustic and surface finishes are chosen, signed off, and installed without ever being seen in it. That is how a room ends up looking nothing like the render.",
        "We bring the candidate palette into the space and read it at the hours the room is used. Warm low sun raises the red in timber and clay. A palette that holds up to a question is one where every answer was found before the question was asked.",
      ],
      image:
        "https://images.pexels.com/photos/12278589/pexels-photo-12278589.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&fit=crop",
      alt: "Stacked timber and natural fibre samples on a workbench in raking daylight",
    },
    faq: [
      {
        q: "We already have an architect. Where do you sit?",
        a: "Behind them, on materials only. We do not touch the plan, the layout, or the design intent. We take the palette your designer is working toward and make it real and defensible: sourcing, sampling, vetting, and the claims pack. Your design team stays in charge of the room.",
      },
      {
        q: "What makes a sustainability claim defensible?",
        a: "A document behind it. We only put a figure on the page if we can trace it to a certificate, a manufacturer declaration, or an EPD. FSC chain-of-custody for timber, ingredient disclosure for paints and plasters, measured VOC and formaldehyde figures, and a real end-of-life route. Where the proof does not exist, we say the claim cannot be made rather than soften it. That is what survives an assessor.",
      },
      {
        q: "Do sustainable materials cost more?",
        a: "Sometimes, in the line item; rarely, in the room. A lime ceiling costs more than a painted plasterboard one and lasts three times as long without recoating. Solid oak slats cost more than laminate panelling and don't need replacing in year seven. The defensible question is not what a material costs to install but what it costs to keep, and the better answer is almost always the lower one.",
      },
      {
        q: "How long does the engagement take?",
        a: "Usually six to ten weeks alongside your design team. The variable is how much of the palette has to be sourced from scratch versus tightened from selections you already have. Sample assembly and the week we leave difficult adjacencies sitting together under real light are fixed parts of every engagement and we do not compress them.",
      },
    ],
    related: ["workplace-restructure", "reading-of-the-room"],
  },
  {
    slug: "aftercare",
    title: "Plant care and maintenance",
    eyebrow: "after handover",
    metaTitle: "Plant care and maintenance · Oikos",
    metaDescription:
      "Plant care and maintenance after handover — a written care calendar, scheduled visits, and planting kept alive by the people who specified it. Six months, or on its own.",
    hero: {
      h1: "Plant care and maintenance",
      dek: "Six months of presence after handover: scheduled visits, a written care calendar, and planting kept alive until the room can hold itself.",
      image:
        "https://images.pexels.com/photos/36287488/pexels-photo-36287488/free-photo-of-modern-office-interior-in-milano-with-green-plants.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500&fit=crop",
      alt: "A quiet planted office interior with warm daylight and mature foliage",
    },
    approach: {
      heading: "What the six months actually involve",
      wide: true,
      steps: [
        {
          n: "01",
          title: "The care calendar",
          body: "Before we leave site you receive a written care calendar: a plant-by-plant schedule that names every species in the room, its position, its watering interval to the day, its feed, its light requirement in lux, and the three things most likely to kill it. No generic 'water twice a week'. A Zamioculcas in a low-light meeting room is on a 14-day cycle. A Boston fern in a humid washroom is on three. The calendar is the document your facilities team keeps once we are gone.",
          image: "https://images.pexels.com/photos/8297857/pexels-photo-8297857.jpeg?w=1000",
          alt: "A plant-by-plant care calendar",
        },
        {
          n: "02",
          title: "Fortnightly visits",
          body: "A technician visits every two weeks for three months, then monthly, on a fixed loop.",
          image: "https://images.pexels.com/photos/9707253/pexels-photo-9707253.jpeg?w=1000",
          alt: "A planting technician on a fortnightly visit",
        },
        {
          n: "03",
          title: "Measure the climate, not the leaves",
          body: "Plants are honest instruments. When foliage fails, it’s telling us the room has changed.",
          image: "https://images.pexels.com/photos/2104499/pexels-photo-2104499.jpeg?w=1000",
          alt: "Foliage read as an instrument of the climate",
        },
        {
          n: "04",
          title: "Replace under warranty, then hand over",
          body: "Anything that fails in six months from our causes is replaced at no cost.",
          image: "https://images.pexels.com/photos/6274242/pexels-photo-6274242.jpeg?w=1000",
          alt: "Healthy planting handed over",
        },
      ],
    },
    included: {
      heading: "Included with every visit",
      items: [
        {
          title: "A named technician",
          body: "The same person across the six months, someone who knows why each plant was specified and what the room is supposed to feel like. Not a rotating roster reading off a clipboard.",
        },
        {
          title: "Moisture by probe",
          body: "Soil checked with a meter at root depth, not a finger at the surface. Overwatering kills more office planting than drought ever does, and the surface lies about what is happening below.",
        },
        {
          title: "Integrated pest management",
          body: "We inspect for mealybug, scale, fungus gnat and spider mite at every visit and treat early with horticultural soap and predatory mites rather than reaching for a systemic spray near people's desks.",
        },
        {
          title: "Light readings",
          body: "Daylight measured at the leaf in lux at each station, logged over time. A plant rated for 800 to 1,500 lux will sulk at 300, and the meter tells us before the leaves do.",
        },
        {
          title: "Feed and substrate care",
          body: "A dilute balanced feed in the growing season, flushed back in winter, with substrate topped up and any LECA or self-watering reservoirs checked and cleaned. Soil is a living thing too.",
        },
        {
          title: "A written log",
          body: "Every visit recorded: what was watered, fed, pruned, replaced, and what the conditions read. Six months in you own a complete maintenance history of the room, not a vague reassurance.",
        },
      ],
    },
    detail: {
      heading: "A place you will cherish for lifetime",
      body: [
        "We take aftercare on for offices we had no hand in designing.",
        "When we inherit a dying room we begin with a reading of the conditions. We log daylight across the floor plate for a full working day, check the fresh-air supply, and find where the building fights the planting. Then we re-specify the problems: the wrong plant in the right pot is replaced with a species that can actually live there, the watering is put on a real schedule, and the room is brought back over a season. Most rooms can be saved. The ones that cannot were never given a plant that stood a chance, and we say so plainly.",
      ],
      image:
        "https://images.pexels.com/photos/17056994/pexels-photo-17056994/free-photo-of-decorative-wall-of-brick-pots-with-plants.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop",
      alt: "A structural living wall of potted plants in an office, daylit and healthy",
    },
    faq: [
      {
        q: "Is aftercare an extra cost on a restructure?",
        a: "No. Six months of post-handover care is included in every restructure we do, written into the scope from the start. A room is not finished the day the install crew leaves, so we do not treat it as finished. The work of keeping it alive through its first season is part of designing it properly.",
      },
      {
        q: "Can we book aftercare for an office Oikos did not design?",
        a: "Yes, and we often do. The room being good but dying is one of the most common reasons people call us. We begin with a reading of the conditions, re-specify any planting that was never going to survive where it was put, and bring the space back over a season. We will tell you honestly which plants can be saved and which were doomed by the original brief.",
      },
      {
        q: "What happens after the six months end?",
        a: "We run a final audit, update your care calendar with everything we learnt about your specific building, and hand it over in person to whoever will look after the room: your facilities lead or a planting contractor. From there the room can run on its own. An annual review is available if you would rather we kept checking the light and the health of the scheme once a year.",
      },
      {
        q: "Do plants in an office really improve air quality, or is that marketing?",
        a: "Planting changes a room more than almost any other single element. The humidity it holds, the way sound moves across it, the quality of presence a floor takes on once something living is in it. What it doesn't do, on its own, is meaningfully clean the air of a sealed office. That work belongs to the fresh-air rate and the materials in the room. Aftercare attends to both: the planting, and the climate it sits inside.",
      },
    ],
    related: ["workplace-restructure", "material-direction"],
  },
];

export const SERVICE_MAP: Record<string, ServiceData> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);
