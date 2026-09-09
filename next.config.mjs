/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apex-nine-racing',
  allowedDevOrigins: ['127.0.0.1'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;