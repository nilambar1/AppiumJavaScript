// wdio.shared.conf.js
const { config: baseConfig } = require('./wdio.conf.js');

const platform = process.env.PLATFORM || 'ios'; // Default to 'ios'
const { removeSync } = require('fs-extra'); // Utility to clean reports folder

exports.config = {
    runner: 'local',
    path: '/wd/hub',           // Appium server path
    port: 4723,                // Appium port
    maxInstances: 1,           // Maximum number of parallel instances
    logLevel: 'info',          // Log level
    bail: 0,                   // Stops execution after a given number of failures

    framework: 'mocha',        // Test framework
    specs: [
       // './ios/tests/**/*.test.js',     // iOS test cases
       // './android/tests/**/*.test.js'  // Android test cases
       '/Users/nilambar/UKBIAPPIUM/tests/regression/android/specs/*.js',
       '/Users/nilambar/UKBIAPPIUM/tests/regression/ios/specs/*.js'
    ],

    // Define capabilities for Android and iOS
    capabilities: [

        // iOS Device 1
        {
            "appium:platformName": 'iOS',
            "appium:deviceName": 'iPhone 11',
            "appium:platformVersion": "17.5",
            "appium:automationName": 'XCUITest',
            "appium:app": '/Users/nilambar/wdio-appium/app/ios/UIKitCatalog.app',
            "appium:specs": ['/Users/nilambar/UKBIAPPIUM/tests/regression/ios/specs/*.js'],
            maxInstances: 0,
            //tags: ['sanity', 'regression'], // Tags for test filtering
        }
    ],

    // Timeout settings
    mochaOpts: {
        timeout: 120000,  // 2-minute timeout for each test
        retries: 1,
        grep: '[sanity]'        // Retry each failed test once
    },

    // Services (Appium)
    services: ['appium'],

    // Reporters configuration
    /*reporters: 
        ['spec'], // Console output
        ['junit', {
            outputDir: './reports/junit/',
            outputFileFormat: function (options) {
                return `results-${options.cid}.xml`;
            }
        }],
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false, // Enables screenshots in Allure
        }]*/
    

    // Hooks
    beforeSuite: function (suite) {
        if (driver.capabilities.platformName === 'Android') {
            console.log('Running Android-specific setup...');
            // Android-specific setup can go here
        } else if (driver.capabilities.platformName === 'iOS') {
            console.log('Running iOS-specific setup...');
            // iOS-specific setup can go here
        }
    },

    afterSuite: function (suite) {
        console.log(`Completed suite: ${suite.title}`);
    },

    // Capture screenshots on pass/fail and attach to Allure reports
    afterTest: async function (test, context, { error, result, passed }) {
        if (error || !passed) {
            console.log('Test failed, capturing screenshot...');
        } else {
            console.log('Test passed, capturing screenshot...');
        }
        await browser.takeScreenshot();
    },

    // Runs before test session starts (clean up reports folder)
    onPrepare: function () {
        console.log('Cleaning up old reports...');
        removeSync('./reports/allure-results');
        removeSync('./reports/junit/');
    },

    // Custom tag filtering using command line options
    grepTags: function (test, tag) {
        return test.includes(tag);
    },

    // Enforce parallel execution across different devices
    suites: {
        android: ['/Users/nilambar/UKBIAPPIUM/tests/regression/android/specs/*.js'],
       // ios: ['/Users/nilambar/UKBIAPPIUM/tests/regression/ios/specs/*.js'],
    },

    // Custom CLI args to filter by platform
    before: function (capabilities) {
        const platform = capabilities.platformName;
        if (platform === 'Android') {
            console.log('Running tests on Android...');
        } else if (platform === 'iOS') {
            console.log('Running tests on iOS...');
        }
    },

    // Global timeout for the entire run
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Clean up or additional teardown after tests
    after: function () {
        console.log('All tests completed, running cleanup...');
    }
};
