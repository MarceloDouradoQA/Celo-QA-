
describe('Testes de Tradução e Idiomas - Minecraft Hub', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve alternar entre português, inglês e espanhol', () => {
    // Confirma o título inicial
    cy.get('[data-cy="app-title"]')
      .should('contain', 'MineCrafting - Tutorial Hub');

    // Verifica o seletor de idiomas
    cy.get('#languageSelect')
      .should('be.visible');

    // Altera para inglês
    cy.get('#languageSelect').select('en');

    cy.get('[data-cy="search-input"]')
      .should('have.attr', 'placeholder',
        'Search tutorial by keyword...');

    // Altera para espanhol
    cy.get('#languageSelect').select('es');

    cy.get('[data-cy="search-input"]')
      .should('have.attr', 'placeholder',
        'Buscar tutorial por palabra clave...');
  });
});