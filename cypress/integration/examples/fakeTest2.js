/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

describe("Intercept Test", () => {
  it("Intercept Fake Test", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    // cy.intercept(method, url, routeHandler);
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
      (req) => {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

        req.continue((res)=> {

          //expect(res.statusCode).to.equal(403);

        })
      }
      
    ).as("dummyurl");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait('@dummyurl')

  });

  

 
});
