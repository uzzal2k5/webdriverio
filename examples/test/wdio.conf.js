const {capability, maxInstance, timeoutInterval} = require('./wdio.conf.helper')
const wdioAllureReporter = require('wdio-allure-reporter')
// const wdio_allure_ts = require('wdio-allure-ts')
const {Reporter} = require('./lib')
exports.config = {
    hostname: '172.30.83.2',
    port: 4444,
    specs: [__dirname + '/ui/login/login.test.js'],

    capabilities: [{
        browserName: "firefox"
    }, {
        browserName: 'chrome'
    }],

    logLevel: 'trace',
    logDir: __dirname,
    baseUrl: 'https://sales145.s.namely.com',
    waitforTimeout: 150000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: timeoutInterval,
        expectationResultHandler: function (passed, assertion) {
       /**
        * only take screenshot if assertion failed
        */
          if (passed) {
            return
          }

        }
    },
    before: function () {
    require('babel-register')
  },

};


//exports.config = {
//
////* **************** Run locally in selenium-standalone server*************//
//  hostname: '172.30.83.2',
//  port: 4444,
//  path: '/wd/hub',
//  specs: [__dirname + '/ui/login/login.test.js'],
//  capabilities: [{
//        browserName: 'chrome'
//
//    }],
//
//  baseUrl: 'https://sales145.s.namely.com',
//
//
//   // define specific suites
//  suites: {
//    login: [
//      './ui/login/*.test.js'
//    ]
//  },
//    // Patterns to exclude.
//  exclude: [
//        // 'path/to/excluded/files'
//  ],
//
//  maxInstances: maxInstance,
//
//
//
//  sync: true,
//    // Level of logging verbosity: silent | verbose | command | data | result | error
//  //logLevel: 'verbose',
//    // this will generate a logs file. Will stop the command line log
//    // logOutput: './logs',
//
//    // Enables colors for log output.
//  coloredLogs: true,
//    // Warns when a deprecated command is used
//  deprecationWarnings: true,
//    // If we only want to run wer tests until a specific amount of tests have failed use
//    // bail (default is 0 - don't bail, run all tests).
//  bail: 0,
//    // Saves a screenshot to a given path if a command fails.
//  screenshotPath: '../errorShots/',
//   // take screenshot on reject
//  screenshotOnReject: true,
//   // take screenshot on reject and set some options
//  screenshotOnReject: {
//    connectionRetryTimeout: 30000,
//    connectionRetryCount: 0
//  },
//
//  debug: true,
//
//  waitforTimeout: 20000,
//
//  connectionRetryTimeout: 90000,
//    // Default request retries count
//
//  connectionRetryCount: 3,
//
//
//  framework: 'jasmine',
//
//  jasmineNodeOpts: {
//    defaultTimeoutInterval: timeoutInterval,
//    expectationResultHandler: function (passed, assertion) {
//   /**
//    * only take screenshot if assertion failed
//    */
//      if (passed) {
//        return
//      }
//
//    }
//  },
//
//
////  },
//
//  onPrepare: function () {
//      // eslint-disable-next-line
//      console.log('starting test');
//  },
//
//  beforeSession: function (config, capabilities, specs) {
//  },
//
//  before: function () {
//    require('babel-register')
//  },
//
//  beforeSuite: function (suite) {
//  },
//
//  beforeHook: function () {
//  },
//
//  afterHook: function () {
//  },
//
//  beforeTest: function (test) {
//  },
//
//  beforeCommand: function (commandName, args) {
//  },
//
//  afterCommand: function (commandName, args, result, error) {
//  },
//
//  afterTest: function (test) {
//
//    if (test.passed) {
//      Reporter.closeStep()
//      return
//    }
//
//
//    Reporter.closeStep(true)
//
//    /**
//     * attach browser console logs to the report
//     */

