class OlympSelectCity {
  confirmCity() {
    cy.get(".dd_button").contains("Да").click();
  }

  rejectCity() {
    cy.get(".dd_button").contains("Нет").click();
  }

  selectMainCity(main_city) {
    cy.get(".cities").find(".city").contains(main_city).click();
  }

  searchCity(city) {
    cy.get("#undefined-desktop").type(city);
    cy.get(".find").contains("Найти").click({ force: true });
    cy.get(".cities .city").click();
  }

  searchRegion(city) {    
    cy.get("#undefined-desktop").type(city);
    cy.get(".find").contains("Найти").click({ force: true });
    cy.get(".regions .city").click();    
  }

  selectRegionAndCity() {    
    cy.get(".regions .area-11-name").click();
    cy.get(".area-11-cities .city-46").click();
    cy.get(".current-city span").should("contain", "Кызылорда");
  }

  selectRegionAndCity1(area, city) {    
    cy.get(".regions *[class^='area-']").contains(area).click();
    cy.get('.select-city__list').invoke('css', 'display', 'block');
    cy.contains(city).click({force: true});
    cy.get(".current-city span").should("contain", city);
  }

  assertTitle(title) {
    cy.get(".title").should("contain", title);
  }
}

export default OlympSelectCity;
