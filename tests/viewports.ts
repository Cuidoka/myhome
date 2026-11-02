import { expect, type Page } from '@playwright/test';

export const viewports = [
  { width: 320, height: 740 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 1024 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
  { width: 3440, height: 1440 },
];

export async function expectFluidLayout(page: Page) {
  const layout = await page.evaluate(() => {
    const house = document.querySelector('.house')!.getBoundingClientRect();
    const main = document.querySelector('main')!.getBoundingClientRect();
    const nav = document.querySelector('.room-navigation')!.getBoundingClientRect();
    return { width: innerWidth, content: document.documentElement.scrollWidth, house: { x: house.x, width: house.width }, mainRight: main.right, navLeft: nav.left, navRight: nav.right };
  });
  expect(layout.content).toBeLessThanOrEqual(layout.width + 1);
  expect(layout.house.x).toBe(0);
  expect(layout.house.width).toBe(layout.width);
  if (layout.width > 760) {
    expect(layout.mainRight).toBeLessThanOrEqual(layout.navLeft + 1);
    expect(layout.navRight).toBe(layout.width);
  }
}
