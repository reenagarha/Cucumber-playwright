
import { Page, Browser, BrowserContext, chromium } from 'playwright';
import { setWorldConstructor, World } from '@cucumber/cucumber';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: any) {
    super(options);
  }

  public async launchBrowser(): Promise<void> {
    try {
      this.browser = await chromium.launch({ headless: false });
      this.context = await this.browser.newContext();
      this.page = await this.context.newPage();
    } catch (error) {
      console.error('Error launching browser:', error);
      throw error;
    }
  }

  public async closeBrowser(): Promise<void> {
    if (this.page && !this.page.isClosed()) {
      await this.page.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }
}
setWorldConstructor(CustomWorld);