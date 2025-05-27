/* LIFO - Last In First */

// Dev Dojo = Java --> otimo
// Nelio Alves

class Node {
  constructor(valor) {
    this.valor = valor;
    this.next = null;
  }
}

class Stack {
  constructor(parameters) {
    this.top = null; // === this.head
  }

  push(value) {
    let novo = new Node(valor);
    novo.next = this.top;
    this.top = novo;
  }
  // utilizando uma lista p implementar a pilha
  pop() {
    if (!this.top) return null;
    let poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }
  peek() {
    if (!this.top) return null;
    return this.top.value;
  }
  inEmpty() {
    return this.top === null;
  }
}
