import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // 👈 static export to ./out
};

export default nextConfig;
