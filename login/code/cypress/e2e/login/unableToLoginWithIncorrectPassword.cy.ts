import { loginPageSelectors } from '../../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

// Test that checks that a registered email address with an incorrect password can't log in
it("unable to login with a registered email address and incorrect password", function () {
  cy.get(loginPageSelectors.emailInput).type(this.data.registeredEmail)
  cy.get(loginPageSelectors.passwordInput).type(this.data.invalidPassword, {log:false})
  cy.get(loginPageSelectors.loginButton).click()
  cy.get(loginPageSelectors.loginErrorMessage).contains("Error: The email or password you entered is invalid")
})

})