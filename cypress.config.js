const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CY_BASE_URL,
    banner: process.env.CY_BANNER,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    video: true,
    testIsolation: false,
    specPattern: [
      "cypress/features/**/*.feature", // Ruta para los archivos .feature
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ruta para los archivos .cy.js
    ],
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, {
        ...config,
        stepDefinitions: "cypress/step_definitions/**/*.js",
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      // ✅ Agregamos las variables al objeto env
      config.env = {
        ...config.env,
        CYPRESS_USERNAME: process.env.CYPRESS_USERNAME,
        CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD,
      };

      return config;
    },
  },
});
