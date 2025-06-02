/*
Aula 1 e 2 
-------------------------------------------------------------------------------------------------------------------------------------------


Tipos de tecnologias de controle de versionamento:
----------------------------------------------------------------------
Git
CVS
SVN
Mercurial
Monotone
Bazaar
TFS
VSTS

Plataformas de hospadagem de repositórios mais populares:
-------------------------------------------------------------
GitHub
BitBucket
SourceForge
TaraVault
Dogs
GitBucket


Aula 3
--------------------------------------------------------------------------------------------------------------------------------------
Pastas do Git
------------------------
Objects
--------------------

Tipos de objetos armazenados pelo Git --> Blobs, Commits,  Trees e Annotated tags:

Blob --> qquer tipo de arquivo que é armazenado fica guardado como um Blob.
Trees --> diretórios/pastas
Commits --> Apontamentos para diferentes versões dos arquivos
Annotated tags --> tags (pontos específicos) dentro do projeto


Hash = valor gerado para cada arquivo salvo pelo git. 
É calculado através sa soma de alguns elementos (ver figura na pasta)



Ambientes Git (Fluxo de trabalho):
--------------------------------------------------------

a) Working Directory --> main workspace --> Área de trabalho principal
b) Staging Area --> Área de Preparação / Transição
c) Git Repository --> Área de Armazenamento



Aula 4
--------------------------------------------------------------------------------------------------------------------------------------
Operações básicas
------------------------

Ciclos de vida de um arquivo no git (Estados de um arquivo) :
-------------------------------------------------------------------------------------

A) Untracked (não-monitorado) --> arquivos que recém foram add ou removidos;

B) Unmodified (não- monitorado) --> arquivo que já estava no repositório e foi atualizado

C) Modified (modificado)

D) Staged (preparado) -- > arquivo que foi preparado (monitorado) e está pronto p ser commitado; após isso ele pode ser enviado ao repositório


Comandos básicos:
---------------------------------------
---------------------------------------

a) git status
b) git add  | .  |  -A# 
c) git rm --cache  <nome-do-arquivo>
d) git commit -m  ' '
(m == mensagem)
e) git log --> mostra um histórico das informações dos últimos commits da branch atual

f) git checkout 
f.1) <nome da branch> --> troca entre banchs
f.2) <hash do commit> --> permite transitar entre os commits feitos, trazendo a working area para aquele momento do commit específico

g) git cat-file -p <hash do commit>


Aula 5
--------------------------------------------------------------------------------------------------------------------------------------
Branches e Head
------------------------


Figura 01 (observar):
------------------------------------------------------------------------------------
1) os commits Filhos sempre apontam p o Pai (através do valor hash do Pai armazenado - Cada commit em o seu hash + has do Pai)
2) A branch Main sempre aponta para o último commit 
3) Até darmos um novo commit na nova branch, HEAD continua apontando para a working directory atual

------------------------------------------------------------------------------------

Branch --> são ponteiros textuais

Ponteiros (Branches):
---------------------------------------
---------------------------------------

HEAD --> Sempre aponta para o Working Directory (main workspace)
MAIN --> Sempre apotam para o último commit do versionamento principal(main)
Demais ponteiros Branch => apontam para a sua linha do tempo(versionamentos secundários, terceários...)



Comandos:
---------------------------------------

a) git branch <nome da brach> --> crio a nova branch e nomeio
b) git branch -m '<renomear brach>' --> renomear branch
c) git checkout <nome da branch> --> muda par a branch
d) git checkout -b <nome da branch> cria uma nova branch e mudo para ela
e) git branch -d <nome da brach> --> deleta a branch



HEAD

arquivos em => /.git/refs/heads/main + outras braches 
--> referência dos últimos commits de cada branch

arquivo 'Head' em => /.git --> onde a 'Head' está apontando no momento atual



Aula 6
--------------------------------------------------------------------------------------------------------------------------------------
Merging
------------------------


Comandos:
---------------------------------------
** Estar na BRANCH DE DESTINO (geralmente Main)

a) git merge <nome da brach de ORIGEM> --> mesclar as alterações feitas na branch de origem com a branch de destino**


TIPOS
---------------

1) Fast-foward:
Só funciona se a branch 'main' não estiver desemparelhada* com as outras brenchs
* a partir do último commit da 'main' é que eu tenho outras branchs - não tenho novos commit em 'main' a partir  da últtimas branches


2) 3-way-merge(ort strategy):

Nessa abordagem, o Git cria um novo commit que aponta aponta, tanto para o último commit de 'main', como para o último commit de outra branch
OBS: 
1. Observar o número dos Hash descritos no commit na mensagem merge --> são os 2 últimos hash's de main e outra branch

** 2. Conflitos de merge somente acontecem em merges do tipo 3-way!

Conflito de merge
---------------------------------------
utilizar o VSCode p resolver --> visualmente + fácil



*/
