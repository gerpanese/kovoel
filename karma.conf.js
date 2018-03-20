// Karma configuration
// Generated on Wed Jun 21 2017 17:40:52 GMT+0900 (JST)
const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision;
// const Downloader = require('puppeteer/utils/ChromiumDownloader');
// const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);
// process.env.CHROME_BIN = revisionInfo.executablePath;

const fs = require('fs');
const path = require('path');

const EXCLUDE_FILENAMES = ['lib', 'solutions', 'scripts'];
const givenCoffeeProblems = fs.readdirSync('./').filter(fileName => fileName[0] !== '.' && path.extname(fileName) === '' && EXCLUDE_FILENAMES.indexOf(fileName) === -1);
const files = givenCoffeeProblems.map(givenCoffeeProblem => {
  return [
    `./src/__tests__/*.js`,
  ];
}).reduce((filePaths, givenCoffeeProblemPaths) => {
  return filePaths.concat(givenCoffeeProblemPaths);
}, []);

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: files,

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/setupTests.js': ['webpack'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'dots',
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

  });
};
