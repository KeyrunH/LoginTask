import { loginPageSelectors } from '../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

it("can login with registered user", function () {
  cy.get(loginPageSelectors.emailInput).type(this.data.registeredEmail)
  cy.get(loginPageSelectors.passwordInput).type(this.data.password)
  cy.get(loginPageSelectors.loginButton).click()
  cy.contains(this.data.successMessage)
})

})