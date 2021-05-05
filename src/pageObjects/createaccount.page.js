
class CreateAccountPage {

    get createAccountPageText() {
        return browser.$('//*[text()="Create an account"]');
    }

    get mrRadioButton() {
        return browser.$('#id_gender1');
    }

    get personalInformtionFirstNameField() {
        return browser.$('#customer_firstname');
    }

    get personalInformtionLastNameField() {
        return browser.$('#customer_lastname');
    }

    get personalInformtionPasswordField() {
        return browser.$('#passwd');
    }

    get dobDateField() {
        return browser.$('#days');
    }

    get dobMonthField() {
        return browser.$('#months');
    }

    get dobYearField() {
        return browser.$('#years');
    }

    get addressField() {
        return browser.$('input[id="address1"]');
    }

    get cityField() {
        return browser.$('input[id="city"]');
    }

    get stateDropDown() {
        return browser.$('#id_state');
    }

    get postalCodeField() {
        return browser.$('#postcode');
    }

    get countryDropDown() {
        return browser.$('#id_country');
    }

    get mobileNumberField() {
        return browser.$('#phone_mobile');
    }

    get registerButton() {
        return browser.$('#submitAccount');
    }


    enterPersonalDetails(firstName, lastName, password) {
        this.mrRadioButton.waitForExist();
        this.mrRadioButton.click();
        this.personalInformtionFirstNameField.setValue(firstName);
        this.personalInformtionLastNameField.setValue(lastName);
        this.personalInformtionPasswordField.setValue(password);
        this.dobDateField.selectByAttribute('value', '24');
        this.dobMonthField.selectByAttribute('value', '12');
        this.dobYearField.selectByAttribute('value', '1991');


    }

    enterAddressDetails(address, city, zipcode, phonenumber) {
        this.addressField.setValue(address);
        this.cityField.setValue(city);
        this.stateDropDown.selectByAttribute('value', '5');
        this.postalCodeField.setValue(zipcode);
        this.countryDropDown.selectByAttribute('value', '21');
        this.mobileNumberField.setValue(phonenumber);
        this.registerButton.click();
    }



}

export default new CreateAccountPage();