import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/Confirmation';
import { CustomWorld } from '../support/world'

Given('I open the Sauce Demo site', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('I login with username {string} and password {string}', 
  async function (this: CustomWorld, username: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(username, password);
});

When('I sort the products by price high to low', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.sortHighToLow();
});

When('I add the cheapest and second most expensive products to the cart', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.addCheapestAndSecondMostExpensive();
});

When('I go to the cart', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.goToCart();
});

When('I proceed to checkout', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.page);
  await cartPage.proceedToCheckout();
});

When('I fill in my information with first name {string}, last name {string} and zip {string}',
  async function (this: CustomWorld, firstName:string, lastName:string, zipCode:string) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.fillCustomerInfo(firstName, lastName, zipCode);
});

When('I complete the purchase', async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.completePurchase();
});

Then('I should see a confirmation message', async function (this: CustomWorld) {
  const confirmationPage = new ConfirmationPage(this.page);
  await confirmationPage.verifyConfirmation();
});
