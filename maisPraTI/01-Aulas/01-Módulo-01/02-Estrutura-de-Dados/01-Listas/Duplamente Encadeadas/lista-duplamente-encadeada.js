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
    // HEAD aponta para um novo Node
    // TAIL sempre aponta para o 1 elemento (Node 1)
    // NEXT aponta para o Node anterior
    // ANTERIOR aponta para o novo Node (+ recente)

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
    // HEAD aponta para o 1 Node
    // TAIL sempre aponta para o novo Node (+ recente)
    // NEXT sempre aponta para o novo Node (+ recente), exceto o último = null
    // ANTERIOR aponta para o Node anterior

    let novo = new Node(valor);
    // a lista está vazia?
    if (!this.head) {
      this.head = this.tail = novo;
      //A lista está vazia e só tenho 1 element --> Tenho que dizer que seu inicio e seu final são iguais:
    } else {
      this.tail.next = novo; // Falando com Node 1 == Tail de Node 1 aponta para  Node 2
      novo.anterior = this.tail; // Node2 anteior aponta para Node 1
      this.tail = novo; // é igual ao último elemento
    }

    this.length++;
  }

  imprimirFrente() {}

  imprimirTras() {}

  inserirEm(index, valor) {
    if (index < 0 || index > this.length)
      throw RangeError('index está fora dos limites'); //flag == saiu do escopo --> trava
    if (index === 0) return this.inserirInicio(valor);
    if (index === this.length) return this.inserirFim(valor);

    let atual = this.head;

    for (let i = 0; i < index; i++) {
      atual = atual.next;
      console.log(atual);
    }
    // itera até o último elemento atual vai recebendo o valor de next

    let novo = new Node(valor);
    let noAnterior = atual.anterior; //estava no último Node --> aponta para o anterior do último

    // reordenando os ponteiros e 'inserindo':
    noAnterior.next = novo; // recebe o novo no next
    novo.anterior = noAnterior;
    novo.next = atual;
    atual.anterior = novo;

    this.length++;
  }

  removerEm(index) {
    if (index < 0 || index > this.length)
      throw RangeError('Índice está fora dos limites!');

    let removido;

    if (this.length === 1) {
      removido = this.head; // manter a referência do primeiro elemento
      this.head = this.tail = null;
    } else if (index === 0) {
      // se quiser remover o primeiro elem:
      removido = this.head;
      this.head = this.head.next;
      this.head.anterior = null;
    } else if (index === this.length - 1) {
      // se quiser remover o último elem:
      removido = this.tail; // manter a referência do último elemento
      this.tail = this.tail.anterior;
      this.tail.next = null;
    } else {
      // outro indice que não os acima:
      let atual = this.head;

      for (let i = 0; i < index; i++) {
        atual = atual.next;
      }

      // removendo:
      removido = atual;
      const { next, anterior } = atual;
      anterior.next = next;
      next.anterior = anterior;
    }

    this.length--;
  }

  imprimir() {
    let atual = this.head;
    // console.log(atual);

    let str = '';
    while (atual) {
      str += atual.valor + ' --> ';
      atual = atual.next;
      // console.log(atual);
    }
    str += 'null';
    console.log(str);
  }
}

let list = new DoublyLinkedList();

// list.inserirFim(10);
// list.inserirFim(20);
// list.inserirFim(30);

// list.inserirInicio(30);
// list.inserirInicio(20);
// list.inserirInicio(10);

// list.imprimir();
// list.inserirEm(2, 25);
// list.removerEm(1);
// list.imprimir();

// video 1:20 - Final do método removerEm()
