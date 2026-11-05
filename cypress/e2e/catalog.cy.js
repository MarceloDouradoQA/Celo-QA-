describe('Catálogo e busca', () => {
  beforeEach(() => cy.visit('/'));
  it('carrega uma única aplicação com seis tutoriais e links seguros', () => {
    cy.title().should('eq', 'Celo Craft - Tutorial Hub');
    cy.getByCy('app-title').should('have.length', 1).and('contain', 'Celo Craft');
    cy.getByCy('card-tutorial').should('have.length', 6);
    cy.getByCy('results-count').should('have.text', '6 tutoriais encontrados');
    cy.getByCy('empty-state').should('not.be.visible');
    cy.getByCy('card-source').each(link => {
      expect(link.attr('href')).to.match(/^https:\/\//);
      expect(link.attr('rel')).to.include('noopener');
    });
  });
  [ ['Casas/Vilas', [1, 4]], ['Castelos/Medievais', [3]], ['Redstone/Fazendas', [2, 5, 6]] ].forEach(([category, ids]) => {
    it(`filtra ${category} e restaura todos`, () => {
      cy.get(`[data-category="${category}"]`).click().should('have.class', 'active');
      cy.getByCy('card-tutorial').should('have.length', ids.length).then(cards => {
        expect([...cards].map(card => Number(card.dataset.id))).to.deep.equal(ids);
      });
      cy.get('[data-category="Todos"]').click();
      cy.getByCy('card-tutorial').should('have.length', 6);
    });
  });
  it('busca sem distinguir acentos, caixa ou espaços externos', () => {
    cy.getByCy('search-input').type('  ARVORES  ');
    cy.getByCy('card-title').should('have.length', 1).and('have.text', 'Fazenda de Árvores');
    cy.getByCy('results-count').should('have.text', '1 tutorial encontrado');
    cy.getByCy('search-input').clear();
    cy.getByCy('card-tutorial').should('have.length', 6);
  });
  it('combina categoria e busca, mostra vazio e recupera resultados', () => {
    cy.get('[data-category="Casas/Vilas"]').click();
    cy.getByCy('search-input').type('Castelo');
    cy.getByCy('card-tutorial').should('not.exist');
    cy.getByCy('empty-state').should('be.visible');
    cy.getByCy('results-count').should('have.text', '0 tutoriais encontrados');
    cy.get('[data-category="Todos"]').click();
    cy.getByCy('card-title').should('have.text', 'Castelo Medieval');
    cy.getByCy('empty-state').should('not.be.visible');
  });
  it('trata texto parecido com HTML como busca literal', () => {
    cy.getByCy('search-input').type('<img src=x onerror=alert(1)>');
    cy.getByCy('card-tutorial').should('not.exist');
    cy.getByCy('empty-state').should('be.visible');
  });
});
