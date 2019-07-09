/// <reference types="Cypress" />

context('Nos entités', () => {
    beforeEach(() => {
      cy.visit('https://group.axa.com/fr/a-propos-d-axa/axa-dans-le-monde')
    })

    xit('should select the correct country when an user interract with the select list', () => {
        const countryCode = 'fr';
        const expectedSelecteColor = "rgb(62, 100, 158)";
        cy.get('.world-map__select')
            .select(countryCode)
        cy.get(`path#${countryCode.toUpperCase()}`)
            .should('have.css', 'fill', expectedSelecteColor)
        cy.get('.world-map__country__country-name')
            .should('contain', 'France');
    });
});

context('Carrière', () => {
    beforeEach(() => {
        cy.visit('https://group.axa.com/fr/carrieres');
    });

    it('should display jobs that fit my resume', () => {
        cy.get('.career-landing-banner__title-block__button').click();
        const count = cy.get('job-board__job-counter__label').invoke('text');
        console.log(count);
    });
});