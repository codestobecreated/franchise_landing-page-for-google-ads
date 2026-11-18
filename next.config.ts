import type { NextConfig } from "next";

const DEV_BACKEND =
  process.env.NODE_ENV === "development" ? " http://localhost:8000 http://127.0.0.1:8000" : "";

const nextConfig: NextConfig = {
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
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/franchise",
        destination: "/business/franchise",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
