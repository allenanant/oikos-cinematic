import type { MetadataRoute } from "next";

/**
 * There was no robots.txt at all, so crawler discovery was entirely link-driven
 * and the dev preview routes (now removed) were freely indexable. Works under
 * `output: "export"` — Next emits a static robots.txt at build time.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /full/ is a byte-identical duplicate of / created by the build's root
      // promotion. The canonical on the page points at /, and this keeps the
      // duplicate out of the index.
      disallow: ["/full/"],
    },
    sitemap: "https://oikosbyangelina.com/sitemap.xml",
    host: "https://oikosbyangelina.com",
  };
}
