/*
Função Debounce
---------------------------------------
A) É uma função que tem por objetivo 'segurar' a execução de uma outra função(função principal) por um certo tempo, para que não haja novas chamadas da fn principal por esse tempo determinado. Podemos pensar assim:

"Espere um pouco. Se algo acontecer de novo antes desse tempo de espera, ignore o que estava para acontecer e comece a esperar novamente, zerando o tempo inicial(começando a contar novamente)"

B) Economia de recursos -> restringe a frequência de  requisições ao servidor de funções mto pesadas. Localmente, funções que executam mto rápido e teriam mtas re-chamadas (redimensionamento de janelas, scroll, click, nova renderização, esperar pelo termo de pesquisa completo(caso aqui))

No caso abaixo, se não tivessemos o debounce, o servidor faria uma nova pesquisa a cada letra digitada == sobrecarga no servidor!! */

// <input id="busca" placeholder="Digite Algo..." />

function debounce(fn, delay) {
  let timer = null;
  //1. Variável para armazenar o ID do timer

  return function (...args) {
    // 2. A função 'debounce' retorna uma nova função
    clearTimeout(timer);
    // 3. Limpa o timer existente

    timer = setTimeout(() => {
      // 4. Cria um novo timer
      fn.apply(this, args);
      // 5. Executa a função original (fn)
    }, delay);
    // 6. Define o tempo de espera (delay)
  };
}

function pesquisar(texto) {
  console.log('Buscando por: ', texto);
}
// Função principal --> aquela que quero que tenha seu tempo de execução e re-execução controlado

let pesquisaDebounced = debounce(pesquisar, 1000);
// 7. Cria a versão "debounced" de 'pesquisar'

document.getElementById('busca').addEventListener('input', (event) => {
  pesquisaDebounced(event.target.value);
  // 8. Chama a função "debounce" no evento 'input'
});

