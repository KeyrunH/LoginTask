### Brief

Welcome to the React Signup Form assignment for the Software Engineering in Test role at Ware. In this assignment, you will be tasked with testing a signup form built using TypeScript, React, and Tailwind CSS.

The acceptance criteria given to the developer/s building this ticket are as follows:

- Utilise the Email and password input component
  - The email input must contain a valid email address
  - The password input is hidden by default
  - The password can be toggled visible/not by clicking the eye icon inside the field
- Utilise the primary button component 
  - The button is disabled by default
  - The button is enabled when the form validation satisfies the following criteria:
    - Email must be a valid email address
    - Password must contain an uppercase character 
    - Password must contain a lowercase character 
    - Password must contain a number
    - Password must contain a special character - `! @ # $ % £ ^ & + = ~ * ( ) _ + [ ] { } ; ' : " \ | , . < > / ? - +`  
    - Password must contain a total of 8 or more characters
    - Form submission - 
      - On success - the user should see the prompt `Woohoo I'm logged in!`, with the login component disappeared
        - A valid user;
          - Email - `admin@example.com`
          - Password - `MySecretPassword88?`;
        - An invalid user displays the message - `Error: The email or password you entered is invalid`
      - On error - the user should receive the notice component, displaying the message received from the backend 
- Forgot password link (not implement in this ticket)
- Remember me toggle/checkbox (not implement in this ticket)

### Getting Started
To begin, follow these steps:
- Clone this repository to your local machine.
- Navigate to the `/login/code` folder
- Install the required dependencies by running `npm install`.
- Start the application by running `npm run start`. The application will run on `localhost:3000`.


## Task Criteria
### Manual Pseudocode
For the manual pseudocode, we expect you to provide a detailed paragraph outlining the steps you would take to manually test the signup form. 
Imagine you're using a test management tool like Zephyr or similar alternatives. 
You can structure your pseudocode with or without screenshots, focusing on evaluating the testing steps thoroughly. 
Include scenarios such as input field validation, functionality testing, login attempts with both valid and invalid credentials, and any other relevant test cases. 
The goal is to ensure comprehensive coverage of the signup form's functionality and usability.

### End-to-End Tests

For the end-to-end tests using Cypress or similar alternative, we expect you to provide detailed test scripts covering various scenarios to thoroughly evaluate the functionality of the signup form. 
Begin by setting up your test framework and defining test suites for the signup form. Within these test suites, include scenarios such as form submission with valid and invalid input, validation of input fields, toggling functionality (e.g., password visibility and "Remember me" checkbox), and login attempts with different credentials (both correct and incorrect). 
Ensure to handle asynchronous operations appropriately, such as waiting for elements to appear or responses from the backend. 
Utilise Cypress or similar to effectively interact with elements, simulate user actions, and verify expected behavior. 
The goal is to achieve comprehensive test coverage and ensure the signup form functions correctly across different scenarios and user interactions.

### Unit Tests
For the unit tests, while not mandatory, feel free to use Jest or any similar Testing Library. Include tests for atomic-level components such as buttons, input fields, checkboxes, etc. 
These tests provide valuable insight into the functionality and behavior of individual components, ensuring they work as expected in isolation. 
When writing unit tests, focus on testing component rendering, state changes, and interaction with user input. 
For example, for a button component, you might test its rendering, click event handling, and visual feedback on hover or focus. 
Similarly, for an input field component, you could test its rendering, state management (e.g., onChange), and validation logic if applicable. 
While writing unit tests for every atomic component may not be feasible, covering critical components and their functionalities enhances the overall quality and maintainability of the codebase.


### Evaluation Criteria

-   Show us your work through your commit history (if applicable).
-   Completeness: Did you complete all the specified tasks?
-   Correctness: Does the functionality behave sensibly and as expected?
-   Maintainability: Is the codebase/test analysis clean, organised, and easy to maintain?
-   Testing: Is the system thoroughly tested to ensure reliability and robustness?

- **Manual Pseudocode**
  - Comprehensive and detailed manual testing pseudocode covering various scenarios.
  - Inclusion of input field validation, functionality testing, login attempts with valid and invalid credentials, and other relevant test cases.
  - Clear and structured presentation, possibly with screenshots, to ensure thorough evaluation of testing steps.

- **End-to-End Tests**
  - Detailed test scripts using Cypress or similar, covering various scenarios to evaluate the signup form's functionality comprehensively.
  - Setup of test framework and definition of test suites for the signup form.
  - Inclusion of scenarios such as form submission with valid and invalid input, input field validation, toggling functionality, and login attempts with different credentials.
  - Proper handling of asynchronous operations and backend responses.
  - Effective interaction with elements, simulation of user actions, and verification of expected behavior using Cypress or similar tools.

- **Unit Tests**
  - Inclusion of Jest or similar Testing Library, where applicable.
  - Tests for atomic-level components such as buttons, input fields, checkboxes etc.
  - Coverage of components and their functionalities to enhance code quality and maintainability.
  - Demonstration of best practices in unit testing for React components.

- **Code Quality and Maintainability**
    - Clean and well-organised code.
    - Comprehensive commenting and documentation for ease of understanding and maintenance.
    - Implementation of best practices for enhancing code readability and maintainability.

### Deliverables

Make sure to include all source code in the repository. 

### Submission

Please organise and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment via a link to your repo/hosted site etc. 

***IMPORTANT! Please don't zip files and email them as attachments. Our spam filter might detect this as spam and will fail to reach our inbox***.

All the best and happy coding,

The Ware Team