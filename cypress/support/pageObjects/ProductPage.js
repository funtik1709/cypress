import CartPage from '../../support/pageObjects/CartPage'

class ProductPage {

    pageValidation() {
        // page name assertion
        cy.contains("Shop Name").should("be.visible");
    }

    verifyCardLimit() {
        // card count asssertion
        cy.get("app-card").should('have.length', 4);
    }

    selectFirstProduct() {
        cy.get("app-card").eq(0).contains("button", "Add").click();
    }

    selectProduct(productName) {
        // filter cards and add specific item to cart
        cy.get("app-card")
        .filter(`:contains("${productName}")`)
        .then(($element) => {
        cy.wrap($element).should("have.length", 1);
        cy.wrap($element).contains("button", "Add").click();
        });
    }

    goToCart() {
        cy.contains("a", "Checkout").click();

        return new CartPage;
    }

}

export default ProductPage;