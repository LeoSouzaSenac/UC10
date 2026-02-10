
# Projeto Individual - Show do Milhão

## Enunciado

Você deve desenvolver um jogo simples em JavaScript, utilizando versionamento com Git e GitHub.
O jogo será executado no terminal (console) e deve conter lógica básica de interação com o jogador.

---

## Regras obrigatórias de desenvolvimento

### Uso do Git e GitHub com Gitflow

1. Crie um repositório no GitHub para o projeto.
2. Configure as seguintes branches principais:
   - `main`: versão final (produção)
   - `develop`: desenvolvimento contínuo
3. Crie branches para funcionalidades:
   - `feature/nome-da-funcionalidade`
4. Faça merge das `feature/` para `develop`, e depois para `main`.

Mesmo sendo um projeto individual, o uso correto das branches é obrigatório.

---

### Commits semânticos

Todos os commits devem seguir a convenção:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alterações na documentação
- `refactor:` melhorias no código sem alterar comportamento
- `test:` código de teste
- `chore:` tarefas auxiliares (ex: configurações)

Exemplos:
- `feat: adicionar sistema de pontuação`
- `fix: corrigir bug na validação de resposta`
- `docs: atualizar README com instruções`

---

### Boas práticas de Git

- Faça pull antes de começar a programar
- Faça commits pequenos e frequentes
- Nunca trabalhe diretamente nas branches `main` ou `develop`
- O histórico de commits deve demonstrar evolução do projeto

---

## Entrega

- O projeto deve estar publicado em um repositório GitHub.
- O repositório deve conter:
  - Código-fonte em JavaScript
  - `README.md` com instruções do projeto (modelo abaixo)
  - Histórico de commits semânticos
  - Uso correto de branches

---

## Avaliação

| Critério                         | Peso |
|----------------------------------|------|
| Funcionalidade do jogo           | 40%  |
| Uso correto de Gitflow           | 25%  |
| Commits semânticos               | 20%  |
| Documentação e clareza do projeto| 15%  |

---

## Modelo de README.md

```markdown
# Show do Javão

## Autor
- Seu Nome Aqui

## Descrição
Jogo de perguntas e respostas inspirado no formato do Show do Milhão.
O jogador deve responder corretamente às perguntas para acumular pontos.
Ao errar uma pergunta, o jogo termina e a pontuação final é exibida.

## Como executar

1. Clonar o repositório:
```bash
git clone https://github.com/usuario/repositorio.git
````

2. Navegar até a pasta do projeto:

```bash
cd repositorio
```

3. Executar o jogo com Node.js:

```bash
node jogo.js
```

## Tecnologias

* JavaScript (Node.js)
* Terminal

## Funcionalidades

* Sistema de perguntas e respostas
* Múltipla escolha (A, B, C, D)
* Controle de pontuação
* Encerramento do jogo ao errar uma pergunta

## Gitflow utilizado

* Branches `main`, `develop` e `feature/*`
* Commits seguindo padrão semântico
* Merge das funcionalidades via branches

---

## Show do Javão – O Desafio dos Mil Bytes

### Objetivo do jogo

O jogador deve responder corretamente a uma sequência de perguntas para acumular pontos.
O jogo termina quando o jogador erra ou quando todas as perguntas são respondidas corretamente.

---

### Funcionamento do jogo

#### 1. Tela inicial

* Exibe o título do jogo e uma mensagem de boas-vindas.
* Pergunta ao jogador se deseja iniciar o jogo.

#### 2. Sistema de perguntas

* O jogo apresenta de 5 a 10 perguntas de múltipla escolha.
* Cada pergunta possui quatro alternativas: A, B, C e D.
* As perguntas devem estar armazenadas em uma estrutura simples, como um array de objetos.

#### 3. Regras

* O jogador escolhe uma alternativa digitando A, B, C ou D.
* Se acertar, avança para a próxima pergunta.
* Se errar, o jogo termina imediatamente.

#### 4. Pontuação

* Cada pergunta correta vale uma quantidade fixa de pontos (ex: 10 pontos).
* A pontuação máxima é atingida ao acertar todas as perguntas.

#### 5. Exibição final

Ao final do jogo, exibir:

* Total de perguntas respondidas
* Pontuação final
* Mensagem personalizada de acordo com o desempenho

---

### Exemplo de interface no console

```txt
==============================
  Show do Milhão
Vença para ganhar 1 milhão de Riais iranianos
==============================

Pergunta 1:
Qual é a linguagem usada para este jogo?
A) Python
B) JavaScript
C) C++
D) PHP

Sua resposta: B

Correto! +10 pontos!

Pergunta 2:
Qual comando usamos para executar um arquivo JavaScript no Node.js?
A) run
B) start
C) node
D) execute

Sua resposta: A

Errado! A resposta correta era: C) node

Fim de jogo!
Pontuação final: 10 pontos
```

---

## Extras (opcional)

* Sorteio aleatório das perguntas
* Opção de reiniciar o jogo ao final
* Carregar perguntas de um arquivo `.json`



