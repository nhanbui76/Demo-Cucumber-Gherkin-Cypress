Feature: cart feature

  As a user of the application,
  I want to be able to add product to cart,
  So that I can buy item.

  Background:
    Given I open the sauce demon page
    And I attempt to log in with username: 'standard_user' and password: 'secret_sauce'

  Scenario: add multiple items to cart successfully
  When I add these items to cart:
    | name                  |  
    | Sauce Labs Backpack   |
    | Sauce Labs Bike Light  |  
  Then cart has 2 items
  When I click cart icon
  Then my cart should have the following items: 
    | name                 |
    | Sauce Labs Backpack  |
    | Sauce Labs Bike Light |