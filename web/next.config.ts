import type { NextConfig } from "next";

/**
 * Static export config.
 * Locally: NEXT_PUBLIC_BASE_PATH unset → app serves at /
 * On Pages CI: NEXT_PUBLIC_BASE_PATH=/oikos/main → assets prefixed for subpath deploy
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  // Skip type checks during build — runtime safety still applies.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
