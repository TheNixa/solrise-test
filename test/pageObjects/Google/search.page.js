const Page = require('../Google/page');

class SearchPage extends Page {

    // Define selectors using getter methods

    get inputSearchField() {
        return $('.gLFyf.gsfi');
    }

    get searchButton() {
        return $('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]');
    }

    get iAgreeButton() {
        return $('//*[@id="L2AGLb"]/div');
    }


    // Search for the keyword and click on the button
    async searchForCheese(keyword) {
        browser.switchToFrame("CXQnmb");
        await (await this.iAgreeButton).click();
        await (await this.inputSearchField).setValue(keyword);
        await (await this.searchButton).click();

    }

    open() {
        return super.open('');
    }
}
module.exports = new SearchPage();