const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/contact': { page: '/contact' },
    '/validate': { page: '/validate' },
  }),
  webpack: (config) => {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('./polyfill.js'); // <- polyfill here
      }
      return entries;
    };

    return config;
  }
};


module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
], nextConfig);
