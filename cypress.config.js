
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  // global timeout settings
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  projectId: "oi91hg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js',
    viewportHeight: 1440,
    viewportWidth: 1440,
  }
});
