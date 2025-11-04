/*
GIT
----------------------------------------------- */

/*

#Git
Sistema de controle de versões. 
Facilita o trabalho em equipe e o controle de mudanças entre arquivos e diretórios.

#Github
Plataforma online de hospedagem para repositórios Git. Existem outras
como GitLab e Bitbucket. */

/*

Git Setup
-------------------

# Instalar o Git
https://git-scm.com/

# Configurar Nome
$ git config --global user.name "Seu Nome"

# Configurar Email
$ git config --global user.email "email@gmail.com"

*/

/*
Git Comandos
(na pasta do projeto)
---------------------------------

A) Projeto de MINHA AUTORIA
---------------------------------
---------------------------------

#$ git init
Inicia um repositório

# $ git add style.css
Adiciona o arquivo style.css ao index do git. 

# $ git add -A 
Adiciona todas as mudanças realizadas no repositório == adição e remoção de arquivos, etc
Essas mudanças serão armazenadas em um index temporário, através de uma snapshot, até que seja feito o Commit.

# $ git add .
Apenas adicionamos arquivos

# $ git status
Mostra os arquivos que tiveram mudanças.

# $ git commit -m 'Descrição'
Irá fazer fazer o commit do código adicionado com uma mensagem.
Essa descrição suporta 50 caracteres

**O commit armazena todas as mudanção do projeto atual em uma pasta definitiva.
Outras alterações feitas depois do commit serão armazenadas em um 2॰ commit (diferente do atual) 

# git commit -a
Função de (git add + git commit) para modificações no(s) mesmo(s) arquivo(s) do master


Criar Repositório no Github
---------------------------------

Github: https://github.com/

Novo Repositório
https://github.com/new

# Adicionar diretório remoto
$ git remote add origin https://github.com/seuusuario/seurepositorio.git

# Push do primeiro commit
$ git push -u origin master

** Se for a sua primeira vez

*/

/*
Branching
---------------------------------

Branch
Uma das principais vantagens do git é a possibilidade de criarmos 'ramificações'. 
Assim podemos trabalhar em funcionalidades adicionais para um projeto, sem modificarmos o 'ramificação princpal', o master.

# $ git branch 'nomebranch'
Toda vez que formos adicionar uma nova funcionalidade, devemos iniciar
criando um novo branch ao invés de fazermos alterações direto no master. 
O que for modificado no branch não afetara o master.

---------------------------------
IMPORTANTE:
a) Toda vez que inicio um novo repositório local (git init), devo fazer um git add e um git commit para depois criar uma nova branch
ou devo dar um: $ git switch/checkout --orphan master para criar e mudar p uma master referência vazia em arquivos.

b) Qd estou fazendo um clone, não há necessidade

---------------------------------

# $ git branch -m 'nomebranch'
Altera o nome da branch

# $ git switch/checkout  'nomebranch'
Irá mudar de branch. 

# $ git switch/checkout -c 'nomebranch'
Assim, ele cria e muda de branch ao mesmo tempo.

# $ git branch
Mostra em qual branch estamos trabalhando

# git branch -D 'nomebranch' 
Deleta a branch (Fazer apos o merge com o Master)

*/

/*
Workflow
---------------------------------

# Sempre crie um branch: Toda funcionalidade nova, crie um branch para desenvolver a mesma.
$ git switch -b 'nomebranch'

IMPORTANTE:
---------------------------------
# Após o desenvolvimento e commit, vá até o 'master' e veja se existem mudanças no repositório remoto/principal
$ git switch master 
** $ git pull
Busca as informações no repositório remoto/principal e 'baixa' para o meu master + faz um 'merge' entre remoto+master

#Podemos apenas baixar os arquivos do repositório remoto/principal, utilizando o fetch, antes de fazer o pull( baixa+merge):
git fetch /home/bob/myrepo master


#1) Para checar o que HÁ DE DIFERENTE entre os arquivos do repositorio e local, podemos utilizar: 
git log -p HEAD..FETCH_HEAD,
gitk HEAD..FETCH_HEAD ou
GitLens

HEAD= master local
FETCH_HEAD = master remoto/principal

#2) USANDO '...,' podemos observar na íntegra os arquivos (todas as mudanças)
git log -p HEAD...FETCH_HEAD,
gitk HEAD..FETCH_HEAD ou
GitLens


# Volte para o branch e dê um merge com o master
$ git switch 'nomebranch' e depois 
$ git merge master


B) Qd eu estou trabalhando em um projeto JÁ EXISTENTE:
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

# git clone:
a) https://github.com/... == para repositórios na nuvem Github
b) /'caminho no pc' nome-do-diretorio-novo == para repositório local


# Conflitos
Se existirem conflitos você será avisado e deverá lidar com os mesmos
##$ git diff mostra as diferenças existentes nos arquivos após o merge! (visual tb com o GitLens) 
## $ gitk --> opção de uma interface visual sobre as modificação no projeto git (através do CLI)
## GitLens


# Git Push
Após lidar com os conflitos faça o push do branch: 
$ git push e 
$ git push --set-upstream origin nova-branch .

*/

/*
Lidando com Pull Request

#No Github
Agora você possui um novo branch no github e pode fazer o pull request
(juntar ao master).

#Compare e Pull Request
Pode adicionar comentários. Create Pull Request.

#Merge Pull Request
Geralmente é o lider do projeto / responsável por fazer o review do seu
código. Pode deletar o branch após o merge com o master.

*/

/*
Mais Git
# .gitignore
Lista de arquivos/diretórios que não devem ser manipulados pelo git. 
node_modules é um bom exemplo.

# Commit sem texto
Ao usar o $ git commit você entra no modo completo de comentário,
com um editor de texto direto na linha de comando. Utilize esc + :wq para
sair do mesmo.

# Bitbucket
Permite repositórios privados e gratuitos. https://bitbucket.org/product

*/

/*
Github Pages

Criar repositório
O nome deve ser seuusuario.github.io

HTML Simples
O site só funcionará em html/css/js simples, sem linguagem de servidor

Qualquer projeto
Qualquer projeto poderá ter uma página para o mesmo. Vá em Settings > GitHub Pages > selecione master branch e salve. 
E acesso seuusurio.github.io/repositorio/

*/
