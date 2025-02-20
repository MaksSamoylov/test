import { Page } from "@playwright/test";
import { HeaderComponent } from "./components/HeaderComponent";
import { SearchResultsPage } from "./SearchResultsPage";
import { HomePage } from "./HomePage";

export class Pages {
    private static instance: Pages;
    private readonly _header: HeaderComponent;
    private readonly _search: SearchResultsPage;
    private readonly _home: HomePage;

    private constructor(readonly page: Page) {
        this._header = new HeaderComponent(page);
        this._search = new SearchResultsPage(page);
        this._home = new HomePage(page);
    }

    public static getInstance(page: Page): Pages {
        if (!this.instance) {
            this.instance = new Pages(page);
        }
        return this.instance;
    }

    public get header(): HeaderComponent {
        return this._header;
    }

    public get search(): SearchResultsPage {
        return this._search;
    }

    public get home(): HomePage {
        return this._home;
    }
}