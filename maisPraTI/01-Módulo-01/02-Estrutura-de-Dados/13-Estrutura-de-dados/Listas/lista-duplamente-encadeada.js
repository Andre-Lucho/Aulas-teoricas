/*

Lista Duplamente Encadeada
----------------------------------------   
Sabemos o começo (head) e o final dela (tail)
*/
class Node {
  constructor(valor) {
    this.valor = valor;
    this.anterior = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // cabeçalheo
    this.tail = null; // último elemento
    this.length = 0;
  }

  inserirInicio(valor) {
    let novo = new Node(valor);
    if (!this.head) {
      this.head = this.tail = novo;
    } else {
      novo.next = this.head;
      this.head.anterior = novo;
      this.head = novo;
    }
    this.length++;
  }

  inserirFim(valor) {
    let novo = new Node(valor);
    // a lista está vazia?
    if (!this.head) {
      this.head = this.tail = novo;
      //A lista está vazia e só tenho 1 element --> Tenho que dizer que seu inicio e seu final são iguais:
    } else {
      this.tail.next = novo; // tail de Node 1 aponta para  Node 2
      novo.anterior = this.tail; // Node2 anteior aponta para Node 1
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
  imprimir() {
    let atual = this.head;
    console.log(atual);

    let str = '';
    while (atual) {
      str += atual.valor + ' --> ';
      atual = atual.next;
      console.log(atual);
    }
    str += 'null';
    console.log(str);
  }
}

let list = new DoublyLinkedList();

// list.inserirFim(10);
// list.inserirFim(20);

list.inserirInicio(10);
list.inserirInicio(20);

list.imprimir();

// video = 51:27 - InserirEm() | removerEm()
