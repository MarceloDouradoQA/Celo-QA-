const locales = [
  ['pt', 'pt-BR', 'Castelo Medieval', 'Buscar tutorial por palavra-chave...', 'Passo 1 de 7', '6 tutoriais encontrados'],
  ['en', 'en', 'Medieval Castle', 'Search tutorial by keyword...', 'Step 1 of 7', '6 tutorials found'],
  ['es', 'es', 'Castillo Medieval', 'Buscar tutorial por palabra clave...', 'Paso 1 de 7', '6 tutoriales encontrados'],
  ['fr', 'fr', 'Château Médiéval', 'Rechercher un tutoriel par mot-clé...', 'Étape 1 sur 7', '6 tutoriels trouvés'],
  ['it', 'it', 'Castello Medievale', 'Cerca un tutorial per parola chiave...', 'Passo 1 di 7', '6 tutorial trovati']
];
describe('Traduções', () => {
  beforeEach(() => cy.visit('/'));
  locales.forEach(([code, htmlLang, castle, placeholder, step, count]) => {
    it(`traduz interface, catálogo e modal para ${code}`, () => {
      cy.get('#languageSelect').select(code);
      cy.get('html').should('have.attr', 'lang', htmlLang);
      cy.getByCy('search-input').should('have.attr', 'placeholder', placeholder);
      cy.getByCy('results-count').should('have.text', count);
      cy.getByCy('card-tutorial').should('have.length', 6);
      cy.get('[data-cy="card-tutorial"][data-id="3"]').should('contain', castle);
      cy.get('[data-cy="btn-view-steps"][data-id="3"]').click();
      cy.getByCy('modal-title').should('contain', castle);
      cy.getByCy('step-counter').should('have.text', step);
      cy.getByCy('material-checkbox').should('have.length', 6);
      cy.getByCy('btn-close-modal').click();
      cy.getByCy('search-input').type(castle);
      cy.getByCy('card-title').should('have.length', 1).and('have.text', castle);
    });
  });
  it('busca pela categoria traduzida e mantém o filtro na troca de idioma', () => {
    cy.get('[data-category="Redstone/Fazendas"]').click();
    cy.get('#languageSelect').select('it');
    cy.get('[data-category="Redstone/Fazendas"]').should('have.class', 'active').and('have.text', 'Redstone/Fattorie');
    cy.getByCy('search-input').type('Fattorie');
    cy.getByCy('card-tutorial').should('have.length', 3);
  });
  it('mantém passo e materiais ao traduzir um modal aberto', () => {
    cy.getByCy('btn-view-steps').first().click();
    cy.getByCy('btn-next-step').click();
    cy.getByCy('material-checkbox').first().check();
    // The selector is behind the overlay; invoke the public language handler.
    cy.window().then(win => win.mudarIdioma('it'));
    cy.getByCy('modal-title').should('contain', 'Micro-rifugio di Sopravvivenza');
    cy.getByCy('step-counter').should('have.text', 'Passo 2 di 5');
    cy.getByCy('material-checkbox').first().should('be.checked');
    cy.getByCy('materials-status').should('have.text', '1 di 6 materiali raccolti');
  });
  it('corrige o último tutorial francês e permite voltar ao português', () => {
    cy.get('#languageSelect').select('fr');
    cy.get('[data-cy="card-tutorial"][data-id="6"]').should('contain', 'Ferme à Golems de Fer');
    cy.get('#languageSelect').select('it').select('pt');
    cy.getByCy('results-count').should('have.text', '6 tutoriais encontrados');
  });
  it('ajusta o último passo quando a tradução tem menos etapas', () => {
    cy.get('[data-cy="btn-view-steps"][data-id="6"]').click();
    for (let i = 0; i < 5; i++) cy.getByCy('btn-next-step').click();
    cy.getByCy('step-counter').should('have.text', 'Passo 6 de 6');
    cy.window().then(win => win.mudarIdioma('it'));
    cy.getByCy('step-counter').should('have.text', 'Passo 5 di 5');
    cy.getByCy('step-text').should('not.contain', 'undefined');
    cy.getByCy('btn-next-step').should('be.disabled');
  });

});
