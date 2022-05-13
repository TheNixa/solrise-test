const Page = require('../Google/page');

class SearchPage extends Page {

    // Define selectors using getter methods

    get inputSearchField() {
        return $('.gLFyf.gsfi');
    }

    get searchButton() {
        return $('.FPdoLc center .gNO89b');
    }

    get iAgreeButton() {
        return $('//*[@id="L2AGLb"]/div');
    }

    get background() {
        return $('.o3j99.ikrT4e')
    }


    // Search for the keyword and click on the button
    async enterInputValue(keyword) {
        browser.switchToFrame("CXQnmb");
        // Remove comment from the next row if you have issue with popup on Google home page
        // await (await this.iAgreeButton).click();
        await (await this.inputSearchField).setValue(keyword);
        await (await this.background).click();
        await (await this.searchButton).click();
    }

    open() {
        return super.open('');
    }
}
module.exports = new SearchPage();