// otimização
//Implemente funct memorize(fn) que armazene em cache camadas anteriores de fn por argumentos retornando resultados instantâneos re repetidas invocações
// Ex. Fibonatti recursivo

// Memoization é um tipo de abordagem de programação dinamica. Acho que pra quem ta meio perdido vale a pena dar uma olhada. Ai depois tentar aplicar em uma função geral.

function memorize(fn) {
  const cache = new Map(); // variavel cache - armazena objetos

  // chaves e valores que podem ser de diversas estruturas -- diferente de Json
  return function (...args) {
    const key = JSON.stringify(args); // dados 'embrulhados'
    if (cache.has(key)) {
      return cache.get(key); // se estiver no cache, paga os dados
    }

    const result = fn.apply(this, args); // se não, executa a funct original e armazena os dados
    cache.set(key, result);
    return result;
  };
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFib = memorize(function fibonacci(n) {
  if (n < 2) return n;
  return fastFib(n - 1) + fastFib(n - 2);
});

console.log(fastFib(45));
console.log(fibonacci(45));
