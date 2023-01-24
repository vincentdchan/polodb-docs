const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const withImages = require('next-images');

module.exports = withImages(withNextra());
