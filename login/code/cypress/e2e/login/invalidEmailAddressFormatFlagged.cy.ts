import { loginPageSelectors } from '../../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

// Test that ensures that an email address that is not formatted correctly is flagged as an "Invalid Email"
it("an incorrectly formatted email address is flagged as invalid", function () {
  cy.get(loginPageSelectors.emailInput).type(this.data.invalidFormatEmail)
  cy.get(loginPageSelectors.invalidEmailError).contains("Invalid email")
})

})