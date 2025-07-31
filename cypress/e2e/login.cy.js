describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000')
    //cy.screenshot('apos-visitar-pagina')
  });

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    //Act    
    cy.get('#username').click().type('julio.lima') //.type é o comando para digitar
    cy.get('#senha').click().type('123456')
    //cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    
    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => { //o .only testa apenas ele

    //Act
    cy.get('#username').click().type('julio.lima') //.type é o comando para digitar
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    
  })
})