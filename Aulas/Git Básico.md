perfeito 👍
aqui está o **MD atualizado**, com exatamente o que você pediu:

* ❌ **removida a seção de Resolução de Conflitos**
* ❌ **removida a seção de Tags**
* 🔧 **ajustada a descrição do `git fetch`** para ficar tecnicamente correta
* 📐 numeração reordenada

Pode substituir o arquivo inteiro por este ⬇️

---

````md
# Git & GitHub — Fluxo Básico e Comandos Essenciais

Este documento descreve o fluxo básico de trabalho com **Git** e **GitHub**, explicando **o que cada comando faz exatamente** e quando usar.

---

## 1. Conceitos Básicos

- **Git**: sistema de controle de versão que registra o histórico de alterações dos arquivos.
- **GitHub**: serviço online que hospeda repositórios Git e facilita colaboração.
- **Repositório**: pasta do projeto controlada pelo Git.
- **Commit**: registro permanente de um conjunto de alterações.
- **Branch**: linha de desenvolvimento independente.
- **Remote**: repositório remoto (ex: GitHub).

---

## 2. Configuração Inicial (uma vez por máquina)

Define quem está fazendo os commits.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
````

Define o nome padrão da branch principal:

```bash
git config --global init.defaultBranch main
```

Mostra todas as configurações ativas:

```bash
git config --list
```

---

## 3. Criando um Repositório

### Criar um repositório Git em uma pasta existente

Inicializa o controle de versão na pasta atual.

```bash
git init
```

### Clonar um repositório do GitHub

Cria uma cópia local completa do repositório remoto.

```bash
git clone https://github.com/usuario/repositorio.git
```

---

## 4. Estados dos Arquivos no Git

* **Untracked**: arquivo novo, ainda não versionado
* **Modified**: arquivo alterado
* **Staged**: arquivo preparado para commit
* **Committed**: alteração registrada no histórico

---

## 5. Fluxo Básico de Trabalho (Dia a Dia)

### Ver o estado atual do repositório

Mostra arquivos modificados, preparados e não rastreados.

```bash
git status
```

### Adicionar arquivos ao stage

Adiciona um arquivo específico ao próximo commit:

```bash
git add arquivo.txt
```

Adiciona todas as alterações:

```bash
git add .
```

### Criar um commit

Salva permanentemente as alterações que estão no stage.

```bash
git commit -m "descrição clara do que foi feito"
```

### Enviar commits para o GitHub

Publica os commits locais no repositório remoto.

```bash
git push origin main
```

---

## 6. Trabalhando com Branches

### Listar branches existentes

```bash
git branch
```

### Criar uma nova branch

Cria uma nova linha de desenvolvimento.

```bash
git branch minha-branch
```

### Trocar para outra branch

Muda o diretório de trabalho para a branch escolhida.

```bash
git checkout minha-branch
```

### Criar e trocar de branch ao mesmo tempo

Atalho para criação + troca.

```bash
git checkout -b minha-branch
```

### Enviar branch para o GitHub

Publica a branch no remoto (necessário para Pull Request).

```bash
git push origin minha-branch
```

### Remover branch local

Usado após o merge da branch.

```bash
git branch -d minha-branch
```

---

## 7. Atualizando Código do Repositório Remoto

### Buscar alterações do remoto

Baixa as atualizações do repositório remoto e **atualiza as referências remotas (`origin/*`)**,
sem modificar a branch atual nem os arquivos locais.

```bash
git fetch
```

### Atualizar branch local com remoto

Baixa as alterações do remoto **e aplica automaticamente** na branch atual.

```bash
git pull origin main
```

---

## 8. Merge de Branches

### Unir uma branch em outra

1. Vá para a branch de destino:

```bash
git checkout main
```

2. Aplique as alterações da outra branch:

```bash
git merge minha-branch
```

---

## 9. Histórico de Commits

### Histórico resumido (uma linha por commit)

```bash
git log --oneline
```

### Histórico completo

```bash
git log
```

### Ver quem alterou cada linha de um arquivo

```bash
git blame arquivo.txt
```

---

## 10. Desfazendo Alterações

### Descartar mudanças não commitadas em um arquivo

Restaura o arquivo para o último commit.

```bash
git checkout -- arquivo.txt
```

### Remover arquivo do stage (sem perder alterações)

Remove o arquivo da área de stage.

```bash
git reset arquivo.txt
```

### Reverter um commit com segurança

Cria um novo commit que desfaz outro commit específico.

```bash
git revert HASH_DO_COMMIT
```

### Voltar o repositório para um commit específico (perigoso)

Remove commits posteriores do histórico local.

```bash
git reset --hard HASH_DO_COMMIT
```

---

## 11. Repositórios Remotos (Remote)

### Listar remotes configurados

```bash
git remote -v
```

### Adicionar repositório remoto

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

### Alterar URL do remote

```bash
git remote set-url origin NOVA_URL
```

---

## 12. Arquivo .gitignore

Define arquivos e pastas que o Git deve ignorar.

Exemplo:

```gitignore
node_modules/
.env
dist/
*.log
```

---

## 13. Comandos Úteis Extras

```bash
git stash        # guarda alterações sem commit
git stash pop    # restaura alterações guardadas
git clean -fd    # remove arquivos não rastreados
git show HASH    # mostra detalhes de um commit
git reflog       # histórico completo de ações do Git
git shortlog -sn # lista autores por número de commits
```

---

## 14. Fluxo Clássico de Feature

```bash
git pull
git checkout -b feature-nova
# desenvolver
git add .
git commit -m "feat: adiciona feature nova"
git push origin feature-nova
```

Depois: abrir **Pull Request** no GitHub.

---

## 15. Boas Práticas

* Commits pequenos e frequentes
* Mensagens claras e descritivas
* Uma feature por branch
* Atualizar (`git pull`) antes de começar a trabalhar
