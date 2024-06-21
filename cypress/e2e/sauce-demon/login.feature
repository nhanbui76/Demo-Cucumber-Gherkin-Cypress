Feature: User Login

  As a user of the application,
  I want to be able to log in with my credentials,
  So that I can access my account.

  Background:
    Given I open the sauce demon page

  Scenario: Login with multiple sets of credentials
  When I attempt to log in with the following credentials:
    | username      | password     |
    | standard_user | secret_sauce |
    | visual_user   | secret_sauce |
  Then text "Products" is displayed