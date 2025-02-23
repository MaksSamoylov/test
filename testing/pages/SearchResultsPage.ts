import { Page } from "@playwright/test";
import { ThumbsListComponent } from "./components/ThumbnailsComponent";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage {
    private titleSelector = 'h1.title';

    public thumbsListComponent: ThumbsListComponent;

    constructor(page: Page) {
        super(page);
        this.thumbsListComponent = new ThumbsListComponent(page);
    }

    public async waitPageLoaded(expectedTitle: string): Promise<void> {
        await super.waitPageLoaded(this.titleSelector, expectedTitle);
    }
}