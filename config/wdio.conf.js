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
        path.join(__dirname, '../tests/regression/ios/specs/*.js')
        //'./tests/regression/ios/specs/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
   // processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 4,

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
           // "platformName": "Android",
       // "appium:platformVersion": "15",
       // "appium:deviceName": "Pixel 4 API 35",
        //"appium:automationName": "UiAutomator2",
        //"appium:app": "/Users/nilambar/wdio-appium/app/android/ApiDemos-debug.apk"
        // App permission should be added here
            
          
    //}
    /*{
        // capabilities for local Appium web tests on an Android Emulator
        "platformName": "ios",
        "appium:platformVersion": "17.5",
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "xcuitest",
        "appium:app": "/Users/nilambar/wdio-appium/app/ios/UIKitCatalog.app",
        maxInstances: 2
    },*/
    {
        // capabilities for local Appium web tests on an Android Emulator
        "platformName": "ios",
        "appium:platformVersion": "17.5",
        "appium:deviceName": "iPhone 11",
        "appium:automationName": "xcuitest",
        "appium:app": path.join(__dirname, '../app/ios/UIKitCatalog.app'),
        'appium:useNewWDA': true,
        maxInstances: 2
    }],

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
    connectionRetryCount: 3,
  
     services: ['appium'],

    framework: 'mocha',

  
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000    },
}
