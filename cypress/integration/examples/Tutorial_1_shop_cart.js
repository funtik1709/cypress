/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// npx cypress run
// npx cypress run --headed
// npx cypress run --browser chrome(firefox, edge)
// test url - https://rahulshettyacademy.com/seleniumPractise/#/  

describe('Base Test', () => {
    it('Open URL', ()=> {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //alias
        cy.get('.products').as('productsLoc')         
        cy.get('.product:visible').should('have.length', 4);
        
        // "find" works only in(after) "get" parent element 
        cy.get('@productsLoc').find('.product').should('have.length', 4);

        // manually handling console.log
        cy.get('@productsLoc').find('.product').eq(1).contains('ADD TO CART').click().then(() => {
            console.log('sf');
        });

        // each
        cy.get('@productsLoc').find('.product')
        .each(($el, index, $list) =>{
           const vegText = $el.find('h4.product-name').text();
           if(vegText.includes('Cashews')){
            cy.wrap($el).find('button').click();
           }
        });

        // assert if logo text is correct
        cy.get('.brand').should('have.text', 'GREENKART');

        // promise example. print in logs
        cy.get('.brand').then(function(logo)
        {
            cy.log(logo.text());
        });

        // 
    });
});