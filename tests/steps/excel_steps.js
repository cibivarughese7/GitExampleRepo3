import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ExcelPage } from '../pages/ExcelPage.js';

const { Given, When, Then } = createBdd();

let excelPage;

Given('User launches the SauceDemo application', async ({ page }) => {
  excelPage = new ExcelPage(page);
  await excelPage.launchURL();
});

When('User enters login credentials from Excel', async () => {
  await excelPage.loginWithExcelData(0);
});

Then('User should successfully login', async () => {
  await expect(excelPage.inventory).toBeVisible();
});