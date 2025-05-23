class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null; // ponteiro
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = null;
  }

  /* add no INICIO da lista
  -----------------------------------------------------
  HEAD sempre tem os valores atuais e NEXT armazena e aponta para os valores anteriores*/

  inserirInicio(valor) {
    let novo = new Node(valor);
    novo.next = this.head;
    this.head = novo;
  }

  /* 
  add no FINAL da lista
  -----------------------------------------------------  
  */

  push(valor) {
    let node = new Node(valor);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      // alcançou o final de uma lista --> ponteiro current.next for  = undefined ou null:
      while (current.next != null) {
        current = current.next;
      }
      console.log(this.head);
      current.next = node;
      console.log(this.head);
    }
    this.count++;
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

const list = new LinkedList();

// list.inserirInicio(10);
// list.inserirInicio(20);
// list.imprimir();

list.push(10);
list.push(20);
