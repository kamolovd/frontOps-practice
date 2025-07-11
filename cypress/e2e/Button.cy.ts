/// <reference types="cypress" />

describe('CounterButton', () => {
    it('increments count when clicked', () => {
        cy.visit('/');
        cy.contains('Clicked 0 times').should('exist');
        cy.contains('Clicked 0 times').click();
        cy.contains('Clicked 1 times').should('exist');
    });
});