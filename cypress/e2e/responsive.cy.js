[[320, 568], [390, 844], [768, 1024], [1440, 900]].forEach(([width, height]) => {
  describe(`Layout ${width}x${height}`, () => {
    it('permite buscar, abrir, navegar e fechar sem transbordamento horizontal', () => {
      cy.viewport(width, height);
      cy.visit('/');
      cy.document().then(doc => expect(doc.documentElement.scrollWidth).to.be.at.most(width));
      cy.getByCy('search-input').type('Castelo');
      cy.getByCy('card-tutorial').should('have.length', 1);
      cy.getByCy('btn-view-steps').click();
      cy.getByCy('tutorial-modal').should('be.visible').then(modal => {
        const rect = modal[0].getBoundingClientRect();
        expect(rect.left).to.be.at.least(0);
        expect(rect.right).to.be.at.most(width);
        expect(modal[0].scrollWidth).to.be.at.most(modal[0].clientWidth);
      });
      cy.getByCy('btn-next-step').click();
      cy.getByCy('step-counter').should('have.text', 'Passo 2 de 7');
      cy.getByCy('btn-close-modal').click();
      cy.getByCy('modal-overlay').should('not.be.visible');
    });
  });
});
