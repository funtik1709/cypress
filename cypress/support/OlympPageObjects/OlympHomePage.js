class OlympHomePage {
  open(url) {
    cy.visit(url);
  }

  logoCheck() {
    cy.get(".in_700").should("be.visible");
  }
}

export default OlympHomePage;
