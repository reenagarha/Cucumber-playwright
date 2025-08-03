import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/world';

Given('I navigate to the Saucedemo page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('I enter valid username {string} and password {string}', 
  async function (this: CustomWorld, username: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(username, password);
});

Then('I am logged in successfully', async function (this: CustomWorld) {

  
  await expect(this.page).toHaveURL(/.*inventory/);
});

// Close the browser after each scenario
After(async function(this: CustomWorld) {
  await this.closeBrowser();
});