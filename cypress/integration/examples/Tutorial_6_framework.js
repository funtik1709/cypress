describe("End to end ecommerce test", () => {
  before(function() {
    // runs once before all tests in this block
    cy.fixture("example").then(function(data) {
      this.data = data;
    });
  });

  it("Submit Order", function() {
    // local config timeout
    Cypress.config('defaultCommandTimeout', 7000);


    const productName = this.data.productName;

    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");

    cy.get("#username").type(this.data.username);
    cy.get("#password").type(this.data.password);

    cy.contains("Sign In").click();

    // page name assertion
    cy.contains("Shop Name").should("be.visible");
    // card count asssertion
    cy.get("app-card").should("have.length", 4);

    // filter cards and add specific item to cart
    cy.get("app-card")
      .filter(`:contains("${productName}")`)
      .then(($element) => {
        cy.wrap($element).should("have.length", 1);
        cy.wrap($element).contains("button", "Add").click();
      });

    cy.get("app-card").eq(0).contains("button", "Add").click();
    cy.contains("a", "Checkout").click();

    let sum = 0;

    // get sum of items
    cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        const amount = Number($el.text().split(" ")[1].trim());
        cy.log(amount);
        sum = sum + amount;

        cy.log(sum);
      })
      .then(() => {
        expect(sum).to.be.lessThan(200000);
      });

    cy.contains("button", "Checkout").click();

    cy.get("#country").type("India");    
    cy.get(".suggestions ul li a").click();

    cy.get(".ng-untouched > .btn").click();

    cy.get(".alert").should("contain", "Success");
  });
});
