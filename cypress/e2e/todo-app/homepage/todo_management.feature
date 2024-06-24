Feature: Managing Todo Items on Homepage

As a user of the Todo application,
I want to be able to manage my todo items efficiently,
So that I can keep track of tasks that need to be done.

This feature file covers the basic functionality of managing todo items such as displaying, adding, hovering, removing, and completing tasks.

Background:
  Given I open the todo page

@noCompletedTasks

# Scenario for displaying initial todo items
Scenario: Displays two todo items by default
  Then I see 2 todo items displayed
  * todo item 1 is "Pay electric bill"
  * todo item 2 is "Walk the dog"

Scenario Outline: Add new todo item
  When I add todo item <inputName>
  Then I see 3 todo items displayed
  And todo item 3 is <resultName>

  Examples: 
  | inputName      | resultName     |
  | "Feed the cat" | "Feed the cat" |
  | "Feed the dog" | "Feed the dog" |

Scenario: Hover todo item
  When I hover todo item "Pay electric bill"
  Then remove button of item "Pay electric bill" is visible

Scenario: Remove todo item
  When I hover todo item "Pay electric bill"
  And I press remove button of todo item "Pay electric bill"
  Then todo item "Pay electric bill" is not displayed
  And I see 1 todo item displayed

Scenario: Check off an item as completed
  When I mark todo item "Pay electric bill" as complete
  Then todo item "Pay electric bill" is checked

# Rule: Filtering Todo Items

  @hasCompletedTasks
  Scenario: Filter for Active Tasks
    Given I mark todo item "Pay electric bill" as complete
    When I click the "Active" link
    Then I see 1 todo item displayed
    And todo item 1 is "Walk the dog"
    And todo item "Pay electric bill" is not displayed

  Scenario: Filter for Completed Tasks
    Given I mark todo item "Pay electric bill" as complete
    When I click the "Completed" link
    Then I see 1 todo item displayed
    And todo item 1 is "Pay electric bill"
    And todo item "Walk the dog" is not displayed

  Scenario:  Clear Completed Tasks
    Given I mark todo item "Pay electric bill" as complete
    When I click the "Clear completed" button
    Then I see 1 todo item displayed
    And todo item 1 is "Walk the dog"
    And todo item "Pay electric bill" is not displayed
    But I click the "Active" link
    Then I see 1 todo item displayed
    And todo item 1 is "Walk the dog"
    But I click the "Completed" link
    Then I see 0 todo item displayed
