const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { WaitlistPage } = require('../pages/WaitlistPage');

const { When, Then } = createBdd();

When('I click on the AI Workshop menu', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.clickAIWorkshop();
  await page.waitForURL(/ai-workshop/);
});

When('I enter waitlist email {string}', async ({ page }, email) => {
  const waitlistPage = new WaitlistPage(page);
  await waitlistPage.enterEmail(email);
});

When('I select the timezone, framework and source', async ({ page }) => {
  const waitlistPage = new WaitlistPage(page);
  await waitlistPage.selectTimezone();
  await waitlistPage.selectFramework();
  await waitlistPage.selectSource();
});

When('I click on the join the waitlist button', async ({ page }) => {
  const waitlistPage = new WaitlistPage(page);
  await waitlistPage.clickJoin();
});

Then('I should see the waitlist message {string}', async ({ page }, message) => {
  await expect(page.getByText(message)).toBeVisible();
});