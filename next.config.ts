import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.giphy.com", "picsum.photos"],
    // Alternative: use remotePatterns for more control
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'media.giphy.com',
    //     port: '',
    //     pathname: '/media/**',
    //   },
    // ],
  },
};

export default nextConfig;
