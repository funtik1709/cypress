import HomePage from '../../support/pageObjects/HomePage'

describe("End to end ecommerce test", () => {
  before(function() {
    // runs once before all tests in this block
    cy.fixture("example").then(function(data) {
      this.data = data;
      this.homepage = new HomePage();

    });
  });


  it("Submit Order", function() {
    // local config timeout
    Cypress.config('defaultCommandTimeout', 7000);

    const productName = this.data.productName;    

    this.homepage.goTo(Cypress.env('url')+"/loginpagePractise/#");
    
    const productPage = this.homepage.login(this.data.username, this.data.password);
     

    productPage.pageValidation();
    productPage.verifyCardLimit();
    productPage.selectProduct(productName);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCart();

    
    cartPage.sumOfProducts().then(function(sum) {
      expect(sum).to.be.lessThan(200000);
    });

    const confirmationPage = cartPage.checkoutItems();

    confirmationPage.submitFormDetails();

    confirmationPage.getAlertMessage();

    
  });
});

// run command
// npx cypress run --spec cypress\integration\examples\Tutorial_6_framework.js --env url="https://rahulshettyacademy.com"

// headed mode
// npx cypress run --spec cypress\integration\examples\Tutorial_6_framework.js --headed --env url="https://rahulshettyacademy.com"

// run with specific browser
// npx cypress run --spec cypress\integration\examples\Tutorial_6_framework.js --headed --browser chrome --env url="https://rahulshettyacademy.com"

// npx cypress run --record --key cc45d20c-1536-451a-9e15-3b557b46204d --spec cypress/integration/examples/*.js --headed --browser chrome 