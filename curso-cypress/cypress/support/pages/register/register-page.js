const el = require('./elements').ELEMENTS

class Register{
    goToTheRegisterPage(){
        cy.get(el.registerNow).click()
    }

    fillTheForm(usuario){
        cy.get(el.emailField).type(usuario.email)
        cy.get(el.nameField).type(usuario.fullName)
        cy.get(el.userNameField).type(usuario.userName)
        cy.get(el.passwordField).type(usuario.password)
    }

    submit(){
        cy.get(el.btnRegister).invoke('focus').click()
    }
}

export default new Register();