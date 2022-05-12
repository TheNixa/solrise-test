const WidgetsPage = require('../../pageObjects/Demoqa/widgets.page');
const HomePage = require('../../pageObjects/Demoqa/home.page');

describe('I should go to demoqa', () => {
    it('and click on the widgets section', async () => {
        HomePage.open();

        await HomePage.clickOnWidgetsCard();
        await expect(WidgetsPage.widgetsPageTitle).toBeExisting();
        await expect(WidgetsPage.widgetsPageTitle).toHaveTextContaining('Widgets');
    }),

    it('and click on the tool tips button'), async () => {
        await WidgetsPage.clickOnTooltipsButton();
        await expect(WidgetsPage.tooltipsPageTitle).toBeExisting();
        await expect(WidgetsPage.tooltipsPageTitle).toHaveTextContaining('Tool Tips');
    }
});