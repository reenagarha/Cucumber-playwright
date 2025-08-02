Feature: login
    As a user 
    I want to login to my account 
    so that I can access product catalog
Scenario: Successful login
Given I navigate to the Saucelab page
When I validate the title of the page
Then I enter username
And I enter password
And I click on login button
