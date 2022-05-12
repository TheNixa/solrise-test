const { isThisTypeNode } = require('typescript');
const Page = require('./page');

class WidgetsPage extends Page {
    // Define selectors for the home page

    get widgetsPageTitle(){
        return $('.main-header=Widgets');
    }

    get toolTipsButton(){
        return $('.text=Tool Tips');
    }




    async clickOnTooltipsButton(){
        await (await this.toolTipsButton).scrollIntoView();
        await (await this.toolTipsButton).click();
    }



}
module.exports = new WidgetsPage();