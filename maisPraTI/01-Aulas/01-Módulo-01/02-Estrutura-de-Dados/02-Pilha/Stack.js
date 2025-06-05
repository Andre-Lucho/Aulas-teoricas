/* LIFO - Last In - First Out
---------------------------------------
Pode ser implementada com arrays ou Listas
Os Nodes são empilhados verticalmente  */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// utilizando uma Lista Encadeada p implementar a os métodos da Pilha
class Stack {
  constructor() {
    this.top = null; // === this.head
    this.length = 0;
  }

  // Next sempre aponta para o de baixo da pilha() e this.top para o Node novo

  push(value) {
    let novo = new Node(value);
    novo.next = this.top;
    this.top = novo;
  }
  pop() {
    if (!this.top) return null;
    let poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }
  peek() {
    if (!this.top) return null;
    return this.top.value; // pega o valor do primeiro da pilha
  }
  inEmpty() {
    return this.top ? null : "it's not empty";
  }
}

let stack = new Stack();
console.log(stack);

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.inEmpty());
