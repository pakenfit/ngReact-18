module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '.',

    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: ['node_modules/angular/angular.js', 'ngReact.js', 'tests/*.js'],

    preprocessors: {
      'tests/*.js': ['browserify'],
    },

    browserify: {
      debug: true,
      transform: [['reactify', { es6: true }], 'browserify-shim'],
      extensions: ['.js'],
    },

    // list of files to exclude
    exclude: [],

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress'
    // CLI --reporters progress
    reporters: ['progress'],

    // web server port
    // CLI --port 9876
    port: 9876,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    // CLI --colors --no-colors
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // Updated browsers list to use ChromeHeadless
    browsers: ['ChromeHeadless'],

    // ChromeHeadless configuration for CI environments
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu'],
      },
    },

    captureTimeout: 20000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    // Updated plugins list to include karma-chrome-launcher
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher', // Added Chrome launcher
      'karma-browserify',
    ],
  });
};
