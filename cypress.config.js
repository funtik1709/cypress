
const { defineConfig } = require("cypress");

// excel to json
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
// excel to json

 const browserify = require("@cypress/browserify-preprocessor");
 const {
   addCucumberPreprocessorPlugin,
 } = require("@badeball/cypress-cucumber-preprocessor");
 const {
   preprendTransformerToOptions,
 } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  //excel task
  on('task', {

    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });

      return result;
    }

  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
} 

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  
  // global timeout settings
  defaultCommandTimeout: 8000,
  env: {
    url: "https://new.kdlolymp.kz/",    
  },  
  retries: {
    runMode: 1,    
  },
  projectId: "oi91hg",
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },
    setupNodeEvents,
    //specPattern: 'cypress/integration/olymp/*.js',
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    //specPattern: 'cypress/integration/examples/*.js',
    viewportHeight: 1440,
    viewportWidth: 1440,
    scrollBehavior: false,
    experimentalOriginDependencies: true 
  }
});
