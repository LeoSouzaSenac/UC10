# 🧩 Integração Contínua (CI) e GitHub Actions

## 📌 O que é Integração Contínua (CI)?

A **Integração Contínua** (em inglês, *Continuous Integration* ou **CI**) é uma **prática de desenvolvimento de software** onde o código produzido pelos desenvolvedores é **integrado ao repositório principal com frequência** (várias vezes ao dia). Essa prática é amplamente utilizada no dia a dia das empresas — especialmente em times profissionais de desenvolvimento de software. Ela é considerada uma boa prática essencial e fundamental na rotina de desenvolvimento de software profissional, tanto em empresas grandes quanto em startups. Utilizá-la corretamente reduz erros, melhora a qualidade do código e aumenta a velocidade de entrega de novos recursos aos clientes.

Cada vez que o código é enviado (push), o projeto passa automaticamente por **verificações automáticas**, como:

- Execução de testes automatizados;
- Verificação de erros;
- Compilação do código;
- Geração de builds;
- Envio de alertas, se algo falhar.

---

## 🧠 Por que usar CI?

### Vantagens:

✅ Detecta erros rapidamente;  
✅ Automatiza tarefas repetitivas;  
✅ Garante mais segurança e qualidade;  
✅ Ajuda a manter o projeto funcionando a cada mudança.

### Exemplo prático:

Imagine uma equipe trabalhando em um site. Cada pessoa faz alterações diferentes. Sem CI, é possível que uma mudança de um colega **quebre o site inteiro**. Com CI, cada mudança é testada automaticamente e o problema é detectado **antes de chegar ao cliente**.

---

## ⚙️ GitHub Actions: Integração Contínua no GitHub

O **GitHub Actions** é a ferramenta de CI/CD do próprio GitHub. Ela permite criar **workflows automatizados** para executar tarefas sempre que algo acontece no repositório, como:

- Push de código;
- Criação de Pull Request;
- Criação de uma nova tag;
- Agendamento por data/hora (cron).

---

## 🏗️ Estrutura do GitHub Actions

Um workflow (fluxo de trabalho) do GitHub Actions é um arquivo `.yml` que fica no seguinte caminho:

```

.github/workflows/nome-do-arquivo.yml

````
O .yml ou .yaml é um arquivo de texto simples usado para organizar dados em formato hierárquico, de forma clara e legível.
YAML significa *YAML Ain't Markup Language* (YAML não é uma linguagem de marcação).
É muito utilizado para configurações de sistemas e automação
Esse arquivo define:

- **Quando o fluxo será executado** (gatilhos);
- **Em qual sistema** será executado (Linux, Windows ou macOS);
- **Quais passos serão seguidos** (ex: instalar dependências, rodar testes etc).

---

## ✍️ Exemplo Completo e Comentado de CI com GitHub Actions

```yaml
# Nome do workflow (aparece na aba "Actions" do GitHub)
name: CI - Testes Automatizados

# Gatilho: esse fluxo será executado quando ocorrer um push na branch "main"
on:
  push:
    branches: [ main ]

# Definindo os "jobs" (tarefas) que serão executadas
jobs:
  build:
    # Ambiente do servidor onde o CI será executado
    runs-on: ubuntu-latest

    # Etapas da tarefa
    steps:
      # Etapa 1: Baixar o código do repositório
      - name: Clonar código do repositório
        uses: actions/checkout@v3

      # Etapa 2: Instalar o Node.js na versão 16
      - name: Instalar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      # Etapa 3: Instalar dependências com npm
      - name: Instalar dependências
        run: npm install

      # Etapa 4: Executar testes com npm
      - name: Rodar testes
        run: npm test
````

---

## 🔍 Explicando Cada Parte

### `name:`

Nome que será exibido no painel de "Actions" do GitHub.

### `on:`

Define os **gatilhos** que ativam esse workflow. Exemplo:

* `push`: ao fazer um push
* `pull_request`: ao abrir um pull request
* `schedule`: em horário agendado
* `workflow_dispatch`: manual

### `jobs:`

Um **job** é uma tarefa que será executada.

### `runs-on:`

Define o sistema operacional que o GitHub vai usar para executar o código.

* `ubuntu-latest`: Linux Ubuntu
* `windows-latest`: Windows
* `macos-latest`: macOS

### `steps:`

Cada job tem vários **passos (steps)** que serão executados em sequência.

### `uses:`

Executa uma **ação pronta** do GitHub (como clonar o repositório ou configurar o Node).

### `run:`

Executa um **comando de terminal**, como se estivesse digitando no terminal do computador.

---

## 🧪 E se meu projeto for só HTML/CSS?

Você pode ainda usar o GitHub Actions para:

* Verificar se arquivos estão corretos;
* Fazer deploy automático no GitHub Pages;
* Rodar validadores de HTML/CSS;

Exemplo de CI simples com verificação de HTML:

```yaml
name: Validação HTML

on:
  push:
    branches: [ main ]

jobs:
  validate-html:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Instalar htmlhint
        run: npm install -g htmlhint
      - name: Rodar htmlhint
        run: htmlhint ./index.html
```

---

## ✅ Conclusão

* A **Integração Contínua (CI)** ajuda a manter o código funcionando corretamente a cada mudança.
* O **GitHub Actions** é uma ferramenta poderosa e gratuita para automatizar tarefas no seu repositório.
* Você pode configurar CI para **rodar testes, validar código, compilar, fazer deploy e muito mais**.
* Dominar CI é um passo importante para se tornar um desenvolvedor profissional.

---

## 🧑‍💻 Exercício Proposto

1. Crie um repositório no GitHub com um projeto básico (HTML, JS ou Node).
2. Crie a pasta `.github/workflows/` e adicione um arquivo `ci.yml`.
3. Copie o exemplo de CI com GitHub Actions.
4. Faça um commit e veja a execução automática na aba **Actions** do GitHub.
5. Analise cada passo e modifique o workflow para aprender mais.

---

## 📚 Referências

* [Guia Oficial GitHub Actions](https://docs.github.com/pt/actions)
* [O que é Integração Contínua](https://www.atlassian.com/br/continuous-delivery/continuous-integration)
* [HTMLHint](https://htmlhint.com/)

