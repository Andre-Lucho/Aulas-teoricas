/*

LISTAS 
-------------------------
Tipo Abstrato de Dado (TAD) do tipo Linear.

As listas ligadas armazenam uma coleção sequencial de elementos; no entanto, de modo diferente dos arrays, nas listas ligadas os elementos não são posicionados de forma contígua na memória (não linear - Alocação de memória Dinânica).
Cada elemento é constituído de um nó que armazena o valor propriamente dito, além de uma referência (também conhecida como ponteiro ou ligação) que aponta para o próximo elemento.

Não é necessário deslocar os elementos quando eles são adicionados ou removidos como nos Arrays.

Em um array, podemos acessar diretamente qualquer elemento em qualquer posição; 
em uma lista ligada, temos acesso apenas ao 1 elemento. Se quisermos acessar um elemento no meio, será necessário partir do início (cabeça ou head) e iterar pela lista até encontrarmos o elemento desejado.


Exemplos do mundo real
-----------------------------------

Caça ao tesouro: 
Você tem uma pista, e esta será o ponteiro para o lugar em que a próxima pista poderá ser encontrada.
Com essa ligação, você irá para o próximo local e obterá outra pista que levará para a próxima. A única maneira de obter uma pista que está no meio da lista é seguir a lista desde o início (partindo da primeira).

Trem:
Um trem é constituído de uma série de carros (também conhecidos como vagões). Cada um dos carros ou vagões está ligado a outro. Você pode facilmente desconectar um vagão, mudá-lo de lugar, ou ainda adicionar ou remover um vagão.
Cada vagão é um elemento da lista e a ligação entre os vagões é o ponteiro


Qd deleto, deixo o SO poder sobreescrever nesse espaço
Inserção e deleção é mais rápida


Listas x Arrays
-----------------------------------------------------

Array --> Estrutura de dados linear, com alocação de memoria contígua (linear) e limitada.
Em JS, Array é um Objeto
Mais fácil acesso, porém necessito do índice
Qd deleto, deixo o espaço vazio
achar um elementos é mais rápido

A) Lista encadeada --> aponta p o próximo valor
B) Lista duplamente encadeada --> aponta p o próximo valor e para o anterior */

/*

Lista Encadeada
----------------------------------------   */

/* 
Obs.: Referências e Objetos

Em JavaScript, quando você trabalha com objetos (e instâncias de classes como Node são objetos), as variáveis não armazenam o objeto em si, mas sim uma REFERÊNCIA para o local onde esse objeto está armazenado na memória. 
Pense em uma referência como um endereço. */

class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null; // ponteiro
  }
}

/* Node 1 é um obj que represanta um novo elemento = valor + posição na lista
Ele aloca e aponta para um endereço de memória 0x100
Ao criar um novo Node 2 ele aloca e aponta para outro endereço de memória 0x200 */

class LinkedList {
  constructor() {
    this.head = null;
    this.count = null;
  }

  /* add no INICIO da lista
-----------------------------------------------------
HEAD sempre tem os valores atuais e NEXT armazena e aponta para os valores anteriores*/

  unshift(valor) {
    let novo = new Node(valor); // novo Node(elemento)
    novo.next = this.head; // next <= null
    this.head = novo;
    // console.log(this.head);

    /* 
(1)head está com os valores de Node e dizendo que ele é o INICIAL!
(2) Head, agora, armazena em next a informação do Node 1 e em valor tem o valor de Node 2
Node 1 {next: null, valor: 10} | Node 2 {next: Node {next: null, valor: 10}, valor: 20} */
  }

  /* 

add no FINAL da lista
-----------------------------------------------------  
Cada chamada do método push :

HEAD
------------  
(1) this.head = {valor: (valor do argumento passado) next: (null)}
(demais)
this.head = {valor: (valor do argumento do antigo Node) next: (Todo o novo Node com o argumento atual)}

*/

  push(valor) {
    let node = new Node(valor);
    // novo Node(elemento) -->
    // (1) Node {next: null, valor: 10} |
    // (2) Node {next: null, valor:20} |
    // (3) Node {next: null, valor:30}
    let current;
    if (this.head == null) {
      this.head = node; // add o primeiro elemento :
      // (1) Node 1 {next: null, valor: 10}
    } else {
      //(2)
      //(3) this.head --> Node {next: Node 2 {next: null, valor 20} valor: 10}
      current = this.head; // apontando para 'head' == referência de início da lista -->
      // (2) Node 1 {next: null, valor: 10} |
      // (3) Node {next: Node 2 {next: null, valor 20} valor: 10}
      /* IMPORTANTE : Current recebe a referência de memória de THIS.HEAD */

      // alcançou o final de uma lista --> ponteiro current.next for  = undefined ou null:
      while (current.next != null) {
        current = current.next;
        // (2) Node 1 {next: null, valor: 10} --> não entra no while
        // (3) entra no while --> current = Node 2 {next: null, valor 20}-> apontando para o final da Lista == dá a referência onde está o final da Lista
      }
      // e atribui o novo elemento a next para criar a ligação

      current.next = node; // ligando o ponteiro next do elemento current (que é o último) ao nó que queremos adicionar na lista

      // console.log(this.head);
      // (* 1)Node { next: null, valor: 10}
      // (2) Node {next: Node 2 {next: null, valor 20} valor: 10}
      // (3) Node {next: Node 3 {next: null, valor 30} valor: 20}
    }
    this.count++;
    // *
    // console.log(this.count); // 1 | 2 | 3
  }

  imprimirUnshift() {
    let atual = this.head;
    // console.log(atual); // Node 2 {next: Node {next: null, valor: 10}, valor: 20}

    let str = '';
    while (atual) {
      str += atual.valor + ' --> '; //  str => (1) 20 --> (2) 10 -->
      atual = atual.next; // (1) Node {next: null, valor: 10} --> (2) null
      // console.log(atual);
    }
    str += 'null';
    // console.log(str);
  }

  imprimirPush() {
    let atual = this.head;
    // console.log(atual);
    // (1) Node {valor: 10, next: null}
    // (2) Node {next: Node 2 {next: null, valor: 20} , valor: 10}
    // (3) Node {next: Node 3 {next: null, valor: 30} , valor: 20}
    let saida = '';
    while (atual) {
      saida += atual.valor + ' --> ';
      // (1) 10 --> (2) 20 --> (3) 30 -->
      // console.log(saida);
      atual = atual.next;
      // (1) Node 2 {next: null, valor: 20} | (2) null
      // console.log(atual);
    }
    saida += 'null';
    // console.log(saida); // (1) 10 --> (2) 20 --> (3) null
  }
}

const list = new LinkedList(); // aqui estou estanciando o objeto 'list'

// list.unshift(10);
// list.unshift(20);
// list.imprimirUnshift();

list.push(10);
list.push(20);
list.push(30);

list.imprimirPush();
