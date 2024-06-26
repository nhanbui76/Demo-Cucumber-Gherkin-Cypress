Feature: Login Feature

  As a user of the application,
  I want to be able to log in with my credential,
  So that I can access my account.

  Background:
    Given I open the sauce demon page

  Scenario: Login with correct username and password
  When I attempt to log in with username: "standard_user" and password: "secret_sauce"
  Then text "Products" is displayed