import { test, expect } from '@playwright/test';

test('confirma pedido e exibe o total em reais', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Produto').selectOption('keyboard');
  await page.getByRole('button', { name: 'Finalizar pedido' }).click();
  await expect(page.getByRole('status')).toHaveText(/Pedido #\d+ confirmado\. Total: R\$\s159,90/);
});

test('expõe a falha de carregamento do catálogo', async ({ page }) => {
  await page.route('**/api/products', route => route.fulfill({ status: 503 }));
  await page.goto('/');
  await expect(page.getByRole('status')).toHaveText('Não foi possível carregar o catálogo.');
  await expect(page.getByRole('button', { name: 'Finalizar pedido' })).toBeDisabled();
});

test('apresenta erro quando o pedido excede o estoque', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Produto').selectOption('mouse');
  await page.getByLabel('Quantidade').fill('99');
  await page.getByRole('button', { name: 'Finalizar pedido' }).click();
  await expect(page.getByRole('status')).toHaveText('Estoque insuficiente.');
});
