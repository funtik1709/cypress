import OlympHomePage from "../../../../support/OlympPageObjects/OlympHomePage";
beforeEach(function () {
  // runs once before all tests in this block
  cy.fixture("data").then(function (data) {
    this.data = data;    
    cy.log(data.url)
  });
});


