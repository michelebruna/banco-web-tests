describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Arrange

    //Act
    cy.visit('http://localhost:4000')
    cy.get('#username').click().type('julio.lima') //.type é o comando para digitar
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})