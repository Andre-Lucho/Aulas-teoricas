/*
AUTOMAÇÃO FRONT-END
-----------------------------------------------


LINHA DE COMANDO
-----------------------------------------------*/

/*

Linha de Comando (CLI)
-----------------------------------------------

Interagir com o Computador através de texto

# Comando começando com $ (Unix) ou > (Win)

# UNIX (Mac e Linux) vs Windows
Bash e Zsh (Unix) | CMD e PowerShell (Windows)

# https://ss64.com */

/*
Movimentar (Bash)
-----------------------------------------------

# $ cd sites
Move para a pasta sites

# $ cd ..
Move para a pasta anterior

# $ cd ~/Desktop/sites
Move para a pasta sites dentro de Desktop

# $ cd ~
Move para o diretório principal do sistema / home

# $ clear
Limpa a tela
*/

/*
Listar e Criar (Bash)
-----------------------------------------------

# $ ls
Lista diretórios e arquivos

# $ ls -all
Lista diretórios, arquivos, invisíveis e detalhes

# $ mkdir site
Cria o diretório site

# $ touch index.html
Cria o arquivo index.html*/

/*
Remover (Bash)
-----------------------------------------------

# $ rm index.html
Remove o arquivo index.html

# $ rm -r site
Remove o diretório site e todos os arquivos dentro dele

# seta para cima / baixo
Acessa o comando anterior

# tab
Auto-completa o comando */

/*

NPM (Node Package Manager)
-----------------------------------------------*/

/*
#Gerenciador de Pacotes
  Feito para Node.js --> 
  é uma pacote do Node.js que gerencia todas as dependências(outros pacotes) que podem ou estão instalados dentro no PC local, como no projeto atual

#Linha de comando
  $ npm install lodash == instalando o pacote 'lodash'

# https://www.npmjs.com/  */

/*
# Instalar Pacotes
  $ npm install lodash
Instala o pacote lodash no diretório atual da linha de comando

  $ npm install eslint -g
Instala o eslint globalmente --> como está instalado na máquina e não apenas na pasta do projeto, pode ser utilizado em vários outros projetos
(No mac é necessário o sudo para instalar globalmente.)


# $ npm update lodash
Atualiza o pacote lodash

# $ npm uninstall lodash
Desinstala o pacote lodash */

/*
#Package.json
----------------------

package.json
Arquivo local com as configurações e dependências de pacotes NPM
** Aqui, podemos ver todos os pacotes que estão atrelados ao projeto atual

*** IMPORTANTE:
-----------------------

Com o comando 'npm install', mesmo que eu esteja em outra máquina (ou trabalhando em conjunto com outro dev), posso baixar e instalar todos os pacotes que estão sendo utilizados pelo projeto!!

# $ npm init
Inicia uma nova configuração local do npm.

** # $ npm install
Instala todas as dependências listadas no arquivo package.json */

/*
Arquivos Invisíveis

# Windows
Exibir > Itens Ocultos

# Mac
$ defaults write com.apple.Finder AppleShowAllFiles true
$ killall Finder */

// Crtl + 'c' x2 == sair nodeName, npm

/*

ESLint
-----------------------------------------------*/

/*

#Evitar problemas
Indica a existência de possíveis padrões problemáticos no código

#Definir padrões
Padronizar e manter consistência entre diferentes códigos JavaScript
https://eslint.org */

/*
#Instalar ESLinst
$ npm install eslint -g
Instalar o eslint globalmente.

# $ npm init
Iniciar repositório NPM no local.
# $ eslint --init
Use Popular > Airbnb > (N) Enter > JSON > (Y) Enter

#Instalar extensão ESLint do VS Code  */

/* 
Importante:
----------------
Instalar formatação Airbnb:

# npx install-peerdeps --dev eslint-config-airbnb

/*

WEBPACK
-----------------------------------------------*/

/*
#Bundler
Agrupa / processa diversos arquivos e otimiza os mesmos.
Substitui o type="module" para Browsers antigos

A compilação é chamada: 
Uglified: Junta todos as varáveis, e funções um 1 linha apenas, diminuindo o tamanho do arquivo
OBS: aqui, podemos ter uma flag do ESLint, pois todo o arquivo tem saída totalmente desconfigurada para os padrões dele. 

Altamente configurável
Por isso é complexo.

https://webpack.js.org/ */

