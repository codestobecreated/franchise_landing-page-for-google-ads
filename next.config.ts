import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "electricvehicles.in",
      },
      {
        protocol: "https",
        hostname: "core.reluxelectric.com",
      },
    ],
  },
};

export default nextConfig;
