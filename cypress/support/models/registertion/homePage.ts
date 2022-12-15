export class HomePage
{
    public newUserButton = () => cy.contains("button", "New user");
    public returningUserButton = () => cy.contains("button", "Returning user");
}