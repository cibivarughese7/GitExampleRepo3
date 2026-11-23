Feature: Login Functionality
  The login functionality is a crucial aspect of any web application.
  Scenario: Successful login with valid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    Given I enter username "student"
    Given I enter password "Password123"
    When I click on the login button
    Then I should see the page containing "Logged In Successfully"

    Scenario Outline: Failed login with invalid credentials
  Given I navigate to "https://practicetestautomation.com/practice-test-login/"
  Given I enter username "<username>"
  Given I enter password "<password>"
When I click on the login button
  Then I should see the error message "<error>"
  Examples:
    | username  | password       | error    |                      
    | student   | Password       | Your password is invalid! |     
    | wronguser | Password123    | Your username is invalid! |     
    | wronguser | wrongpassword  | Your username is invalid! |    