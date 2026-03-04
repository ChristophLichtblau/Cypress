const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    // baseUrl: "http://localhost:8080",
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      navbarText: "Cypress.io",
    },
  },
});
