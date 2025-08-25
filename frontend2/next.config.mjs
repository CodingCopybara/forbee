/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',  // 도커 빌드 시 사용
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
}

export default nextConfig
