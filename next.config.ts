import type { NextConfig } from "next";
import nextI18nConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  ...nextI18nConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
