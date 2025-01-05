Feature: End to end Ecommerce validation

Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to Cart and checkout
And I validate the total price limit
Then Select the country and verify Thankyou
