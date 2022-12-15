/// <reference types="cypress" />

//import { should } from "chai";
import { HomePage } from "../../support/models/registertion/homePage";
import { RegistertionPage } from "../../support/models/registertion/registertionPage";
import { generatRandomEmail } from "../../support/utilities/randomEmail";
import { generateRandomstring } from "../../support/utilities/randomName";

const homePage = new HomePage;
const registertionPage = new RegistertionPage();

describe(" Manage registertion ", () =>
{
    it("Validate registertion", () =>
    {
        const RandomEmail = generatRandomEmail();
        const fullName = generateRandomstring("First Second");

        cy.visit('/');
        homePage.newUserButton().click();
        registertionPage.continueButton().click();
        registertionPage.emailInput().type(RandomEmail);
        registertionPage.submitEmailButton().click();
        registertionPage.countryCodeInput().type("+46");
        registertionPage.phoneNumberinput().type("00845185348");
        registertionPage.submitPhoneButton().click();
        registertionPage.fullNameInput().type(fullName);
        registertionPage.submitFullNameButton().click();
        registertionPage.passwordInput().type(Cypress.env("password"));
        registertionPage.submitPasswordButton().click();
        registertionPage.confirmRegistertion().should('contain', 'Your registration is complete!');
    });
});