export class LoginPage
{
    public emailInput = () => cy.get('input[type="email"]');
    public submitEmailButton = () => cy.get('button[type="submit"]');
}