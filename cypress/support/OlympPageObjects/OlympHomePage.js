class OlympHomePage {
  open(url) {
    cy.visit(url);
  }

  logoCheck() {
    cy.get(".in_700").should("be.visible");
  }

  isoCheck() {
    cy.get(".iso").should("be.visible");
  }

  SearchAnalysisLong(text) {
    cy.get("#analyzes-desktop").type(text);
    cy.get(".tests").invoke("css", "opacity", "1");
    cy.get(".tests>.test").contains(text, { matchCase: false }).click();
    cy.get("h1").should("contain", text);
    cy.get('a[href="/"]').eq(0).click();
  }

  SearchAnalysisShort(text) {
    cy.get("#analyzes-desktop").type(text);
    cy.get(".tests").invoke("css", "opacity", "1");
    cy.get(".tests>.test").contains(text, { matchCase: false }).click();
    cy.get("h1").should("contain", text);
    cy.get('a[href="/"]').eq(0).click();
  }

  SearchAnalysisButton(text) {
    cy.get("#analyzes-desktop").type(text);
    cy.get('button[class="find"]').click();
    cy.get(".category__title").should("contain", "Результаты поиска:");
    cy.get(".withoutCategory").find(".info .title").should("contain", text);
    cy.get('a[href="/"]').eq(0).click();
  }

  OfferHouseCall(){
    cy.get('.offers').find('.slider_title').should('contain', 'Актуальные предложения');
    cy.get('.items').find('a[href="/house-call"]').should('contain', 'Услуга «Выезд на дом»');
  }
}

export default OlympHomePage;
