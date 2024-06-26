@assignment @inventory
Feature: Inventory
  Description: Scenarios for Inventory Items, Cart & Checkouts

  Background:
    Given user validates login page
    And user enters "standard_user" on email entry field
    And user enters "secret_sauce" on password entry field
    And user clicks on login button

  @TES-0003 @inventoryList
  Scenario: Verify that a valid user can filter items by Name (descending order) and Price from Low to High.
    When user applies "Name (Z to A)" as inventory sorting order
    Then user verifies inventory items are sorted in "Name (Z to A)" order
    When user applies "Price (low to high)" as inventory sorting order
    Then user verifies inventory items are sorted in "Price (low to high)" order

  @TES-0004 @cart
  Scenario: Verify that a valid user can add items to the cart
    And user adds inventory item "Sauce Labs Onesie" to the cart
    And user adds inventory item "Sauce Labs Fleece Jacket" to the cart
    And user adds inventory item "Test.allTheThings() T-Shirt (Red)" to the cart
    And user adds inventory item "Sauce Labs Backpack" to the cart
    When user opens shopping cart
    Then user validates following items on the cart
      | Sauce Labs Onesie | Sauce Labs Fleece Jacket | Test.allTheThings() T-Shirt (Red) | Sauce Labs Backpack |

  @TES-0005 @checkout
  Scenario: Verify that a valid user can perform a checkout
    And user adds following inventory item to the cart
      | Sauce Labs Onesie | Sauce Labs Fleece Jacket | Test.allTheThings() T-Shirt (Red) | Sauce Labs Backpack |
    And user opens shopping cart
    And user clicks on checkout button
    And user verifies checkout info screen
    And user enters "Gagan" on first name field
    And user enters "Pandey" on last name field
    And user enters "44600" on postal code field
    And user clicks on continue button
    And user validates following items on the summary
      | Sauce Labs Onesie | Sauce Labs Fleece Jacket | Test.allTheThings() T-Shirt (Red) | Sauce Labs Backpack |
    When user clicks on finish button
    Then user receives checkout confirmation message