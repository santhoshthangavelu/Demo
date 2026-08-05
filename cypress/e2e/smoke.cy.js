describe('Swag Labs smoke flow', () => {
  it('loads the login page', () => {
    cy.visit('/');
    cy.contains('Swag Labs').should('exist');
  });
});
