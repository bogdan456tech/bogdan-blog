import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/bogdan-blog" : undefined,
  assetPrefix: isProd ? "/bogdan-blog/" : undefined,
};

export default nextConfig;
