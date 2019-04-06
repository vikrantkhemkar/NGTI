const { Given, Then, When} = require('cucumber');
const config = require('../helpers/config');
const pageObjects = require('../support/pageObject');
const helper = require('../helpers/functionLibrary');
require('chai').should();
//const request = require('request');
const self=this;

When(/^I launch web application$/, async function(){
    await this.browser.get(config.baseUrl);
});
Then(/^I search for (.*) name$/, async function(specie){
    this.specie = specie;
    await pageObjects.searchOperation(this.browser,specie);
});
When(/^I change the transport type to (.*)$/,async function(filter){
    await pageObjects.setTransportType(this.browser,filter);
    self.filter=filter;
});
Then(/^I verify the filter result$/, async function(){
    const response= await pageObjects.verifyResult(this.browser);
    response.should.contain(self.filter);
});
When(/^I make request to (.*) endpoint$/,async function(filter){
   const url =  config.speciesApi + filter+'s';
   await helper.restCall("GET",url);  
});
Then(/^I verify the record for (.*) has (.*) type$/,async function(filter, specie){
    let record = self.sharedData.result.payload.species.find(item => item.name==specie)
    record['name'].should.equal(specie);
    record['vehicle']['class'].should.equal(filter);
});