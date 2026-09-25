import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hero carousel photography
    // Object form (no `search`) so Unsplash's ?w=…&fit=… query strings are allowed.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
};

export default nextConfig;
