describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit(Cypress.env('URL'))
    //cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario) //.type é o comando para digitar
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

      
    //cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    
    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => { //o .only testa apenas ele

    //Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario) //.type é o comando para digitar
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    
  })
})