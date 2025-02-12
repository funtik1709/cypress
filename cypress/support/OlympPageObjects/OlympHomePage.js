Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

class OlympHomePage {
  open(url) {
    cy.visit(url);
  }

  logoCheck() {
    cy.get(".in_700").invoke("width").should("be.lt", 141);
    cy.get(".in_700").invoke("height").should("be.lt", 63);
  }

  isoCheck() {
    cy.get(".iso").should("be.visible");
  }

  TelegramAndPhone() {
    cy.get(".info__label").eq(0).find("a").should("contain", "kdlolymp");

    cy.get(".info__label")
      .eq(1)
      .find("a")
      .invoke("text")
      .should("match", /^\+7 \(\d{3}\) \d{3}-\d{4}$/);
  }

  SwitchCity(region, city) {
    cy.get(".current-city").filter(":visible").click();
    cy.get(".region").contains(region).click();
    cy.get(".city").contains(city).click();
  }

  SearchCity(city) {
    cy.get(".current-city").filter(":visible").click();
    cy.get(".input__field__text").filter(":visible").type(city);
    cy.get(".city").filter(":visible").click();
  }

  AssertNewCity(city) {
    cy.get(".current-city").should("contain", city);
  }

  emptyCartCheck() {
    cy.get(".shop__card").click();
    cy.get(".shop__card__panel__main__empty").should(
      "contain",
      "Список услуг пуст"
    );

    // open the cart page
    cy.get(".shop__card__panel__go")
      .should("contain", "Перейти в корзину")
      .click();
    cy.get(".texts h1").should("contain", "Ваша корзина пуста");
    cy.get(".texts .more")
      .first()
      .should("contain", "Вы ещё не добавили ни одной услуги.");
    cy.get(".texts .more")
      .eq(1)
      .should(
        "contain",
        "Раздел «Анализы» поможет вам найти необходимое исследование."
      );

    cy.get("button").contains("Выбрать услуги").click();

    cy.get(".title").should("contain", "Анализы");

    cy.get('a[href="/"]').filter(":visible").click();
  }

  SearchAnalysisLong(text) {
    cy.get("#analyzes-desktop").type(text);
    cy.get(".items").invoke("css", "opacity", "1");
    cy.get(".items>.item").contains(text, { matchCase: false }).click();
    cy.get("h1").should("contain", text);
  }

  SearchAnalysisShort(text) {
    cy.get("#analyzes-desktop").type(text);
    cy.get(".active");
    cy.get(".items").invoke("css", "opacity", "1");

    cy.get(".items>.item").contains(text, { matchCase: false }).click();

    cy.get("h1").should("contain", text);
  }

  SearchAnalysisButton(text) {    
    cy.wait(2000);
    cy.scrollTo("top");
    cy.get("#analyzes-desktop").type(text);

    cy.get('button[class="find"]').click();
    cy.scrollTo("top");
    cy.get(".category__title").should("contain", "Результаты поиска:");
    cy.get(".withoutCategory").find(".info .title").should("contain", text);
    cy.get('a[href="/"]').eq(0).click();
  }
  // pointer-events: none
  DeleteSearchHistoryItem() {
    cy.scrollTo("top");
    cy.get("#analyzes-desktop").click();
    cy.get(".items").invoke("css", "opacity", "1");
    cy.get(".item__cross").invoke("css", "pointer-events", "all").click();
  }

  DeleteSearchHistoryAssertion() {
    cy.get("#analyzes-desktop").click();
    cy.get(".items>.item").should("not.exist");
  }

  DeleteOneItemFromSearchHistory(count) {
    const minus = count - 1; 
    cy.scrollTo("top");
    cy.get("#analyzes-desktop").click();    

    cy.get("#analyzes-desktop").click();

    cy.get(".items").invoke("css", "opacity", "1");
    cy.get(".items").invoke("css", "pointer-events", "all !important");
    cy.get(".items").should("have.prop", "childElementCount", count);

    cy.get(".item__cross").eq(0).invoke("css", "pointer-events", "all").click();

    cy.get(".items").should("have.prop", "childElementCount", minus);
  }

  CheckResultsExpired() {
    cy.origin("https://new.kdlolymp.kz", () => {
      cy.visit("/");
      cy.get(".dd_button").contains("Да").click();

      cy.get(".results").click();

      cy.fixture("data").then(function (data) {
        this.data = data;
        cy.log(data.results.ex_login);
        cy.get("#login_input").type(data.results.ex_login);
        cy.get("#password_input").type(data.results.ex_password);

        cy.get(".checkbox__indicator").click();
        cy.get(".send").click();
        cy.get(".content h3").should("contain", data.results.ex_title);
      });
    });
  }

  CheckResultsActual() {
    cy.origin("https://new.kdlolymp.kz", () => {
      cy.visit("/");
      cy.get(".dd_button").contains("Да").click();

      cy.get(".results").click();

      cy.fixture("data").then(function (data) {
        this.data = data;
        cy.log(data.results.login);
        cy.get("#login_input").type(data.results.login);
        cy.get("#password_input").type(data.results.password);

        cy.get(".checkbox__indicator").click();
        cy.get(".send").click();
        cy.get(".content h1").should("contain", data.results.title);
      });
    });
  }

  OfferHouseCall() {
    cy.get(".offers")
      .find(".slider_title")
      .should("contain", "Актуальные предложения");
    cy.get(".items")
      .find('a[href="/house-call"]')
      .should("contain", "Услуга «Выезд на дом»");
    cy.get(".offer")
      .find('img[class="pc"]')
      .should("have.css", "width")
      .and("eq", "405px");
  }
}

export default OlympHomePage;
