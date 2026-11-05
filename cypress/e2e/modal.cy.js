describe('Passo a passo e materiais', () => {
  beforeEach(() => cy.visit('/'));
  [1, 2, 3, 4, 5, 6].forEach(id => {
    it(`abre o tutorial ${id} e percorre todos os passos`, () => {
      cy.get(`[data-cy="card-tutorial"][data-id="${id}"]`).find('h3').invoke('text').then(title => {
        cy.get(`[data-cy="btn-view-steps"][data-id="${id}"]`).click();
        cy.getByCy('modal-title').should('contain', title);
      });
      cy.getByCy('tutorial-modal').should('be.visible');
      cy.getByCy('btn-prev-step').should('be.disabled');
      const total = id === 3 ? 7 : 5;
      for (let step = 1; step <= total; step++) {
        cy.getByCy('step-counter').should('have.text', `Passo ${step} de ${total}`);
        cy.getByCy('step-text').should('not.be.empty');
        if (step < total) cy.getByCy('btn-next-step').click();
      }
      cy.getByCy('btn-next-step').should('be.disabled');
      cy.getByCy('btn-prev-step').click();
      cy.getByCy('step-counter').should('have.text', `Passo ${total - 1} de ${total}`);
      cy.getByCy('btn-close-modal').click();
      cy.getByCy('modal-overlay').should('not.be.visible');
      cy.get(`[data-cy="btn-view-steps"][data-id="${id}"]`).click();
      cy.getByCy('step-counter').should('have.text', `Passo 1 de ${total}`);
    });
  });
  it('fecha com Escape e clique no fundo, mas não dentro do modal', () => {
    cy.getByCy('btn-view-steps').first().click();
    cy.getByCy('modal-title').click();
    cy.getByCy('tutorial-modal').should('be.visible');
    cy.get('body').type('{esc}');
    cy.getByCy('modal-overlay').should('not.be.visible');
    cy.getByCy('btn-view-steps').first().click();
    cy.getByCy('modal-overlay').click(2, 2);
    cy.getByCy('modal-overlay').should('not.be.visible');
  });
  it('atualiza progresso, preserva marcações na sessão e separa tutoriais', () => {
    cy.getByCy('btn-view-steps').first().click();
    cy.getByCy('materials-status').should('have.text', '0 de 6 materiais coletados');
    for (let i = 0; i < 6; i++) cy.getByCy('material-checkbox').eq(i).check();
    cy.getByCy('materials-status').should('have.text', '6 de 6 materiais coletados');
    cy.getByCy('materials-progress').should('have.attr', 'style', 'width: 100%;');
    cy.getByCy('material-checkbox').first().uncheck();
    cy.getByCy('materials-status').should('have.text', '5 de 6 materiais coletados');
    cy.getByCy('btn-close-modal').click();
    cy.getByCy('btn-view-steps').eq(1).click();
    cy.getByCy('material-checkbox').should('not.be.checked');
    cy.getByCy('btn-close-modal').click();
    cy.getByCy('btn-view-steps').first().click();
    cy.getByCy('material-checkbox').eq(1).should('be.checked');
    cy.getByCy('materials-status').should('have.text', '5 de 6 materiais coletados');
  });
});
