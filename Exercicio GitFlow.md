# 🧪 Exercício GitFlow Completo para Duplas com Commits Semânticos

---

## 🎯 Objetivo

* Praticar GitFlow completo: `main`, `develop`, `feature/*`, `release/*`, `hotfix/*`
* Colaboração via pull requests no GitHub
* Resolver bugs e conflitos na release e hotfix
* Usar commits semânticos para histórico claro e organizado
* Criar funções simples em JavaScript (`somar`, `multiplicar`)

---

## ⚙️ Configuração inicial (Aluno A)

1. Crie um repositório no GitHub chamado `gitflow-exercicio-completo`.
2. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gitflow-exercicio-completo.git
cd gitflow-exercicio-completo
```

3. Crie e envie a branch `develop` (branch principal de desenvolvimento):

```bash
git checkout -b develop main
git push origin develop
```

4. Crie arquivo `index.js` com comentário inicial:

```bash
echo "// Projeto GitFlow completo" > index.js
git add index.js
git commit -m "chore: inicializa projeto com arquivo index.js"
git push origin develop
```

5. Adicione o colega como colaborador no GitHub.

---

## 🔄 Fluxo de trabalho

---

### 1. Criar features a partir de `develop`

---

**Aluno A - feature/somar**

```bash
git checkout develop
git pull origin develop
git checkout -b feature/somar
```

No `index.js` adiciona:

```js
function somar(a, b) {
  return a - b;
}
console.log('Soma:', somar(2, 3));
```

Commits semânticos:

```bash
git add index.js
git commit -m "feat(somar): adiciona função para somar dois números"
git push origin feature/somar
```

Abre PR de `feature/somar` para `develop`.

---

**Aluno B - feature/multiplicar**

```bash
git checkout develop
git pull origin develop
git checkout -b feature/multiplicar
```

No `index.js` adiciona:

```js
function multiplicar(a, b) {
  return a * 2;
}
console.log('Multiplicação:', multiplicar(4, 5));
```

Commits semânticos:

```bash
git add index.js
git commit -m "feat(multiplicar): cria função para multiplicar dois números"
git push origin feature/multiplicar
```

Abre PR de `feature/multiplicar` para `develop`.

---

### 2. Revisão e merge das features na `develop`

* Cada aluno revisa o PR do colega.
* Após aprovação, faz merge no GitHub.
* No terminal, ambos atualizam `develop`:

```bash
git checkout develop
git pull origin develop
```

---

### 3. Criar branch de release a partir de `develop`

**Aluno A:**

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0
git push origin release/v1.0
```

---

### 4. Simular e corrigir bugs na `release/v1.0`

**Exemplo de bug:** alterar função multiplicar para causar erro proposital:

```js
function multiplicar(a, b) {
  return a + b; // bug para corrigir
}
```

**Aluno B corrige bug na release:**

```bash
git checkout release/v1.0
# Corrige a função multiplicar no index.js
```

```js
function multiplicar(a, b) {
  return a * b;
}
```

Commit semântico de correção:

```bash
git add index.js
git commit -m "fix(multiplicar): corrige lógica da função multiplicar na release"
git push origin release/v1.0
```

---

### 5. Finalizar release

* Abre PR de `release/v1.0` para `main`
* Após aprovação, faz merge para `main`
* Também deve fazer merge de `release/v1.0` de volta para `develop` (localmente e no GitHub):

```bash
git checkout develop
git pull origin develop
git merge release/v1.0
git push origin develop
```

---

### 6. Criar branch hotfix a partir de `main`

**Simular erro crítico em produção (`main`)**

```bash
git checkout main
git pull origin main
git checkout -b hotfix/corrigir-somar
```

Corrige função `somar`:

```js
function somar(a, b) {
  return Number(a) + Number(b); // garantir que converta para número
}
```

Commit semântico:

```bash
git add index.js
git commit -m "fix(somar): corrige conversão para número na função somar"
git push origin hotfix/corrigir-somar
```

Abre PR para `main` e também para `develop`.

---

### 7. Finalizar hotfix

* Após aprovação, merge em `main`
* Também merge em `develop`:

```bash
git checkout develop
git pull origin develop
git merge hotfix/corrigir-somar
git push origin develop
```

