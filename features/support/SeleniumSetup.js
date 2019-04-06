const cucumber = require('cucumber');
const webdriver = require('selenium-webdriver');
const self=this;

const browser = new webdriver.Builder()
.withCapabilities({'browserName': 'chrome' })
.build();

cucumber.AfterAll(async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return browser.close();
});
cucumber.setWorldConstructor(function World() {
    this.browser = browser;
    self.resetTheWorld;
});
