import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    qualities: [75, 100],
  },
  typedRoutes: true,
  experimental: { globalNotFound: true },
};

export default nextConfig;
