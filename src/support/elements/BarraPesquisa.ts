import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class BarraPesquisa extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBarraPesquisa(): Locator {
    return this.page.locator('#cb1-edit');
  }

  async verificarValorNaBarra(valor: string): Promise<boolean> {
    const barraPesquisa = this.getBarraPesquisa();
    const valorAtual = await barraPesquisa.inputValue();
    return valorAtual === valor;
  }
}
