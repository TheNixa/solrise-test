const WidgetsPage = require('../../pageObjects/Demoqa/widgets.page');
const HomePage = require('../../pageObjects/Demoqa/home.page');

describe('DemoQA tests', () => {
    it('should validate tooltip text', async () => {
        // Open Home page
        HomePage.open("https://demoqa.com/");

        // Click on widget card
        await HomePage.clickOnWidgetsCard();
        await expect(WidgetsPage.widgetsPageTitle).toBeExisting();
        await expect(WidgetsPage.widgetsPageTitle).toHaveTextContaining('Widgets');
        // Click on tool tips button
        await WidgetsPage.clickOnTooltipsButton();
        // Hover and assert over green tool tips button
        await WidgetsPage.hoverOverHoverButton();
        await expect(WidgetsPage.toolTipsButton).toBeExisting();
        await expect(WidgetsPage.toolTip).toBeExisting();
        await expect(WidgetsPage.toolTip).toHaveTextContaining('You hovered over the Button');
    });
});