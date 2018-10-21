exports.config = {
    hostname: '172.30.83.2',
    port: 4444,
    specs: [__dirname + '/specs/dynamic.spec.js'],

    capabilities: [{
        browserName: "firefox"
    }, {
        browserName: 'chrome'
    }],

    logLevel: 'trace',
    logDir: __dirname,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 150000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
        compilers: ['js:babel-register']
    },

};
