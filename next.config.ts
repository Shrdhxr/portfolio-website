import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for static generation on Vercel
  output: "export",
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable strict mode for better development experience
  reactStrictMode: true,
  
  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
