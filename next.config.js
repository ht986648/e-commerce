/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',      // ✅ Required for proper matching
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        }
      ],
      domains: ['unsplash.com'],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;
  