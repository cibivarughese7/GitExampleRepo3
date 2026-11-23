import { readExcel } from '../../utils/excelUtils.js';

export class ExcelPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.inventory = page.locator('[data-test="inventory-container"]');
  }

  async launchURL() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginWithExcelData(rowIndex = 0) {
    const excelData = readExcel();
    await this.usernameInput.fill(excelData[rowIndex].Username);
    await this.passwordInput.fill(excelData[rowIndex].Password);
    await this.loginButton.click();
  }
}