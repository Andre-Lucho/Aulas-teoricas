/*

Destructuring
-----------------------------------

Permite a desestruturação de Arrays e Objetos. 
Atribuindo suas propriedades à novas variáveis. */

const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
};

const { marca, ano, portas } = carro;
// aqui, estamos criando 3 constantes diferentes, da mesma forma que abaixo:

// const marca = carro.marca
// const ano = carro.ano
// const portas = carro.portas

/* Evita a repetição de invocar o nome da constante a todo o momento, como abaixo:
carro.marca
carro.ano 
carro.portas

Agora, quando precisar puxar uma das propriedades da const 'carro', apenas faço referência ao nome da prop direto!

*/
// console.log(marca); // Fiat
// console.log(ano, portas); // 2018 | 4

/*

Destructuring Objects
-----------------------------------
A desestruturação irá facilitar a manipulação de dados.
Principalmente quando temos uma grande profundidade de objetos. */

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML'],
    },
    fisicas: {
      cadernos: ['Caderno 1'],
    },
  },
};

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

//Agora, com a Desestruturação:

const { livros, videos } = cliente.compras.digitais;
// Tenho 2 variáveis acima --> livros e videos, fazendo referêrncia a 'cliente.compras.digitais'

// console.log(livros);
// console.log(videos);

/*

Nesting
-----------------------------------
É possível aninhar uma desestruturação dentro de outra. 
*/

const cliente01 = {
  nome_1: 'Andre',
  compras_1: {
    digitais_1: {
      livros_1: ['Livro 10', 'Livro 22'],
      videos_1: ['Video CSS', 'Video React'],
    },
    fisicas_1: {
      cadernos_1: ['Caderno abc'],
    },
  },
};

const {
  fisicas_1,
  digitais_1,
  digitais_1: { livros_1, videos_1 },
} = cliente01.compras_1;

// // Tenho 4 variáveis acima --> fisicas_1, digitais_1 + (digitais_1: livros_1) e (digitais_1: videos_1);
// digitais_1: livros_1 --> hierarquia: livros_1 PERTENCE À (está contido em) digitais_1

// console.log(fisicas_1);
// console.log(digitais_1);
// console.log(livros_1);
// console.log(videos_1);

/*
** OBS:
-------------
Observar sempre a hieraquia das propriedades do objeto-pai */

/*

Nome das Variáveis
-----------------------------------
É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto.
É possível mudar o nome da variável final com ' : ' 
*/

const cliente3 = {
  nome: 'Andre',
  compras: 10,
};

// const { nome, compras } = cliente3;
// ou
const { nome: nomeCliente, compras: comprasCliente } = cliente3;

// console.log(nomeCliente, comprasCliente); //Andre | 10

/*

Valor Inicial
-----------------------------------

Caso a propriedade não exista o valor padrão dela será undefined .
É possível modificar este valor no momento da desestruturação. */

const cliente4 = {
  nome: 'Andre',
  compras: 10,
  email: 'andre@gmail.com',
  // prioridade
};
const { nome, compras, email = 'email@gmail.com', cpf = 10000 } = cliente4;
// console.log(email); // andre@gmail.com; caso não haja a propriedade email declarada n obj --> email@gmail.com
// console.log(cpf); // 10000

/*

Destructuring Arrays
-----------------------------------
-----------------------------------

Para desestruturar array's você deve colocar as variáveis entre [] colchetes. */

const frutas = ['Banana', 'Uva', 'Morango'];
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
// Com destructuring
const [primeira, segunda, terceira] = frutas;
// console.log(primeira); // Banana

/* 
Usa-se colchetes, ao inves de {};
Cada valor corresponde a uma POSIÇÃO no Array-pai ; posso utilizar qquer nome para as variáveis, pois não depende do nome  propriedade(Objeto)

frutas[0] = primeira = Banana

*/

/*

Declaração de Variáveis
-----------------------------------

A desestruturação pode servir para declararmos uma sequência de variáveis através de uma array */

const primeiro = 'Cachorro';
const segundo = 'Gato';
const terceiro = 'Cavalo';

// ou

// const [primeiro, segundo, terceiro] = ["Cachorro", "Gato", "Cavalo"];

/*

Argumento Desestruturado
-----------------------------------

Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração. */

// function handleKeyboard(event) {
//   console.log(event.key);
// }

/* com Destructuring: */

// Lembrando: event é um objeto!!
function handleClick({ type, target, target: { lastChild }, x, y }) {
  // REFERENCIA --> event
  console.log(type);
  console.log(target);
  console.log(lastChild);
  console.log(x);
  console.log(y);
}

document.addEventListener('click', handleClick);

// function abc(event) {
//   console.log(event);
// }

// document.addEventListener("click", abc);

/*

Exercícios
-----------------------------------

1 - Extraia o 'background-color', 'color' e 'margin-left' do btn utilizando desestruturação*/

const btn = document.querySelectorAll('.button');

// Método do window == getComputedStyle() -> pega todos os estilos CSS atuais setados para  o elemento

// function handleClick({ target }) {
//   // {target} = event.target
//   // console.log(target);
//   const btnStyles = getComputedStyle(target);
//   // console.log(btnStyles);
//   const { backgroundColor, color, margin } = btnStyles;
//   console.log(backgroundColor, color, margin);
// }

// btn.forEach((element) => {
//   element.addEventListener("click", handleClick);
// });

// btn.style.color = serve p atribuir novos valores CSS via JS!!
// Não consigo pegar valores atuais (a menos que eles estejam declarados inline no HTML ou via JS!)

/*2 - Troque os valores das variáveis abaixo utilizando desestruturação*/
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

// cursoAtivo = cursoInativo; // HTML
// cursoInativo = cursoAtivo[ // HTML = HTML
// console.log(cursoAtivo, cursoInativo); // HTML, HTML

// com desestrututação:

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

// console.log(cursoAtivo, cursoInativo); // HTML, JavaScript

/*3 - Corrija o erro abaixo */

const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};
const { cor: bobCor } = cachorro;

// console.log(bobCor);
