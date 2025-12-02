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

  // Webpack optimizations for production
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Split vendor code into separate chunks
            vendor: {
              name: "vendor",
              chunks: "all",
              test: /node_modules/,
              priority: 20,
            },
            // Split common code
            common: {
              name: "common",
              minChunks: 2,
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      }
    }
    return config
  },
}

export default nextConfig
