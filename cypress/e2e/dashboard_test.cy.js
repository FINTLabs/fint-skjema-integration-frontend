describe('Testing dashboard', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/integrasjoner?side=0&sorteringFelt=state&sorteringRetning=ASC', { fixture: 'integrations.json' }).as('getIntegrations')
        cy.intercept('GET', '**/historikk/statistikk/integrasjoner', { fixture: 'historikk.json' }).as('getHistory')
        cy.intercept('GET', '**/metadata?kildeapplikasjonId=2&bareSisteVersjoner=true', { fixture: 'metadata.json' }).as('getMetadata')
    })

    function prep() {
        cy.intercept('GET', '**/api/application/configuration', { forceNetworkError: true, fixture: 'config.json' }).as('getConfig')
        cy.visit('/')
        cy.wait('@getConfig')
    }

    it('should show datagrid', () => {
        prep()
        cy.get('.MuiDataGrid-root').should("be.visible")
    })
});