// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // Define a custom header to allow loading images from the /assets directory
        source: '/assets/:path*', // Match all routes starting with /assets
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache images for a year
          },
        ],
      },
    ];
  },
  webpack(config) {
    // Add support for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
