import { test, expect } from '@playwright/test';

for (const [name, path] of [['entrada', '/'], ['texto', '/sala/amostras/comecar-sem-saber/'], ['obra', '/galeria/amostras/farol/']]) {
  for (const width of [390, 1440]) {
    test(`detalhe-${name}-${width}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 1000 });
      expect((await page.goto(path!))?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => Promise.all([...document.images].map(async (image) => { image.loading = 'eager'; await image.decode().catch(() => undefined); })));
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      await expect(page.getByRole('link', { name: 'Prévia · exemplos da referência', exact: true })).toBeVisible();
      const screenshotPath = testInfo.outputPath('detalhe.png');
      await page.screenshot({ fullPage: true, path: screenshotPath });
      await testInfo.attach(`${name}-${width}`, { path: screenshotPath, contentType: 'image/png' });
    });
  }
}

test('campanha possui página individual e rótulo de demonstração', async ({ request }) => {
  const response = await request.get('/sotao/amostras/mare-de-vidro/');
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toContain('A Maré de Vidro');
  expect(html).toContain('aviso-demonstracao');
  expect(html).toContain('Diário de sessões');
});

for (const room of ['oficina', 'sala', 'galeria', 'estudio', 'sotao']) {
  for (const width of [320, 390, 768, 1024, 1440]) {
    test(`composicao-${room}-${width}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 1000 });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      expect((await page.goto(`/${room}/`))?.status()).toBe(200);
      await expect(page.locator(`[data-room-scene="${room}"]`)).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => Promise.all([...document.images].map(async (image) => { image.loading = 'eager'; await image.decode().catch(() => undefined); })));
      const size = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, width: innerWidth, bad: [...document.images].filter((image) => image.naturalWidth === 0).map((image) => image.src) }));
      const path = testInfo.outputPath('composicao.png');
      await page.screenshot({ fullPage: true, path });
      await testInfo.attach(`${room}-${width}`, { path, contentType: 'image/png' });
      expect(size.bad).toEqual([]);
      expect(size.content).toBeLessThanOrEqual(size.width + 1);
      await expect(page.getByRole('complementary', { name: 'Aviso de demonstração' })).toBeVisible();
      expect(errors).toEqual([]);
    });
  }
}

test('a bancada sorteia nomes e abre a ficha do projeto', async ({ page }) => {
  await page.goto('/oficina/');
  const result = page.locator('[data-tavern-result]');
  const initial = await result.textContent();
  const button = page.getByRole('button', { name: 'Sortear outro nome' });
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(result).not.toHaveText(initial!);
  await page.getByRole('link', { name: 'Ler como foi feito', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Gerador de nomes de taverna', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sortear outro nome' })).toBeVisible();
});

test('sala combina assunto e maturidade no arquivo', async ({ page }) => {
  await page.goto('/sala/');
  await page.getByRole('group', { name: 'Assuntos', exact: true }).getByRole('button', { name: /^música/ }).click();
  await expect(page.locator('.text-archive [data-work]:visible')).toHaveCount(2);
  await page.getByRole('group', { name: 'Por maturidade' }).getByRole('button', { name: /^árvore/ }).click();
  await expect(page.locator('.text-archive [data-work]:visible')).toHaveCount(1);
  await expect(page.locator('.text-archive [data-work]:visible')).toContainText('O que uma trilha faz por uma cena');
});

test('galeria filtra as fotografias e restaura a parede', async ({ page }) => {
  await page.goto('/galeria/');
  await page.getByRole('button', { name: /^Fotografias/ }).click();
  await expect(page.locator('[data-work]:visible')).toHaveCount(3);
  await expect(page.getByRole('heading', { name: 'Desenhos', exact: true })).toBeHidden();
  await page.getByRole('button', { name: 'Tudo', exact: true }).click();
  await expect(page.locator('[data-work]:visible')).toHaveCount(10);
});

test('as fitas filtram faixas sem simular áudio ausente', async ({ page }) => {
  await page.goto('/estudio/');
  await page.getByRole('button', { name: /A Maré de Vidro/ }).click();
  await expect(page.locator('.track-list [data-work]:visible')).toHaveCount(3);
  await page.getByRole('button', { name: 'Ver todas', exact: true }).click();
  await expect(page.locator('.track-list [data-work]:visible')).toHaveCount(5);
  await expect(page.locator('audio')).toHaveCount(0);
  await expect(page.getByText(/sem áudio anexado/)).toBeVisible();
});

test('texto renderiza sumário, notas e relações entre cômodos', async ({ page }) => {
  await page.goto('/sala/amostras/comecar-sem-saber/');
  await expect(page.getByRole('heading', { name: 'Sobre começar coisas sem saber onde vão dar', exact: true })).toBeVisible();
  await page.getByRole('navigation', { name: 'Neste trabalho' }).getByRole('link', { name: 'A primeira nota', exact: true }).click();
  await expect(page).toHaveURL(/#a-primeira-nota$/);
  await expect(page.getByRole('heading', { name: 'quem aponta pra cá', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Vigília no farol ↗', exact: true }).first().click();
  await expect(page.getByRole('heading', { name: 'Vigília no farol', exact: true })).toBeVisible();
});

test('rascunho continua inacessível inclusive em desenvolvimento', async ({ page }) => {
  expect((await page.goto('/oficina/modelo-privado/'))?.status()).toBe(404);
});
