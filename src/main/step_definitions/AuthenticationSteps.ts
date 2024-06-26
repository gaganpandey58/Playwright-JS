import { Given, Then} from '@cucumber/cucumber';
import * as platform from "../modules/SwagPlatform";

Given('user validates login page', async function () {
  await platform.validateLoginScreen()
})

Given('user enters {string} on email entry field', async function (username: string) {
  await platform.enterUsername(username)
})

Given('user enters {string} on password entry field', async function (password: string) {
  await platform.enterPassword(password)
})

Given('user clicks on login button', async function () {
  await platform.clickLoginButton()
})

Then('user validates error message of password field with {string}', async function (expectedErrorText: string) {
  await platform.validatesErrorMessageOfPasswordField(expectedErrorText)
})

Given('user validates successful login', async function () {
  await platform.validatesSuccessfulLogin()
})