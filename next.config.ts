import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
        pathname: "/**",
      },
    ],
  },
  // Webpack config for production builds (Next.js 15 still uses webpack for builds)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;
