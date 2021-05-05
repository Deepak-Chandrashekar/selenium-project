
class ProductPage {

    get tShirtOption() {
        return browser.$('(//*[text()="T-shirts"])[2]');
    }

    get MoveToProduct() {
        return browser.$('(//*[@id="center_column"]//ul[@class="product_list grid row"]//li)[1]');
    }

    get hoverOnProduct() {
        return browser.$('(//*[@id="center_column"]//ul[@class="product_list grid row"]//li)[1]//div[@class="product-container"]');
    }

    get productName() {
        return browser.$('//*[@id="center_column"]//child::h5//a');
    }

    get addToCartButton() {
        return browser.$('//*[@id="center_column"]//child::a[@title="Add to cart"]');
    }

    get cartPopUp() {
        return browser.$('//*[@id="layer_cart"]//child::div[@class="clearfix"]');
    }

    get itemAddedSuccessfullyToCartMessage() {
        return browser.$('//*[@id="layer_cart"]//child::div[@class="layer_cart_product col-xs-12 col-md-6"]//h2');
    }

    get proceedToCheckOutButton() {
        return browser.$('//*[@id="layer_cart"]//child::a[@title="Proceed to checkout"]//span');
    }

    get cartPage() {
        return browser.$('#cart_title');
    }

    get summaryPageProceedToCheckOutButton() {
        return browser.$('//*[@id="center_column"]//child::a[@title="Proceed to checkout"]');
    }

    get addressPageProceedToCheckOutButton() {
        return browser.$('//*[@id="center_column"]//child::button[@type="submit"]');
    }

    get shippingPageTermsAndConditions() {
        return browser.$('#cgv')
    }

    get shippingPageProceedToCheckOutButton() {
        return browser.$('//*[@id="center_column"]//child::button[@type="submit"]')
    }

    get paymentPageItemDescription() {
        return browser.$('//*[@id="cart_summary"]//child::p[@class="product-name"]//a')
    }


    addProductToCart() {
        this.tShirtOption.click();
        this.MoveToProduct.scrollIntoView();
        this.hoverOnProduct.moveTo();
        this.addToCartButton.click();
        return this.productName.getAttribute('title');
    }


    checkOut() {
        this.cartPopUp.waitForExist();
        browser.pause(3000);
        this.proceedToCheckOutButton.click();
        this.summaryPageProceedToCheckOutButton.scrollIntoView();
        this.summaryPageProceedToCheckOutButton.click();
        this.addressPageProceedToCheckOutButton.scrollIntoView();
        this.addressPageProceedToCheckOutButton.click();
        this.shippingPageTermsAndConditions.click();
        this.shippingPageProceedToCheckOutButton.click();
        return this.paymentPageItemDescription.getText();

    }


}


export default new ProductPage();