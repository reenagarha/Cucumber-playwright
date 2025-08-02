// handles login page locators
import { type Locator, type Page } from "playwright"
import { config } from "../config"

export class LoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly passwordForLogin: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.getByPlaceholder("Username");
    this.passwordForLogin = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }
  async goto() {
    await this.page.goto(`${config.baseURL}/`);
  }
  async login(username: string, password: string) {
    await this.userName.fill(username);
    await this.passwordForLogin.fill(password);
    await this.loginButton.click();
  }
}