import { test, expect } from '@playwright/test';
import { viewports, expectFluidLayout } from './viewports';

for (const { width, height } of viewports) {
  test(`entrada legível e navegável em ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height });
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { name: 'cuidoka', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Oi! Pode entrar.' })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      content: document.documentElement.scrollWidth,
      viewport: innerWidth,
      overflow: [...document.querySelectorAll('body *')].filter((element) => !element.closest('.room-navigation') && element.getBoundingClientRect().right > innerWidth + 1).map((element) => ({ tag: element.tagName, class: element.getAttribute('class'), right: Math.round(element.getBoundingClientRect().right) })).slice(0, 12),
    }));
    const snapshotPath = testInfo.outputPath('entrada.png');
    await page.screenshot({ fullPage: true, path: snapshotPath });
    await testInfo.attach(`entrada-${width}`, { path: snapshotPath, contentType: 'image/png' });
    expect(dimensions.content, JSON.stringify(dimensions.overflow)).toBeLessThanOrEqual(dimensions.viewport + 1);
    await expectFluidLayout(page);
    const welcome = await page.locator('.welcome').boundingBox();
    const photographs = await page.locator('.photo-line').boundingBox();
    if (width <= 760) expect(welcome!.y + welcome!.height).toBeLessThan(photographs!.y + 5);
    const navigation = page.getByRole('navigation', { name: 'Cômodos da casa' });
    await navigation.getByRole('link', { name: /Oficina/ }).click();
    await expect(page).toHaveURL('/oficina/');
    await expect(page.getByRole('heading', { name: 'Tudo tem seu começo.' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: /Oficina/ })).toHaveAttribute('aria-current', 'page');
    expect(errors).toEqual([]);
  });
}

test('atalho de teclado leva ao conteúdo e apresentação é acessível', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#conteudo')).toBeFocused();
  await page.getByRole('link', { name: 'Quem mora aqui' }).click();
  await expect(page).toHaveURL('/#sobre');
  await expect(page.locator('#sobre')).toBeInViewport();
});

test('cômodos e 404 respondem; rascunhos não são publicados', async ({ page }) => {
  for (const path of ['/estudio/', '/oficina/', '/sotao/', '/sala/', '/galeria/']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { name: 'Tudo tem seu começo.' })).toBeVisible();
  }
  const response = await page.goto('/oficina/modelo-privado/');
  expect(response?.status()).toBe(404);
  expect((await page.goto('/oficina/amostras/gerador-de-tavernas/'))?.status()).toBe(404);
  await page.goto('/');
  await expect(page.getByRole('complementary', { name: 'Aviso de demonstração' })).toHaveCount(0);
});

test('preferência por movimento reduzido é respeitada', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.locator('.wall-object').first().evaluate((element) => getComputedStyle(element).transitionDuration)).toBe('0s');
  await page.locator('.about-copy').scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(page.locator('.about-copy')).toHaveCSS('opacity', '1');
});

test('conteúdo e navegação ficam disponíveis sem JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1366, height: 768 } });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Oi! Pode entrar.' })).toBeVisible();
  await expect(page.locator('.about-copy')).toHaveCSS('opacity', '1');
  await page.getByRole('navigation', { name: 'Cômodos da casa' }).getByRole('link', { name: /Oficina/ }).click();
  await expect(page.getByRole('heading', { name: 'Tudo tem seu começo.' })).toBeVisible();
  await expectFluidLayout(page);
  await context.close();
});
