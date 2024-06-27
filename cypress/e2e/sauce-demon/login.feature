Feature: Login Feature

  As a user of the application,
  I want to be able to log in with my credential,
  So that I can access my account.

  Background:
    Given I open the sauce demon page
  
  Scenario: Login with correct username and password
    When I attempt to log in with username: "standard_user" and password: "secret_sauce"
    Then text "Swag Labs" is displayed

  Scenario Outline: Login with incorrect username or password
    When I attempt to log in with username: <username> and password: <password>
    Then text "Epic sadface: Username and password do not match any user in this service" is displayed
    Examples: 
    | username      | password      |
    | "standard_user" | "secret_sauce1" |
    | "standard_user1" | "secret_sauce" |
  
  Scenario Outline: Login with empty username
    When I attempt to log in with username: "" and password: <password>
    Then text "Epic sadface: Username is required" is displayed
    Examples: 
    | password      |
    | ""            |
    |"secret_sauce" |

  Scenario: Login with empty password
    When I attempt to log in with username: "standard_user" and password: ""
    Then text "Epic sadface: Password is required" is displayed