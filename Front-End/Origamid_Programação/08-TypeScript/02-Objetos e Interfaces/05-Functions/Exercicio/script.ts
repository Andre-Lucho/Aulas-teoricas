/* Exercicio

Crie uma função que arredonda um valor passado para cima.
A função pode receber string ou number.
A função deve retornar o mesmo tipo que ela receber. */

function arredonda(valor: string): string;
function arredonda(valor: number): number;
function arredonda(valor: number | string): number | string {
  if (typeof valor === 'number') {
    return Math.ceil(valor);
  } else {
    return Math.ceil(Number(valor)).toString();
  }
}

console.log(arredonda(200.32));
console.log(arredonda('200.32'));
