# IA na prática: Acelerando o desenvolvimento e garantindo a qualidade

[![Node.js CI](https://github.com/SEU_USUARIO/trabalho-ia-software-engineering/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/trabalho-ia-software-engineering/actions/workflows/ci.yml)

Este repositório contém a entrega do trabalho sobre o uso de Inteligência Artificial no fluxo de desenvolvimento de software, especificamente utilizando GitHub Copilot e GitHub Actions.

## Parte Teórica

### 1. Análise do Problema
A equipe fictícia enfrentava um claro dilema entre **velocidade e qualidade**. O processo de desenvolvimento era lento devido à necessidade de escrever código repetitivo (boilerplate) e a cobertura de testes era baixa, pois testes eram vistos como um "atraso". Além disso, o feedback sobre bugs era tardio (frequentemente encontrados apenas em produção ou QA manual), e o código carecia de consistência técnica devido à variação de abordagens entre diferentes desenvolvedores. A falta de testes automatizados integrados e a resistência em escrevê-los criavam um gargalo no ciclo de entrega.

### 2. Papel da IA no Ciclo de Desenvolvimento (Código, Testes e CI/CD)
A IA transforma o desenvolvimento ao atuar como um "pair programmer" incansável.
*   **Geração de Código:** Ferramentas como o GitHub Copilot aceleram a escrita de código boilerplate, permitindo que os desenvolvedores foquem na lógica de negócios e na arquitetura.
*   **Testes Automatizados:** A IA reduz drasticamente o atrito na criação de testes de unidade. Ao gerar automaticamente cenários de teste básicos e edge cases, a equipe consegue aumentar a cobertura de testes sem comprometer a velocidade do desenvolvimento.
*   **CI/CD:** O uso de IA para gerar workflows de CI/CD (como o `.yml` do GitHub Actions) facilita a implementação rápida de pipelines que rodam testes automaticamente a cada push, garantindo que o código defeituoso não seja integrado e promovendo um ciclo de feedback rápido ("shift-left testing").

### 3. Caso Real de Uso
**Duolingo:** O Duolingo adotou o GitHub Copilot em sua equipe de engenharia e relatou um aumento substancial na produtividade. Os desenvolvedores relataram que a ferramenta ajudou significativamente a reduzir o tempo gasto escrevendo código repetitivo (como testes e documentação) e na busca por sintaxes específicas, permitindo um foco maior em features complexas. Segundo métricas internas do GitHub, empresas que adotam o Copilot frequentemente observam que até 46% do código é escrito pela IA, com os desenvolvedores sentindo-se mais satisfeitos e produtivos.

## Parte Prática

O código contido neste repositório inclui:
- Uma função `calcularTotalComDesconto` gerada através de um prompt do GitHub Copilot.
- Uma suíte de testes de unidade (usando `Jest`) gerada por IA para validar a função.
- Um pipeline de CI/CD via GitHub Actions (`.github/workflows/ci.yml`) que instala as dependências e roda os testes automaticamente a cada push.

### Como testar localmente
1. Instale as dependências: `npm install`
2. Execute os testes: `npm test`
