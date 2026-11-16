import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits .next/standalone with a minimal server.js, used by the Dockerfile.
  output: "standalone",
  // Pin the project root so a stray lockfile in a parent folder isn't picked as the workspace.
  outputFileTracingRoot: import.meta.dirname,
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
