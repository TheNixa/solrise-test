const Page = require('./page');

class ShoppingCartPage extends Page {
    // Find selectors using getter metods

    get cartNumberOfProducts() {
        return $('.shopping_cart_link')
    }

    get cheaperItem() {
        return $('#remove-sauce-labs-bike-light')
    }

    get checkoutButton() {
        return $("#checkout")
    }

    async removeCheaperItem() {
        await (await this.cheaperItem).scrollIntoView();
        await (await this.cheaperItem).click();
    }

    async checkout() {
        await (await this.checkoutButton).scrollIntoView();
        await (await this.checkoutButton).click();
    }


}
module.exports = new ShoppingCartPage();