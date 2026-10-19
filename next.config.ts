import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel builds through its own adapter, which does not support standalone output
  output: process.env.VERCEL ? undefined : "standalone",
  reactCompiler: true,
};

export default nextConfig;
