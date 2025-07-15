let palavra = 'stop';

function translate(string) {
  const prefixo = /^[^aeiouyAEIOUY]*(?=[aeiouyAEIOUY])/;

  const b = Array.from(string);
  const d = b[0];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }

  const c = string.split(prefixo);
  return b;
}

console.log(translate(palavra));

// Ver capturas colegas

// Alexia
// const palavra = "stop";
// const vogais = ["a", "e", "i", "o", "u"]

// let resultado = '';
// for(let i = 0; i < palavra.length; i++){
//     const letra = palavra[i];
//     if(vogais.includes(letra)){
//         resultado = palavra.slice(i) + palavra.slice(0, i) + 'ay';
//         break
//     }
// }
// console.log(resultado)
