import Base from './base';


class LoginPage extends Base {

    get myStorePageSignInButton() {
        return browser.$('//*[@id="page"]//child::div[@class="header_user_info"]');
    }

    get serach() {
        return browser.$('#search_query_top')
    }

    get loginPageCreateAnAccountEmailIdField() {
        return $('#email_create');
    }

    get loginPageCreateAnAccountButton() {
        return browser.$('#SubmitCreate');
    }

    get loginPageAlreadyRegisteredEmailIdField() {
        return browser.$('#email');
    }

    get loginPageAlreadyRegisteredPasswordField() {
        return browser.$('#passwd');
    }

    get loginPageAlreadyRegisteredSignInButton() {
        return browser.$('#SubmitLogin');
    }

    get loggedInUserName() {
        return browser.$('//*[@class="account"]//span');
    }

    get logout() {
        return browser.$('.logout');
    }

    get tShirtOption() {
        return $('a[title="T-shirts"]');
    }



    myStores() {
        super.open();
        super.maximizeWindow();
        this.myStorePageSignInButton.click();
        this.loginPageCreateAnAccountEmailIdField.waitForExist();
    }

    register(emailId) {

        this.myStorePageSignInButton.click();
        this.loginPageCreateAnAccountEmailIdField.waitForExist();
        this.loginPageCreateAnAccountEmailIdField.setValue(emailId);
        this.loginPageCreateAnAccountButton.click();

    }

    loggedInPersonDetails() {
        return this.loggedInUserName.getText();
    }

    logOutOfTheWebsite() {
        this.logout.click();
    }

    loginToWebsite(emailId, password) {

        this.loginPageAlreadyRegisteredEmailIdField.setValue(emailId);
        this.loginPageAlreadyRegisteredPasswordField.setValue(password);
        this.loginPageAlreadyRegisteredSignInButton.click();

    }

}

export default new LoginPage();