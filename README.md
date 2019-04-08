# NGTITest

1. Build, run and experiment with the API (in the README you can find two ways of running the code)
    - I Built an application using Vitualbox and Vagrant.

2. Explain how you would test the API
    ```bash
    Verify the response code for all three APIs
    Verify the response fetched from the cache or DB
    Verify the cache TTL
    Verify /vehicles endpoint only returns the species records whose vehicle's class is vehicles
    Verify /starships endpoint only returns the records whose vehicle's class is starships
    Verify the response in provider(https://swapi.co/api/) and consumer (http://localhost:3080) response payload
    ```
3. Build a testscript
    This is task-3 of the assignment. To run the feature test you need to do following setup-
    ```bash
         Node v8.10.0 and NPM 5.6.
         nvm install 8.10.0
         nvm alias default 8.10.0
         npm install -g npm@5.6
    ```
    Verify node and npm installed correctly by running following command
     ```bash       
        node -v
        
        nvm -v
     ```
    Install latest chrome driver from [here](https://chromedriver.storage.googleapis.com/index.html).

    
    if you want to check which version of chromedriver is present on your machine then run 
    ```bash
        which chromedriver
    ```    
    Install cucumber and selenium webdriver globally
    ```bash
     * npm install cucumber

     * npm install selenium-webdriver
    ```
    Go NGTI folder from command prompt and run
    ```bash
     npm install
    ```
    above command will install all the project dependancies on your machine. If you see any error then please check network and proxy           settings.

    To run all the test
    ```bash
        npm run cucumber
     ```
    To run the tests which are not marked as @ignore
      ```bash   
        npm run cucumber -- "--tags=not @ignore"
      ``` 
4. Show how this web interface can be tested by providing a working set-up.
    ```bash
    Verify the search result is as per the search term
    Verify searching with cross site screepting terms in search box (ex. <script>alert "error"</script>)
    Verify the result after setting transport type dropdown filter
    Verify the sorting order of the vehicle records is as per highest to lowest units of vehicle
    Verify the sorting order of the vehicle records when search term is entered
    Verify vehicle url is redirecting to right page
    ```
5. Provide instructions how we could add automated testing of both the api and the web interface to our (Jenkins based) CI/CD pipeline.
    - For adding API and UI tests, we can create free style or pipeline project in jenkins
    - while setting pipeline, we have to provide schedule, repository url, branch to build and script path(jenkinsfile where agent and stages are defined)
    - For API tests, test results will be logged on jenkins console
    - For UI tests, either we can go for headless browser or we can integrate with browserstack or saucelabs
