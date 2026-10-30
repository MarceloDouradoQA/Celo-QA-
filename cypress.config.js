const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720
  }
});