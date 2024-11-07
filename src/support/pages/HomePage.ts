import { Page } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly searchInputSelector = '#cb1-edit';
  readonly loginButtonSelector = '#login';

  constructor(page: Page) {
    this.page = page;
  }

  async searchProductByName(productName: string) {
    await this.page.fill(this.searchInputSelector, productName);
    await this.page.press(this.searchInputSelector, 'Enter');
  }

  async clicarNoEntrar() {
    await this.page.click(this.loginButtonSelector);
  }
}
