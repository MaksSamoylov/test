import { test as base, chromium, Page } from '@playwright/test';
import { Pages } from '../pages/Pages';

type CustomOptions = {
  pages: Pages;
};

export const test = base.extend<CustomOptions>({
  browser: [async ({}, use) => {
    console.log('Launch browser');
    const browser = await chromium.launch();
    await use(browser);
    await browser.close();
    console.log('Close browser');
  }, { scope: 'worker' }],

  page: async ({ browser }, use) => {
    console.log('Create new page');
    const page = await browser.newPage();
    
    await use(page);
    console.log('Close page');
  },

  pages: async ({ page }, use) => {
    const pages = Pages.getInstance(page);
    await use(pages);
  }
});

export { Page };