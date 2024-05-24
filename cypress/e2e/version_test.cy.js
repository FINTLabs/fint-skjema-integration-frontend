describe('Testing version page', () => {
    function prep() {
        cy.intercept("GET", "**/authorization/check-authorized", {fixture: "auth.json"}).as("getAuth")
        cy.intercept("GET", "**/authorization/user", {fixture: "user.json"}).as("getUser")
        cy.intercept("GET", "**/authorization/usersourceapplications", {fixture: "userSourceApplications.json"}).as("getUserSourceApplications")
        cy.intercept('GET', '**/api/application/configuration', {
            forceNetworkError: true,
            fixture: 'basepathConfig.json'
        }).as('getConfig')
        cy.visit('/version');
        cy.wait('@getConfig')
    }

    it('should show version page', () => {
        prep()
        cy.get('#version-content').should("be.visible")
    })
    it('should show header and 1 section', () => {
        prep()
        cy.get('#version-information').should("be.visible")

    })

});
