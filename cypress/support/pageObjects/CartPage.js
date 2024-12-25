import ConfirmationPage from '../../support/pageObjects/ConfirmationPage'

class CartPage {

    sumOfProducts() {
        let sum = 0;

        // get sum of items
        return cy.get("tr td:nth-child(4) strong")
        .each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim());
            cy.log(amount);
            sum = sum + amount;

            cy.log(sum);
        })
        .then(() => {
           return sum;
        });

        

        
    }

    checkoutItems() {
        cy.contains("button", "Checkout").click();
        return new ConfirmationPage;
    }

    
}

export default CartPage;