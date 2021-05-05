
Feature: Register on the website and add items to cart and proceed a payment

    Scenario: As a user, I should be able to register into the website

        Given I am on the SignIn page
        When I create an account using Email id
        Then The user should be logged into the website with correct first name and last name


    Scenario: As a user, I should be able to logout and login into website

        Given I am logged out of the website
        Then I should be logged into website with valid email id


    Scenario: As a user, I should be able to add items to cart and proceed the payment

        Given I am on the home page
        When I add items to cart
        Then I proceed to payment screen

