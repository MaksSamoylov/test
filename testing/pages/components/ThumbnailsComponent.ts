import { Page, expect } from '@playwright/test';

export class ThumbsListComponent {
  private thumbs = '[data-el="ThumbsList"] .thumb';

  constructor(private readonly page: Page) {}

  async expectThumbsCount(expectedCount: number): Promise<void> {
    await expect(this.page.locator(this.thumbs)).toHaveCount(expectedCount);
  }

  async expectUniqueThumbs(): Promise<void> {
    const ids = await this.getThumbIds();
    expect(ids, 'All thumbnails should have unique ID')
      .toHaveLength(new Set(ids).size);
  }

  private async getThumbIds(): Promise<string[]> {
    return this.page.locator(this.thumbs).evaluateAll((elements) =>
      elements.map((element) => element.getAttribute('data-id')!)
    );
  }
}