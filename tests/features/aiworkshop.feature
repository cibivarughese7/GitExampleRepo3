Feature: AI Workshop Waitlist

  Scenario: Open AI Workshop and join the waitlist
    Given I navigate to "https://practicetestautomation.com/"
    When I click on the AI Workshop menu
    And I enter waitlist email "testuser123@example.com"
    And I select the timezone, framework and source
    And I click on the join the waitlist button
    Then I should see the waitlist message "on the waitlist"