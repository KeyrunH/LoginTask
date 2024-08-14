**Manual Pseudocode**

>*For the manual pseudocode, we expect you to provide a detailed paragraph outlining the steps you would take to manually test the signup form. Imagine you're using a test management tool like Zephyr or similar alternatives. You can structure your pseudocode with or without screenshots, focusing on evaluating the testing steps thoroughly. Include scenarios such as input field validation, functionality testing, login attempts with both valid and invalid credentials, and any other relevant test cases. The goal is to ensure comprehensive coverage of the signup form's functionality and usability.*

For the test scenarios for the login form, I have created a document of test scenarios written in the Gherkin Syntax. These scenarios cover the happy and sad path as well as including scenarios that ensure that format checking and validation are working correctly. There is also an example test plan that I would use in the absence of a dedicated test plan tool. The test plan is based off of the test scenarios but can also include some random tests (Such as SQL injection vulnerability check or a11y tests).

Supporting documentation for the manual testing can be found in the home directory, "Test Scenarios.pdf" and "Login Form Test Plan.xlsx".

**End-to-End Tests**

>*For the end-to-end tests using Cypress or similar alternative, we expect you to provide detailed test scripts covering various scenarios to thoroughly evaluate the functionality of the signup form. Begin by setting up your test framework and defining test suites for the signup form. Within these test suites, include scenarios such as form submission with valid and invalid input, validation of input fields, toggling functionality (e.g., password visibility and "Remember me" checkbox), and login attempts with different credentials (both correct and incorrect). Ensure to handle asynchronous operations appropriately, such as waiting for elements to appear or responses from the backend. Utilise Cypress or similar to effectively interact with elements, simulate user actions, and verify expected behavior. The goal is to achieve comprehensive test coverage and ensure the signup form functions correctly across different scenarios and user interactions.*

For the end-to-end tests I have used the Cypress framework.

The tests themselves can be found under the *e2e* folder, each test is in a separate file for readability and clarity. To support the tests there are also fixture data and selector files to allow for reusability across tests and easier maintainability.

**Unit Tests**

>*For the unit tests, while not mandatory, feel free to use Jest or any similar Testing Library. Include tests for atomic-level components such as buttons, input fields, checkboxes, etc. These tests provide valuable insight into the functionality and behavior of individual components, ensuring they work as expected in isolation. When writing unit tests, focus on testing component rendering, state changes, and interaction with user input. For example, for a button component, you might test its rendering, click event handling, and visual feedback on hover or focus. Similarly, for an input field component, you could test its rendering, state management (e.g., onChange), and validation logic if applicable. While writing unit tests for every atomic component may not be feasible, covering critical components and their functionalities enhances the overall quality and maintainability of the codebase.*

I made an attempt at creating unit tests using Jest, React Testing Library and Babel. There are two unit tests that test the button component. The tests check that the button is rendered and that it can be clicked.
