const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:10000,
    projectId: "9f94rq",
    baseUrl: 'http://qamid.tmweb.ru',
    setupNodeEvents(on, config) {
    },
  },
});
