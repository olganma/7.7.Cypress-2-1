import selectors from '../fixtures/selectors.json'

Cypress.Commands.add('login', (email, password) => { 
    if (email) {
        cy.get(selectors.email).type(email)
    }
    if (password) {
        cy.get(selectors.password).type(password)
    }
    cy.contains('Авторизоваться').click()
})