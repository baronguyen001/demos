/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: '/demos/beauty-concept-by-vinny-hair-nails-makeup-waxing-salon-in-lisbon-a803',
  assetPrefix: '/demos/beauty-concept-by-vinny-hair-nails-makeup-waxing-salon-in-lisbon-a803/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
};
