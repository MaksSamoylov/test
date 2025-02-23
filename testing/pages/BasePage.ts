import { Page } from '@playwright/test';

export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    public async open(path: string = '/'): Promise<void> {
        await this.page.goto(path);
    }

    public async waitPageLoaded(selector: string, expectedText?: string): Promise<void> {
        const locator = this.page.locator(selector);
        if (expectedText) {
            await locator.filter({ hasText: expectedText }).waitFor({ state: 'visible' });
        } else {
            await locator.waitFor({ state: 'visible' });
        }
    }
}