import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class BotaoEntrar extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoEntrar(): Locator {
    return this.page.locator('[data-link-id="login"]');
  }

  async clicarNoBotaoEntrar() {
    const botaoEntrar = this.getBotaoEntrar();
    await botaoEntrar.click();
  }
}
