const webdriver = require('selenium-webdriver');
const request = require('request');
const self=this;

module.exports = {

    async selectDropdownItem(browser, filterValue) {
       
        //await new Promise(resolve => setTimeout(resolve, 2000));
        try{
            const dropdownField = await browser.findElement(webdriver.By.name("transportFilter"))
            // await new Promise(resolve => setTimeout(resolve, 2000));
            await dropdownField.click();
            switch (filterValue) {
                case "All":
                    return 1;
                    
                case "starship":
                    return 2;
                    
                case "vehicle":
                    return 3;   
            }
        }catch(e){
            console.log(e)
        }
        
        
    // }

 },
 async restCall(type,uri){
     if(type=="GET" || type=="get")
     await request(uri,async function (error, response, body) {
        if(error) await console.log('error:', error); 
        //await new Promise(resolve => setTimeout(resolve, 2000)); 
        self.sharedData.result.payload =  await JSON.parse(body) ;
     });
 }

};