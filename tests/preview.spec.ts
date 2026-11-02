import { test, expect } from '@playwright/test';
import { viewports, expectFluidLayout } from './viewports';

for (const [name, path] of [['entrada', '/'], ['texto', '/sala/amostras/comecar-sem-saber/'], ['obra', '/galeria/amostras/farol/']]) {
  for (const width of [390, 1440, 1920, 3440]) {
    test(`detalhe-${name}-${width}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 1000 });
      expect((await page.goto(path!))?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => Promise.all([...document.images].map(async (image) => { image.loading = 'eager'; await image.decode().catch(() => undefined); })));
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width + 1);
      await expectFluidLayout(page);
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
  for (const { width, height } of viewports) {
    test(`composicao-${room}-${width}`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height });
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
      await expectFluidLayout(page);
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

test('navegação acompanha uma janela baixa e o redimensionamento', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 600 });
  await page.goto('/');
  const navigation = page.getByRole('navigation', { name: 'Cômodos da casa' });
  await expect(navigation.getByRole('link', { name: /Galeria/ })).toBeInViewport();
  await navigation.getByRole('link', { name: /Sala/ }).click();
  for (const width of [1920, 1024, 390, 3440]) {
    await page.setViewportSize({ width, height: 900 });
    await expectFluidLayout(page);
    await expect(page.getByRole('heading', { name: 'sala', exact: true })).toBeVisible();
  }
});

test('tabela da oficina permite alcançar todas as colunas com teclado', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/oficina/');
  const table = page.getByRole('region', { name: 'Projetos', exact: true });
  await table.focus();
  await expect(table).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => table.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  await expectFluidLayout(page);
});

test('objetos e livros respondem ao hover e ao foco de teclado', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const object = page.locator('.music-object');
  const resting = await object.evaluate((element) => getComputedStyle(element).transform);
  await object.hover();
  await expect.poll(() => object.evaluate((element) => new DOMMatrix(getComputedStyle(element).transform).m42)).toBe(-4);
  const hovering = await object.evaluate((element) => getComputedStyle(element).transform);
  expect(hovering).not.toBe(resting);
  await page.mouse.move(0, 0);
  await page.keyboard.press('Tab');
  await object.focus();
  await expect(object).toBeFocused();
  await expect(object).toHaveCSS('transform', hovering);
  const book = page.locator('a.book').first();
  await book.focus();
  await expect.poll(() => book.evaluate((element) => new DOMMatrix(getComputedStyle(element).transform).m42)).toBe(-8);
  await expectFluidLayout(page);
});

test('entrada ao rolar termina e não se repete ao voltar à seção', async ({ page }) => {
  await page.goto('/');
  const copy = page.locator('.about-copy');
  await copy.scrollIntoViewIfNeeded();
  await expect.poll(() => copy.evaluate((element) => element.getAnimations().length)).toBeGreaterThan(0);
  await copy.evaluate((element) => Promise.all(element.getAnimations().map((animation) => animation.finished)));
  await expect(copy).toHaveCSS('opacity', '1');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await copy.scrollIntoViewIfNeeded();
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  expect(await copy.evaluate((element) => element.getAnimations().length)).toBe(0);
});

test('ativar movimento reduzido cancela a entrada em curso', async ({ page }) => {
  await page.goto('/');
  const copy = page.locator('.about-copy');
  await copy.scrollIntoViewIfNeeded();
  await expect.poll(() => copy.evaluate((element) => element.getAnimations().length)).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(() => page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(copy).toHaveCSS('opacity', '1');
  await expect(copy).toHaveCSS('translate', 'none');
});

test('sorteio tem resposta breve e funciona sem movimento', async ({ page }) => {
  await page.goto('/oficina/');
  const result = page.locator('[data-tavern-result]');
  const button = page.getByRole('button', { name: 'Sortear outro nome' });
  await button.click();
  expect(await result.evaluate((element) => element.getAnimations().length)).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const previous = await result.textContent();
  await button.click();
  await expect(result).not.toHaveText(previous!);
  expect(await result.evaluate((element) => element.getAnimations().length)).toBe(0);
});

test('restaurar categorias anima os resultados e mantém o foco no filtro', async ({ page }) => {
  await page.goto('/galeria/');
  await page.getByRole('button', { name: /^Fotografias/ }).click();
  const all = page.getByRole('button', { name: 'Tudo', exact: true });
  await all.focus();
  await page.keyboard.press('Enter');
  await expect(all).toBeFocused();
  await expect(page.locator('[data-work]:visible')).toHaveCount(10);
  expect(await page.locator('.framed-work').first().evaluate((element) => element.getAnimations().length)).toBeGreaterThan(0);
});

test('toque filtra fitas sem manter deslocamento de hover', async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('/estudio/');
  expect(await page.evaluate(() => matchMedia('(hover: hover) and (pointer: fine)').matches)).toBe(false);
  const tape = page.getByRole('button', { name: /A Maré de Vidro/ });
  const resting = await tape.evaluate((element) => getComputedStyle(element).transform);
  await tape.tap();
  await expect(tape).toHaveAttribute('aria-pressed', 'true');
  await expect(tape).toHaveCSS('transform', resting);
  await expect(page.locator('.track-list [data-work]:visible')).toHaveCount(3);
  await expectFluidLayout(page);
  await context.close();
});
