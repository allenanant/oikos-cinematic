import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://oikosbyangelina.com";

/** Only the real pages. /full/ is excluded — it duplicates /. */
const ROUTES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/about/", priority: 0.8 },
  { path: "/services/", priority: 0.9 },
  { path: "/services/workplace-restructure/", priority: 0.8 },
  { path: "/services/reading-of-the-room/", priority: 0.8 },
  { path: "/services/material-direction/", priority: 0.8 },
  { path: "/services/aftercare/", priority: 0.8 },
  { path: "/contact/", priority: 0.7 },
  { path: "/terms/", priority: 0.2 },
  { path: "/privacy/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
