/*
Expressões
--------------------------------------------------------
Geralmente, após o sinal de "="
*/

const grupoA = 100;
const grupoB = 300;

const numeros = [2, 3, 4, 5, 6];
const areaQuadrado = (l) => l * l;
const total = numeros.filter((numero) => numero > 4);

const active = true;
const button = active && 'Botão está ativo';

if (grupoA > grupoB) {
  console.log('grupoA');
} else {
  console.log('grupoB');
}

// Bloco de if/else --> não é uma expressão ==> se colocar em uma const == erro!

// Ternário é uma expressão
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';
console.log(vencedor);

// JSX
{
  /* <button onClick={(event) => event.target.classList.add('active')}>
  Button
</button>; */
}
