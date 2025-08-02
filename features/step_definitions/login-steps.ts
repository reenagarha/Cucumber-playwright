import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testdata from '../fixtures/testdata.json';

export let loginpage: LoginPage;
export let browser: Browser;
export let page: Page;

Given('I navigate to the Saucelab page', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com');
  loginpage = new LoginPage(page); 
});

When('I validate the title of the page', async () => {
  const title = await page.title();
  console.log(title);
});

Then('I enter username', async () => {
  await loginpage.userName.fill(testdata.username);
});

Then('I enter password', async () => {
  await loginpage.passwordForLogin.fill(testdata.password);
});

Then('I click on login button', async () => {
  await loginpage.loginButton.click();
  await page.close();
  await browser.close();
});