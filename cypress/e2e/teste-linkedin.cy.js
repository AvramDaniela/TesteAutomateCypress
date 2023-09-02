
describe('On Linkedin', () => {

    it('I can Login', () => {

        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('nicolaef.daniela96@gmail.com');
        cy.get('#password').type('Stefan11112021');
        cy.get('.btn__primary--large').click();
        cy.get('#ember16').should('exist');

    })


})