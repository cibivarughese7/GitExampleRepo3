Feature: Excel Data Driven Login

  Scenario: Verify login with valid credentials
    Given User launches the SauceDemo application
    When User enters login credentials from Excel
    Then User should successfully login