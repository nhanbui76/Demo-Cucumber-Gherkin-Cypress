Feature: to-do app homepage

Background:
  Given I open the to-do page

Scenario: displays two to-do items by default
  Then I see 2 to-do items displayed
  And to-do item 1 is "Pay electric bill"
  And to-do item 2 is "Walk the dog"

Scenario: add new todo item
  When I add to-do item "Feed the cat"
  Then I see 3 to-do items displayed
  And to-do item 3 is "Feed the cat"

Scenario: hover todo item
  When I hover to-do item "Pay electric bill"
  Then destroy button of item "Pay electric bill" is visible

Scenario: remove todo item
  When I hover to-do item "Pay electric bill"
  Then destroy button of item "Pay electric bill" is visible
  When I press destroy button of to-do item "Pay electric bill"
  Then to-do item "Pay electric bill" is removed
  Then I see 1 to-do items displayed