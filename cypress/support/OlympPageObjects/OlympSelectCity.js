class OlympSelectCity {
  confirmCity() {
    cy.get(".dd_button").contains("Да").click();
  }

  searchCity(city) {
    cy.get(".dd_button").contains("Нет").click();
    cy.get("#undefined-desktop").type(city);
    cy.get(".find").contains("Найти").click({ force: true });
    cy.get(".cities .city").click();
    cy.get(".current-city span").should("contain", city);
  }

  searchRegion(city) {
    cy.get(".dd_button").contains("Нет").click();
    cy.get("#undefined-desktop").type(city);
    cy.get(".find").contains("Найти").click({ force: true });
    cy.get(".regions .city").click();
    cy.get(".current-city span").should("contain", city);
  }

  selectCity() {
    cy.get(".dd_button").contains("Нет").click();
    cy.get(".regions .area-9-name").click();
    cy.get(".area-9-cities .city-42").click();
    cy.get(".current-city span").should("contain", "Кызылорда");
  }

  assertTitle(title) {
    cy.get(".title").should("contain", title);
  }
}

export default OlympSelectCity;
