import { afterEach } from "mocha";
import OlympHomePage from "../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../support/OlympPageObjects/OlympSelectCity";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Homepage", () => {
  beforeEach(function () {
    cy.fixture("data").then(function (data) {
      this.data = data;
      this.homepage = new OlympHomePage();
      this.selectCity = new OlympSelectCity();

      this.homepage.open(this.data.url);

      // turn off logging for fetch and xhr
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
  });

  // Open Homepage and Select(search) City

  it("Open Home Page and Confirm City", function () {
    this.selectCity.confirmCity();
  });

  it("Open Home Page and Search Main City", function () {
    this.selectCity.searchCity(this.data.main_city);
  });

  it("Open Home Page and Search Region City", function () {
    this.selectCity.searchRegion(this.data.region_city);
  });

  it("Open Home Page and Select Region City", function () {
    this.selectCity.selectCity();
  });

  it("Swich Language", function () {
    this.selectCity.confirmCity();
    cy.get(".select .select__preview").should("contain", "ru");
    cy.get(".select").eq(0).click();
    cy.get(".select__list__elem").contains("kz").click();
    cy.get('h1[class="title"]').should("contain", this.data.title.kz);

    cy.get(".select").eq(0).click();
    cy.get(".select__list__elem").contains("en").click();
    cy.get('h1[class="title"]').should("contain", this.data.title.en);

    cy.get(".select").eq(0).click();
    cy.get(".select__list__elem").contains("ru").click();

  });

  it('Empty Cart Check', function() {
    this.selectCity.confirmCity();
    cy.get('.shop__card').click();
    cy.get('.shop__card__panel__main__empty').should('contain', 'Список услуг пуст');

    // open the cart page
    cy.get('.shop__card__panel__go').should('contain', 'Перейти в корзину').click();
    cy.get('.texts h1').should('contain', 'Ваша корзина пуста');
    cy.get('.texts .more').first().should('contain', 'Вы ещё не добавили ни одной услуги.');
    cy.get('.texts .more').eq(1).should('contain', 'Раздел «Анализы» поможет вам найти необходимое исследование.');

    cy.get('button').contains('Выбрать услуги').click();

    cy.get('.title').should('contain', 'Анализы');

    cy.get('a[href="/"]').filter(':visible').click();
  });

  afterEach(function () {
    this.selectCity.assertTitle(this.data.title.ru);
  });
});

// npx cypress run --spec cypress\integration\olymp\Homepage.js --headed --browser chrome

// npx cypress run --spec cypress\integration\olymp\Homepage.js --browser chrome
