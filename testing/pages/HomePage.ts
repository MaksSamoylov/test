import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from './components/HeaderComponent';

export class HomePage extends BasePage {
    public headerComponent: HeaderComponent;

    constructor(page: Page) {
        super(page);
        this.headerComponent = new HeaderComponent(page);
    }
}