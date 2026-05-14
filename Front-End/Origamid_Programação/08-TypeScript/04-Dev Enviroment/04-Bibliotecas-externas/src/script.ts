// A) Com plugins externos que tem types e interfaces prontas pela comunidade (disponibilizadas via npm)

const body = $('body');

console.log(body.addClass('active'));

console.log(_.difference([1, 2, 3], [2, 3]));

/* JS está interpretando os arq jquery.js e lodash.min.js, pois eles são carregados atraves do script em index.html

// Para o TypeScript localizar os types Interfaces de jquery e lodash:
// Definir a opção "types" no tsconfig.json, incluindo os types de jquery e lodash, para que o TS possa localizar as interfaces e tipos dessas bibliotecas --> types: ["jquery", "lodash"],
*/

// B) Com plugins externos que NÃO tem types e interfaces prontas pela comunidade:

declare const Vimeo: any;
//--> único caso onde declaro o type como sendo 'any'
// Faço isso, pois o TS não tem as interfaces, types e prop do Vimeo, e o 'any' é um tipo que desativa a verificação de tipos, permitindo que o código seja compilado sem erros relacionados a tipos, mas também perde os benefícios de segurança de tipos do TypeScript.

const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);

console.log(player);
