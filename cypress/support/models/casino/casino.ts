export class Casino
{
    public depositMoneyButton = () => cy.contains('button', '€');
    public DepositBonus = () => cy.get(':nth-child(2) > .form-input');
    public cardButton = () => cy.contains('button', 'Card');
    public depositAmountbutton = () => cy.contains('button', '€10');
    public depositApprovedButton = () => cy.contains('button', 'Deposit Approved');
    public okButton = () => cy.contains('button', 'OK');
    public directBankButton = () => cy.contains('button', 'Direct Bank');
    public E_walletButton = () => cy.contains('button', 'E-wallet');
    public addDepositSuccessful = () => cy.get('.modal__body');
    public totalBalance = () => cy.get('.deposit-wrapper');
}