import { Given, When, Then } from 'cucumber';
import { expect } from 'chai'

import LoginPage from '../pageObjects/login.page';
import CreateAccountPage from '../pageObjects/createaccount.page';
import ProductPage from '../pageObjects/product.page';
import { randomEmailId, randomName, randomNumber } from '../utils/utils'

//Personal information
let emailId = randomEmailId();
let personalInformationFirstName = randomName();
let personalInformationLastName = randomName();
let passWord = randomNumber();

//address information
let address = '#4, 16th Main, chruch street';
let city = 'bangalore';
let zipCode = '12345'
let phoneNumber = randomNumber();

let loggedInUserName = '';
let homePageTitle = '';
let cartPageProductName = '';
let paymentPageProductName = '';


Given(/^I am on the SignIn page$/, function () {

    LoginPage.myStores();
});


When(/^I create an account using Email id$/, function () {

    LoginPage.register(emailId);

});

Then(/^The user should be logged into the website with correct first name and last name$/, function () {

    CreateAccountPage.enterPersonalDetails(personalInformationFirstName, personalInformationLastName, passWord);
    CreateAccountPage.enterAddressDetails(address, city, zipCode, phoneNumber);

    loggedInUserName = LoginPage.loggedInPersonDetails();
    expect(loggedInUserName).to.equal(`${personalInformationFirstName} ${personalInformationLastName}`);

});

Given(/^I am logged out of the website$/, function () {

    LoginPage.logOutOfTheWebsite();

});

Then(/^I should be logged into website with valid email id$/, function () {

    LoginPage.loginToWebsite(emailId, passWord);

    expect(loggedInUserName).to.equal(`${personalInformationFirstName} ${personalInformationLastName}`);

});


Given(/^I am on the home page$/, function () {

    homePageTitle = browser.getTitle();

    expect(homePageTitle).to.equal('My account - My Store');

});

When(/^I add items to cart$/, function () {

    cartPageProductName = ProductPage.addProductToCart();

});


Then(/^I proceed to payment screen$/, function () {

    paymentPageProductName = ProductPage.checkOut();

    expect(paymentPageProductName).to.equal(cartPageProductName)

});