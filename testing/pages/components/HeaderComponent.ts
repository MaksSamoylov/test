import { Page } from '@playwright/test';
import { ECategory } from '../../types/category';

export class HeaderComponent {
  private searchInput = 'div[class*="top-desktop"] input.text-input__input';

  constructor(private readonly page: Page) {}

  async searchCategory(category: ECategory) {
    await this.page.locator(this.searchInput).waitFor({ state: 'visible' });
    await this.page.locator(this.searchInput).clear();
    await this.page.locator(this.searchInput).fill(category);
    await this.page.locator(this.searchInput).press('Enter');
  }
}