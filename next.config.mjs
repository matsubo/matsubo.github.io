/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages requires basePath to be empty when deploying to username.github.io
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
