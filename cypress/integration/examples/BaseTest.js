/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// npx cypress run
// npx cypress run --headed
// npx cypress run --browser chrome(firefox, edge)
// test url - https://wewe:wewe@kdlolympsite.ddirection.kz/  

describe('Base Test', () => {
    it('Open URL', ()=> {
        cy.visit('https://wewe:wewe@kdlolympsite.ddirection.kz/');

        cy.get('.modal').find('.dd_button').eq(1).click();
    });
});