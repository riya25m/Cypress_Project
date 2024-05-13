const { defineConfig } = require("cypress");

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',

  video: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here/
      on('before:run', async (details) => {

        console.log('override before:run');

        await beforeRunHook(details);

      });

      on('after:run', async () => {

        console.log('override after:run');

        await afterRunHook();

      });

      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/*.js'
  },
});
