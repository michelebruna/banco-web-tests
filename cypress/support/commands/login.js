Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
     cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario) //.type é o comando para digitar
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

      
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario) //.type é o comando para digitar
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    
    cy.contains('button', 'Entrar').click()
})