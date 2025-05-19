# Semântica em Commits — Como Escrever Mensagens de Commit Claras

## O que é “semântica em commits”?

Quando você faz uma alteração em um projeto e “salva” essa mudança no Git, você escreve uma mensagem explicando o que foi feito.
**Semântica em commits** é uma forma de escrever essas mensagens de um jeito organizado e fácil de entender, usando um padrão.

Assim, todo mundo que trabalhar no projeto consegue entender rapidinho o que mudou só lendo as mensagens.

---

## Por que isso é importante?

* Para facilitar o entendimento das mudanças feitas no código.
* Para ajudar outras pessoas (e você mesmo) a revisar o que foi feito.
* Para gerar automaticamente um resumo das novidades e correções do projeto (chamado “changelog”).
* Para ajudar a controlar versões do projeto (tipo dizer se é uma atualização pequena ou grande).

---

## Como escrever mensagens com semântica? (O padrão Conventional Commits)

As mensagens de commit seguem este formato básico:

```
<tipo>[opcional: parte do código]: descrição curta do que foi feito
```

### O que significa cada parte?

* **tipo**: Diz o que você fez na mudança, por exemplo, adicionou algo novo, corrigiu um erro, atualizou a documentação, etc.
* **\[parte do código]** (opcional): Indica qual parte do programa foi mexida (pode ser “login”, “menu”, “api”, etc.).
* **descrição curta**: Um resumo pequeno, simples, do que você fez nessa mudança.

---

## Tipos mais usados e quando usar cada um

| Tipo         | Para que serve                                                                                        | Exemplo de mensagem                                |
| ------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **feat**     | Quando você cria uma funcionalidade nova                                                              | feat(login): adiciona botão de “entrar com Google” |
| **fix**      | Quando corrige um erro no código                                                                      | fix(menu): corrige erro que travava o menu         |
| **docs**     | Quando muda ou adiciona alguma coisa na documentação (guias, manuais, README)                         | docs: atualiza instruções de instalação            |
| **style**    | Quando muda só o visual do código, como espaços, indentação ou formatação, sem mexer no funcionamento | style: ajusta espaçamento do código                |
| **refactor** | Quando reorganiza ou melhora o código sem mudar o que ele faz (sem bugs ou funcionalidades novas)     | refactor: melhora organização da função de login   |
| **test**     | Quando adiciona ou conserta testes (códigos que verificam se o programa funciona)                     | test(auth): cria teste para verificação de senha   |
| **chore**    | Para tarefas gerais que não mudam o código do programa em si, como atualizar ferramentas              | chore: atualiza pacotes do projeto                 |

---

## Exemplos de mensagens com semântica

```
feat(cart): adiciona opção para usar cupom de desconto
fix(profile): corrige erro na troca da foto do usuário
docs: adiciona manual de como contribuir no projeto
chore: atualiza versões das bibliotecas usadas
```

---

## Dicas para escrever mensagens boas

* Seja claro e direto.
* Use o formato padrão para facilitar a leitura.
* Explique só o que realmente mudou.
* Não escreva mensagens muito longas no título (descrição curta).
* Se precisar, use o corpo do commit para explicar mais detalhes.

---

## Quer um jeito fácil de fazer isso?

Existem ferramentas que ajudam você a escrever mensagens no formato correto, como:

* **Commitizen**: um programa que te faz perguntas para criar o commit correto, passo a passo.
* **Semantic Release**: ferramenta que usa esses commits para criar automaticamente versões e resumos das mudanças.

---


# Exercício Prático: Usando Semântica em Commits com Git

## Objetivo

Aprender a criar mensagens de commit claras e organizadas seguindo o padrão de semântica em commits (Conventional Commits).

Assim, você vai entender melhor o que mudou no projeto e deixar o histórico do seu código fácil de ler.

---

## Passo a passo

### 1. Crie um repositório local

Abra o terminal e crie uma pasta para o seu projeto, depois entre nela:

```bash
mkdir meu-projeto-semantico
cd meu-projeto-semantico
```

Inicie um repositório Git:

```bash
git init
```

---

### 2. Crie um arquivo e faça seu primeiro commit

Crie um arquivo `README.md` com o conteúdo:

```markdown
# Meu Projeto Semântico
Este projeto é para praticar commits com semântica.
```

Salve o arquivo e faça o commit com uma mensagem seguindo a semântica:

```bash
git add README.md
git commit -m "docs: adiciona README inicial"
```

---

### 3. Adicione uma funcionalidade nova

Crie um arquivo `index.html` e coloque algum código básico HTML (pode ser um título, por exemplo). Depois, faça o commit:

```bash
git add index.html
git commit -m "feat: adiciona página inicial com título"
```

---

### 4. Corrija um erro no arquivo

Imagine que você esqueceu de fechar uma tag no `index.html`. Corrija isso e faça o commit:

```bash
git commit -am "fix: corrige fechamento da tag no index.html"
```

---

### 5. Atualize a documentação

No arquivo `README.md`, adicione uma instrução sobre como abrir o projeto. Faça o commit:

```bash
git add README.md
git commit -m "docs: adiciona instruções para abrir o projeto"
```

---

### 6. Mude o estilo do código (apenas formatação)

No arquivo `index.html`, ajuste a indentação ou espaços, sem alterar o funcionamento do código. Faça o commit:

```bash
git commit -am "style: ajusta indentação do HTML"
```

---

### 7. Suba o repositório para o GitHub

1. Crie um repositório novo no GitHub (por exemplo, `meu-projeto-semantico`).
2. No terminal, conecte seu repositório local ao GitHub (substitua a URL pelo link do seu repositório):

```bash
git remote add origin https://github.com/seu-usuario/meu-projeto-semantico.git
git branch -M main
git push -u origin main
```

---

### 8. Para finalizar

Revise seu histórico de commits com:

```bash
git log --oneline
```

Você deve ver as mensagens organizadas, como:

```
abc1234 style: ajusta indentação do HTML
def5678 docs: adiciona instruções para abrir o projeto
ghi9012 fix: corrige fechamento da tag no index.html
jkl3456 feat: adiciona página inicial com título
mno7890 docs: adiciona README inicial
```



