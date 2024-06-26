import * as AuthenticationPage from "../pageObjects/AuthenticationPage";
import * as InventoryPage from "../pageObjects/InventoryPage";
import {expect, Locator} from "@playwright/test";

export async function validateLoginScreen(){
    try {
        await expect(AuthenticationPage.getLoginPage()).toBeVisible({timeout: 10000});
    } catch (e) {
        throw new Error("Failed to validate login page")
    }
}

export async function enterUsername(email: string){
    try {
        await expect(AuthenticationPage.getUsernameEntryInputField()).toBeVisible({timeout: 2000});
        await AuthenticationPage.getUsernameEntryInputField().fill(email);
    } catch (e) {
        throw new Error("Failed to enter username on login page")
    }
}

export async function enterPassword(password: string){
    try {
        await expect(AuthenticationPage.getPasswordEntryInputField()).toBeVisible({timeout: 2000});
        await AuthenticationPage.getPasswordEntryInputField().fill(password);
    } catch (e) {
        throw new Error("Failed to enter password on login page")
    }
}

export async function clickLoginButton(){
    try {
        await expect(AuthenticationPage.getLoginButton()).toBeVisible({timeout: 2000});
        await AuthenticationPage.getLoginButton().click();
    } catch (e) {
        throw new Error("Failed to click Login Button in login page")
    }
}

export async function validatesErrorMessageOfPasswordField(expectedErrorMessage: string){
    try {
        await expect(AuthenticationPage.getErrorMessageOfLoginScreen()).toBeVisible({timeout: 2000});
        await expect(AuthenticationPage.getErrorMessageOfLoginScreen()).toHaveText(expectedErrorMessage);
    } catch (e) {
        throw new Error("Failed to verify error message in login page")
    }
}

export async function validatesSuccessfulLogin(){
    try {
        await expect(AuthenticationPage.getHamburgerMenuButton()).toBeVisible({timeout: 2000});
        await AuthenticationPage.getHamburgerMenuButton().click();

        await expect(AuthenticationPage.getLogoutSidebarLink()).toBeVisible({timeout: 2000});
        await expect(AuthenticationPage.getLogoutSidebarLink()).toHaveText("Logout");
    } catch (e) {
        throw new Error("Failed to validate successful login")
    }
}

export async function validateInventoryPage(){
    try {
        await expect(InventoryPage.getInventoryPage()).toBeVisible({timeout: 3000});
    } catch (e) {
        throw new Error("Failed to validate inventory page")
    }
}

export async function sortInventoryItem(sortTypeOrder: string){
    try {
        await expect(InventoryPage.getProductSortDropdown()).toBeVisible({timeout: 3000});
        await InventoryPage.getProductSortDropdown().click();

        await InventoryPage.getProductSortDropdown().selectOption(sortTypeOrder)
    } catch (e){
        throw new Error("Failed to sort inventory items")
    }
}

export async function verifySortedOrder(sortTypeOrder: string){
    try {
        if (sortTypeOrder === "Name (A to Z)" || sortTypeOrder === "Name (Z to A)"){
            let titles: string[] = []
            let locators  = await InventoryPage.getInventoryItemsTitle().all();
            for (let loc of locators as Locator[]) titles.push(await loc.textContent())

            const originalTitles = [...titles];

            if (sortTypeOrder === "Name (A to Z)") titles.sort();
            else if (sortTypeOrder === "Name (Z to A)") titles.sort().reverse();

            expect(originalTitles).toStrictEqual(titles)
        }

        else if (sortTypeOrder === "Price (low to high)" || sortTypeOrder === "Price (high to low)"){
            let prices: number[] = []
            for (let loc of await InventoryPage.getInventoryItemsPrice().all() as Locator[]) {
                let price: string = await loc.textContent();
                prices.push(Number.parseFloat(price.split("$")[1].trim()))
            }

            const originalPrices = [...prices];

            if (sortTypeOrder === "Price (low to high)") prices.sort(function(a,b) { return a-b; });
            else if (sortTypeOrder === "Price (high to low)") prices.sort(function(a,b) { return a-b; }).reverse();

            expect(originalPrices).toStrictEqual(prices)
        }
    } catch (e){
        throw new Error("Failed to validate the sorted inventory page")
    }
}

export async function addInventoryItemToCart(itemTitle: string){
    try {
        await expect(InventoryPage.getProductAddToCartButton(itemTitle)).toBeVisible({timeout: 3000});
        await InventoryPage.getProductAddToCartButton(itemTitle).click()
    } catch (e) {
        throw new Error("Failed to add inventory items on cart")
    }
}

export async function clickShoppingCart(){
    try {
        await expect(InventoryPage.getShoppingCart()).toBeVisible({timeout: 3000});
        await InventoryPage.getShoppingCart().click()
    } catch (e) {
        throw new Error("Failed to navigate to shopping cart")
    }
}

export async function validateShoppingCartItems(itemsList: string[]){
    try {
        let locators  = await InventoryPage.getInventoryItemsTitle().all();
        expect(locators).toHaveLength(itemsList.length)
        for (let locator of locators as Locator[]) expect(itemsList.includes(await locator.textContent())).toBe(true)
    } catch (e) {
        throw new Error("Failed to validate shopping cart items")
    }
}

export async function clickCheckoutButton(){
    try {
        await expect(InventoryPage.getCheckoutButton()).toBeVisible({timeout: 2000});
        await InventoryPage.getCheckoutButton().click();
    } catch (e) {
        throw new Error("Failed to click checkout button")
    }
}

export async function validateCheckoutInfoScreen(){
    try {
        await expect(InventoryPage.getCheckoutInfoScreen()).toBeVisible({timeout: 2000});
    } catch (e) {
        throw new Error("Failed to validate checkout info screen")
    }
}

export async function enterFirstName(firstName: string){
    try {
        await expect(InventoryPage.getCheckoutInfoScreen()).toBeVisible({timeout: 2000});
        await InventoryPage.getFirstNameInputField().fill(firstName);
    } catch (e) {
        throw new Error("Failed to enter first name on checkout info screen")
    }
}

export async function enterLastName(lastName: string){
    try {
        await InventoryPage.getLastNameInputField().fill(lastName);
    } catch (e) {
        throw new Error("Failed to enter last name on checkout info screen")
    }
}

export async function enterPostalCode(postalCode: string){
    try {
        await InventoryPage.getPostalCodeInputField().fill(postalCode);
    } catch (e) {
        throw new Error("Failed to enter last name on checkout info screen")
    }
}

export async function clickContinueButton(){
    try {
        await expect(InventoryPage.getContinueButton()).toBeVisible({timeout: 2000});
        await InventoryPage.getContinueButton().click();
    } catch (e) {
        throw new Error("Failed to click continue Button in shopping cart")
    }
}

export async function clickFinishButton(){
    try {
        await expect(InventoryPage.getFinishButton()).toBeVisible({timeout: 2000});
        await InventoryPage.getFinishButton().click();
    } catch (e) {
        throw new Error("Failed to click finish Button in shopping cart")
    }
}

export async function validateCheckoutConfirmation(){
    try {
        await expect(InventoryPage.getCheckoutCompleteConfirmation()).toBeVisible({timeout: 2000});
        await expect(InventoryPage.getCheckoutCompleteConfirmation()).toHaveText("Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home")
    } catch (e) {
        throw new Error("Failed to validate checkout confirmation message")
    }
}