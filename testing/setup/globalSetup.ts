import { chromium } from '@playwright/test';
import { config } from '../../config';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  await context.addCookies([
    { name: 'cookie-accepted', value: '1', url: config.baseURL },
    { name: 'aged-enough', value: '1', url: config.baseURL },
  ]);

  await context.storageState({ path: './storageState.json' });
  await browser.close();
}

export default globalSetup;