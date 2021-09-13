Feature: Add ToDO list

  Scenario: Check the successful login to ToDO page
    Given I login to ToDO app
    When I enter the list of items
    Then I can select Active items
    When I can mark items as completed
    And I can see Completed items
    Then I clear completed items