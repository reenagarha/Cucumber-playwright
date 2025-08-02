import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  constructor(private page: Page) {}

  async verifyConfirmation() {
    const text = await this.page.textContent('.complete-header');
    expect(text).toContain('Thank you for your order');
  }
}