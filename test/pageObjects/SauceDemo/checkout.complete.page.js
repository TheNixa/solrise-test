const Page = require('../Page');

class CheckoutCompletePage extends Page {
    // Find selectors using getter metods
    get thankYouMessage() {
        return $('.complete-header');
    }

    get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    async logout() {
        await (await this.burgerMenuButton).scrollIntoView();
        await (await this.burgerMenuButton).click();
        await (await this.logoutButton).click();
    }
}
module.exports = new CheckoutCompletePage();