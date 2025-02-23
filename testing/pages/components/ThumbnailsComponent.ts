import { Page, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class ThumbsListComponent extends BaseComponent {
  private thumbs = '[data-el="ThumbsList"] .thumb';

  async expectThumbsCount(expectedCount: number): Promise<void> {
    await expect(this.page.locator(this.thumbs), "Thumbs list should have correct count")
    .toHaveCount(expectedCount);
  }

  async expectUniqueThumbs(): Promise<void> {
    const ids = await this.getThumbIds();
    expect(ids, 'All thumbnails should have unique ID')
      .toHaveLength(new Set(ids).size);
  }

  private async getThumbIds(): Promise<string[]> {
    const thumbs = await this.page.locator(this.thumbs).all();
    return Promise.all(
      thumbs.map(thumb => 
        thumb.getAttribute('data-id').then(id => {
          if (!id) throw new Error('Thumbnail element found without data-id attribute');
          return id;
        })
      )
    );
  }
}