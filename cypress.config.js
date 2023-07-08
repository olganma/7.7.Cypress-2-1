const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "bamt9j",
    baseUrl: 'http://qamid.tmweb.ru',
    setupNodeEvents(on, config) {
    },
  },
});
