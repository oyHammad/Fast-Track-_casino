/// <reference types = "Cypress"/>

import { PlayGame } from "../../support/models/playGame/playGame";
import { SlideMenu } from "../../support/models/slideMenu/slideMenu";
import { login } from "../../support/utilities/login";

const slideMenu = new SlideMenu;
const playGame = new PlayGame;

describe('Manage play a game', () =>
{
    beforeEach(() =>
    {
        login();
    });
    it('Validate playing the game using cat one', () =>
    {
        let balanceBeforePlayGame: string;
        let balanceAfterPlayGame: string;
        let finalBalanceBeforePlayGame: number;
        let finalBalanceAfterPlayGame: number;
        slideMenu.menuButton().click();
        slideMenu.casinoButton().click();

        playGame.betValue().select('€10')
            .then(() =>
            {
                cy.get('.deposit-wrapper').find('.button').then(($value) =>
                {
                    balanceBeforePlayGame = $value.text().split(' ').toString();
                    balanceBeforePlayGame = balanceBeforePlayGame.slice(10,);
                    cy.log(balanceBeforePlayGame);
                    finalBalanceBeforePlayGame = parseInt(balanceBeforePlayGame);
                });
            });
        playGame.catOne().click().then(() =>
        {
            playGame.congratulationsMessage().should('contain', 'Congratulations!');
        });
        cy.reload().then(() =>
        {
            cy.get('.deposit-wrapper').find('.button').then((value2) =>
            {
                balanceAfterPlayGame = value2.text().split(' ').toString();
                balanceAfterPlayGame = balanceAfterPlayGame.slice(10,);
                cy.log(balanceAfterPlayGame);
                finalBalanceAfterPlayGame = parseInt(balanceAfterPlayGame);
                expect(finalBalanceBeforePlayGame).not.eq(finalBalanceAfterPlayGame);
            });
        });
    });
    it('Validate playing the game using cat two', () =>
    {
        let balanceBeforePlayGameCatTwo: string;
        let balanceAfterPlayGameCatTwo: string;
        let finalBalanceBeforePlayGameCatTwo: number;
        let finalBalanceAfterPlayGameCatTwo: number;
        slideMenu.menuButton().click();
        slideMenu.casinoButton().click();

        playGame.betValue().select('€10')
            .then(() =>
            {
                cy.get('.deposit-wrapper').find('.button').then(($value) =>
                {
                    balanceBeforePlayGameCatTwo = $value.text().split(' ').toString();
                    balanceBeforePlayGameCatTwo = balanceBeforePlayGameCatTwo.slice(10,);

                    finalBalanceBeforePlayGameCatTwo = parseInt(balanceBeforePlayGameCatTwo);
                });
            });
        playGame.catOne().click().then(() =>
        {
            playGame.congratulationsMessage().should('contain', 'Congratulations!');
        });
        cy.reload().then(() =>
        {
            cy.get('.deposit-wrapper').find('.button').then((value2) =>
            {
                balanceAfterPlayGameCatTwo = value2.text().split(' ').toString();
                balanceAfterPlayGameCatTwo = balanceAfterPlayGameCatTwo.slice(10,);
                cy.log(balanceAfterPlayGameCatTwo);
                finalBalanceAfterPlayGameCatTwo = parseInt(balanceAfterPlayGameCatTwo);
                expect(finalBalanceBeforePlayGameCatTwo).not.eq(finalBalanceAfterPlayGameCatTwo);
            });
        });
    });
});