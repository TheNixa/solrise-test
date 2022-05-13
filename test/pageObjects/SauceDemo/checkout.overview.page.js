const Page = require('./page');

class CheckoutOverviewPage extends Page {
    // Find selectors using getter metods
    get invetoryItemPrice() {
        return $('.inventory_item_price');
    }

    get items() {
        return $$('.cart_item');
    }

    get inventoryTotalPrice() {
        return $('.summary_subtotal_label');
    }

    get finishButton() {
        return $('#finish');
    }

    async finishCheckout() {
        await (await this.finishButton).scrollIntoView();
        await (await this.finishButton).click();
    }


}
module.exports = new CheckoutOverviewPage();