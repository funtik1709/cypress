class ConfirmationPage {

    submitFormDetails() {
        // cy.get("#country").type("India");    
        // cy.get(".suggestions ul li a").click();
        // cy.get(".ng-untouched > .btn").click();

        cy.submitFormDetails();
    }

    getAlertMessage() {
        cy.get(".alert").should("contain", "Success");
    }
}

export default ConfirmationPage;