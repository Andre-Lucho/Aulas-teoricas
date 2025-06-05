/* 
Filas
-----------------------
FIFO --> First In - First Out */

class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}

// utilizando uma lista Duplamente Encadeada p implementar a os métodos da Fila
class Queue {
  constructor() {
    this.front = null; // cabeçalheo
    this.rear = null; // último elemento
    this.size = 0;
  }

  enqueue(valor) {
    let newNode = new Node(valor);
    if (this.rear) {
      this.rear.next = newNode; // apontando p o final da fila
    }

    this.rear = newNode; // add ao final da fila

    if (!this.front) {
      this.front = newNode;
    }
    // só tenho 1 elem == é o mesmo

    this.size++;
  }

  dequeue(valor) {
    // dequeue === pop()
    // pop() {
    //   if (!this.top) return null;
    //   let poppedValue = this.top.value;
    //   this.top = this.top.next;
    //   return poppedValue;
    // }
    // bota this.front = next dele e return ele e diminui o size
    // verificar se a fila tem front e tem rear p não retirar o último elemento
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue);

// Processamento de dados em nuvem
