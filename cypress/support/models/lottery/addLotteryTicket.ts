export class AddLotteryTicket
{
    public addAnotherTicketButton = () => cy.contains('button', 'Add another ticket');
    public ticketNumber = () => cy.get(':nth-child(2) > .lottery-ticket__inner > .lottery-ticket__numbers > :nth-child(1)');
    public buyTicketButton = () => cy.contains('button', 'Buy tickets');
    public totalBalance = () => cy.get('#__layout > div > main > div.deposit-wrapper');
}