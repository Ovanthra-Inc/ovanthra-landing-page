import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    qualities: [75, 100],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
