/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// npx cypress run
// npx cypress run --headed
// npx cypress run --browser chrome(firefox, edge)
// test url - https://rahulshettyacademy.com/seleniumPractise/#/ 
// https://rahulshettyacademy.com/AutomationPractice/ 

describe('Web Elements 2', () => {

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      });

    it('Open URL', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // popup windows
        
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        //window:alert
        cy.on('window:alert', (str) => {
            //Hello , share this practice page and share your knowledge
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        //window:confirm
        cy.on('window:confirm', (str) => {
            //Hello , Are you sure you want to confirm?
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });

        // new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.origin("https://www.qaclickacademy.com/", () =>{
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('div[class="section-title mt-50"] h2').should('contain', 'Welcome to QAClick Academy ');
        });

        
    });

    // tables
    it('Web Tables', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#product tr td:nth-child(2)').each(($el, index, $list) => {
           const text = $el.text();

           if(text.includes("Python")) {
            cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{

                const actual_price =  price.text();
                expect(actual_price).to.equal('25');
            })
           }
        })
    });

    // mouseover
    it( 'Mouseover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    } 

    )

      // child windows
      // https://www.qaclickacademy.com/

      it('Child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').then((el) =>{
            const url = el.prop('href');

            cy.visit(url);


            cy.origin(url, ()=> {
                cy.get('#navbarSupportedContent a[href="about.html"]').click();
                cy.get('div[class="section-title mt-50"] h2').should('contain', 'Welcome to QAClick Academy ');
            })
            
        })
      })

      //iframe

      // datepicker

      it.only('iframe', () => {
        cy.visit('https://wewe:wewe@kdlolympsite.ddirection.kz/house-call');
        cy.get('div[class="buttons"] button:nth-child(1)').click();
        cy.scrollTo(0, 500);
        cy.get('#date_input').click();
      })


});