const LoginPage = require("../../pageObjects/SauceDemo/login.page")

describe('SauceDemo tests', () => {
    it('DescribeTest', async () => {
        LoginPage.open();
        await LoginPage.populateUserName('standard_user');
        await LoginPage.populatePassword('secret_sauce');
        // await LoginPage.loginButton.submit();


    });
});