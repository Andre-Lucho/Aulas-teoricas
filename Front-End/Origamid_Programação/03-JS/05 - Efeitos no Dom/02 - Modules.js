/*

Módulos
-----------------------------------
Divisão do arq Js em pedaços == Módulos

a) O script geral da página será carregado por partes, a cada arquivo executados --> aumenta a velocidade de carregamento

b) Uma vez exportado um valor de 1 arq, ele pode ser importado por diversos arquivos, sendo carregado apenas 1 vez!

Mais adiante, iremos juntar novamente os arquivos com um app externo (Parcel)

Vantagens:
-----------------------------------


A) Manutenção
-----------------------------------
Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

B) Compartilhamento
-----------------------------------
O compartilhamento de código com outros projetos é facilitado, pois basta
você importar um módulo específico.

C) Nativo no ES6+
-----------------------------------
Ferramentas que permitem dividirmos o código em módulos já existem a
bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas
agora os módulos são nativos.

Ao final, podemos automatizar a junção dos diversos 'pedaços' em 1 único arquivo */

/*

Modules ES6
-----------------------------------

Basta adicionar type="module" na tag script do HTML. 
Utilize a palavra chave EXPORT na frente do valor que deseja exportar (use DEFAULT se for único). 
E IMPORT 'NOME' FROM 'arquivo.js' para importar.

Geralmente um valor por módulo.
<script type="module" src="js/script.js"></script>

// arquivo scroll-suave.js
export default function scrollSuave() {
...
};

// arquivo script.js
import scrollSuave from './scroll-suave.js';
scrollSuave();


OBS:
-------
-------
A) Qd se utiliza default, o nome do valor que se coloca no import não necessita ser igual ao do valor REAL que está no arquivo da pasta modules.

B) Qd não se utilizar o default (importando mais de um valor do mesmo arquivo), o nome DEVE SER O MESMO! */

/*

Named Exports
-----------------------------------

Você pode exportar mais de um valor. Quando for importar utilize as chaves {} para especificar cada valor. 
O nome importado deve ser igual ao exportado.

1) //arquivo scroll.js
export function scrollSuave() {
...
};
export function scrollAnimacao() {
...
};

// arquivo script.js
import {scrollSuave, scrollAnimacao } from './scroll.js';
scrollSuave();
scrollAnimacao();

2) // Importe todos os valores de arqs js onde não sei seu conteúdo: 

o nome do valor passado se tornará um objeto que herda todos os EXPORTS do arq como
propriedades ou métodos de um objeto 


EX.: // arquivo script.js 

import * as scroll from "./scroll.js";
scroll.scrollSuave();
scroll.scrollAnimacao();  


IMPORTANTE!!
-----------------------------------

A palavra 'AS'(como) faz uma NOVA REFERÊNCIA ao NOME DO VALOR!
Assim, posso escolher qualquer nome para o valor
/*

Valores do Export
-----------------------------------

Podemos exportar objetos, funções, classes, números, strings e mais.

// arquivo configuracao.js

export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {};

// arquivo script.js

import * as conf from './configuracao.js';
conf.str;
conf.obj;
conf.ano;
*/

/*

Características
-----------------------------------

1) Strict mode --> 'use strict' por padrão em todos os arquivos.

2) Variáveis ficam no module apenas --> Não vazam para o escopo globo.
(Não são exportadas)

3) 'This' fora de um objeto faz referência a undefined --> Ao invés de fazer referência ao window.
(dentro de objetos continua fazendo referência ao objeto)

4) Assíncrono --> Carrega os arquivos fora de ordem (os + leves 1°) para aumentar a velocidade de carregamento; porém, os executa na ordem correta, conforme o algoritmo
*/

/*

use strict
-------------------

O modo estrito previne que algumas ações consideradas erros.
Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.*/

("use strict");

nome = "Ford"; // erro, variável global
delete Array.prototype; // erro, não deletável
window.top = 200; // erro, não pode mudar
const arguments2 = 3.14; // escrever em palavra reservada

// Por padrão ==>  todo module está no modo estrito
