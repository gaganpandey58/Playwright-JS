import {page} from "../helpers/DriverHelper";

export function getLoginPage() {
    return page.locator("#login_button_container");
}

export function getUsernameEntryInputField() {
    return page.locator("#user-name");
}

export function getPasswordEntryInputField() {
    return page.locator("#password");
}

export function getLoginButton() {
    return page.locator("#login-button");
}

export function getErrorMessageOfLoginScreen() {
    return page.locator("data-test=error");
}

export function getHamburgerMenuButton() {
    return page.locator("#react-burger-menu-btn");
}

export function getLogoutSidebarLink() {
    return page.locator("#logout_sidebar_link");
}