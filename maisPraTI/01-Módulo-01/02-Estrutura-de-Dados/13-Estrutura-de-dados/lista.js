/*

excalidraw

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
B) Lista duplamente encadeada --> aponta p o próximo valor e para o anterior

*/

function defaultEquals(a, b) {
  return a === b;
}

/*

Lista Encadeada
----------------------------------------   */

class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    // this.count = 0; // {2}
    this.head = null; // {3}
    // this.equalsFn = equalsFn; // {4}
  }

  // add na posição anterior
  unshift(valor) {
    let novo = new Node(valor); // adicionando um novo node
    novo.next = this.head; // next <= null
    this.head = novo; // o que eu passei(valor) na criação -- aqui eu tenho o valor true
  }

  push(valor) {
    const node = new Node(valor); // {1}
    let current;
    if (this.head == null) {
      this.head = node; // add o primeiro elemento
    } else {
      current = this.head; // apontando para 'head' == referência de início da lista

      // sabemos que alcançamos o final de uma lista quando o ponteiro current.next for  = undefined ou null:

      while (current.next != null) {
        // verifica o último item --> se ele é válido = temos um item na última posição
        current = current.next; // agora, ele fica 'null' p indicar o final da lista
      }
      // e atribui o novo elemento a next para criar a ligação
      current.next = node; // ligando o ponteiro next do elemento current (que é o último) ao nó que queremos adicionar na lista
    }
    this.count++; // {7}
  }

  imprimir() {
    let atual = this.head; // == 2 elemento
    let str = '';
    while (atual) {
      str += atual.valor + ' --> '; // "10 --> ..."
      atual = atual.next;
    }
    str += 'null';
    console.log(str);
  }
}

const list = new LinkedList(); // aqui estou estanciando o objeto 'list'
// list.push(15);
// list.push(10);

// list.imprimir();

/*

Lista Duplamente Encadeada
----------------------------------------   */
class Node2 {
  constructor(valor) {
    this.valor = valor;
    this.anterior = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null; // onde ela começa (cabeçalheo)
    this.tail = null; // último elemento
    this.length = 0;
  }

  inserirInicio(valor) {
    let novo = new Node(valor); // estanciando o obj --> adicionando um novo node
    novo.next = this.head;
    if (!this.head) {
      this.head = this.tail = novo;
    } else {
      novo.proximo = this.head;
      this.head.anterior = novo;
      this.head = novo;
    }
    this.length++;
  }
  // cada novo elemento da lista

  inserirFim() {
    let novo = new Node(valor);
    if (!this.head) {
      // a lista está vazia?
      this.head = this.tail = novo; // a lista está vazia e só tenho 1 element
    } else {
      this.tail.next = novo;
      novo.anterior = this.tail;
      this.tail = novo; // é igual ao último elemento
    }
    this.length++;
  }

  imprimirFrente() {}

  imprimirTras() {}

  inserirEm(indice, valor) {
    if (indice < 0 || indice > this.length)
      throw RangeError('Indice está fora dos limites'); //flag == saiu do escopo
    if (indice == 0) return this.inserirInicio(valor);
    if (indice === this.length) return this.inserirFim(valor);

    let atual = this.head;

    for (let i = 0; i < indice; i++) {
      atual = atual.proximo;
    }

    let novo = new Node(valor);
    let noAnterior = atual.anterior;

    noAnterior.proximo = novo;
    novo.anterior = noAnterior;
    novo.proximo = atual;
    atual.anterior = novo;

    this.length++;
  }

  removerEm(indice) {
    if (indice < 0 || indice > this.length)
      throw RangeError('Índice está fora dos limites!');

    let removido;

    if (this.length === 1) {
      removido = this.head;
      this.head = this.tail = null;
    } else if (indice === 0) {
      removido = this.head;
      this.head = this.head.proximo;
      this.head.anterior = null;
    } else if (indice === this.length - 1) {
      removido = this.tail;
      this.tail = this.tail.anterior;
      this.tail.proximo = null;
    } else {
      let atual = this.head;

      for (let i = 0; i < indice; i++) {
        atual = atual.proximo;
      }

      removido = atual;
      const { proximo, anterior } = atual;
      anterior.proximo = proximo;
      proximo.anterior = anterior;
    }
    this.length--;
  }
}
