/*

Referência da Seleção
------------------------------------------------------

É possível utilizarmos o '$&' durante o momento da substituição para fazermos uma referência à seleção. */

// Procura: Java

const regexp = /Java/g;
// console.log("PHP e Java são linguagens diferentes".replace(regexp, "$&Script"));

// PHP e JavaScript são linguagens diferentes

// $& será igual à Java

/*

Grupo de Captura (p/ referenciármos blocos diferentes de strings 'em partes')
------------------------------------------------------

É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. 
Basta envolvermos um grupo entre () parênteses. A referência de cada grupo será feita com $n , sendo o primeiro $1 e n = a string selecionada.

// Procura: sequência alfanumérica, seguida de @, seguido de alfanumérico ou .

const regexp = /([\w.]+)@([\w.]+)/gi;

'andre@email.com.br andre.l1825@email.com.br'.replace(regexp, '$1@gmail.com');
// andre@gmail.com
// andre.l1825@gmail.com.br

Não use este regexp para emails, ele falha em alguns casos.

ex2:
------

andretlucho@gmail.com

const regesxp1 = /(\w+)(@\w.+)/g;

$1 = andretlucho
$2 = @gmail.com


/*

Mais de um Grupo
------------------------------------------------------

Podemos definir quantos grupos de captura quisermos.

// Procura: sequência alfanumérica, seguida de ',' , seguido espaço e sequido de sequência alfanumérica.

ex:
------

Rafael, Andre
Pereira, Ricardo
Silva, Marcia


const regesxp2 = /(\w+),\s(\w+)/gi;

$1 = Rafael, Pereira, Silva
$2 = André, Ricardo, Marcia

'Rafael, André'.replace(regesxp2, $2 $1)

Andre Rafael
Ricardo Pereira
Marcia Silva


/*

Mais do que Captura apenas
------------------------------------------------------

Um grupo também serve para AGRUPARMOS UMA SEQUÊNCIA DE CARACTERES que queremos em repetição.

// Procura: qualquer sequência de ta

const regexp = /(ta)+/gi;
'Tatata, tata, ta'.replace(regexp, 'Pá');

// Pá, Pá, Pá

/*

Ignorar Captura
------------------------------------------------------
Utilize o (?:) para ignorar a captura (continua capturando o grupo; porém, o grupo em si, não existe mais)


// Procura: qualquer sequência de ta

const regexp = /(?:ta)+/gi;
'Tatata, tata, ta'.replace(regexp, 'Pá');
// Pá, Pá, Pá

/*

Positive Lookahead (?=)
------------------------------------------------------

Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. 
Apesar de utilizar ( ) parênteses o positive lookahead NÃO CAPTURA GRUPO.

// Procura: dígitos em sequência, que possuírem px, sem selecionar o px.

const regexp = /\d(?=px)/g;
'2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X');

// 2em, Xpx, 5%, Xpx, Xpx

*/

/*

Negative Lookahead (?!)
------------------------------------------------------

Faz a seleção dos itens NÃO possuírem o padrão dentro de (?!) à sua frente. 
O contrário do positive lookahead

// Procura: dígitos que não possuírem px sem selecionar o restante.

const regexp = /\d(?!px)/g;
'2em, 4px, 5%, 5px, 1px'.replace(regexp, 'X');

// Xem, 4px, X%, 5px, 1px


/*

Positive Lookbehind
------------------------------------------------------

Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.

// Procura: dígitos que possuírem R$
// na frente dos mesmos
const regexp = /(?<=R\$)[\d]+/g;
'R$99, 100, 200, R$20'.replace(regexp, 'X');
// R$X, 100, 200, R$X

*/
