import { test } from '../setup/fixtures.ts';
import { ECategory } from '../constants/category.ts';

test.describe('Search existed films category', () => {
  test('Search "homemade" category and check amount of unique films', async ({ homePage, searchPage }) => {
    await homePage.open();
    await homePage.headerComponent.searchCategory(ECategory.HOMEMADED);
    
    await searchPage.waitPageLoaded(ECategory.HOMEMADED);
    await searchPage.thumbsListComponent.expectThumbsCount(60);
    await searchPage.thumbsListComponent.expectUniqueThumbs();
  });
});
