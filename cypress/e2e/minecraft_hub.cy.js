describe('Testes E2E - MineCrafting Tutorial Hub', () => {

  beforeEach(() => {
    // Carrega o index.html local na raiz do projeto
    cy.visit('./index.html')
  })

  it('Deve carregar o título e os tutoriais corretamente', () => {
    cy.contains('MineCrafting').should('be.visible')
    cy.get('.card, [class*="card"]').should('have.length', 6)
  })

  it('Deve filtrar os tutoriais pela categoria Redstone/Fazendas', () => {
    cy.contains('button', 'Redstone/Fazendas').click()
    cy.contains('Fazenda de Árvores').should('be.visible')
    cy.contains('Micro-abrigo de Sobrevivência').should('not.be.visible')
  })

  it('Deve pesquisar um tutorial por palavra-chave', () => {
    cy.get('input[type="text"]').type('Castelo')
    cy.contains('Castelo Medieval').should('be.visible')
    cy.contains('Fazenda de Kelp').should('not.be.visible')
  })

  it('Deve abrir o modal ao clicar em "Ver Passo a Passo"', () => {
    cy.contains('Ver Passo a Passo').first().click()
    cy.get('.modal, [role="dialog"], [class*="modal"], .overlay').should('be.visible')
  })

})