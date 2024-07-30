import { Page } from "@playwright/test";

export const switchTheme = async (page: Page) => {
    const themeSwitcher = await page.getByTestId("ThemeSwitcher");
    themeSwitcher.click();
};
