# Playwright Automation Home Assignment

This framework is based on Playwright, TypeScript, and Cucumber BDD.

### Legend:

* [Project Structure](#project-structure)
* [Framework Architecture and Design](#framework-architecture-and-design)
* [Local Setup](#local-setup)

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.


- **npm**: npm is included with Node.js. Verify the installation by running npm -v in your terminal.
  
  
- **Aqua or Visual Studio Code (VSCode)**: Recommended IDEs for working with the framework.
  
  
## Project Structure
- **/src/main/modules**: All modules and their implementations. This repository only contain one module i.e. SwagPlatform; but in the necessity of multi-module, it can be created on this folder.


- **/src/main/pageObjects**: Directory for all page objects; which contains locators of the UI elements.


- **/src/main/step_definitions**: Step definitions for Cucumber.


- **/src/main/hooks**: One-time functions like driver initiation and teardown, as well as configurations.


- **/src/main/helpers**: Common methods used across the framework. Currently, DriverHelper is the only helper file which have methods that actually created or destroys the driver.


- **/src/resources/feature**: All Cucumber feature files. Multiple feature files can be created based on features or flow.


- **/output**: Directory where the Cucumber execution report (index.html) is generated. This folder is refreshed every time tests are run, and screenshots are attached to failing test cases.

Cucumber annotations such as **@BeforeAll**, **@Before**, **@After** and **@AfterAl** are used for setup and teardown respectively.
## Executing Test Automation
### Installation
To install all the necessary packages, run:
```
npm install
```
### Execution
To execute the automation suite, run:
```
npm test
```
## Framework Architecture and Design
* Below are examples of creating a module, and pageObject for the Authentication module.
#### Page Objects
- All object locators should be in their respective files according to the feature or screen.

- Create page objects here to use in respective modules. The page must have the module's name and 'Page' added to it.

Example:
```
export function getUsernameEntryInputField() {
    return page.locator("#user-name");
}
```
#### Modules

- **SwagPlatform.ts**: file that contains logics and assertions
```   
export async function enterUsername(email: string){
    try {
        await expect(AuthenticationPage.getUsernameEntryInputField()).toBeVisible({timeout: 2000});
        await AuthenticationPage.getUsernameEntryInputField().fill(email);
    } catch (e) {
        throw new Error("Failed to enter username on login page")
    }
}
```
#### Step Defitions

- Contains files where steps are created. Best approach is to create a separate file for separate features.

Example:

Scenario step: 
```
And user enters "locked_out_user" on email entry field
```
Step Implementation:
```
Given('user enters {string} on email entry field', async function (username: string) {
  await platform.enterUsername(username)
})
```
### Creating Feature Files
- Feature files can be grouped into folders in case of multiple feature files of a flow or feature.
- Each feature file must contain at most 10 scenarios to maintain readability and easier grouping.

**src/resources/features/Authentication/** might include the following feature files:
```
ExistingUserEmailLogin.feature
NewuserRegistration.feature
PhoneLogin.feature
QRLogin.feature
```
Example:
```
@authentication
Feature: Authentication
    Description: Scenarios for Login

    Background:
        And user validates login page
```
### Creating Scenarios
- A scenario must be added to the feature file it is most relevant to. Each scenario must have a unique ID (e.g., TES-) that maps to its test ID in the test repository. It should also include any other relevant tags such as 'smoke', 'automated', 'regression'.

Example:
```
@TES-0001
Scenario: Verify that the user can be logged in with valid credentials
```
### Major Libraries used
```
{
  "dependencies": {
    "@playwright/test": "^1.0.0",
    "@cucumber/cucumber": "^7.0.0",
    "typescript": "^4.0.0"
  }
}
```