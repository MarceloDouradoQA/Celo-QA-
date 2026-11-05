const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  screenshotsFolder: '../../artifacts/cypress',
  e2e: {
    baseUrl: 'http://127.0.0.1:3102',
    specPattern: '*.cy.cjs',
    supportFile: false,
  },
});
