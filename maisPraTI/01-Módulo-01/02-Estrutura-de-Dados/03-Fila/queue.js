/* 
Filas
-----------------------
FIFO --> First In First Out 
*/

class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // cabeçalheo
    this.rear = null; // último elemento
    this.size = 0;
  }

  enqueue(valor) {
    let node = new Node(valor);
    if (this.rear) {
      this.rear.next = newNode;
    }

    this.rear = newNode;

    if (!this.front) {
      this.front = newNode;
    }

    this.size++;
  }

  dequeue(valor) {}
}
