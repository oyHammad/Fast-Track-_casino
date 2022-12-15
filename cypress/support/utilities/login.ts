
export function login(): void
{
    cy.visit('/', { timeout: 30000 });
    cy.contains("button", "Returning user").click();
    cy.get('input[type="email"]').type(Cypress.env("Email"));
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'https://demo.ft-crm.com/');
}