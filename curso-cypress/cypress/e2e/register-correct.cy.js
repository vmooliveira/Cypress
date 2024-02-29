import Register from '../support/pages/register/register-page'


describe('Correct registry', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  }) 

  const usuarios = require('../fixtures/usuarios.json')
  
  usuarios.forEach(usuario => {
    it('Create a new register', () => {
      Register.goToTheRegisterPage()
      Register.fillTheForm(usuario)
      Register.submit()
    })
  })
})