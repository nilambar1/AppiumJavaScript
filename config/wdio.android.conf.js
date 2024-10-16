const tag = process.env.TAG || 'regression';
const path = require('path');
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    port: 4723,

    specs: [
        // ToDo: define location for spec files here
        //path.join(__dirname, '../tests/regression/ios/specs/*.js')
        path.join(__dirname, `../tests/meesho/android/specs/*.js`)
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',  // Directory to store allure results
            disableWebdriverStepsReporting: true,  // Disable logging of steps taken by WebDriver
            disableWebdriverScreenshotsReporting: false,  // Enable automatic screenshot capture
        }]
    ],
    
    maxInstances: 1,

    //
    capabilities: [
        // capabilities for local Appium web tests on an Android Emulator
        //{
        /*"platformName": "Android",
        "platformVersion": "15",
        "deviceName": "Pixel 4 API 35",
        "automationName": "UiAutomator2",
        "app": "/Users/nilambar/wdio-appium/app/android/ApiDemos-debug.apk",
        "ensureWebviewsHavePages": true,
        "nativeWebScreenshot": true,
        "newCommandTimeout": 3600,
        "connectHardwareKeyboard": true*/
        {
            "platformName": "Android",
            "appium:platformVersion": "15",
            "appium:deviceName": "Pixel 4 API 35",
            "appium:automationName": "UiAutomator2",
            // "appium:app": path.join(__dirname, '../app/android/meesho.app'),
            "appium:app": '/Users/nilambar/AppiumJavaScript/app/android/meesho.apk',
            // App permission should be added here
            "appium:autoGrantPermissions": true,
            "appium:noReset": true,
            "appium:fullReset": false,
            'appium:newCommandTimeout': 120, // Timeout if the command takes too long (in seconds)
            'appium:waitForIdleTimeout': 10


        }

    /*{
        // capabilities for local Appium web tests on an Android Emulator
        "platformName": "ios",
        "appium:platformVersion": "17.5",
        "appium:deviceName": "iPhone 11",
        "appium:automationName": "xcuitest",
        "appium:app": path.join(__dirname, '../app/ios/UIKitCatalog.app'),
        //'appium:useNewWDA': true,
        maxInstances: 2
    }*/],

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost:8080',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 2,

    services: ['appium'],

    framework: 'mocha',


    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    /*beforeSuite: async () => {
        console.log('Waiting for app to fully launch...');
        const welcomeText = await $('android=new UiSelector().resourceId("com.meesho.supply:id/welcome_text1")');
        
        await welcomeText.waitForDisplayed({ timeout: 5000 });
    },*/
     // Hook that runs before the entire suite starts
     beforeSuite: async (suite) => {
        console.log(`Starting suite: ${suite.title}`);
        console.log('Pausing for 5 seconds before the suite starts...');
        await browser.pause(4000); // Pause for 5 seconds
        console.log("paused");
    },
    afterSuite: async () => {
        await driver.terminateApp('com.meesho.supply');  // Replace with your app package name

        // Optionally, if the session is still active, delete the session

    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
