import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Включаем режим статического экспорта
  images: {
    unoptimized: true, // Отключаем оптимизацию картинок (она требует сервера)
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  //
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost',
  //       port: '3001',
  //       pathname: '/images/**',
  //     },
  //   ],
  // },
  //
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://backend:3000/:path*',
  //     },
  //     {
  //       source: '/images/:path*',
  //       destination: 'http://backend:3000/images/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
