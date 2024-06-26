Feature: Textarea

  Background:
    Given I open the text-area page

  Scenario: fill in the form field with value
    When I fill in the form field with value:
    """
    This is the first line
    This is the second line
    """
    And I click the "Submit" button
    Then text is displayed:
    """
    This is the first line
    This is the second line
    """