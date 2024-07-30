import { test as base, expect } from "@playwright/test";
import { switchTheme } from "./common";

const test = base.extend({
    page: async ({ page }, use) => {
        await page.goto("http://localhost:5173/tool-kit/#/test");
        await page.getByTestId("LoaderSVG").evaluate((svg: SVGSVGElement) => {
            svg.pauseAnimations();
            svg.setCurrentTime(0);
        });

        await use(page);
    },
});

["Button", "Cell", "Icon", "IconButton", "Input", "Loader", "Paginator"].map(
    (testBlock) => {
        test(testBlock.toLowerCase(), async ({ page }) => {
            const el = await page.getByTestId(testBlock);

            await expect(el).toHaveScreenshot();
        });

        test(`${testBlock.toLowerCase()} dark`, async ({ page }) => {
            await switchTheme(page);

            const el = await page.getByTestId(testBlock);
            await expect(el).toHaveScreenshot();
        });
    },
);
