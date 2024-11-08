/*

Praticamente, todas as linguagens possuem uma implementação de regexp (geralmernte a mesma implementação)

Assunto mto extenso (livros inteiros dedicados apenas ao assunto!!)
Regexr --> https://regexr.com/


Regular Expression
------------------------------------------------------


Regexp ou Regex são expressões (funções) utilizadas para realizarmos buscas / substituições de padrões em STRINGS. 
Os padrões devem ser colocados entre '//' . 
Geralmente vamos utilizá-las nos métodos  --> .replace( ) e .split( ) . */

// Procura: J
const padraoRegexp = /J/;
const texto = "JavaScript";
// const novoTexto = texto.replace(padraoRegexp, "B"); //ou
const novoTexto = texto.replace(/J/, "B");
// ou "JavaScript".replace(/J/, ´B´); (passando a string diretamente)

// console.log(texto);
// console.log(novoTexto); // BavaScript

/*

Literal
------------------------------------------------------

Utilizar um caracter literal irá realizar uma busca específica deste caracter. */

// Procura: J seguido de a, seguido de v e seguido de a

const regexp = /Java/;
const texto2 = texto.replace(regexp, "Type"); // TypeScript
// console.log(texto2);

/*
Importante:
----------------
o Regexp busca não pela palavra 'Java', mas aos caracteres, um depois do outro:
1 - busca por 'J';
2- busca por 'a';
3 - busca por 'v'
4 - busca por 'a'
*/

/*

Flag: g --> (uma das mais utilizadas)
------------------------------------------------------

As flags irão modificar como a expressão é interpretada. 

Uma das mais utilizadas é a 'g' , que significa 'global', ou seja, retorne TODOS os resultados que estiverem dentro do padrão E NÃO APENAS O PRIMEIRO RESULTADO.
A flag deve ser colocada no final da expressão. */

// Procura: Todo a
// const regexp = /a/g;
// 'JavaScript'.replace(regexp, 'i'); // JiviScript

/*

Flag: i (case Insensitive)
------------------------------------------------------

Com o 'i' informamos que devem ser IGNORADAS as DIFERENÇAS entre MAIÚSCULAS e MINÚSCULAS. Isso significa  que /a/ irá buscar por a e A . */

// Procura: Todo PE, Pe, pE e pe (p e e nessa sequência == tem que ter os 2 caracteres juntos)

const regexp2 = /pe/gi;

const novoTexto2 = "Pierdeu perdido".replace(regexp2, "Ba"); // Bardeu Bardido
// console.log(novoTexto2);

/*

Character Class
------------------------------------------------------

Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. 
/[ab]/ irá procurar por 'a' OU por 'b'. (NÃO HÁ necessidade de ter os 2 caracteres juntos)  */

// Procura: Todo a, A, i, I

// const regexp = /[ai]/gi;
// 'JavaScript'.replace(regexp, 'u'); // JuvuScrupt

/*

Character Class e Especiais
------------------------------------------------------

Podemos utilizar caracteres que não são alfanuméricos dentro da classe. 
Mas fique atento, pois existem diversos casos especiais para os mesmos. */

// Procura: - ou .
const regexp3 = /[-.]/g;
const texto3 = "111.222-333-44".replace(regexp3, ""); // 11122233344

// console.log(texto3);

// /. /gi --> seleciona todas os caracteres do texto (' . ' é considerado qquer caractere)
// /[.] /gi --> seleciona apenas o caracteres === ' . ' ;
// / \. / --> utilizar ' \ ' é o mesmo que o comando acima '[ ]'

/*

Um ou Outro
------------------------------------------------------

Combine caracteres literais com uma classe para buscarmos variações: 
Ju[nl]ho busca Julho ou Junho . */

// Procura: Bra, seguido de s ou z, seguido de il
const regexp4 = /Bra[sz]il/g;
const texto4 = "Brasil é com z: Brazil".replace(regexp4, "Prazer"); // Prazer é com z: Prazer
// console.log(texto4);

/*

De A à Z
------------------------------------------------------

O TRAÇO '-' dentro de [] pode servir para definirmos um alcance.
[A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. 
A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance. */

// Busca por itens de a à z
// const regexp = /[a-z]/g;
// 'JavaScript é a linguagem.'.replace(regexp, '0'); // J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z

// const regexp = /[a-zA-Z]/g; ===  /[a-z]/gi
// 'JavaScript é a linguagem.'.replace(regexp, '1');
// 1111111111 é 1 111111111.
// OBS --> Sem espaço: o espaço é considerado um caractere a ser buscado!!

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;
const texto5 = "123.333.333-33".replace(regexpNumero, "X"); //
// console.log(texto5);

/* 
Importante:
-----------------
O intervalo para busca considerado pelo RegExp é o descrito pela Tabela Unicode!

** ver que de 'A' Maiúsculo até z minúsculo temos alguns símbolos!!

https://unicode-table.com/en/ */

/*

Negar
------------------------------------------------------

Utilizando o acento circunflexo podemos negar caracteres. 
Ou seja, pegue tudo que não seja [^a] */

