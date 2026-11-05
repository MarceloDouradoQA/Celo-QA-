# Celo Craft — testes automatizados

[![Celo Craft E2E](https://github.com/MarceloDouradoQA/Celo-QA-/actions/workflows/e2e.yml/badge.svg)](https://github.com/MarceloDouradoQA/Celo-QA-/actions/workflows/e2e.yml)

Projeto de portfólio de QA de Marcelo Dourado: aplicação de tutoriais de Minecraft e regressão E2E com Cypress. O catálogo desta versão contém seis tutoriais em português, inglês, espanhol, francês e italiano.

## Executar

Instale Node.js 22 ou superior e execute na raiz:

```bash
npm ci
npm test
```

`npm test` inicia o servidor, aguarda a aplicação, executa os testes e encerra o servidor. Para acompanhar os testes na interface do Cypress:

```bash
npm run test:open
```

Para usar apenas o site: `npm start`, depois abra http://127.0.0.1:8080. Se a porta 8080 estiver ocupada, encerre o processo anterior antes de iniciar os testes. Em Linux, instale as dependências de sistema exigidas pelo Cypress, incluindo Xvfb.

## Cobertura: 27 cenários

| Arquivo | Cenários | Cobertura |
| --- | ---: | --- |
| `catalog.cy.js` | 7 | Carregamento, fontes, três categorias, busca normalizada, combinação de filtros, vazio e entrada literal |
| `modal.cy.js` | 8 | Seis tutoriais, limites e retorno dos passos, fechamento, materiais e isolamento entre tutoriais |
| `languages.cy.js` | 8 | Cinco idiomas, busca traduzida, conservação do estado e regressão francês/italiano |
| `responsive.cy.js` | 4 | Fluxo em 320, 390, 768 e 1440 pixels, sem transbordamento horizontal |

Os testes usam seletores `data-cy`, isolamento por cenário e assertions com repetição automática do Cypress. Não ignoram exceções da aplicação nem usam esperas fixas. A navegação externa das fontes não é testada: os testes verificam os atributos dos links sem depender de sites de terceiros.

## Integração contínua e evidências

O workflow `Celo Craft E2E` executa em pushes, pull requests e acionamento manual. Relatórios JUnit ficam em `cypress/results/`; screenshots de falhas, em `cypress/screenshots/`. No GitHub Actions, baixe o artefato `cypress-results` de cada execução, disponível por 14 dias. O badge mostra o estado real do workflow.

## Organização

- `index.html`: aplicação responsiva, estilos e lógica.
- `translations.js`: textos e conteúdo dos cinco idiomas.
- `cypress/e2e/`: casos de teste.
- `cypress/support/`: comando de seleção por `data-cy`.
- `scripts/server.cjs`: servidor local dos arquivos públicos da aplicação.
- `.github/workflows/e2e.yml`: execução automática e evidências.
- [`qa-automation-portfolio/`](qa-automation-portfolio/): projetos adicionais de automação, independentes desta suíte.

## Correções cobertas

Removidos conflitos de merge da configuração e do lockfile; consolidado o HTML que continha versões duplicadas; cadastrado italiano completo; corrigido conteúdo italiano no catálogo francês; busca por categorias traduzidas; atualização do idioma do documento e do título. Dependências geradas deixam de ser versionadas: `npm ci` as restaura usando o lockfile.

A marcação de materiais dura durante a sessão da página, inclusive ao fechar e reabrir o modal; recarregar a página reinicia o progresso. Os tutoriais são conteúdo demonstrativo: a suíte valida o site, não o funcionamento das construções dentro de cada edição do Minecraft.
