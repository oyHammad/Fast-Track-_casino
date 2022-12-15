/// <reference types = "cypress"/>

import { Casino } from "../../support/models/casino/casino";
import { SlideMenu } from "../../support/models/slideMenu/slideMenu";
import { login } from "../../support/utilities/login";

const slideMenu = new SlideMenu;
const casino = new Casino;

describe("Manage deposit", () =>
{
    beforeEach(() =>
    {
        login();
    });

    it("Validate adding a deposit using the card", () =>
    {
        let balanceBeforeAddDepositCard: string;
        let balanceAfterAddDepositCard: string;
        let finalBalanceBeforeAddDepositCard: number;
        let finalBalanceAfterAddDepositCard: number;

        slideMenu.menuButton().click();
        slideMenu.casinoButton().click()
            .then(() =>
            {
                casino.totalBalance().find('.button').then(($value) =>
                {
                    balanceBeforeAddDepositCard = $value.text().split(' ').toString();
                    balanceBeforeAddDepositCard = balanceBeforeAddDepositCard.slice(10,);
                    cy.log(balanceBeforeAddDepositCard);
                    finalBalanceBeforeAddDepositCard = parseInt(balanceBeforeAddDepositCard);
                });
            });
        casino.depositMoneyButton().click();
        casino.DepositBonus().select("Welcome bonus + 200%");
        casino.cardButton().click();
        casino.depositAmountbutton().click();
        casino.depositApprovedButton().click()
            .then(() =>
            {
                casino.addDepositSuccessful().should('contain', 'Your deposit was successful!');
            });
        casino.okButton().click();
        cy.reload().then(() =>
        {
            casino.totalBalance().find('.button').then((value2) =>
            {
                balanceAfterAddDepositCard = value2.text().split(' ').toString();
                balanceAfterAddDepositCard = balanceAfterAddDepositCard.slice(10,);
                cy.log(balanceAfterAddDepositCard);
                finalBalanceAfterAddDepositCard = parseInt(balanceAfterAddDepositCard);
                const depositAmount: number = 10;
                expect(finalBalanceAfterAddDepositCard).eql(finalBalanceBeforeAddDepositCard + depositAmount);
            });
        });
    });
    it("Validate adding a deposit using the direct bank", () =>
    {
        let balanceBeforeAddDepositDirectBank: string;
        let balanceAfterAddDepositDirectBank: string;
        let finalBalanceBeforeAddDepositDirectBank: number;
        let finalBalanceAfterAddDepositCard: number;

        slideMenu.menuButton().click();
        slideMenu.casinoButton().click()
            .then(() =>
            {
                casino.totalBalance().find('.button').then(($value) =>
                {
                    balanceBeforeAddDepositDirectBank = $value.text().split(' ').toString();
                    balanceBeforeAddDepositDirectBank = balanceBeforeAddDepositDirectBank.slice(10,);
                    cy.log(balanceBeforeAddDepositDirectBank);
                    finalBalanceBeforeAddDepositDirectBank = parseInt(balanceBeforeAddDepositDirectBank);
                });
            });
        casino.depositMoneyButton().click();
        casino.DepositBonus().select("FastTrackBonus + 500%");
        casino.directBankButton().click();
        casino.depositAmountbutton().click();
        casino.depositApprovedButton().click()
            .then(() =>
            {
                casino.addDepositSuccessful().should('contain', 'Your deposit was successful!');
            });
        casino.okButton().click();
        cy.reload().then(() =>
        {
            casino.totalBalance().find('.button').then((value2) =>
            {
                balanceAfterAddDepositDirectBank = value2.text().split(' ').toString();
                balanceAfterAddDepositDirectBank = balanceAfterAddDepositDirectBank.slice(10,);
                cy.log(balanceAfterAddDepositDirectBank);
                finalBalanceAfterAddDepositCard = parseInt(balanceAfterAddDepositDirectBank);
                const depositAmount: number = 10;
                expect(finalBalanceAfterAddDepositCard).eql(finalBalanceBeforeAddDepositDirectBank + depositAmount);
            });
        });
    });
    it("Validate adding a deposit using the E-wallet", () =>
    {
        let balanceBeforeAddDepositE_wallet: string;
        let balanceAfterAddDepositE_wallet: string;
        let finalBalanceBeforeAddDepositE_wallet: number;
        let finalBalanceAfterAddDepositE_wallet: number;

        slideMenu.menuButton().click();
        slideMenu.casinoButton().click()
            .then(() =>
            {
                casino.totalBalance().find('.button').then(($value) =>
                {
                    balanceBeforeAddDepositE_wallet = $value.text().split(' ').toString();
                    balanceBeforeAddDepositE_wallet = balanceBeforeAddDepositE_wallet.slice(10,);
                    cy.log(balanceBeforeAddDepositE_wallet);
                    cy.log(balanceBeforeAddDepositE_wallet);
                    finalBalanceBeforeAddDepositE_wallet = parseInt(balanceBeforeAddDepositE_wallet);
                });
            });
        casino.depositMoneyButton().click();
        casino.DepositBonus().select("Welcome bonus + 200%");
        casino.E_walletButton().click();
        casino.depositAmountbutton().click();
        casino.depositApprovedButton().click()
            .then(() =>
            {
                casino.addDepositSuccessful().should('contain', 'Your deposit was successful!');
            });
        casino.okButton().click();
        cy.reload().then(() =>
        {
            casino.totalBalance().find('.button').then((value2) =>
            {
                balanceAfterAddDepositE_wallet = value2.text().split(' ').toString();
                balanceAfterAddDepositE_wallet = balanceAfterAddDepositE_wallet.slice(10,);
                cy.log(balanceAfterAddDepositE_wallet);
                finalBalanceAfterAddDepositE_wallet = parseInt(balanceAfterAddDepositE_wallet);
                const depositAmount: number = 10;
                expect(finalBalanceAfterAddDepositE_wallet).eql(finalBalanceBeforeAddDepositE_wallet + depositAmount);
            });
        });
    });
});