/*
TAD - tipos abstratos de dados
------------------------------------------------------
ABSTRAÇÃO --> RESTRINGIR O ESCOPO
ENCAPSULAMENTO
Ocultação de Informação
Separação entre interface e Implementação

Implementações:
------------------------------------------------------

Listas (Encadeadas, duplamente encadeadas e circulares)
Pilhas
Filas
Arvores (de decisão, binária e de busca)
Hash
Mapa
Grafo 


LISTAS 
-------------------------
Aloca um espaço na memória, indicando um espaço para a alocação de um próximo dado não que não necessita ser contíguo (continuado/ Linear)--> Alocação de memória Dinânica
Tenho acesso apenas ao 1 elemento
qd deleto, deixo o SO poder sobreescrever nesse espaço
Inserção e deleção é mais rápida


Listas x Arrays
-----------------------------------------------------

Array --> alocação de memoria contígua (linear) e limitada
Mais fácil acesso, porém necessito do índice
Qd deleto, deixo o espaço vazio
achar um elementos é mais rápido

A) Lista encadeada --> aponta p o próximo valor
B) Lista duplamente encadeada --> aponta p o próximo valor e para o anterior

*/

let car = {
  nome: 'Fiat',
  cor: 'Vermelho',
};

class Car {
  constructor(nome, cor) {
    this.nome = nome;
    this.cor = cor;
  }
}

const car2 = new Car('andre', 'azul');
console.log(car2);

/* Criação e Funcionamento de uma Lista demostrada em JS
------------------------------------------------------------------------------------*/

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null; // apontado para um próximo elemento, porém ele é vazio
  }
}
// representa cada posição de uma Lista encadeada

class SimplyLinkedList {
  constructor() {
    this.head = null; // onde ela começa (cabeçalheo)
  }

  inserirInicio(valor) {
    let novo = new Node(valor); // adicionando um novo node
    novo.proximo = this.head; // proximo - null
    this.head = novo; // o que eu passei(valor) na criação
  }

  // cada novo elemento da lista

  imprimir() {
    let atual = this.head;
    let str = '';
    while (atual) {
      str += atual.valor + '--> ';
      atual = atual.proximo;
    }
    str += 'null';
    console.log(str);
  }
}

let lista = new SimplyLinkedList();

lista.inserirInicio(10);
lista.inserirInicio(9);
lista.imprimir();

// Em um Array eu tenho que percorrer o array p localizar os elementos

class Node2 {
  constructor(valor) {
    this.valor = valor;
    this.anterior = null;
    this.proximo = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null; // onde ela começa (cabeçalheo)
  }

  inserirInicio(valor) {
    let novo = new Node(valor); // adicionando um novo node
    novo.next = this.head;
    if (this.head) {
      this.head.anteior = novo;
    }
    this.head = novo; // o que eu passei(valor) na criação
  }

  // cada novo elemento da lista

  inserirFim() {}

  imprimirFrente() {}

  imprimirTras() {}
}
