const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
    specPattern: '**/*.{feature,features,spec.js}'
  },
  "compilerOptions": {
    "types": ["cypress", "node", "cypress-real-events"]
  }
});
