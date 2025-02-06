import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug",
        destination: "/blog/[slug]",
      },
    ];
  },
};

export default nextConfig;
