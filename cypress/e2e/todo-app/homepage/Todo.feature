Feature: todo app homepage

Background:
  Given I open the todo page

Scenario: displays two todo items by default
  Then I see 2 todo items displayed
  And todo item 1 is "Pay electric bill"
  And todo item 2 is "Walk the dog"

Scenario: add new todo item
  When I add todo item "Feed the cat"
  Then I see 3 todo items displayed
  And todo item 3 is "Feed the cat"

Scenario: hover todo item
  When I hover todo item "Pay electric bill"
  Then destroy button of item "Pay electric bill" is visible

Scenario: remove todo item
  When I hover todo item "Pay electric bill"
  And I press destroy button of todo item "Pay electric bill"
  And todo item "Pay electric bill" is not displayed
  And I see 1 todo item displayed

Scenario: check off an item as completed
  When I mark todo item "Pay electric bill" as complete
  Then todo item "Pay electric bill" is checked