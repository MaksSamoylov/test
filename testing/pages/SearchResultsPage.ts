import { Page } from "@playwright/test";
import { ThumbsListComponent } from "./components/ThumbnailsComponent";

export class SearchResultsPage {
    public thumbsList: ThumbsListComponent;

    constructor(private page: Page) {
        this.thumbsList = new ThumbsListComponent(page);
    }

    public async waitPageLoaded(expectedTitle: string): Promise<void> {
        await this.page.locator(`h1.title:has-text("${expectedTitle}")`).waitFor({ state: 'visible' });
    }
}