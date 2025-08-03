Feature: Purchase products from Sauce Demo

  Scenario Outline: Log in and complete purchase of two products
    Given I open the Sauce Demo site
    When I login with username "<username>" and password "<password>"
    And I sort the products by price high to low
    And I add the cheapest and second most expensive products to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill in my information with first name "<firstName>", last name "<lastName>" and zip "<zipCode>"
    And I complete the purchase
    Then I should see a confirmation message

    Examples:
      | username        | password     | firstName | lastName | zipCode |
      | standard_user   | secret_sauce | John      | Doe      | 12345   |
      | problem_user    | secret_sauce | Jane      | Smith    | 67890   |
