describe('Login failing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.intercept('POST', 'http://localhost:3000/user/login', {statusCode: 400}).as('stubPost')
  })

  it('Empty fields', () => {
    cy.contains('User name is required!').should('be.visible')
    cy.contains('Password is required!').should('be.visible')
  })

  it('Login  must fail even if the fiels are correctly filled in', () => {
    cy.login('vitor', '12345678')
    cy.wait('@stubPost')
  })
})