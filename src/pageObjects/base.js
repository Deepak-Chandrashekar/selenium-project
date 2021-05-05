export default class Base {

    open() {
        browser.url('http://automationpractice.com/index.php');
    }

    maximizeWindow() {
        browser.maximizeWindow();
    }

    deleteCookies() {
        browser.deleteAllCookies();
    }

    getUrl() {
        return browser.getUrl();
    }

}