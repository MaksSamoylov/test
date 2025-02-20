import { defineConfig, devices } from '@playwright/test';
import { config } from './config';

export default defineConfig({
  testDir: './testing/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  globalSetup: require.resolve('./testing/setup/globalSetup.ts'),
  use: {
    baseURL: config.baseURL,
    trace: 'on-first-retry',
    storageState: './storageState.json',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
