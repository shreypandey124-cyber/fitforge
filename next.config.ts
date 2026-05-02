import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fitforge',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;