import { test as base } from '@playwright/test';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { HomePage } from '../pages/HomePage';

type CustomFixtures = {
  homePage: HomePage;
  searchPage: SearchResultsPage;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  }
});