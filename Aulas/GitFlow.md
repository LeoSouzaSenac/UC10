### 📄 `GitFlow`

## 🧠 O que é o Git Flow?

O **Git Flow** é uma estratégia de trabalho com Git que organiza o desenvolvimento de software em diferentes **"fluxos" ou ramificações (branches)**, cada uma com uma finalidade específica.

Criado por **Vincent Driessen**, o Git Flow ajuda equipes a manter o projeto organizado, com versões de desenvolvimento, lançamento, correções e funcionalidades separadas.

---

## 🎯 Objetivo do Git Flow

> Separar de forma clara as diferentes etapas do desenvolvimento de um software.

Com o Git Flow, você tem:
- Um lugar para desenvolver novas funcionalidades ✅
- Um lugar para testar e preparar o código ✅
- Um lugar só com código pronto para ir para produção ✅
- Um lugar para corrigir erros críticos rapidamente ✅

---

## 🔁 Estrutura de Branches no Git Flow

### 1. `main`
- Contém o **código em produção**
- **Nunca** desenvolva diretamente nela
- Toda versão lançada do sistema (ex: v1.0, v2.0) está aqui

### 2. `develop`
- Aqui acontece o **desenvolvimento ativo**
- Novas funcionalidades são integradas nela
- Depois de testado, o código da `develop` vai para a `main`

---

## 🌱 Branches auxiliares do Git Flow

### 📌 `feature/*`
- Onde se desenvolvem **novas funcionalidades**
- Ex: `feature/cadastro-usuario`

**Criada a partir de:** `develop`  
**Destino final (merge):** `develop`

---

### 📌 `release/*`
- Preparação para um **novo lançamento**
- Ajustes finais, testes, pequenos bugs

**Criada a partir de:** `develop`  
**Destino final (merge):** `main` e `develop`

---

### 📌 `hotfix/*`
- Correções URGENTES de bugs encontrados em produção

**Criada a partir de:** `main`  
**Destino final (merge):** `main` e `develop`

---

## 🛠️ Como usar Git Flow na prática

Você pode usar o Git Flow manualmente ou com uma ferramenta.

### 📦 Instalação (opcional, para automatizar)
```bash
git flow init
````

Você será perguntado a nomear as branches:

* Nome da branch principal: `main`
* Nome da branch de desenvolvimento: `develop`
* Prefixo das outras: `feature/`, `release/`, `hotfix/`, `support/`

---

## 📘 Exemplo passo a passo: Criando uma funcionalidade

### 🧩 Etapa 1: Criar uma branch de funcionalidade

```bash
git checkout develop
git checkout -b feature/login-usuario
```

➡️ Cria a branch `feature/login-usuario` a partir da `develop`.

### 💻 Etapa 2: Trabalhar no código

* Adicione, edite e faça commits normalmente:

```bash
git add .
git commit -m "Adiciona tela de login"
```

### 🔁 Etapa 3: Finalizar a funcionalidade (merge)

```bash
git checkout develop
git merge feature/login-usuario
git branch -d feature/login-usuario
```

---

## 🎉 Criando uma versão para lançamento (release)

### 🚧 Etapa 1: Criar branch de release

```bash
git checkout develop
git checkout -b release/v1.0
```

### 🛠 Etapa 2: Ajustes e testes finais

```bash
git add .
git commit -m "Ajustes finais para v1.0"
```

### 🚀 Etapa 3: Finalizar a release

```bash
git checkout main
git merge release/v1.0
git tag -a v1.0 -m "Versão 1.0 lançada"

git checkout develop
git merge release/v1.0

git branch -d release/v1.0
```

---

## 🧯 Corrigindo um bug urgente com hotfix

### ⚠️ Etapa 1: Criar a branch de hotfix

```bash
git checkout main
git checkout -b hotfix/bug-login
```

### 🔧 Etapa 2: Corrigir o erro

```bash
git add .
git commit -m "Corrige bug de login em produção"
```

### ✅ Etapa 3: Finalizar o hotfix

```bash
git checkout main
git merge hotfix/bug-login
git tag -a v1.0.1 -m "Correção de bug de login"

git checkout develop
git merge hotfix/bug-login

git branch -d hotfix/bug-login
```

---

## 📌 Resumo visual do fluxo

```
main -----------●------------●--------→ (v1.0, v1.1)
                 \          /
develop ----------●--------●---------→
                    \    / \
                    feature/  release/
                     login     v1.0

hotfixes ←─── corrigem a main e a develop simultaneamente
```

---

## 🧠 Dicas importantes

* Sempre **comece uma feature** a partir da branch `develop`
* Nunca edite diretamente `main` ou `develop`
* Sempre **teste** bem antes de fazer `merge` com `main`
* Use `pull` para manter seu código atualizado antes de começar algo novo

---

## ✅ Vantagens do Git Flow

* Organização clara das etapas de desenvolvimento
* Melhor controle de versões e lançamentos
* Isolamento de código para novas funcionalidades
* Correções rápidas sem afetar o desenvolvimento

---

## 🤔 Quando usar Git Flow?

✅ Projetos com múltiplos desenvolvedores
✅ Projetos com versões bem definidas (v1.0, v2.0 etc.)
❌ Não recomendado para projetos muito pequenos ou com entrega contínua rápida

---

## 🧪 Atividade sugerida para os alunos

1. Inicie um repositório com `main` e `develop`
2. Crie uma `feature/login-usuario`
3. Faça alterações e envie para `develop`
4. Crie uma `release/v1.0` e finalize
5. Crie um `hotfix/bug-senha` a partir da `main`

---

## 🙋 Dúvidas Comuns

| Pergunta                                  | Resposta                                       |
| ----------------------------------------- | ---------------------------------------------- |
| Posso editar direto na `main`?            | ❌ Não, use branches específicas                |
| Posso ter várias features ao mesmo tempo? | ✅ Sim, desde que cada uma tenha sua branch     |
| Quando deletar uma branch?                | Após o merge (para manter o repositório limpo) |

---

## 📚 Referência

* Criador do Git Flow: [nvie.com](https://nvie.com/posts/a-successful-git-branching-model/)
* Ferramenta Git Flow: `git flow init`

---



