/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  ...(isProduction && {
    basePath: '/apex-nine-racing',
    assetPrefix: '/apex-nine-racing/',
  }),
  allowedDevOrigins: ['127.0.0.1'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;