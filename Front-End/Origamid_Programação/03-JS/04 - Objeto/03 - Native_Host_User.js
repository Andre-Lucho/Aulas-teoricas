/*
1)

A) Objetos Nativos
-------------------

São aqueles definidos na esopecificação da linguagem e implementados independente do Host

Construtores de objetos Nativos:
Object, String, Array, Function...

B) Objetos do Host
-------------------

São aqueles implementados pelo próprio ambiente.
Browser --> Objetos do DOM = DomList, Element, Node, HTMLCollection, NodeList...
Node.js --> Outros Objetos diferentes do Browser 

Obs:
Browser ou outros ambientes diferentes e versões diferentes desses mesmos ambientes podem ter Objetos diferentes entre si

B.1)

App = Babel --> tranpila codigos entre diferentes versões

Engine --> interpreta e implementa o ECMAScript(ES) --> vira JavaScript
V8 = Chrome e Node, SpiderMonkey = Firefox, JavaScriptCore = Safari ...


C) Objetos do User
-------------------

Aqueles criados ou importados pelo usuário

OBS.:
Todos os tipos de Objetos são implementados da mesma forma!


D) Verificar se Existe

O typeof retorna o tipo de dado. Caso esse dado não exista ou não
tenha sido denido, ele irá retornar undened. Ou seja, quando não
for undened quer dizer que existe */

if (typeof Array.from !== "undefined") if (typeof NodeList !== "undefined");

/* 

E) API
------ 
------

Application Programming Interface, é uma interface de software criada para a interação com outros softwares.
Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser. */

// Exercícios

// Liste 5 objetos nativos
// Function, String, Array, Number, Object, Boolean, Math, parseFloat, Date
// Symbol, Error, TypeError, JSON, console, Promise

// Liste 5 objetos do browser

// window, confirm, alert, prompt
// document, Document, NodeList, HTMLCollection, Node, EventTarget

// Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
