# Guia Básico do GitHub Pages

## O que é o GitHub Pages?

O **GitHub Pages** é um serviço gratuito oferecido pelo GitHub que permite você hospedar sites estáticos diretamente de um repositório GitHub.  
Com ele, você pode publicar páginas pessoais, portfólios, blogs, projetos, documentação e muito mais, sem precisar contratar um servidor.

**Site estático** significa páginas feitas com HTML, CSS e JavaScript simples — sem backend dinâmico (servidor, banco de dados, etc).

---

## Por que usar o GitHub Pages?

- É gratuito para qualquer repositório público.
- Fácil de configurar e manter.
- Integração perfeita com repositórios GitHub.
- Ideal para projetos simples e sites pessoais.
- Permite usar seu próprio domínio personalizado.

---

## Como funciona?

Você cria um repositório no GitHub, adiciona os arquivos do seu site (HTML, CSS, imagens, etc), configura o GitHub Pages para usar uma branch ou pasta específica, e seu site fica disponível na internet em poucos minutos.

---

## Passo a passo para usar o GitHub Pages

### 1. Criar um repositório no GitHub

- Entre no GitHub (https://github.com)
- Clique em **New** para criar um novo repositório
- Escolha um nome (exemplo: `meu-site`)
- Pode ser público ou privado (para privado, o GitHub Pages pode precisar de configuração especial)
- Clique em **Create repository**

### 2. Adicionar seus arquivos do site

- Crie um arquivo `index.html` com o conteúdo básico do seu site (veja exemplo abaixo)
- Faça o commit desses arquivos na branch `main` (ou outra que você usar)

Exemplo simples de `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <title>Meu Site no GitHub Pages</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Meu site está no GitHub Pages.</p>
</body>
</html>
````

### 3. Ativar o GitHub Pages

* Dentro do repositório, vá na aba **Settings** (Configurações)
* No menu lateral, clique em **Pages**
* Em **Source** (Fonte), selecione a branch que contém seu site (ex: `main`)
* Escolha a pasta (root, ou `/docs`, dependendo onde estão seus arquivos)
* Clique em **Save**

### 4. Acessar seu site

* O GitHub vai mostrar o link para o seu site, algo como:
  `https://seu-usuario.github.io/nome-do-repositorio/`
* Depois de alguns segundos, seu site estará no ar nesse endereço!

---

## Dicas e cuidados

* O GitHub Pages serve para sites estáticos — não é recomendado para backend (PHP, Node.js, etc).
* Sempre que fizer mudanças e enviar um commit na branch configurada, o site é atualizado automaticamente.
* Você pode usar um domínio personalizado (ex: [www.seusite.com.br](http://www.seusite.com.br)) configurando o DNS do seu domínio e adicionando um arquivo `CNAME` no seu repositório.

---

## Resumo

| Etapa                   | Descrição                              |
| ----------------------- | -------------------------------------- |
| Criar repositório       | Crie seu projeto no GitHub             |
| Adicionar arquivos      | Coloque seus arquivos HTML/CSS/JS      |
| Configurar GitHub Pages | Escolha a branch e pasta para publicar |
| Acessar site            | Abra o link disponibilizado            |
