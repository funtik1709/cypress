Feature: End to end Ecommerce validation
@SmokeTest
Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I login to the application
And I add items to Cart and checkout
And I validate the total price limit
Then Select the country and verify Thankyou

@RegressionTest
Scenario Outline: Ecommerce products delivery(dataTable)
Given I am on Ecommerce Page
When I login to the application
| username           | password |
| rahulshettyacademy | learning | 
And I add items to Cart and checkout
And I validate the total price limit
Then Select the country and verify Thankyou
