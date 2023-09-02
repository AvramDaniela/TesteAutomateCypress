
describe('Exemplu unde', () => {

    //test verificare segment din URL
it('verific daca un URL contine ceva', () => {
    cy.visit('https://orange.ro/oferte-speciale/');

    cy.url().should('include', '/oferte-speciale/');


})


})


// testul cu delay

it('asteapta 10 secunde', ()=> {
    cy.visit('https://google.com');

    cy.get('#L2AGLb').click();

    cy.wait(10000);

    cy.get('.gLFyf').type('testat cu succes');
})



//testul cu selector de timp atribut
it('selectez folosind un atribut', () => {
    cy.visit('https://google.com');

    cy.get('#L2AGLb').click();

    cy.get('[alt="Google"]').should('be.visible');
})



// testul screenshot pagina
it('fac un screenshot la pagina', () => {
    cy.visit('https://google.com');

    cy.get('#L2AGLb').click();

    cy.get('.gLFyf').type('screenshot efectuat');

    cy.screenshot();

})


//testul constanta si verificare continut input
it('verific o valoare din input', () => {

    cy.visit('https://google.com');

    cy.get('#L2AGLb').click();
    const googleSearch = cy.get('.gLFyf');

    googleSearch.type('12345');
    googleSearch.should('have.value', '12345');


})


// testul verifica existenta unei clase pe un element selectat
it('verific o valoare din input', () => {

    cy.visit('https://carturesti.ro/?gclid=Cj0KCQjw_5unBhCMARIsACZyzS0qzQpruhlURlNRhOpdC7xnfbKnQOkLk6IcJfmY1-9nadDb1QuIF4EaAiefEALw_wcB');

    cy.get('#search-input').should('have.class', 'form-control');


})











