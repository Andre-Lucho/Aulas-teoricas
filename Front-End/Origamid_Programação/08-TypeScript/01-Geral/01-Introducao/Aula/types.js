/*

Tipos (Types)
---------------------------
O tipo define o que podemos fazer com um dado. */

const frase = 'Front End';
const total = 100.05;
const empresas = ['Apple', 'Microsoft'];
const body = document.body;
const button = document.querySelector('button');

frase.toLowerCase();
// frase.toFixed();

total.toFixed();
// total.toLowerCase();

empresas.map((empresa) => empresa.toUpperCase());
// empresas.toLowerCase();

body.style.background = '#000';
// body.map((item) => item);

console.log(button);
// button.click();

const operacao = true + 'teste' - (4 * {}) / [];
const strings = 'Front ' + 'End';
const numbers = 100 + 200;
console.log(operacao, strings, numbers);

/*

OBS.: A partir daqui, ver os exemplos no arq = typescript-teste.js --> @ts-check detecta a duplicidade de variáveis no projeto


@ts-check
---------------------------
O VS Code já vem com o TypeScript (TS) instalado. Enquanto escrevemos JavaScript, serviços do TS rodam na sua máquina e já te oferecem funcionalidades como a sugestão de métodos/propriedades do tipo.

Ao adicionar um comentário //@ts-check no início de um arquivo JS, o editor passará a indicar erros que seriam pegos pelo TS.

//@ts-check

** ver typescript-teste.js

/*

Type Annotations
---------------------------

No momento o JavaScript não possui uma forma de indicarmos qual será o tipo de dado. 
Não é possível prever o argumento que será passado no parâmetro de funções, para isso são necessárias as anotações de tipos.*/

/* 

Proposta - Existe em proposta a ideia de incluir uma sintaxe parecida com a do TypeScript direto no JavaScript:
https://github.com/tc39/proposal-type-annotations


** ver typescript-teste.js

/*

Instalaçao
---------------------------
---------------------------


Script.ts e tsc
---------------------------
Os principais programas que executam JavaScript (browser/node), não conseguem executar TypeScript. 
Por isso precisamos de um compilador para gerar um arquivo JavaScript a partir de um TypeScript.

npm install -g typescript
tsc --init

tsconfig.json;

{
  "compilerOptions": {
    "target": "ESNext",
    "strict": true
  }
}

tsc -w --> watch --> fica scaneando qquer tipo de alteração
*/
