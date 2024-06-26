import {Browser, BrowserContext, chromium, Page} from '@playwright/test';

export let browser: Browser
export let context: BrowserContext
export let page: Page

const BASE_URI: string = "https://www.saucedemo.com/"

export async function initializeDriver() {
    browser = await chromium.launch({ headless: false });
}

export async function launch() {
    context = await browser.newContext();
    page= await context.newPage();
    await page.goto(BASE_URI, { timeout: 30000 })
}

export async function destroy() {
    await page.close();
    await context.close()
}

export async function closeDriver() {
    await browser.close()
}