describe('MineCrafting - Testes de Tradução', () => {
  beforeEach(() => {
    // Visita a página principal do projeto antes de cada teste
    cy.visit('./index.html');
  });

  it('1. Deve traduzir os textos principais para Inglês (en)', () => {
    cy.get('#languageSelect').select('en');

    // Valida o subtítulo e o placeholder em inglês
    cy.get('[data-cy="app-subtitle"]')
      .should('contain', 'Minecraft building tutorials and blueprints');
    
    cy.get('[data-cy="search-input"]')
      .should('have.attr', 'placeholder', 'Search tutorial by keyword...');
  });

  it('2. Deve traduzir os textos principais para Espanhol (es)', () => {
    cy.get('#languageSelect').select('es');

    cy.get('[data-cy="app-subtitle"]')
      .should('contain', 'Tutoriales y planos de construcción para Minecraft');
    
    cy.get('[data-cy="search-input"]')
      .should('have.attr', 'placeholder', 'Buscar tutorial por palabra clave...');
  });

  it('3. Deve traduzir os textos principais para Francês (fr)', () => {
    cy.get('#languageSelect').select('fr');

    cy.get('[data-cy="app-subtitle"]')
      .should('contain', 'Tutoriels et plans de construction Minecraft');
    
    cy.get('[data-cy="search-input"]')
      .should('have.attr', 'placeholder', 'Rechercher un tutoriel par mot-clé...');
  });

  it('4. Deve traduzir os textos principais para Italiano (it)', () => {
    cy.get('#languageSelect').select('it');

    cy.get('[data-cy="app-subtitle"]')
      .should('contain', 'Tutorial e progetti per Minecraft');
    
    cy.get('[data-cy="search-input"]')
      .should('have.attr', 'placeholder', 'Cerca tutorial per parola chiave...');
  });

  it('5. Deve traduzir os textos de dentro do modal ao mudar de idioma', () => {
    // Abre o primeiro tutorial em Português
    cy.get('[data-cy="btn-view-steps"]').first().click();
    cy.get('#mats-title').should('contain', 'Materiais necessários');

    // Fecha o modal, muda para Inglês e reabre
    cy.get('[data-cy="btn-close-modal"]').click();
    cy.get('#languageSelect').select('en');
    cy.get('[data-cy="btn-view-steps"]').first().click();

    // Valida que o título de materiais mudou para inglês
    cy.get('#mats-title').should('contain', 'Required Materials');
  });
});