describe('Minecraft Tutorial Hub - Testes E2E Completos', () => {
beforeEach(() => {
// Visita a página principal do projeto antes de cada teste
cy.visit('./index.html');
});

it('1. Deve carregar o título principal e subtítulo da aplicação', () => {
cy.get('[data-cy="app-title"]')
.should('be.visible')
.and('contain', 'MineCrafting - Tutorial Hub');

cy.get('[data-cy="app-subtitle"]')
  .should('be.visible')
  .and('contain', 'Tutoriais e blueprints de construções');


});

it('2. Deve exibir a listagem inicial de tutoriais na grid', () => {
// Verifica se os cartões de tutoriais são renderizados corretamente
cy.get('[data-cy="tutorial-grid"]')
.find('[data-cy="card-tutorial"]')
.should('have.length.greaterThan', 0);

// Confere o contador de tutoriais exibidos
cy.get('[data-cy="results-count"]')
  .should('contain', 'tutoriais encontrados');


});

it('3. Deve filtrar os tutoriais através do campo de busca por palavra-chave', () => {
// Digita um termo específico no campo de busca
cy.get('[data-cy="search-input"]')
.type('Castelo');

// Verifica se apenas o tutorial correspondente é exibido
cy.get('[data-cy="tutorial-grid"]')
  .find('[data-cy="card-tutorial"]')
  .should('have.length', 1);

cy.get('[data-cy="card-tutorial"]')
  .first()
  .should('contain', 'Castelo Medieval');


});

it('4. Deve filtrar os tutoriais ao clicar nos botões de categoria', () => {
// Clica na categoria de Redstone/Fazendas
cy.get('[data-cy="filter-category"]')
.contains('Redstone/Fazendas')
.click();

// Valida que o botão ficou ativo e os itens filtrados pertencem à categoria
cy.contains('Fazenda de Árvores').should('be.visible');
cy.get('[data-cy="tutorial-grid"]')
  .find('[data-cy="card-tutorial"]')
  .should('have.length.at.least', 1);


});

it('5. Deve exibir estado vazio quando nenhum tutorial corresponder à busca', () => {
// Pesquisa por um termo inexistente
cy.get('[data-cy="search-input"]')
.type('BlocoInexistenteXYZ');

// Valida que a mensagem de estado vazio é apresentada
cy.get('[data-cy="empty-state"]')
  .should('not.be.hidden')
  .and('contain', 'Nenhum tutorial encontrado');


});

it('6. Deve abrir o modal de detalhes ao clicar em "Ver Passo a Passo"', () => {
// Clica no botão do primeiro tutorial da lista
cy.get('[data-cy="btn-view-steps"]')
.first()
.click();

// Verifica se o modal abriu corretamente com o título correspondente
cy.get('[data-cy="modal-overlay"]')
  .should('have.class', 'open');

cy.get('[data-cy="modal-title"]')
  .should('be.visible');


});

it('7. Deve interagir com a checklist de materiais e atualizar a barra de progresso', () => {
// Abre o primeiro tutorial
cy.get('[data-cy="btn-view-steps"]').first().click();

// Marca o primeiro checkbox de material necessário
cy.get('[data-cy="material-checkbox"]')
  .first()
  .check()
  .should('be.checked');

// Valida se o status de materiais coletados foi atualizado
cy.get('[data-cy="materials-status"]')
  .should('contain', '1 de');


});

it('8. Deve navegar entre os passos do tutorial usando os botões Anterior e Próximo', () => {
// Abre o primeiro tutorial
cy.get('[data-cy="btn-view-steps"]').first().click();

// Valida o contador inicial no Passo 1
cy.get('[data-cy="step-counter"]')
  .should('contain', 'Passo 1 de');

// O botão anterior deve estar desativado no primeiro passo
cy.get('[data-cy="btn-prev-step"]')
  .should('be.disabled');

// Clica em "Próximo" para avançar
cy.get('[data-cy="btn-next-step"]')
  .click();

cy.get('[data-cy="step-counter"]')
  .should('contain', 'Passo 2 de');

// O botão anterior agora deve estar ativo
cy.get('[data-cy="btn-prev-step"]')
  .should('not.be.disabled');


});

it('9. Deve fechar o modal do tutorial ao clicar no botão de fechar (✕)', () => {
// Abre o modal
cy.get('[data-cy="btn-view-steps"]').first().click();
cy.get('[data-cy="modal-overlay"]').should('have.class', 'open');

// Clica no botão de fechar
cy.get('[data-cy="btn-close-modal"]')
  .click();

// Garante que o overlay perdeu a classe de abertura (fechou)
cy.get('[data-cy="modal-overlay"]')
  .should('not.have.class', 'open');


});

it('10. Deve alterar o idioma da aplicação e atualizar os placeholders corretamente', () => {
// Seleciona o idioma Inglês no seletor
cy.get('#languageSelect')
.select('en');

// Verifica se o campo de busca alterou o placeholder para o inglês
cy.get('[data-cy="search-input"]')
  .should('have.attr', 'placeholder', 'Search tutorial by keyword...');

// Retorna para o Português para validar a reversão
cy.get('#languageSelect')
  .select('pt');

cy.get('[data-cy="search-input"]')
  .should('have.attr', 'placeholder', 'Buscar tutorial por palavra-chave...');


});

it('11. Deve alterar o idioma para Inglês e traduzir os elementos principais', () => {
cy.get('#languageSelect').select('en');
cy.get('[data-cy="app-subtitle"]').should('contain', 'Minecraft building tutorials');
});

it('12. Deve filtrar os tutoriais corretamente ao digitar na barra de pesquisa', () => {
cy.get('[data-cy="search-input"]').type('Kelp');
cy.get('[data-cy="card-tutorial"]').should('have.length', 1);
cy.get('[data-cy="card-title"]').should('contain', 'Kelp Farm');
});

it('13. Deve filtrar os tutoriais ao selecionar a categoria Redstone/Fazendas', () => {
cy.get('[data-cy="filter-category"]').contains('Redstone/Fazendas').click();
cy.get('[data-cy="card-tutorial"]').should('have.length.at.least', 1);
cy.get('[data-cy="card-category"]').each(($el) => {
expect($el.text()).to.equal('Redstone/Fazendas');
});
});

it('14. Deve marcar materiais e atualizar o status de progresso no modal', () => {
cy.get('[data-cy="btn-view-steps"]').first().click();
cy.get('[data-cy="material-checkbox"]').first().check();
cy.get('[data-cy="materials-progress"]').should('not.have.style', 'width', '0%');
cy.get('[data-cy="materials-status"]').should('contain', '1 de');
});

it('15. Deve navegar entre os passos do tutorial usando os botões Próximo e Anterior', () => {
cy.get('[data-cy="btn-view-steps"]').first().click();
cy.get('[data-cy="step-counter"]').should('contain', 'Passo 1 de');
cy.get('[data-cy="btn-next-step"]').click();
cy.get('[data-cy="step-counter"]').should('contain', 'Passo 2 de');
cy.get('[data-cy="btn-prev-step"]').click();
cy.get('[data-cy="step-counter"]').should('contain', 'Passo 1 de');
});
});