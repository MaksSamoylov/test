import { Page } from '@playwright/test';
import { ThumbsListComponent } from './components/ThumbnailsComponent';

export class HomePage {
    public thumbsList: ThumbsListComponent;

    constructor(private readonly page: Page) {
        this.thumbsList = new ThumbsListComponent(page);
    }

    public async open(): Promise<void> {
        await this.page.goto('/');
    }
}