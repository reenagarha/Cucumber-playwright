import { type Page, type Locator,expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  readonly confirmationMessage: Locator;
  constructor( page: Page) {
    this.page = page;
    this.confirmationMessage = page.locator(".complete-header")
  }

  async verifyConfirmation() {
    const text = await this.confirmationMessage.textContent();
    expect(text).toContain('Thank you for your order');
  }
}