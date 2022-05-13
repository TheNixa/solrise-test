const Page = require('./page');

class CheckoutYourInfoPage extends Page {
    // Find selectors using getter metods

    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    async populateFirstName(value) {
        await (await this.firstNameInput).setValue(value);
    }

    async populateLastName(value) {
        await (await this.lastNameInput).setValue(value);
    }

    async populatePostalCode(value) {
        await (await this.postalCodeInput).setValue(value);
    }

    async clickOnContinueButton() {
        await (await this.continueButton).click();
    }
}
module.exports = new CheckoutYourInfoPage();