describe('Transferências', () => {
    beforeEach(() => {
        //Arrange
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()

    })

    it('Deve transferir quando informo dados e valor válido', () => {
        cy.realizarTransferencia('Maria', 'João', '11')

        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        cy.realizarTransferencia('Maria', 'João', '4000')

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })

})