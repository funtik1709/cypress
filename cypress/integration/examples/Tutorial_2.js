/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// npx cypress run
// npx cypress run --headed
// npx cypress run --browser chrome(firefox, edge)
// test url - https://rahulshettyacademy.com/seleniumPractise/#/ 
// https://rahulshettyacademy.com/AutomationPractice/ 

describe('Second test', () => {
    it('Open URL', ()=> {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //alias
        cy.get('.products').as('productsLoc'); 
        
        // each
        cy.get('@productsLoc').find('.product')
        .each(($el, index, $list) =>{
           const vegText = $el.find('h4.product-name').text();
           if(vegText.includes('Cashews')){
            cy.wrap($el).find('button').click();
           }
        });

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    });
});