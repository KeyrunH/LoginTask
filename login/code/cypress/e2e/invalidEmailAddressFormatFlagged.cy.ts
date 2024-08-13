import { loginPageSelectors } from '../support/loginFormSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

it("an incorrectly formatted email address is flagged as such", function () {
  cy.get(loginPageSelectors.emailInput).type(this.data.invalidFormatEmail)
  cy.get(loginPageSelectors.invalidEmailError).contains("Invalid email")
})

})