import { loginPageSelectors } from '../../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

it("unable to login with unregistered user", function () {
  cy.get(loginPageSelectors.emailInput).type(this.data.unregisteredEmail)
  cy.get(loginPageSelectors.passwordInput).type(this.data.password, {log:false})
  cy.get(loginPageSelectors.loginButton).click()
  cy.get(loginPageSelectors.loginErrorMessage).contains("Error: The email or password you entered is invalid")
})

})