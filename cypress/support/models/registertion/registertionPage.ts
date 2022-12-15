export class RegistertionPage
{
    public continueButton = () => cy.contains("button", "I GET IT, CONTINUE");
    public emailInput = () => cy.get('input[type="email"]');
    public submitEmailButton = () => cy.get('button[type="submit"]');
    public countryCodeInput = () => cy.get('input[type="text"]');
    public phoneNumberinput = () => cy.get('input[type="number"]');
    public submitPhoneButton = () => cy.get('button[type="submit"]');
    public fullNameInput = () => cy.get('.input');
    public submitFullNameButton = () => cy.get('button[type="submit"]');
    public passwordInput = () => cy.get('input[type="password"]');
    public submitPasswordButton = () => cy.get('button[type="submit"]');
    public confirmRegistertion = () => cy.get('.modal__body');
}