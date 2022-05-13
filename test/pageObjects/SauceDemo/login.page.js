const Page = require('../Page');


class LoginPage extends Page {
    get userName() {
        return $('#user-name')
    }
    get password() {
        return $("#password")
    }

    get loginButton() {
        return $('#login-button')
    }

    async populateUserName(value) {
        await (await this.userName).setValue(value);
    }

    async populatePassword(value) {
        await (await this.password).setValue(value);
    }

    async submit() {
        await (await this.loginButton).click();
    }


}

module.exports = new LoginPage();