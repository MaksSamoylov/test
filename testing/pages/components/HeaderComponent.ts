import { ECategory } from '../../constants/category';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  private searchInput = 'div[class*="top-desktop"] input.text-input__input';

  async searchCategory(category: ECategory) {
    await this.page.locator(this.searchInput).waitFor({ state: 'visible' });
    await this.page.locator(this.searchInput).clear();
    await this.page.locator(this.searchInput).fill(category);
    await this.page.locator(this.searchInput).press('Enter');
  }
}