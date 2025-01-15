/// <reference types="cypress" />

describe("Intercept Test", () => {
  it("Intercept Fake Test", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    // cy.intercept({requestObject}, {responseObject})

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "LSA",
            aisle: "2303",
          },
        ],
      }
    ).as("bookretrievals");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait('@bookretrievals');
    cy.get('p').should('have.text', 'Oops only 1 Book available');
  });
});
