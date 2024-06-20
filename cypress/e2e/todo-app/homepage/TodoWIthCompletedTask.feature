Feature: To do page with a completed task

  Background:
    Given I open the todo page
    And I mark todo item "Pay electric bill" as complete

  Scenario: can filter for uncompleted tasks
    When I click the "Active" link
    Then I see 1 todo item displayed
    And todo item 1 is "Walk the dog"
    And todo item "Pay electric bill" is not displayed

  Scenario: can filter for completed tasks
    When I click the "Completed" link
    Then I see 1 todo item displayed
    And todo item 1 is "Pay electric bill"
    And todo item "Walk the dog" is not displayed

  Scenario: can delete all completed tasks
    When I click the "Clear completed" button
    Then I see 1 todo item displayed
    And todo item 1 is "Walk the dog"
    And todo item "Pay electric bill" is not displayed
    When I click the "All" link
    Then I see 1 todo item displayed
    And todo item 1 is "Walk the dog"
    When I click the "Completed" link
    Then I see 0 todo item displayed