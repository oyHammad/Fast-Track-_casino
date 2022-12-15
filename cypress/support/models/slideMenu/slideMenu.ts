export class SlideMenu
{
    public menuButton = () => cy.get('.svg-menu');
    public casinoButton = () => cy.contains(':nth-child(1) > .page-link', 'Casino');
    public lotteryButton = () => cy.contains(':nth-child(3) > .page-link', 'Lottery');
}