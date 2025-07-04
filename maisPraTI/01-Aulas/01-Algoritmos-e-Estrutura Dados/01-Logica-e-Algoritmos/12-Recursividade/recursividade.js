/* 
Recursividade
------------------------------------------------------ 
Quando uma função chama ela mesma

*/

function fatorial(n) {
  if (n === 0) {
    return 1; // para a recursão e começa a executar as funções da CallStack
  } else {
    return n * fatorial(n - 1); // **
  }
}
// fatorial(5);

/* 
** Resolução
------------------------------------------------------

1) não faz nenhum cálculo ...retona 5 * (a prórpia função) = fatorial(4). 
É colocada em uma Call Stack #

2) A cada nova recursão, o n assume 1 número a menos e é gravado na memória

3) vai empilhando até fatorial de 0  --> Agora tenho o valor de n ==0 --> dai entra no primeiro if e retorna 1; sai da função original e calcula  as funções que estão na Call Stack em Pilha (retornando em cascata, do alocado mais recente ao mais antigo)

# Call Stack (em Pilha):

Primeira execução --> 
5 * fatorial(n-1 = 4) ... tenta executar: fatorial(4): -- 'n' passa a ser = 4
4 * fatorial(3)
3 * fatorial(2)
2 * fatorial(1)
1* fatorial(0) --> // cai no if --> n = 1 -- começa a resolver as Call stack's

IMPORTANTE
'n' é substituido a cada nova recursão... Ele apenas é DEFINIDO( e executada a multiplicação) qd a função tem algun retorno SEM recursão!

return 1 --> retorno 1
1 * 2 * 3 * 4 * 5
2*1 = 2
2* 3 = 6
6 * 4 = 24
24 * 5 = 120

retornando : 1, 2, 6, 24, 120
Print final = 120

/* 

Vantagens da recursividade
------------------------------------------------------

1) Dividir o problrma em problemas menores
Divide a tarefa para uma versão menor dela, barrando outras (pondo em pilha) E vai usando isso como base para resolver tudo

2) Usado em Árvores - busca apenas em um nó e não em toda a árvore! 

Desvantagens
------------------------------------------------------
1) Não há nenhum benefício quanto ao desempenho ao utilizar a recursão - Na verdade, os loops algumas vezes são melhor para o desempenho de um programa.
2) maior ocupação de memória
3) É mto fácil cometer erros e criar um loop infinito. Exemplo abaixo:
*/

function regressivo(n) {
  console.log(n);
  regressivo(n - 1);
}

console.log(regressivo(10));

// regressivo(10); // loop infinito == 'Maximum call stack size exceeded' === Stack OverFlow --> (isStackOverflowError(e))

/* 
Quando você escreve uma função recursiva, deve informar quando a recursão deve parar. É por isso que toda função recursiva tem duas partes: o 'caso-base' e o 'caso recursivo'. 
O caso recursivo é quando a função chama a si mesma. 
O caso-base é quando a função não chama a si mesma novamente, de forma que o programa não se torna um loop infinito == 
Utilizamos um if com uma condição de parada!
*/

// function regressivo(n) {
//   console.log(n);
//   if (n <= 1) {
//     // caso base
//     return;
//   } else {
//     // caso recursivo
//     regressivo(n - 1);
//   }
// }

// regressivo(10);

/*
Repare que cada chamada para a função fat tem seu próprio valor de n.
Você não consegue acessar a mesma função com outro valor de n.

A pilha tem um papel importante na recursão:

Toda nova função recursiva é salva na pilha! Esta é uma pilha com as funções de chamada completadas até a metade, cada uma com a sua lista de fuinções, também completadas até a metade, para serem analisadas. 
Utilizar a pilha é conveniente porque você não precisa acompanhar (ou saber) a qunatidade de funções armazenadas na Call Stack – a
pilha faz isso para você. 

Usar a pilha é bom, porém, existe um custo: salvar toda essa informação pode ocupar muita memória. 
Cada uma destas funções de chamada ocupa um pouco de memória, e quando a sua pilha está muito cheia é sinal de que seu computador está salvando informação para muitas chamadas de funções. 

Para esta situação, você tem duas opções:
• Reescrever seu código utilizando loops.
• Utilizar o que chamamos de tail recursion (recursão de cauda). Isto é um tópico avançado em recursão e está fora do escopo deste livro. Esta técnica também não é suportada por todas as linguagens de programação.


*/

/*Exercícios

1) Soma dos numeros de 1 até n */

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

// 1 + 2 + 3 + 4 + 5;

let a = 5;
a = 4;
a = 3;
a = 2;
a = 1;

5 + 4;
4 + 3;
3 + 2;
2 + 1;

// console.log(sum(5));

// 2) Dar o numero Fibonacci de forma recursiva
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function sequenciaFibonacci(n) {
  let a = 0;
  let b = 1;
  // não tenho nada abaixo dos 2
  let temp;
  console.log(a, b);
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}
// sequenciaFibonacci(20);

function fiboRecursivo(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fiboRecursivo(n - 1) + fiboRecursivo(n - 2);
  }
}

console.log(fiboRecursivo(10)); // forneço o index e ele dá o valor nesse index

// 3)

// let categorias = [
//   {
//     id: 1,
//     nome: 'Eletrônicos',
//     filhos: [
//       {
//         id: 2,
//         nome: 'Celulares',
//         filhos: [],
//       },
//       {
//         id: 3,
//         nome: 'Computadores',
//         filhos: [{ id: 4, nome: 'Tablets', filhos: [] }],
//       },
//     ],
//   },
//   {
//     id: 5,
//     nome: 'Louças',
//     filhos: [],
//   },
// ];

// // ver aula !!!
// //
// //
// function imprimirCategorias(lista, nivel = 0) {
//   for (let categoria of lista) {
//     console.log(' '.repeat(nivel * 2) + categoria.nome);
//     if (categoria.filhos.length > 0) {
//       imprimirCategorias(categoria.filhos, nivel + 1);
//     }
//   }
// }

// imprimirCategorias(categorias);

// for (sub of categorias) {
//   console.log(sub.nome);
// }

// for (sub2 of categorias.filhos) {
//   console.log(sub2.nome);
// }

// printar
// Eletro
//    celulares
//    comput
//        tablets
// Louças

// web storm --> jet brains
