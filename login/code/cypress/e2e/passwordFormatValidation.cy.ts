import { loginPageSelectors } from '../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

it("the login button is disabled when a password less than 8 characters or without a special character are entered", function () {
    cy.get(loginPageSelectors.emailInput).type(this.data.registeredEmail)
    cy.get(loginPageSelectors.passwordInput).type(this.data.shortPassword, {log:false})
    cy.get(loginPageSelectors.loginButton).should('be.disabled')
    cy.get(loginPageSelectors.passwordInput).clear()
    cy.get(loginPageSelectors.passwordInput).type(this.data.noSpecialCharPass, {log:false})
    cy.get(loginPageSelectors.loginButton).should('be.disabled')
})

})