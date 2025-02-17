import HomePage from "../../../../support/pageObjects/HomePage";
beforeEach(function() {
    // runs once before all tests in this block
    cy.fixture("data").then(function(data) {
      this.data = data;
      this.homepage = new HomePage();      
    });    
});