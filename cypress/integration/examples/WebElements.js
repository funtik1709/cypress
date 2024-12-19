/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// npx cypress run
// npx cypress run --headed
// npx cypress run --browser chrome(firefox, edge)
// test url - https://rahulshettyacademy.com/seleniumPractise/#/ 
// https://rahulshettyacademy.com/AutomationPractice/ 

describe('Web Elements', () => {

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      });

    it('Open URL', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // check several inputs
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3']);

        // DROPDOWNS

        // static dropdown

        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

        //

        // dynamic dropdown
        cy.get('#autocomplete').type('ka');

        cy.get('.ui-menu-item div').each(($el, index, $list) =>{
            if($el.text()=== "Kazakhstan"){
                $el.click();
            }
        });
        cy.get('#autocomplete').should('have.value', 'Kazakhstan');

        //

        // hidden elements

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // radio buttons
        cy.get('input[value="radio2"]').check().should('be.checked');       


    });
});