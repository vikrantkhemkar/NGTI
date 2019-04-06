const webdriver = require('selenium-webdriver');
const helper = require('../helpers/functionLibrary');
module.exports = {
    async searchOperation(browser, searchTerm) {
        const search = await browser.findElement(webdriver.By.name("name"));
        await search.sendKeys(searchTerm);
        await search.sendKeys(webdriver.Key.ENTER);
        await new Promise(resolve => setTimeout(resolve, 1000));
    },
    async verifySearchResult(browser) {
        return await browser.findElement(webdriver.By.id("results-list"));
    },
    async setTransportType(browser, filterValue) {
        const dropdownField = await browser.findElement(webdriver.By.name("transportFilter"))
        await new Promise(resolve => setTimeout(resolve, 2000));
        await dropdownField.click();

        const itemIndex = await helper.selectDropdownItem(browser, filterValue);
        await dropdownField.findElement(webdriver.By.xpath(`//*[@id="app"]/div[2]/select/option[${itemIndex}]`)).click();
    },
     verifyResult(browser) {
        //console.log(await browser.findElement(webdriver.By.className('transports-list')).getText()); 
        return browser.findElement(webdriver.By.className('transports-list')).getText();
    },
};

