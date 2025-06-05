const entrada = require('prompt-sync')({ sigint: true });

// Variáveis
// --------------------------------------------------------

// idade = 15;
//  var idade = 15; --> var tem escopo disponível em todo o código, podendo gerar erros
// sempre declarar com let ou const

// let teste;
// console.log(teste); // undefined --> variável não foi inicializada --> não foi atribuido nenhum valor

// let algo = null; //=== vazio

// console.log(typeof algo); // objeto

// console.log(3 ** 2); // exponencial

/* Operações em JS
--------------------------------------------------------
Ordem das operaćões em JS:
()
**
* ou /
+ ou - 

*/

// let num = '10';

// console.log(Number(10));
// console.log(parseInt(10));
// console.log(parseFloat(10));

// let counter = 1;
// let counter +=1  == let counter = counter + 1

// counter++; // pos-incremento --> o resultado a seguir é o mesmo da var; somente depois é incrementado
// ++counter // pre-incremento === counter+= 1

// counter-- // pos-decremento
// --counter// pre-decremento

// // Da mesma forma, porem, add um outra variável

// let counter2 = 1
// let step = 2;

// counter2 += step;

// ou:
// counter2 +=2

// console.log(counter2); //3

/* Condicionais
-------------------------------------------------------- */

// if(){
//   // algo
// } else if('nova condićão')

/* Exercícios
------------------------------------------------------- */

// 1) Verificar se um número é par ou ímpar

// let numero1 = 1;
// let numero2 = 2;

// numero % 2 === 0 ? console.log('par') : console.log('impar');

// 2) Encontrar o maior entre 3 números e passar p ternário

// let num1 = 11;
// let num2 = 14;
// let num3 = 15;

// if (num1 > num2 && num1 > num3) {
//   console.log('O maior número é:' + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log('O maior número é:' + num2);
// } else if (num3 > num1 && num3 > num2) {
//   console.log('O maior número é:' + num3);
// } else {
//   console.log('os numeros são iguais ou há empate entre 2 ou mais numeros');
// }

// 3) Faca uma calculadora simples utilizando uma entrada do usuário

// 3.1 Utilizando o alert - browser

// let num1 = Number(prompt('Digite o primeiro número:'));
// let num2 = Number(prompt('Digite o segundo número:'));
// let operacao =prompt('Digite a operação a ser efetuada:');
// let resultado = 0 --> se quiser guardar o resultado

// switch (operacao) {
//   case '+':
//     // let soma = Number(num1) + Number(num2);
//     alert('a valor final da operação é: ' + (Number(num1) + Number(num2)));
//     break;
//   case '-':
//     alert('a valor final da operação é: ' + (Number(num1) - Number(num2)));
//     break;
//   case '*':
//     alert('a valor final da operação é: ' + Number(num1) * Number(num2));
//     break;
//   case '/':
//     alert('a valor final da operação é: ' + Number(num1) / Number(num2));
//     break;
//   default:
//     alert('Operação inválida');
//     break;
// }

//3.2 ) Utilizando o pacote do node --> prompt-sync - terminal

num1 = Number(entrada('Digite o primeiro número:'));
num2 = Number(entrada('Digite o segundo número:'));
operacao = entrada('Digite a operação a ser efetuada:');

switch (operacao) {
  case '+':
    // let soma = Number(num1) + Number(num2);
    console.log(
      'O valor final da operação é: ' + (Number(num1) + Number(num2)),
    );
    break;
  case '-':
    console.log(
      'O valor final da operação é: ' + (Number(num1) - Number(num2)),
    );
    break;
  case '*':
    console.log('O valor final da operação é: ' + Number(num1) * Number(num2));
    break;
  case '/':
    Number(num1) / Number(num2) !== 0
      ? console.log(
          'O valor final da operação é: ' + Number(num1) / Number(num2),
        )
      : console.log('Não é possível dividir por 0');
    break;
  default:
    console.log('Operação inválida');
    break;
}
