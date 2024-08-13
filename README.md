**Manual Pseudocode**

>*For the manual pseudocode, we expect you to provide a detailed paragraph outlining the steps you would take to manually test the signup form. Imagine you're using a test management tool like Zephyr or similar alternatives. You can structure your pseudocode with or without screenshots, focusing on evaluating the testing steps thoroughly. Include scenarios such as input field validation, functionality testing, login attempts with both valid and invalid credentials, and any other relevant test cases. The goal is to ensure comprehensive coverage of the signup form's functionality and usability.*

For the test scenarios for the login form, I have created a document of test scenarios written in the Gherkin Syntax. These scenarios cover the happy and sad path as well as including scenarios that ensure that format checking and validation are working correctly.

**End-to-End Tests**

>*For the end-to-end tests using Cypress or similar alternative, we expect you to provide detailed test scripts covering various scenarios to thoroughly evaluate the functionality of the signup form. Begin by setting up your test framework and defining test suites for the signup form. Within these test suites, include scenarios such as form submission with valid and invalid input, validation of input fields, toggling functionality (e.g., password visibility and "Remember me" checkbox), and login attempts with different credentials (both correct and incorrect). Ensure to handle asynchronous operations appropriately, such as waiting for elements to appear or responses from the backend. Utilise Cypress or similar to effectively interact with elements, simulate user actions, and verify expected behavior. The goal is to achieve comprehensive test coverage and ensure the signup form functions correctly across different scenarios and user interactions.*

For the end-to-end tests I have used the Cypress framework. The tests themselves can be found under the *e2e* folder, each test is in a separate file for readability and clarity. To support the tests there are also fixture data and selector files to allow for reusability across tests and easier maintainability.
