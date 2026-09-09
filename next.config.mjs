/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apex-nine-racing',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig