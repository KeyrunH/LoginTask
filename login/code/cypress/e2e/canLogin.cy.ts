import { loginPageSelectors } from '../support/loginFormSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

it("can login with correct credentials", function () {
  cy.get(loginPageSelectors.emailInput).type(this.data.email)
  cy.get(loginPageSelectors.passwordInput).type(this.data.password)
  cy.get(loginPageSelectors.loginButton).contains("Login").click()
  cy.contains(this.data.successMessage)
})

})