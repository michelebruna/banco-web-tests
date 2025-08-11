# Projeto de Testes Automatizados com Cypress

Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript, seguindo boas práticas de organização de código e geração de relatórios.

## Objetivo

Automatizar cenários de teste para a aplicação web "banco-web", validando funcionalidades essenciais e garantindo a qualidade do sistema através de testes end-to-end.

## Componentes do Projeto

- **Cypress**: Framework principal para automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados em HTML e JSON dos testes executados.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Scripts de teste automatizados.
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/reports/`: Relatórios gerados após a execução dos testes.
  - `cypress/downloads/`, `cypress/screenshots/`, `cypress/videos/`: Evidências de execução dos testes.

## Pré-requisitos

- Node.js instalado
- A API `banco-api` e a aplicação web `banco-web` devem estar em execução

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd banco-web-tests
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API `banco-api` e a aplicação `banco-web` estão rodando.
2. Execute os testes com o comando:
   ```bash
   npx cypress run
   ```
3. Para gerar o relatório com o Mochawesome:
   ```bash
   npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/html,overwrite=false,html=true,json=true
   ```
4. Os relatórios estarão disponíveis em `cypress/reports/html`.

## Estrutura dos Testes

- Os testes estão localizados em `cypress/e2e/`.
  - `login.cy.js`: Testes relacionados ao login na aplicação.
  - `transferencia.cy.js`: Testes de transferência bancária.
- Os dados de teste estão em `cypress/fixtures/`.

## Custom Commands

Os comandos personalizados estão implementados em `cypress/support/commands/` e são utilizados para:
- Realizar login (`login.js`)
- Automatizar transferências (`transferencia.js`)
- Comandos comuns reutilizáveis (`commom.js`)

Esses comandos facilitam a escrita dos testes, tornando-os mais legíveis e reutilizáveis.

## Relatórios

Após a execução dos testes, os relatórios em HTML e JSON são gerados na pasta `cypress/reports/html`.

## Contribuição

Sinta-se à vontade para sugerir melhorias ou abrir issues.

---
Mentoria 2.0 | Automação de Testes com Cypress
