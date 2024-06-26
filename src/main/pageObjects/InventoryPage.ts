import {page} from "../helpers/DriverHelper";

export function getInventoryPage() {
    return page.locator("data-test=inventory-container");
}

export function getProductSortDropdown() {
    return page.locator("data-test=product-sort-container");
}

export function getProductAddToCartButton(itemName: string) {
    return page.locator(`xpath=//*[@data-test='inventory-item-name' and text()='${itemName}']/parent::a/parent::div/following-sibling::div//button`);
}

export function getInventoryItemsTitle(){
    return page.locator("data-test=inventory-item-name")
}

export function getInventoryItemsPrice(){
    return page.locator("data-test=inventory-item-price")
}

export function getShoppingCart(){
    return page.locator("#shopping_cart_container")
}

export function getCheckoutButton(){
    return page.locator("#checkout")
}

export function getCheckoutInfoScreen(){
    return page.locator("#checkout_info_container")
}

export function getFirstNameInputField(){
    return page.locator("#first-name")
}

export function getLastNameInputField(){
    return page.locator("#last-name")
}

export function getPostalCodeInputField(){
    return page.locator("#postal-code")
}

export function getContinueButton(){
    return page.locator("#continue")
}

export function getCheckoutSummaryScreen(){
    return page.locator("#checkout_summary_container")
}

export function getFinishButton(){
    return page.locator("#finish")
}

export function getCheckoutCompleteConfirmation(){
    return page.locator("#checkout_complete_container")
}