import { fileURLToPath } from "url"
import { dirname } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Static Site Generation (SSG)
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages requires basePath to be empty when deploying to username.github.io
  basePath: "",
  trailingSlash: true,

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // React compiler optimizations
  reactStrictMode: true,

  // Turbopack (default bundler since Next.js 16).
  // Pin the workspace root so a stray lockfile elsewhere is not inferred.
  // Chunk splitting is handled automatically by Turbopack, so the previous
  // custom webpack splitChunks config is no longer needed.
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
