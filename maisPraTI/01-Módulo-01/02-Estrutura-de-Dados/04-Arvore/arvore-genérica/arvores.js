// Arvóres
//
// Estruturas de dados hierárquicas

// Exs. DOM, o HTML, Sistema de Arquivos, Banco de Dados, Collections Java, Compiladores, Machine Learning, Engine Gráfica, explorador de arquivos

// Árvore Genérica
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  removeChild(value) {
    this.children = this.children.filter((child) => child.value !== value);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue); //semelhante ao head - lista
  }

  traverseDFS(callback) {
    function recurse(node) {
      callback(node);
      node.children.forEach((child) => recurse(child));
    }
    recurse(this.root);
  }

  printTree(node = this.root, prefix = '', isLast = true) {
    // prefix - identaçao
    // isLast = ultimo elem do Pai
    console.log(prefix + (isLast ? '└── ' : '├── ') + node.value);

    const childCount = node.children.length;
    node.children.forEach((child, index) => {
      const isLastChild = index === childCount - 1; // verificando de fato o ultimo filho
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      this.printTree(child, newPrefix, isLastChild); // recursao
    });
  }
  // Lembrar que estão em Pilha
}

const tree = new Tree('A');

const B = new TreeNode('B');
const C = new TreeNode('B');
const D = new TreeNode('B');
const E = new TreeNode('B');
const F = new TreeNode('B');
const G = new TreeNode('B');
const H = new TreeNode('B');

tree.root.addChild(B);
tree.root.addChild(C);
tree.root.addChild(D);

B.addChild(E);
B.addChild(F);

C.addChild(G);
G.addChild(H);

function printNode(node) {
  console.log(node.value);
}

tree.traverseDFS(printNode);
