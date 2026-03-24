// A) Com plugins externos que tem types e interfaces prontas pela comunidade (disponibilizadas via npm)

const body = $('body');

console.log(body.addClass('teste'));

console.log(_.difference([1, 2, 3], [2, 3]));

/* JS está interpretando os arq jquery.js e lodash.min.js, pois eles são carregados atraves do script em index.html

// TypeScript não está localizando os types Interfaces de jquery e lodash */

// B) Com plugins externos que NÃO tem types e interfaces prontas pela comunidade:

declare const Vimeo: any;
//--> único caso onde declaro o type como sendo 'any'
// TS não sabe quais são as prop, métodos e interfaces de Vimeo

const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);

console.log(player);
