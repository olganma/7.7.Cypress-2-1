const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "g66qpu",
    baseUrl: 'http://qamid.tmweb.ru',
    setupNodeEvents(on, config) {
    },
  },
});
