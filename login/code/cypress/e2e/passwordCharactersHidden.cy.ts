import { loginPageSelectors } from '../support/loginPageSelectors'

describe("login page", () => {
  beforeEach("load fixture", function () {
    cy.fixture("loginFormData").as('data');
    cy.visit("http://localhost:3000/")
  })

it("the password is hidden until the eye icon is clicked", function () {
    cy.get(loginPageSelectors.emailInput).type(this.data.registeredEmail)
    cy.get(loginPageSelectors.passwordInput).type(this.data.password)
    cy.get(loginPageSelectors.passwordInput).should('have.attr', 'type', 'password')
    cy.get(loginPageSelectors.passwordEyeIcon).click()
    cy.get(loginPageSelectors.passwordInput).should('have.attr', 'type', 'text')
})

})