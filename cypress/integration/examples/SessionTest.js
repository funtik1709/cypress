/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  describe("JWT Session", () => {
    it("Login through local storage", () => {
      cy.LoginAPI().then(function(){
        cy.visit("https://rahulshettyacademy.com/client", 
            {
                onBeforeLoad :function(window){
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            }
        )
      })
    });
  });