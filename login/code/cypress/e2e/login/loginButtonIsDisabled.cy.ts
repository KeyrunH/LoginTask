import { loginPageSelectors } from '../../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

// Test that checks that the "Login" button is disabled until the form is complete
it("the login button is disabled until a correctly formatted email address and password are entered", function () {
    cy.get(loginPageSelectors.loginButton).should('be.disabled')
    cy.get(loginPageSelectors.emailInput).type(this.data.registeredEmail)
    cy.get(loginPageSelectors.passwordInput).type(this.data.password, {log:false})
    cy.get(loginPageSelectors.loginButton).should('be.enabled')
})

})