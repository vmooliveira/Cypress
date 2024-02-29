const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      { "reporter"; "mochawesome",
                "reporterOptions"; 
                    { "reportDir"; "cypress/report/mochawesome-report",
                    "overwrite"; true,
                    "html"; true,
                    "json"; true,
                    "timestamp"; "mmddyyyy_HHMMss" }}
    },
  },
});
