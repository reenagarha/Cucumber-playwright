Feature: Purchase products from Sauce Demo

  Scenario: Log in and complete purchase of two products
    Given I open the Sauce Demo site
    When I log in with valid credentials
    And I sort the products by price high to low
    And I add the cheapest and second most expensive products to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill in my information
    And I complete the purchase
    Then I should see a confirmation message
