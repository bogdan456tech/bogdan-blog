import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/bogdan-blog",     // 👈 important for subfolder deploy
  assetPrefix: "/bogdan-blog/", // 👈 ensures CSS/JS load correctly
};

export default nextConfig;