// Procura: tudo que não estiver entre a e z

const regexp5 = /[^a-z]/gi;
const novoTexto3 = "Brasil não é com z: Brazil".replace(regexp5, " "); // Brasil  n o   com z  Brazil
// console.log(novoTexto3);

/*

Ponto
------------------------------------------------------

O ponto . irá selecionar qualquer caracter, Menos quebras de linha. */

// Procura: todos os caracteres menos quebra de linha
// const regexp = /./g;
// 'JavaScript é a linguagem.'.replace(regexp, '0');
// 0000000000000000000000000

/*

Escapar Caract Especiais
------------------------------------------------------

Caracteres especiais como o ponto . , podem ser escapados utilizando a barra \ , assim este não terá mais a sua função especial e será tratado como literal. 
Lista de caracteres especiais: + * ? ^ $ \ . [] {} () | / (espaço)

*/

// Procura: todos os pontos
// const regexp = /\./g;
// const regexpAlternativa = /[.]/g;
// '999.222.222.11'.replace(regexp, '-') // 999-222-222-11

/*

Word
------------------------------------------------------

O '\w' irá selecionar qualquer caracter alfanumérico e o underline (NÃO inclui 'espaço').
É a mesma coisa que [A-Za-z0-9_]. 
Não é caseSensitive
*/

// Procura: todos os alfanuméricos
// const regexp = /\w/g;
// 'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
// ------------ -$ --,--.

/*

Not Word (=== SOMENTE ESPECIAIS)
------------------------------------------------------

O \W irá selecionar tudo o que NÃO FOR caracter alfanumérico e o underline (o contrário de \w), (incluindo 'espaço')
É a mesma coisa que [^A-Za-z0-9_].  
*/

// Procura: o que não for caracter alfanuméricos
// const regexp = /\W/g;
// 'Guarda-chuva R$ 23,00.'.replace(regexp, '-');
// Guarda-chuva-R--23-00-

/*

Digit
------------------------------------------------------

O \d irá selecionar qualquer dígito. 
É a mesma coisa que [0-9] . */

// Procura: todos os dígitos
// const regexp = /\d/g;
// '+55 (21) 2222-2222'.replace(regexp, 'X');
// +XX (XX) XXXX-XXXX.

/*

Not Digit
------------------------------------------------------

O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9] .  
Incluíndo todos os caracteres especiais, 'espaço' e letras especiais, exceto os numéricos
*/

// Procura: o que não for dígito
// const regexp = /\D/g;
// '+55 (21) 2222-2222'.replace(regexp, '''');
// 552122222222

/*

Whitespace
------------------------------------------------------

O \s irá selecionar qualquer espaço em branco, isso inclui:
espaços, tabs, quebra de linhas. */

// Procura: espaços em branco
// const regexp = /\s/g;
// '+55 (21) 2222-2222
//  '.replace(regexp, '');
// +55(21)2222-2222

/*

Not Whitespace
------------------------------------------------------

O \S irá selecionar qualquer caracter que não for espaço em branco. */

// Procura: o que não for espaço em branco
// const regexp = /\S/g;
// '+55 (21) 2222- 2222
//  '.replace(regexp, ''X");
// XXX XXXX XXXXX XXXX

/*

** importate:
-----------------
/ [\s\S] /g irá selecionar TODOS os caracteres do texto!!

/*

Quantificador
------------------------------------------------------

É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb.
Com as chaves podemos indicar a repetição /b{3}/g . 
Agora ele está fazendo uma seleção completa da sequência de 3x 'b'  juntos e não caracter por caracter. */

// Procura: 4 a's seguidos
// const regexp = /aaaa/g;
// const regexpAlt = /a{4}/g;
// 'Vaaaai ali por favor.'.replace(regexp, 'a');
// Vai ali por favor.

/*

Quantificador Min e Max
------------------------------------------------------

Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer 'a' duas vezes ou até 4 vezes.
/a{2,}/ irá selecionar quando se repetir duas ou mais vezes. */

// Procura: dígitos seguidos de 2 à 3

// const regexp = /\d{2,3}/g;
// '222.333.222.42'.replace(regexp, 'X') // X.X.X.X

// // Procura: letras seguidos com 1 caracter ou mais (contador de palavras, exceto pelos especiais)

// const regexpLetras = /\w{1,}/g;

// 'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X');
// X X X é X

/*

Mais + ( === {1,})
------------------------------------------------------

O sinal de + significa que devemos selecionar quando existir pelo menos uma  e mais de uma ocorrência. 
A diferença é que selecionará quando mais de uma, o conjunto delas  */

// Procura: dígitos em ocorrência de um ou mais

// const regexp = /\d+/g;
// '222.333.222.42'.replace(regexp, 'X');
// X.X.X.X

// Procura: Começa com d, seguido por uma ou mais letras

const regexpLetras = /d\w+/g;
// console.log("Dígitos, dados, desenhos, Dito, d".replace(regexpLetras, "X")); // Dígitos, X, X, Dito, d

