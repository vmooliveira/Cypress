describe('Login success', () => {
    it('Login happy path', () => {
      cy.login('vitor', '12345678')
      cy.contains('button', 'Load more').should('exist')
    })
  })