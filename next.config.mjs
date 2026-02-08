/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/My-portfolio-Website',
  assetPrefix: '/My-portfolio-Website/',
};

export default nextConfig;