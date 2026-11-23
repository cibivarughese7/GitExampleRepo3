import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { expect } from '@playwright/test';

const { Given, When, Then, Before } = createBdd()

let loginPage

Before(async ({ page }) => {
    loginPage = new LoginPage(page)
})

Given('I navigate to {string}', async ({}, url) => {
    await loginPage.launchURL(url)
})

Given('I enter username {string}', async ({}, username) => {
    await loginPage.enterUsername(username)
})

Given('I enter password {string}', async ({}, password) => {
    await loginPage.enterPassword(password)
})

When('I click on the login button', async ({}) => {
    await loginPage.clickLogin()
})

Then('I should see the page containing {string}', async ({}, expectedText) => {
    await expect(loginPage.successMsg).toContainText(expectedText)
})

Then('I should see the error message {string}', async ({ page }, error) => {
  await expect(page.locator('#error')).toHaveText(error);
});