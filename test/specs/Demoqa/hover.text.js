const WidgetsPage = require('../../pageObjects/Demoqa/widgets.page');
const HomePage = require('../../pageObjects/Demoqa/home.page');

describe('DemoQA tests', () => {
    it('Should validate tooltip text', async () => {
        HomePage.open();

        await HomePage.clickOnWidgetsCard();
        await expect(WidgetsPage.widgetsPageTitle).toBeExisting();
        await expect(WidgetsPage.widgetsPageTitle).toHaveTextContaining('Widgets');
        await WidgetsPage.clickOnTooltipsButton();
        await WidgetsPage.hoverOverHoverButton();
        await expect(WidgetsPage.toolTipsButton).toBeExisting();
        await expect(WidgetsPage.toolTip).toBeExisting();
        await expect(WidgetsPage.toolTip).toHaveTextContaining('You hovered over the Button');
    });
});