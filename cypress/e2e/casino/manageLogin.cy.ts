/// <reference types = "Cypress" />

import { LoginPage } from "../../support/models/login/loginPage";
import { HomePage } from "../../support/models/registertion/homePage";
import { generatRandomEmail } from "../../support/utilities/randomEmail";

const homePage = new HomePage;
const loginPage = new LoginPage;
describe("Manage Login", () =>
{
    beforeEach(() =>
    {
        cy.visit('/');

    });
    it("Validate login using valid email", () =>
    {
        const email: string = "Test@gmail.com";
        homePage.returningUserButton().click();
        loginPage.emailInput().type(email);
        loginPage.submitEmailButton().click();
        cy.url().should('eq', 'https://demo.ft-crm.com/');
    });
    it("Validate login using invalid email", () =>
    {
        const email: string = generatRandomEmail();
        homePage.returningUserButton().click();
        loginPage.emailInput().type(email);
        loginPage.submitEmailButton().click();
        cy.url().should('eq', 'https://demo.ft-crm.com/tour/'); // If we have a failed login message, Instead of asserting the url, we asserted it. 
    });
});