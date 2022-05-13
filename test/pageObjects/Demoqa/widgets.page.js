const Page = require('../Page');

class WidgetsPage extends Page {
    // Define selectors for the home page

    get widgetsPageTitle() {
        return $('.main-header=Widgets');
    }

    get toolTipsButton() {
        return $('.text=Tool Tips');
    }

    get toolTip() {
        return $("#buttonToolTip")
    }


    get toolTipButton() {
        return $("#toolTipButton")
    }

    async clickOnTooltipsButton() {
        await (await this.toolTipsButton).scrollIntoView();
        await (await this.toolTipsButton).click();
    }

    async hoverOverHoverButton() {
        await (await this.toolTipButton).scrollIntoView();
        await (await this.toolTipButton).click();
    }


}
module.exports = new WidgetsPage();