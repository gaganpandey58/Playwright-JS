@assignment @authentication
Feature: Authentication
  Description: Scenarios for Login

  Background:
    Given user validates login page

  @TES-0001 @invalidLogin
  Scenario: Verify correct error message is displayed while logging in with the Locked user
    And user enters "locked_out_user" on email entry field
    And user enters "secret_sauce" on password entry field
    When user clicks on login button
    Then user validates error message of password field with "Epic sadface: Sorry, this user has been locked out."

  @TES-0002 @validLogin
  Scenario: Verify that the user can be logged in with valid credentials
    And user enters "standard_user" on email entry field
    And user enters "secret_sauce" on password entry field
    When user clicks on login button
    Then user validates inventory page
    And user validates successful login