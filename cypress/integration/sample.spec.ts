describe('cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  // it('is works!', () => {
  // expect(true).to.equal(true);
  // });
  it('increment', () => {
    cy.get('#counter').contains(0);
    cy.get('#increment').click();
    cy.get('#counter').contains(1);
  });

  it('decrement', () => {
    cy.get('#counter').contains(0);
    cy.get('#decrement').click();
    cy.get('#counter').contains(-1);
  });
});
