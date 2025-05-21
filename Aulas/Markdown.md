# 📘 Guia Prático de Markdown

O **Markdown** é uma linguagem de marcação simples usada para formatar textos. É muito utilizado em arquivos `README.md` no GitHub, documentação de projetos, blogs, e mais.

---

## ✅ Títulos e Subtítulos

Usamos `#` para criar títulos. Quanto mais `#`, menor o tamanho do título.

```markdown
# Título 1 (h1)
## Título 2 (h2)
### Título 3 (h3)
#### Título 4 (h4)
````

---

## ✅ Ênfase de texto

Use `*` ou `_` para itálico, e `**` ou `__` para negrito.

```markdown
*itálico* ou _itálico_
**negrito** ou __negrito__
```

🔹 Resultado:
*itálico* | **negrito**

---

## ✅ Listas

### 🔹 Lista com pontos

```markdown
- Item 1
- Item 2
  - Subitem
* Outro item
```

### 🔸 Lista numerada

```markdown
1. Primeiro
2. Segundo
3. Terceiro
```

---

## ✅ Links e Imagens

### 🔗 Link

```markdown
[Texto do link](https://exemplo.com)
```

🔹 Resultado:
[Visite o site](https://exemplo.com)

### 🖼️ Imagem

```markdown
![Texto alternativo](https://via.placeholder.com/150)
```

🔹 Resultado:
![Exemplo](https://via.placeholder.com/150)

---

## ✅ Código

### 🔸 Código inline

Use crase simples (\`) para destacar trechos de código dentro de frases.

```markdown
O comando `git status` mostra o estado do repositório.
```

🔹 Resultado:
O comando `git status` mostra o estado do repositório.

### 🔹 Bloco de código

Use 3 crases (\`\`\`) antes e depois do bloco. Você pode indicar a linguagem:

<pre>
```javascript
function ola() {
  console.log("Olá, mundo!");
}
```
</pre>

---

## ✅ Citações

Use `>` para criar blocos de citação.

```markdown
> Este é um bloco de citação.
```

🔹 Resultado:

> Este é um bloco de citação.

---

## ✅ Tabelas

```markdown
| Nome     | Idade | Cidade      |
|----------|-------|-------------|
| Ana      | 22    | São Paulo   |
| João     | 30    | Curitiba    |
```

🔹 Resultado:

| Nome | Idade | Cidade    |
| ---- | ----- | --------- |
| Ana  | 22    | São Paulo |
| João | 30    | Curitiba  |

---

## ✅ Separadores

Use três ou mais `-` ou `*` para criar uma linha horizontal.

```markdown
---
***
```

🔹 Resultado:

---

---

## ✅ Checklists (caixas de tarefas)

```markdown
- [x] Tarefa concluída
- [ ] Tarefa pendente
```

🔹 Resultado:

* [x] Tarefa concluída
* [ ] Tarefa pendente

---

## ✅ Emojis

Use `:nome-do-emoji:` (no GitHub) ou copie e cole o emoji direto.

```markdown
:sparkles: :tada: :rocket:
```

🔹 Resultado:
\:sparkles: \:tada: \:rocket:

[Lista de emojis do GitHub](https://gist.github.com/rxaviers/7360908)

---

## ✅ Dicas

* Use visualizadores Markdown (como no VS Code ou no GitHub) para ver como está ficando.
* Arquivos `.md` são ideais para documentações, anotações, tutoriais, wikis e README.
* Menos é mais: mantenha a clareza no conteúdo.
