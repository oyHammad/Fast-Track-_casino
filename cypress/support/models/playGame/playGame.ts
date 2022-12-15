export class PlayGame
{
    public betValue = () => cy.get('select');
    public catOne = () => cy.get(':nth-child(1) > :nth-child(1) > .option__image');
    public congratulationsMessage = () => cy.get('#__layout > div > main > div.casino-page > div > div > div.prize-wrapper > div.win.prize > h1');
    public totalBalance = () => cy.get('.deposit-wrapper > .button');
    public catTwo = () => cy.get(':nth-child(1) > :nth-child(2) > .option__image');
}
