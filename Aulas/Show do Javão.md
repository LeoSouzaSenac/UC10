### 📄 `INSTRUÇÕES_PROJETO.md`

# 🎮 Projeto Colaborativo - Show do Javão

## 📌 Enunciado

Você e sua equipe (máximo 3 integrantes) devem desenvolver **um jogo simples em Java**, utilizando colaboração e versionamento com Git e GitHub. 
O jogo será executado no terminal (console) e deve conter lógica básica de interação com o jogador.

---

## ✅ Regras obrigatórias de desenvolvimento

### 🔄 Uso do Git e GitHub com Gitflow

1. Crie um repositório no GitHub para o projeto.
2. Configure as seguintes **branches principais**:
   - `main`: versão final (produção)
   - `develop`: desenvolvimento contínuo
3. Crie branches para funcionalidades:
   - `feature/nome-da-funcionalidade`
4. Façam **merge** das `feature/` para `develop`, e depois para `main`.

### ✍️ Commits Semânticos

Todos os commits devem seguir a convenção:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alterações na documentação
- `refactor:` melhorias no código sem alterar comportamento
- `test:` código de teste
- `chore:` tarefas auxiliares (ex: configs)

✅ Exemplos:
- `feat: adicionar sistema de pontuação`
- `fix: corrigir bug na contagem de tentativas`
- `docs: atualizar README com instruções`

### 🧠 Boas práticas de Git

- Façam **pull antes de começar a programar**
- Façam **commits pequenos e frequentes**
- Nunca trabalhem diretamente nas branches `main` ou `develop`
- Cada integrante deve contribuir com código (verificável no GitHub)

---

## 📁 Entrega

- O projeto deve estar publicado em um repositório GitHub.
- O repositório deve conter:
  - Código-fonte Java
  - `README.md` com instruções do projeto (modelo abaixo)
  - Histórico de commits semânticos
  - Uso correto de branches

📅 **Prazo de entrega**: *28/05*

---

## 🧐 Avaliação

| Critério                             | Peso |
|--------------------------------------|------|
| Funcionalidade do jogo               | 30%  |
| Uso correto de Gitflow               | 20%  |
| Commits semânticos                   | 20%  |
| Participação de todos os membros     | 20%  |
| Documentação e clareza do projeto    | 10%  |

---

## 📄 Modelo de README.md (entregue junto ao repositório)

```markdown
# 🎮 Show do Javão

## 👨‍👩‍👧 Integrantes
- João Silva
- Maria Souza
- Ana Lima

## 📚 Descrição
Aí é com vocês.

## 🚀 Como executar
1. Clonar o repositório:
```bash
git clone https://github.com/usuario/repositorio.git
````

2. Navegar até a pasta:

```bash
cd repositorio
```

3. Compilar o jogo:

```bash
javac Jogo.java
```

4. Executar:

```bash
java Jogo
```

## 🛠 Tecnologias

* Java 11+
* Terminal

## 🧠 Funcionalidades

* Adivinhação de palavra
* Controle de tentativas
* Exibição de letras corretas

## 🔄 Gitflow utilizado

* Branch `main`, `develop`, e `feature/`
* Commits com padrão semântico
* Pull requests realizados entre as branches


## 🎮 **Show do Javão – O Desafio dos Mil Bytes**

### 🧠 Objetivo do jogo

Os jogadores devem responder corretamente a uma sequência de perguntas para acumular pontos, simulando o famoso *Show do Milhão*. O jogo termina quando o jogador erra ou atinge a pontuação máxima.

---

### 🕹️ Funcionamento do jogo

#### 1. **Tela inicial**

* Exibe o título do jogo e uma mensagem de boas-vindas.
* O jogador é perguntado se quer iniciar o jogo.

#### 2. **Sistema de perguntas**

* O jogo apresenta **5 a 10 perguntas** de múltipla escolha (A, B, C, D).
* Cada pergunta correta aumenta a pontuação.
* As perguntas devem estar armazenadas em uma estrutura simples, como um vetor, array ou lista.

#### 3. **Regras**

* O jogador deve escolher a alternativa (A, B, C ou D).
* Se acertar, avança para a próxima pergunta.
* Se errar, o jogo acaba imediatamente, exibindo a pontuação final.
* Não há "vidas" ou "ajuda dos universitários", para simplificar.

#### 4. **Pontuação**

* Cada pergunta correta vale uma pontuação (ex: 10 pontos).
* O jogador pode atingir até 100 pontos se acertar todas.

#### 5. **Exibição final**

* Quando o jogo termina (por erro ou por ter respondido tudo), exibe:

  * Total de perguntas respondidas
  * Pontuação final
  * Uma mensagem personalizada (“Você foi bem!” ou “Tente novamente!”)

---

### 💡 Exemplo de interface no console

```txt
==============================
  🎮 Show do Javão 🎮
Vença para ganhar 1 milhão de Riais iranianos
==============================

Pergunta 1:
Qual é a linguagem usada para este jogo?
A) Python
B) Java
C) C++
D) PHP

> Sua resposta: B

✅ Correto! +10 pontos!

...

Pergunta 3:
Qual palavra-chave usamos para criar uma classe em Java?
A) define
B) function
C) class
D) public

> Sua resposta: A

❌ Errado! A resposta correta era: D) public

Fim de jogo!
Você fez 20 pontos.
```

---

### 🧑‍💻 Extras (opcional para equipes mais avançadas)

* Sortear perguntas aleatoriamente
* Permitir reiniciar o jogo ao final
* Exibir ranking de pontuações (com arquivos ou lista simples)
* Perguntas carregadas de um arquivo `.txt` ou `.json`

