describe('main page', () => {

  beforeEach(() => {
    cy.visit('http://qamid.tmweb.ru');
  });

  it('should display 7 days', () => {
    cy.get('.page-nav__day').should('have.length',7);
  })

  it('should display movie info', () => {
    cy.get('.movie__info').should('be.visible');
  })

  it('should display movie seances', () => {
    cy.get('.movie-seances__hall').should('be.visible');
  })


})