import { chromium } from '@playwright/test';
import { config } from '../../config';
import { ACCEPTED_AGE_VERIFICATION, ACCEPTED_COOKIE_POLICY } from '../constants/cookies';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  await context.addCookies([
    { 
      ...ACCEPTED_COOKIE_POLICY,
      url: config.baseURL 
    },
    { 
      ...ACCEPTED_AGE_VERIFICATION,
      url: config.baseURL 
    },
  ]);

  await context.storageState({ path: './storageState.json' });
  await browser.close();
}

export default globalSetup;