/*
  Passo a Passo da Explicação:
  ------------------------------------------------------------------------------


  1. A Função debounce(fn, delay):
---------------------------------------

function debounce(fn, delay) {
  let timer = null;   // tempo p a execuição da função == inicialmente nulo
  ...
  }

* fn (Função a ser "debounced"): É a função que você quer que seja executada de forma controlada. 
No nosso exemplo, é a função pesquisar.

* delay (Atraso): É o tempo, em milissegundos, que o debounce vai esperar antes de executar a função fn. Se, durante esse delay, a função for chamada novamente, o timer é resetado. No nosso caso, é 1000 ms (1 segundo).

* let timer = null;: Esta é uma variável crucial. Ela será usada para armazenar o ID do timer retornado pelo setTimeout. É inicializada como null porque, no início, não há nenhum timer ativo.


2. Retornando uma Nova Função (Closure):
------------------------------------------------------------

    return function (...args) {
      }
  function wrapper (embrulhada) --> devolve uma nova função
  ..args === argumentos da func princial (texto)


* A função debounce não executa fn diretamente. 
Em vez disso, ela retorna uma nova função. Esta nova função é o que chamamos de "função embrulhada" ou "wrapper function".

* (...args): Este é o "rest parameter". Ele captura todos os argumentos passados para a função embrulhada e os coloca em um array. Isso garante que qualquer argumento que você passar para a função pesquisaDebounced (como o event.target.value) será repassado para a função original 'pesquisar'.

* Closure: A parte mais mágica aqui é a closure. 
A função interna que é retornada tem acesso à variável timer (que foi declarada no escopo da função debounce externa), mesmo depois que debounce já terminou de executar. 
Isso é fundamental para que o timer persista entre as chamadas da função embrulhada. ** ver mais sobre Closure --> arq closure

Como a função interna tem acesso a 'timer'? 
Pois a 'function debounce' está armazenada na variável 'let pesquisaDebounced' e, qd a função interna de debounce retorna, ela fica armazenada dentro de 'pesquisaDebounced':

ou seja --> o valor de 'timer' = setTimeOut(()=>{ ... }) está armazenado em 'pesquisaDebounced'!!


3. Limpando o Timer Existente (clearTimeout):
--------------------------------------------------------------
return function (...args) {
  clearTimeout(timer); // limpa qquer timer ativo
...
  }

* Cada vez que a função embrulhada (pesquisaDebounced) é chamada, a primeira coisa que ela faz é clearTimeout(timer).

*Se já existe um timer ativo (ou seja, timer não é null e aponta para um setTimeout que ainda não executou), clearTimeout o cancela. Isso significa que a execução da função fn que estava agendada para acontecer é abortada.

*Pense nisso como "resetar o relógio". Se o usuário digitou uma letra e o timer começou a contar, mas antes que ele termine de contar, o usuário digita outra letra, nós resetamos o contador para zero.


4. Criando um Novo Timer (setTimeout):
---------------------------------------------------------

return function (...args) {
...
// novo timer --> começa a contar novamente do inicio
  timer = setTimeout(() => {
    // ...
  }, delay);
};

* Após limpar qualquer timer anterior, um novo timer é criado usando setTimeout.

* O setTimeout recebe dois argumentos: uma função de callback (que será executada após o atraso) e o delay (o tempo de espera).

* O ID retornado por setTimeout é armazenado na variável timer. Este é o ID que será usado por clearTimeout na próxima vez que a função embrulhada for chamada.


5. Executando a Função Original (fn.apply(this, args)):
------------------------------------------------------------------------------
// ...
timer = setTimeout(() => {
  fn.apply(this, args);
      }, delay);
// ...

 *fn -->  função principal
*  ..args === argumentos da func princial (texto)

* A função de callback passada para setTimeout é uma arrow function. Dentro dela, a função original fn (que é a nossa pesquisar) é finalmente executada.


** fn.apply(this, args):
* fn.apply(...): O método apply é usado para chamar uma função com um determinado valor this e argumentos fornecidos como um array.

* this: O primeiro argumento de apply define o contexto (this) para a execução da função fn. Neste caso, estamos usando o this da função embrulhada. Para a maioria dos casos em um addEventListener, o this dentro do callback seria o elemento que disparou o evento (o <input>).

*args: O segundo argumento é o array de argumentos que foram passados para a função embrulhada (lembra do ...args?). Isso garante que a função pesquisar receba o texto correto (event.target.value).


6. Definindo o Tempo de Espera (delay):
--------------------------------------------------------
// ...
timer = setTimeout(
  () => {
    fn.apply(this, args);
  },
  delay // delay--> tempo de espera(segurar) p execução da fn principal novamente
);
// ...

* O delay é o tempo, em milissegundos, que o setTimeout esperará antes de executar a função de callback. No nosso exemplo, 1000 significa 1 segundo.

* Se o usuário parar de digitar por pelo menos 1 segundo, a função pesquisar será finalmente executada.


7. Criando a Versão "Debounced":
------------------------------------------------
...
let pesquisaDebounced = debounce(pesquisar, 1000);

* Aqui, estamos chamando a função debounce, passando nossa função pesquisar e um delay de 1000 milissegundos.

* O que debounce retorna é a nova função embrulhada, e nós a atribuímos à variável pesquisaDebounced. É essa nova função que vamos usar.

8. Adicionando o Event Listener:

document.getElementById('busca').addEventListener('input', (event) => {
  pesquisaDebounced(event.target.value);
});

Finalmente, nós adicionamos um event listener ao nosso campo de input com o ID busca.
O evento input dispara a cada vez que o valor do input muda (ou seja, a cada letra digitada).
Dentro do callback do addEventListener, nós chamamos pesquisaDebounced, passando o valor atual do input (event.target.value).


Como Tudo Isso Funciona na Prática (Fluxo):
------------------------------------------------------------------------------
1.O usuário começa a digitar no campo de busca.

2. Cada vez que uma letra é digitada, o evento input é disparado, e pesquisaDebounced(event.target.value) é chamado.

3. Dentro de pesquisaDebounced:
* clearTimeout(timer): Qualquer timer anterior é cancelado. Se o usuário digitou uma letra há 500ms e um timer estava contando, ele é zerado.
* timer = setTimeout(...): Um novo timer é iniciado, agendando a execução de pesquisar para daqui a 1 segundo.

4.Se o usuário continuar digitando (chamando pesquisaDebounced novamente) antes que 1 segundo se passe desde a última digitação, o timer anterior será cancelado e um novo timer será iniciado do zero.

5.A função pesquisar só será realmente executada se o usuário parar de digitar por, no mínimo, 1 segundo.

Benefícios do debounce:
---------------------------------------

* Otimização de Performance: Reduz o número de vezes que uma função cara (como uma requisição de rede) é executada.

* Melhora da Experiência do Usuário: Evita que a interface fique "travada" ou lenta devido a muitas operações sendo disparadas rapidamente.

* Controle de Fluxo: Permite controlar a frequência de eventos que disparam callbacks com alta frequência (redimensionamento de janela, scroll, digitação, etc.). */
