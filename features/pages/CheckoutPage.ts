import { type Locator, type Page } from 'playwright';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zip: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator
  
  
  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.zip = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator('#continue')
    this.finishButton = page.locator('#finish')
  }

  async fillCustomerInfo(firstName: string, lastName: string, zip: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zip.fill(zip);
    await this.continueButton.click()
  }

  async completePurchase() {
    await this.finishButton.click();
  }
}