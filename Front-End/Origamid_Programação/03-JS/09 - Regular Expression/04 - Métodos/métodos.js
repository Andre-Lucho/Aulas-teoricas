/*

Regexp Constructor
------------------------------------------------------

Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp . */

/* 
Importante:
-----------------
Usos do construtor: para qd pedirmos ao usuário digitar sua própria Regexp!! */

const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos '//' e devemos utilizar '\\' para meta characters, pois é necessário escapar a '\' especial.
// As Flags são o segundo argumento

const regexpObj1 = new RegExp("\\w+", "gi");
const regexpObj2 = new RegExp(/\w+/, "gi");
"JavaScript Linguagem 101".replace(regexpObj1, "X");
// X X X

// // Exemplo complexo:
// const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
// const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');

/*

Propriedades
------------------------------------------------------

Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma. */

const regexp1 = /\w+/gi;

// regexp2.flags; // 'gi'
// regexp2.global; // true
// regexp2.ignoreCase; // true
// regexp2.multiline; // false
// regexp2.source; // '\w+'

/*

regexp.test()
------------------------------------------------------

O método test() verifica se existe ou não uma ocorrência da busca. 
Se existir ele retorna true. 
A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true. 
Funciona em Loop!!
*/

const regexp2 = /Java/g;
const frase1 = "JavaScript e Java";

// regexp.lastIndex; // 0 --> último index = cada caractere = index == retona o último Index onde ele fez a leitura
// regexp.test(frase); // true
// regexp.lastIndex; // 4
// regexp.test(frase); // true
// regexp.lastIndex; // 17
// regexp.test(frase); // false --> terminou a string
// regexp.lastIndex; // 0
// regexp.test(frase); // true (Reinicia)
// regexp.lastIndex; // 4

/*

test() em loop
------------------------------------------------------

Podemos utilizar o While loop para mostrar enquanto a condição for verdadeira. 
Assim retornamos a quantidade de match's. */

const regexp3 = /Script/g;
const frase2 = "JavaScript, TypeScript e CoffeeScript";

let i = 1;
while (regexp3.test(frase2)) {
  //enquanto a cond for true
  // console.log(i++, regexp3.lastIndex);
}
// 1 10
// 2 22
// 3 37

/*

regexp.exec()
------------------------------------------------------

O exec() diferente do test() , irá retornar uma Array com MAIS INFORMAÇÕES do que apenas um valor booleano.
Também funciona em Loop!!
Diferente do test(), quando termina de fazer a leitura, retorna 'null'

Importante:
-----------------
Por retornar uma Array, possui todos os métodos e propriedades de uma Array em seu protótipo!!

*/

const regexp4 = /\w{2,}/g;

const frase3 = "JavaScript, TypeScript e CoffeeScript";
// console.log(regexp4.exec(frase3)); // ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined]
// console.log(regexp4.exec(frase3)); // ["TypeScript", index: 12, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined]
// console.log(regexp4.exec(frase3)); // ["CoffeeScript", index: 25, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined]
// console.log(regexp4.exec(frase3)); //null;
// console.log(regexp4.exec(frase3)); // Reinicia : ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined]

/*

Loop com exec()
------------------------------------------------------

Podemos fazer um loop com exec e parar o mesmo no momento que encontre o null. */

const regexp5 = /\w{2,}/g;
const frase4 = "JavaScript, TypeScript e CoffeeScript";
let regexpResult;
while ((regexpResult = regexp5.exec(frase4)) !== null) {
  // console.log(regexpResult);
  // console.log(regexpResult[0]); //retorna apenas a info da posição zero da Array
}

// OBS: não esquecer que A CADA LOOP, uma função exec() ou test() é executada---> então, não posso utilizar a expressão com ela no CONSOLE, pois será a SEGUNDA execução dela, retornando o resultado de sua segunda execução e NÃO da PRIMEIRA!!!

/*

Métodos de String com regexp
------------------------------------------------------


str.match()
------------------

O match() é um método de STRINGS (e não mais da função construtora RegExp()) que pode receber como argumento uma Regexp. 
Existe uma diferença de resultado quando utilizamos a flag 'g' ou não.
Com a Flag --> retona o conteúdo da array em seu index;
Sem a flag --> retorna a Array com as mesmas informações do método .exec()
*/

const regexp6 = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase5 = "JavaScript, TypeScript e CoffeeScript";
// console.log(frase5.match(regexp));
// ['JavaScript', 'TypeScript', 'CoffeeScript']
// console.log(frase5.match(regexpSemG));
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]

// Se não tiver match retorna null

/*

str.split()
--------------

O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o resultado do método .match( ) da array final. */

const frase6 = "JavaScript, TypeScript, CoffeeScript";
frase6.split(", "); // ["JavaScript", "TypeScript", "CoffeeScript"]
frase6.split(/Script/g); // ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
`;
tags.split(/(?<=<\/?)\w+/g).join("div");
// <div>
// <div>Item 1</div>
// <div>Item 2</div>
// <div>

/*

* str.replace()
-------------------

O método replace() é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp. 
** com string no argumento do .replace, apenas o primeiro match é substituído!!
*/

const tags2 = `
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
`;

const regexpReplace = /(?<=<\/?)\w+/g;

const newTags = tags2.replace(regexpReplace, "div");
// console.log(newTags);

// <div>
// <div>Item 1</div>
//  <div>Item 2</div>
// <div>

/*

Captura
------------------------------------------------------

É possível fazer uma referência ao grupo de captura dentro do argumento do replace. 
Então podemos utilizar $& , $1 e mais. */

const tags3 = `
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
`;
tags.replace(/<li/g, '$& class="ativo"');
// <ul>
//<li class="ativo">Item 1</li>
//<li class="ativo">Item 2</li>
// </ul>

/*

Grupos de Captura
------------------------------------------------------

É possível definirmos quantos grupos de captura quisermos. */

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;
emails.replace(/(\w+@)[\w.]+/g, "$1gmail.com");
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com

/*

Callback
------------------------------------------------------

Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. 
O VALOR DO RETURN será o que irá SUBSTITUIR cada match. */

const regexp7 = /(\w+)(@[\w]+)/g;
const emails2 = `
joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andretlucho@gmail.com
`;

/*
1
------ */

// emails2.replace(regexp7, function () {
//   console.log("teste");
// });

// teste teste teste --> está fezendo um Callback para CADA STRING presente em 'email2', substituindo cada um por 'teste'

/*
2
---- */

// const resultado = emails2.replace(regexp7, function () {
//   return "X";
// });

// console.log(resultado);
// X X X --> faz o callbak e substitui cada string em 'email2'

/*
3
---- */

const resultado = emails2.replace(regexp7, function (...args) {
  // console.log(args);

  /* arguments (...args) -> retorna uma Array com um lista de todos os argumentos disponíveis no callbakc em index:
  posições:
  0: string completa --> 'joao@homail.com.br'
  
  próxima(s) posições --> grupos de captura:
  1: joao
  2: @homail.com.br

  3: o index de onde começa a string == aqui, 1, pois tenho uma quebra de linha (enter(\n))
  4: a string completa, com todas as quebras de linha */

  /*
  4
  ---- */

  if (args[2] === "@homail") {
    return `${args[1]}@hotmail`;
  } else if (args[2] === "@ggmail") {
    return `${args[1]}@gmail`;
  } else if (args[2] === "@oulook") {
    return `${args[1]}@outlook`;
  } else {
    return args[0];
  }
});

// *** `${arg[1]}@homail` === arg[1] + '@homail' (template string)

// console.log(resultado);
//joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br
// andretlucho@gmail.com

// Código apenas para demonstração
