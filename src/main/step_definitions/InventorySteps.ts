import {DataTable, Given} from '@cucumber/cucumber';
import * as platform from "../modules/SwagPlatform";
import {validateCheckoutInfoScreen} from "../modules/SwagPlatform";

Given('user validates inventory page', async function () {
    await platform.validateInventoryPage()
})

Given('user applies {string} as inventory sorting order', async function (sortTypeOrder: string) {
    await platform.sortInventoryItem(sortTypeOrder)
})

Given('user verifies inventory items are sorted in {string} order', async function (sortTypeOrder: string) {
    await platform.verifySortedOrder(sortTypeOrder)
})

Given('user adds inventory item {string} to the cart', async function (itemName: string) {
    await platform.addInventoryItemToCart(itemName)
})

Given('user adds following inventory item to the cart', async function (dataTable: DataTable) {
    for (const item of dataTable.raw()[0])
        await platform.addInventoryItemToCart(item)
})

Given('user opens shopping cart', async function () {
    await platform.clickShoppingCart()
})

Given('user validates following items on the cart', async function (dataTable: DataTable) {
    await platform.validateShoppingCartItems(dataTable.raw()[0])
})

Given('user clicks on checkout button', async function () {
    await platform.clickCheckoutButton()
})

Given('user verifies checkout info screen', async function () {
    await platform.validateCheckoutInfoScreen()
})

Given('user enters {string} on first name field', async function (firstName: string) {
    await platform.enterFirstName(firstName)
})

Given('user enters {string} on last name field', async function (lastName: string) {
    await platform.enterLastName(lastName)
})

Given('user enters {string} on postal code field', async function (postalCode: string) {
    await platform.enterPostalCode(postalCode)
})

Given('user clicks on continue button', async function () {
    await platform.clickContinueButton()
})

Given('user validates following items on the summary', async function (dataTable: DataTable) {
    await platform.validateShoppingCartItems(dataTable.raw()[0])
})

Given('user clicks on finish button', async function () {
    await platform.clickFinishButton()
})

Given('user receives checkout confirmation message', async function () {
    await platform.validateCheckoutConfirmation()
})