const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      // const browserify = require('@cypress/browserify-preprocessor');
      // const options = {
      //   ...browserify.defaultOptions,
      //   typescript: require.resolve('typescript')
      // };
      // on('file:preprocessor', cucumber(options));
      on('file:preprocessor', cucumber());
    },
    specPattern: '**/*.{feature,features,spec.js}'
    // "excludeSpecPattern": [
    //   "**/1-getting-started/*.js",
    //   "**/2-advanced-examples/*.js"
    // ]
  }
  // "testFiles": "**/*.{feature,features,spec.js}"
});
