# 📝 Licenças de Software: O que são e para que servem?

## ✅ O que é uma licença de software?

Uma **licença de software** é um conjunto de regras e permissões que determina **como um software pode ser usado, modificado e distribuído**. Ao criar um projeto público no GitHub, é importante incluir uma licença para:

- Proteger os direitos do autor.
- Deixar claro o que os outros podem ou não fazer com seu código.
- Evitar problemas legais.

---

## 🧾 Tipos principais de licenças

As licenças de software são divididas em dois grandes grupos:

| Tipo                     | Permissão para uso comercial | Exige código aberto? | Permite modificações? |
|--------------------------|------------------------------|-----------------------|------------------------|
| **Permissiva**           | ✅                            | ❌                    | ✅                     |
| **Copyleft (livre)**     | ✅                            | ✅                    | ✅                     |
| **Restritiva / Proprietária** | ❌                      | ❌                    | ❌                     |

---

## 🔓 Licenças Permissivas

### 1. **MIT License**
- ✅ Permite uso, cópia, modificação e distribuição.
- ✅ Pode ser usada em projetos comerciais.
- ❌ Não exige que o projeto derivado seja open source.
- 📌 Requer apenas que mantenha os créditos ao autor original.

> Exemplo de uso: Muito comum em projetos no GitHub e startups.

---

### 2. **Apache 2.0**
- Mesmas permissões da MIT, com uma proteção extra contra patentes.
- 🔒 Inclui cláusulas sobre patentes (protege o autor de ser processado por alguém que usa sua ideia).

> Exemplo: Projetos da Google geralmente usam Apache 2.0.

---

## 🛡️ Licenças Copyleft (livres)

### 3. **GPL (General Public License)**
- ✅ Qualquer pessoa pode usar, modificar e distribuir.
- ⚠️ **Obrigatório liberar o código-fonte** de qualquer software que use GPL.
- 🧬 Software derivado **também deve usar GPL** (efeito "vírus").

> Exemplo: Linux usa GPL. Se você modificar o Linux, deve também liberar seu código.

---

### 4. **AGPL (Affero GPL)**
- Variante da GPL para sistemas web.
- Exige que o código seja compartilhado mesmo que você só use o software via navegador.

> Exemplo: Se você usar uma API GPL na sua aplicação web, precisa liberar o código também.

---

## 🚫 Licenças Restritivas / Proprietárias

- Não permitem redistribuição, nem modificações.
- Uso limitado ao que o contrato permite.
- Código fechado (ex: Microsoft Windows, Adobe Photoshop).

---

## ⚠️ Qual escolher para meu projeto no GitHub?

| Objetivo                          | Licença indicada       |
|----------------------------------|------------------------|
| Quero permitir tudo, sem exigir código aberto | MIT ou Apache 2.0        |
| Quero que o projeto derivado continue open source | GPL ou AGPL              |
| Quero proteção contra patentes  | Apache 2.0             |
| Não quero que modifiquem nem usem sem minha permissão | Licença proprietária (ou sem licença, por padrão é todos os direitos reservados) |

---

## 📂 Como adicionar uma licença no GitHub

1. Crie um arquivo chamado `LICENSE` na raiz do seu projeto.
2. Cole o conteúdo da licença desejada (GitHub oferece modelos prontos).
3. Ou escolha ao criar o repositório (GitHub dá opção de incluir uma licença automaticamente).

📌 Site para ajudar na escolha: [https://choosealicense.com/](https://choosealicense.com/)

---

## ✅ Conclusão

- Sempre use uma licença em projetos públicos.
- A licença protege você e informa claramente aos outros o que podem fazer com seu código.
- Escolha conforme os objetivos do seu projeto (comercial, livre, colaborativo, fechado, etc).
