const Page = require('../Page');

class ProductsPage extends Page {
    // Find selectors using getter metods

    // Products should be selected by random choice but currently I'm not sure how to handle that
    get firstProduct() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get secondProduct() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get shoppingCartButton() {
        return $('.shopping_cart_link');
    }

    get inventory() {
        return $('.inventory_container');
    }

    async addFirstProductToCart() {
        await (await this.firstProduct).scrollIntoView();
        await (await this.firstProduct).click();
    }

    async addSecondProductToCart() {
        await (await this.secondProduct).scrollIntoView();
        await (await this.secondProduct).click();
    }

    async openShoppingCart() {
        await (await this.shoppingCartButton).scrollIntoView();
        await (await this.shoppingCartButton).click();
    }

}
module.exports = new ProductsPage();