# Annotation e Inference

## Annotation (anotação)

### Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).

```
const produto: string = 'Livro';

let preco: number = 200;

const carro: {
marca: string;
portas: number;
} = {
marca: 'Audi',
portas: 5,
};

```

## Inference (Inferência)

### O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.

\*\* Com a Inferência, O TypeScript faz uma leiturta prévia do código, sem a execução em JS

```
const barato = preco < 200 ? true : 'produto caro';
```

## Funções

### As anotações serão SEMPRE necessárias quando lidamos com funções.

Como ele não executa, precisamos informar o tipo de parâmetro

```
function somar(a: number, b: number) {
return a + b;
}

somar(5, 10);
// somar("10", "10");

const nintendo = {
nome: 'Nintendo',
preco: '2000',
};

function transformarPreco(produto: { nome: string; preco: string }) {
produto.preco = 'R$ ' + produto.preco;
return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
```

### Exercício 1

Conserte a função com TypeScript

```
function normalizarTexto(texto) {
  return texto.trims().toLowercase();
}
```

### Exercício 2

Conserte as funções com TypeScript

```
const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);


```
