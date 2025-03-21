/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  // Disable SWC minifier to prevent native addon loading issues
  swcMinify: false
};

module.exports = nextConfig;