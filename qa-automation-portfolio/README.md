# Portfólio de QA Automation

Projetos de Marcelo Cavalcante Dourado Junior. O laboratório simula uma loja que lista produtos, registra pedidos e rejeita compras acima do estoque. As suítes exercitam interface, API, dados e desempenho com massa fictícia. A aplicação usa memória e recupera a massa inicial sempre que é reiniciada.

| Projeto | Ferramentas | Cenários demonstrados |
| --- | --- | --- |
| [01 · Checkout web](projects/playwright) | Playwright, JavaScript | Pedido, total em reais, indisponibilidade do catálogo e estoque |
| [02 · Resiliência do checkout](projects/cypress) | Cypress | Inspeção de request e response, falha de rede e nova tentativa |
| [03 · Page Object](projects/selenium-java) | Selenium WebDriver, Java 21, JUnit, Maven | Compra e erro de estoque com esperas explícitas |
| [04 · Contrato de API](projects/postman) | Postman, Newman | Schema JSON, encadeamento de requisições e erro HTTP 409 |
| [05 · Regras de negócio da API](projects/pytest-api) | Python, pytest | Parametrização, HTTP 400/404/409, persistência em memória e baixa no estoque |
| [06 · Qualidade de dados](projects/sql-data) | SQL, SQLite, Python | Reconciliação de valores, integridade referencial e validação de quantidade |
| [07 · Desempenho do catálogo](projects/k6-performance) | k6 | Carga de cinco usuários virtuais, p95, taxa de falhas e validação do conteúdo |

## Executar

Use Node.js 24 e npm. As suítes Java, Python e k6 exigem também as respectivas ferramentas.

```bash
npm ci
npx playwright install chromium
npm run test:playwright
npm run test:cypress
npm run test:postman
npm run test:sql
```

Playwright e Cypress gerenciam seus servidores. Newman inicia o laboratório na porta 3000. Para Selenium, pytest e k6, rode `npm run lab` em outro terminal e reinicie o servidor antes de cada suíte que altera estoque.

```bash
mvn -f projects/selenium-java/pom.xml test
python3 -m pip install -r projects/pytest-api/requirements.txt
python3 -m pytest projects/pytest-api
k6 run projects/k6-performance/catalog.js
```

O Selenium usa Chrome ou Chromium e um ChromeDriver compatível. Para apontar Selenium ou Playwright para um Chromium instalado, defina `CHROMIUM_PATH`. No Windows, ajuste a sintaxe da variável para o seu terminal.

## Integração contínua

O [workflow](../.github/workflows/qa-automation-portfolio.yml) separa as sete suítes em jobs independentes. Ele preserva os relatórios disponíveis para análise no GitHub Actions. O cenário k6 serve como exemplo de teste de carga local com limites explícitos. Os valores são metas do laboratório e precisam ser definidos para cada ambiente real.

## Como explicar em entrevista

- Mostre a diferença entre verificar o pedido na tela, validar seu contrato HTTP e reconciliar o total em SQL.
- Use a falha de rede do Cypress para explicar como a interceptação torna o cenário reproduzível.
- Abra o relatório do Playwright e explique a evidência de falha. Mostre quando um Page Object ajuda a manter seletores no Selenium.
- Explique como a matriz separa as falhas por ferramenta e como o estoque do laboratório é isolado entre as execuções.

## Verificação local

| Suíte | Resultado |
| --- | --- |
| Postman / Newman | 4 requisições, 8 verificações passaram |
| pytest | 5 testes passaram |
| SQL / SQLite | 3 testes passaram |
| k6 | 250 requisições, 0 falhas, p95 de 2,76 ms em execução local |
| Playwright | Suíte descoberta. O ambiente local bloqueou a abertura do Chromium |
| Cypress | A instalação do binário recebeu um arquivo ZIP inválido |
| Selenium / Java | A resolução de dependências do Maven falhou por DNS |

## Verificação no GitHub Actions

As sete suítes passaram no [GitHub Actions](https://github.com/MarceloDouradoQA/Celo-QA-/actions/runs/42044737298), incluindo Playwright, Cypress e Selenium.
