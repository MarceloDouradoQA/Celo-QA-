describe('Checkout e tratamento de falhas', () => {
  it('envia o produto e a quantidade escolhidos', () => {
    cy.intercept('POST', '/api/orders').as('order');
    cy.visit('/');
    cy.get('#product').select('mouse');
    cy.get('#quantity').clear().type('2');
    cy.contains('button', 'Finalizar pedido').click();
    cy.wait('@order').then(({ request, response }) => {
      expect(request.body).to.deep.equal({ productId: 'mouse', quantity: 2 });
      expect(response.statusCode).to.equal(201);
      expect(response.body.totalCents).to.equal(15980);
    });
    cy.get('[role=status]').should('contain.text', 'confirmado');
  });

  it('permite tentar novamente após uma falha de conexão', () => {
    let connectionAvailable = false;
    cy.intercept('POST', '/api/orders', request => {
      if (connectionAvailable) return request.continue();
      request.destroy();
    });
    cy.visit('/');
    cy.get('#product').select('keyboard');
    cy.contains('button', 'Finalizar pedido').click();
    cy.get('[role=status]').should('contain.text', 'Falha de conexão').then(() => {
      connectionAvailable = true;
    });
    cy.contains('button', 'Finalizar pedido').should('be.enabled').click();
    cy.get('[role=status]').should('contain.text', 'confirmado');
  });
});