/*
Webpack
# $ npm install --save-dev webpack webpack-cli
(Instala o webpack e a cli do mesmo)
CLI = Command line interface (interface de linha de comando)

# Importante
-----------------------------------------------
--save-dev == é aplicado nas  -dependências de desenvolvimento- do projeto apenas
s/ == aplicado p rodar o projeto == como um pacote externo p funcionamento do site/projeto

** Obs.: 
Ter package.json antes.
-----------------------------------------------


# $ npx webpack "./arquivo de entrada*" -o "./novo arquivo de saída**"
*no projeto site = ./script.js
** ./main.js

Irá agrupar todo o código, otimizar e mais. 
Utilizar npx é a mesma coisa que utilizar node_modules/.bin/webpack . 
Facilita para utilizarmos cli's instaladas localmente ao invés de globalmente. 


#Comando: 
$ npx webpack ./script.js -o ./main.js --watch --> 
Ele fica "observado" qquer alteração no código e compila automaticamente NOVO arquivo ./main.js através de um NOVO comando 'npx webpack....'
*/

/*

# NPM Scripts

Permite definirmos uma linha de comando inteira, que será ativada com 'npm run nomeScript' . 
Não precisamos utilizar o npx aqui.

"scripts": {
  "dev": "webpack --mode development --watch ./script.js -o ./main.js",
  "build": "webpack --mode production ./script.js -o ./main.js"
},

// --mode define o modo da compilação
// --watch define se deve ficar observando 

OBS:
--------

"--mode development" --> permite VISUALIZAR onde exatamente ESTÁ OCORRENDO um possível ERRO no meu código (mostrado no console);
Já o "--mode production" não apresenta a indicação de onde podem estar occorendo possíveis erros */

/*

# Scripts Externos

Podemos facilmente importar scripts externos instalando os mesmos através do NPM e utilizando o Webpack para fazer o bundler final.

$ npm install jquery
$ npm install lodash

import $ from 'jquery';
import _ from 'lodash';

$('nav').hide();
_.difference(['Banana', 'Morango', 'Uva'], ['Banana', 'Morango', 'Pêra']);
// Uva */

/* 

BABEL
----------------------------------------------- 
(https://babeljs.io/)  */

/*
#Compilador

Transforma código novo em código antigo. 
Ex: const nome = 'Andre'; vira var nome = 'Andre';
OBS.: Os arquivos compilados ficam maiores e a renderização do site fica menos performática!! === AVALIAR!!

# Browser Suporte

Para que um browser possa suportar algo novo de JavaScript é preciso que ele esteja atualizado, mas nem todo usuário possui a última versão do browser instalada.

# Can I Use

O site https://caniuse.com/ mostra em quais browsers a novidade está disponível ou não.  
*/

/*

# Polyfill vs Transpiler

# Polyfill
Cria métodos / funções com o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem a API.

# Transpiler
Transforma código novo em código antigo. Ou seja, transforma const em var .

** BABEL --> Utiliza métodos Polyfill e Transpiler
*/

/*
Instalar Babel
https://babeljs.io/docs/en/usage

$ npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader
@babel/core --> instala o código núcleo do Babel
@babel/preset-env --> instala as configurações de ambiente para JS
@babel/plugin-transform-runtime --> instala plugins para lidar com Promises
babel-loader --> plugin conecta o Babel ao Webpack

Instala o Babel, a CLI, e configurações pré-definidas

$ npm install @babel/polyfill
Instala os polyfill's
(em dessuso)
*/

/*

# Criar arquivo de configuração Webpack/Babel ==>  webpack.config.js
** arquivo de configuração tipo Node.js

Precisamos configurar o webpack, para utilizarmos o @babel/polyfill.
----------------------------------------------- 

// importando o pacote 'path' para determinar o caminho do output
const path = require('path');

// importar o método de exportação --> através o objeto 'modules'
module.exports = {
  
// plugin + arquivo de entrada
  entry: './script.js',  
  
  // arquivo de saída
  output: { 
   
  path: path.resolve(__dirname, './'), 
    // path --> invocando a constante (const path = ...) que contem o método 'require', que por sua está iniciando um pacote tipo 'path' -- contêm métodos e propriedades
    // dirname: variável global que tem o nome do caminho do diretório
    
    filename: 'main.js'  // nome do arq de output
  },

  // indicando que utilizarei um módulo do Babel
  module: {
    rules: [
      {
      test: /\.js$/, //regular expression == todo arquivo teminado($) em '.js'
      exclude: /nome_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};

// posso retirar o caminho fornecido em package.json, na parte dos scripts, pois estou fornecendo esse caminho agora na consfiguração do Webpack c/ o Babel (abaixo):

"scripts": {
  "dev": "webpack --mode development --watch",
  "build": "webpack --mode production"
},

*/

/*
Fetch Polyfill

Nem todo browser suporta a Fetch API e por padrão o Babel não possui um poly ll para o Fetch. 
Podemos resolver isso instalando um polyfill externo.

$ npm install whatwg-fetch

const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './script.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js'
  }
};

*/
