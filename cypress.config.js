const { defineConfig } = require('cypress');
module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  screenshotOnRunFailure: true,
  reporter: 'junit',
  reporterOptions: { mochaFile: 'cypress/results/results-[hash].xml', toConsole: true },
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js'
  }
});
