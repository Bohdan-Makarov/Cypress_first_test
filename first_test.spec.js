/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('http://localhost:1667/#/');
    });

    it('', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('aboba123');
        cy.get(':nth-child(2) > .form-control').type('aboba1234@gmail.com');
        cy.get(':nth-child(3) > .form-control').type('Qwerty123!');
        cy.get('.btn').click();
        cy.get('.swal-button').click();
        cy.get(':nth-child(4) > .nav-link').contains('aboba123').should('exist');
    });
});
