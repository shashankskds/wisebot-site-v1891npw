const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/wisebot-site-v1891npw",
  assetPrefix: "/wisebot-site-v1891npw/",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname),
    };
    return config;
  },
};
module.exports = nextConfig;
