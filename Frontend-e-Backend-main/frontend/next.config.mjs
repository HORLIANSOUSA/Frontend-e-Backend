import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;