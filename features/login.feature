Feature: Login
  As a user 
  I want to login to Saucedemo website 
  so that I can access the product catalog

  Scenario Outline: Successful login
    Given I navigate to the Saucedemo page
    When I enter valid username "<username>" and password "<password>"
    Then I am logged in successfully

    Examples:
      | username                | password       |
      | standard_user           | secret_sauce   |
      | problem_user            | secret_sauce   |
      | performance_glitch_user | secret_sauce   |

