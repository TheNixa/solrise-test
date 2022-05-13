const Page = require('../Page');

class HomePage extends Page {
    // Define selectors for the home page

    get widgetsButton() {
        return $('.card-body=Widgets');
    }

    async clickOnWidgetsCard(keyword) {
        await (await this.widgetsButton).scrollIntoView();
        await (await this.widgetsButton).click();
    }

    open() {
        return super.open('');
    }
}

module.exports = new HomePage();