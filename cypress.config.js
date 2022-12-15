const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.ft-crm.com/tour",
    viewportWidth: 1366,
    viewportHeight: 768,

    env: {
      password: "P@ssw0rd",
      Email: "Test@gmail.com"
    },
    setupNodeEvents(on, config)
    {
      // implement node event listeners here
    },
  },
});