//**  [\wã]+ --> seleciona qualquer caracter alfanumérico e o underline + ã e faz a união de todos eles!.

/*

Expressões que afetam o comando ou caractere ANTERIOR
-------------------------------------------------------------------------------------------------


Asterisco ( * )
---------------------


O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências do caractere logo atrás do sinal. */

// Procura: Começa com d, seguido por zero ou mais letras

// const regexp = /d\w*/ g;
// "Dígitos, dados, desenhos, Dito, d".replace(regexp, "X"); // Dígitos, X, X, Dito, X

/* 

Ex.:

Maiiiiiiisssss; 
/ ai* / --> Seleciona 'ai', se tiver ou não o 'i' == vai selecionar todos os (a's), com ou sem os (i's) --> preferencia pelos a's
/ a*i / --> --> Seleciona 'ai', se tiver ou não o 'a' == vai selecionar todos os (i's), com ou sem os (a's) --> preferencia pelos I's 

*/

/*

Opcional ?
------------------------------------------------------

O sinal ? significa que o caracter (logo atrás do sinal) é opcional, pode ou não existir. */

// Procura: Por regex com p opcional

// const regexp = /regexp?/g;
// 'Qual é o certo, regexp ou regex?'.replace(regex, 'Regular Expression'); // Qual é o certo, Regular Expression ou Regular Expression?

/*
-------------------------------------------------------------------------------------------------


Alternado |
------------------------------------------------------

O sinal '|' irá selecionar um ou outro. java|php  */

// Procura: java ou php (case insensitive)

// const regexp = /java|php/gi;
// "PHP e Java são linguagens diferentes".replace(regexp, "X");  // X e X são linguagens diferente

/*


Word Boundary \b
------------------------------------------------------

O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de um não caracteres --> \W.
Ou seja, geralmente entre 'especiais' não palavras (exceto qd temos um caractere com acento == também entra como word boundary)

Lista de caracteres especiais: + * ? ^ $ \ . [ ] { } ( ) | / ('espaço')
( _ não entra!)

*/

// Procura: java (case insensitive)

// const regexp = /java/gi;
// 'Java não é JavaScript.'.replace(regexp, 'X'); // X não é XScript.

// Procura: java (case insensitive)

// const regexpBoundary = /\bjava\b/gi;
// 'Java não é JavaScript.'.replace(regexpBoundary, 'X'); // X não é JavaScript.

// Procura: Dígitos em sequência, que estejam isolados

// const regexpDigito = /\b\d+\b/g;
// 'O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexDigito, 'X'); // O Restaurante25 na Rua X, custa R$ X,X

// '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'); // 11_22 X-X XéX 77e88

/*

Not Word Boundary \B
------------------------------------------------------

É o contrário do \b . 
A seleção estará  entre o início e fim de um caracteres --> \w

*/

// const regexpDigito = /\B\d+\B/gi;

// '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'); // 1X_X2 33-44 55é66 7XeX8

/*

Anchor Beginning
------------------------------------------------------

Com o ^ é possível informar que a busca deve ser iniciada no INÍCIO DA LINHA. */

// Procura: sequência de alfanuméricos no início da linha.

const regexp6 = /^\w+/g;

// console.log(`andre@origamid.com contato@origamid.com`.replace(regexp6, "X")); // X@origamid.com contato@origamid.com

// OBS:
// Utilizamos qd utilizamos querySelector(href^[ ]...)

/*

Anchor End
------------------------------------------------------

Com o $ é possível informar que a busca deve ser iniciada no final da linha. */

// Procura: sequência de alfanuméricos no final da linha.

// const regexp = /\w+$/g;

// `andre@origamid.com contato@origamid.com`.replace(regexp,'X' )
// andre@origamid.com contato@origamid.X

/*

Flag: m
------------------------------------------------------

Com a flag 'm' de multiline, podemos informar que a busca de início '^' e final '$' de linha devem ocorrer em todas as linhas disponíveis. */

// Procura: sequência de alfanuméricos no final da linha.

// const regexp = /\w+$/gm;

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, 'X');

// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos no início da linha.

// const regexp = /^\w+/gm;

// `andre@origamid.com
// contato@origamid.com`.replace(regexp, 'X');

// X@origamid.com
// X@origamid.com

/*

Line Feed  ( \n) --> caractere oculto (﹁ )
------------------------------------------------------

O \n irá selecionar o final de uma linha, apenas quando criamos uma nova */

// const regexp = /\n/g;

// `andre@origamid.com\ncontato@origamid.com`.replace(regexp,''---'')
// andre@origamid.com---contato@origamid.com

// \t ---> seleciona tabs

// OBS:
// em uma String, 'pula' 1 linha - já usamos mto!

/*

Unicode \u
------------------------------------------------------

O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX . 
Todo código Unicode inicia por U+ .... --> o que está em ... é que passamos


Ex: \u0040 seleciona o @ . */

// Procura: @ ou ©
// const regexp = /\u0040|\u00A9/g;
// 'andre@origamid.com ©'.replace(regexp, '---')
/*andre---origamid.com ---
 */
