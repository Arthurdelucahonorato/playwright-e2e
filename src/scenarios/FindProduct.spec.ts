import { test, expect } from '@playwright/test';
import HomePage from '../support/pages/HomePage';
import BarraPesquisa from '../support/elements/BarraPesquisa';
import BotaoEntrar from '../support/elements/BotaoEntrar';

test.describe('Mercado Libre Tests', () => {
  let homePage: HomePage;
  let barraPesquisa: BarraPesquisa;
  let botaoEntrar: BotaoEntrar;
  const BASE_URL = 'https://www.mercadolivre.com.br/';

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    barraPesquisa = new BarraPesquisa(page);
    botaoEntrar = new BotaoEntrar(page);
    await page.goto(BASE_URL);
  });

  test('Find product by name "iphone"', async ({ page }) => {
    await homePage.searchProductByName('iphone');

    const barraContemIphone = await barraPesquisa.verificarValorNaBarra('iphone');
    expect(barraContemIphone).toBeTruthy();

    await page.waitForSelector('.ui-search-result__content-wrapper');
  });

  test('Verifica se clicou no botão ENTRAR e foi para tela de LOGIN', async ({ page }) => {
    await botaoEntrar.clicarNoBotaoEntrar();
    await expect(page).toHaveURL('https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolivre.com.br%2F&loginType=explicit#nav-header');

  });
});
