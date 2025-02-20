import { test } from '../setup/rootHooks';
import { ECategory } from '../types/category';

test.describe('Search existed films category', () => {
  test('Search "homemade" category and check amount of unique films', async ({ pages }) => {
    await pages.home.open();

    await pages.header.searchCategory(ECategory.HOMEMADED);
    
    await pages.search.waitPageLoaded(ECategory.HOMEMADED);
    await pages.search.thumbsList.expectThumbsCount(60);
    await pages.search.thumbsList.expectUniqueThumbs();
  });
});
