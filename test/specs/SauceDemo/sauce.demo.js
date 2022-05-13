const LoginPage = require("../../pageObjects/SauceDemo/login.page")
const ProductsPage = require("../../pageObjects/SauceDemo/products.page")
const ShoppingCartPage = require("../../pageObjects/SauceDemo/shopping.cart.page")
const CheckoutYourInfoPage = require("../../pageObjects/SauceDemo/checkout.your.info.page")
const CheckoutOverviewPage = require("../../pageObjects/SauceDemo/checkout.overview.page");
const CheckoutCompletePage = require("../../pageObjects/SauceDemo/checkout.complete.page");

describe('SauceDemo tests', () => {
    it('should successfully go trough checkout process', async () => {
        LoginPage.open("https://www.saucedemo.com/");
        await LoginPage.populateUserName('standard_user');
        await LoginPage.populatePassword('secret_sauce');
        await LoginPage.submit();
        await expect(ProductsPage.inventory).toBeDisplayed();
        await ProductsPage.addFirstProductToCart();
        await ProductsPage.addSecondProductToCart();
        await ProductsPage.openShoppingCart();
        await expect(ShoppingCartPage.cartNumberOfProducts).toBeDisplayed();
        await expect(ShoppingCartPage.cartNumberOfProducts).toHaveTextContaining("2", {
            message: "There is more items in the cart than expected"
        })
        await ShoppingCartPage.removeCheaperItem();
        await ShoppingCartPage.checkout();
        await CheckoutYourInfoPage.populateFirstName("Test");
        await CheckoutYourInfoPage.populateLastName("Test");
        await CheckoutYourInfoPage.populatePostalCode("1111")
        await CheckoutYourInfoPage.clickOnContinueButton();
        await expect(CheckoutOverviewPage.items).toBeElementsArrayOfSize(1)
        await CheckoutOverviewPage.finishCheckout();
        await expect(CheckoutCompletePage.thankYouMessage).toBePresent();
        await CheckoutCompletePage.logout()
    });
});