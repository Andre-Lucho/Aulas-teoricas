/* 

ARRAY x ITERACAO

[].forEach(callback(itemAtual, index, array))
------------------------------------
------------------------------------ 

A função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

*/

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function (item, index, array) {
  // console.log(item.toUpperCase());
});

// MAIUSCULO apenas no console --> não modificou a array original 'carros'

/*

IMPORTANTE:
-----------------
-----------------

O forEach não tem como objetivo trazer um retorno válido, apenas fazer as modificações em cada item...
--> O método sempre retorna 'undefined' === Não tem retorno
==> o resultado de uma função sem retorno é 'undefined'; 

Devo guardar EM UMA VARIÁVEL DENTRO da array!

*/

/*

Modicar a Array Original
------------------------------------ 

O terceiro argumento do callback é uma referência direta ao array original.
Se modicado irá também modicar a array original.
É melhor utilizarmos o .Map para isso */

// a)
carros.forEach((item, index, array) => {
  // array[index] = item + "_teste";
});
// console.log(carros2); // (3) ['Ford_teste', 'Fiat_teste', 'Honda_teste'];

// b)
const cars = carros.forEach(function (item, i, array) {
  // let a = item.toUpperCase();
  // array[i] = a;
  // console.log(a);
  // ou
  array[i] = item.toUpperCase();
  // ou
  // return (array[i] = item.toUpperCase());
  // OBS:
  // sou obrigado, ou a gravar em uma variável, e/ou no index da array; ou, utilizar return, pois o forEach não tem return
});
// console.log(cars); //undefined
// console.log(carros);

// passando os itens da array 'carros' para Maiúsculo.

// c)
const a = carros.forEach((item, i, array) => {
  // array[i] = item.includes("teste");
  array.push('teste');
  // console.log(array);
});

// console.log(a); //undefined
// console.log(carros);
// dando push com 'teste' depois da array 'carros'

/*

O forEach não tem como objetivo trazer um retorno válido, apenas fazer as modificações em cada item...
--> O método sempre retorna 'undefined' === Não tem retorno
É melhor utilizarmos o método .MAP para isso

OBS:
Acima, estou modificando a array dentro do loop!Ou forçando um retorno --> ln 57



[].map()
------------------------------------
------------------------------------ 

[].map(callback(itemAtual, index, array))
------------------------------------ 

Funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, 
retorna uma NOVA ARRAY com VALORES ATUALIZADOS de acordo com o RETURN de cada iteração. 
*/

const carros3 = ['Ford', 'Fiat', 'Honda'];

const newCarros = carros3.map((item) => {
  return item.toUpperCase();
});

// console.log(carros3); // ['Ford', 'Fiat', 'Honda'];

// console.log(newCarros); // ['FORD', 'FIAT', 'HONDA'];

/*
EXEMPLO b) */

carros3.map((item) => {
  return item.toUpperCase();
});

// console.log(carros3); // ['Ford', 'Fiat', 'Honda'] ==> retorno não está sendo armazenado.

// b.1)

const newCars = carros3.map((item) => {
  return item.toUpperCase();
});

// console.log(newCars);

/*

Valor Retornado
------------------------------------ 

Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined. */

const carros4 = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros4.map((item) => {
  const novoValor = 'Carro ' + item;
});
// console.log(newCarros2); // [undefined, undefined, undefined];

/*

[].map() vs [].forEach()
------------------------------------ 

Se o objetivo for modicar os valores da array atual, sempre utilize o .MAP, pois assim uma nova array com os valores modicados é retornada 

** PODEMOS IMEDIATAMENTE ITERAR NOVAMENTE SOBRE ESSES NOVOS VALORES 
--> UTILIZANDO PROPRIEDADES E METODOS DE ARRAYS!!

*/

const numeros3 = [2, 4, 6, 8, 10, 12, 14];

// const numerosX3 = numeros3.map(function (n) {
//   return n * 3;
// });

// console.log(numerosX3); // [6, 12, 18, 24, 30, 36, 42];

const numerosX3 = numeros3.map((n) => n * 3).pop();
// aqui, a forma reduzida da Arrow função não precisa passar return

// console.log(numerosX3); // retorna 42

/*

[].map() com Objetos
------------------------------------ 

Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto. */

const aulas = [
  { nome: 'HTML 1', min: 15 },
  { nome: 'HTML 2', min: 10 },
  { nome: 'CSS 1', min: 20 },
  { nome: 'JS 1', min: 25 },
];
const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas); // ;

/*
ou declarando a funcão separadamente
------------------------------------ */

const puxarTempo = (aula) => aula.min;

const tempoAulas2 = aulas.map(puxarTempo);
// console.log(tempoAulas2); // [15, 10, 20, 25]

/*

[].reduce()
------------------------------------
------------------------------------ 

[].reduce(callback(acumulador, valorAtual, index,array), valorInicial)

Executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador , mas é na verdade apenas o retorno da iteração anterior. */

/*
ACUMULADOR = ACUMULA O RETONO DO LOOP ANTERIOR */

const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0);

total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100); // 100 = valor inicial
total2; // 165

/*

Reduce Passo a Passo 1
------------------------------------ 

O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração.
Nas iterações seguintes este valor passa a ser o retornado pela anterior. */

const aulas3 = [10, 25, 30];

/* 
1.
aulas3.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10
  
2.
aulas3.reduce((10, 25) => {
  return 10 + 25;
}, 0);  // retorna 35
  
3.
aulas3.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65

/*

Reduce Passo a Passo 2
------------------------------------ 

Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

const aulas = [10, 25, 30];

1.
aulas.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

2.
aulas.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65

*/

/*

Maior Valor com [].reduce()
------------------------------------ */

const numeros2 = [10, 25, 60, 5, 35, 10];
const maiorValor = numeros2.reduce(
  (anterior, atual) => (anterior > atual ? anterior : atual),
  0,
);

// console.log(maiorValor); // 60

/*

Podemos retornar outros valores 
------------------------------------ 
*/

const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const listaAulas = aulas4.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome; // index do novo objeto retonado --> {} = valorInicial
  return acumulador;
}, {});

// console.log(listaAulas);

/*

Passo a passo Reduce
------------------------------------ 

Passo a passo do método reduce criando um Objeto.
------------------------------------ 


1.
aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {})

2.
aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {})

3.
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min:
20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {})

4.
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome:
'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {})

*/

/*
[].reduceRight()
------------------------------------
------------------------------------ 

Existe também o método [].reduceRight() , a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita. */

const frutas = ['Banana', 'Pêra', 'Uva'];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

/*

Métodos de Iteração para alguma Verificação
------------------------------------ 
------------------------------------ 


[].some() --> pelo menos 1 TRUE
------------------------------------
------------------------------------ 

[].some() , se pelo menos um return da iteração for truthy, ele retorna true. */

const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas2.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numbers = [0, 43, 22, 88, 101, 2];
const temMaior = numbers.some(maiorQue100); // true

/*

[].every() --> todos TRUE
------------------------------------
------------------------------------ 

[].every() , se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false. */

const fruits = ['Banana', '', 'Pêra', 'Uva'];
// False pois pelo menos uma fruta está vazia '', o que é um valor false

const arraysCheias = fruits.every((fruta) => {
  // console.log(fruta);
  return fruta; // false --> o loop parou no index 1
});

const numbers2 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numbers2.every((x) => x > 3); // true

/*

[].find() e [].findIndex() --> sempre o 1° valor encontrado q satisfaça a condição
------------------------------------ 
------------------------------------ 

[].find() , retorna o valor atual da PRIMEIRA iteração que retornar um valor truthy. 
Já o [].findIndex() , ao invés de retornar o valor, retorna o index deste valor na array. */

const numbers3 = [6, 43, 22, 88, 101, 29];
const buscaMaior_45 = numbers3.find((x) => x > 45); // 88

const fruits2 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = fruits2.findIndex((fruta) => {
  return fruta === 'Uva';
}); // 2

/*

[].filter()
------------------------------------ 
------------------------------------ 

[].filter() retorna uma ARRAY (lista) com a todos os valores 
que durante a sua iteração retornaram um valor = TRUE. */

const fruits3 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = fruits3.filter((fruta) => {
  // console.log(fruta); // lista todas
  // return true; // retorna toda a array original
  return fruta; //somente os valores 'true'
});
// console.log(arrayLimpa); // se não tiver return --> [] vazia
// console.log(arrayLimpa); //com return === [ 'Banana', 'Uva', 'Maçã' ]

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter((x) => x > 45); // [ 88, 101 ]

/*

Filter em Objetos
------------------------------------ */

const classes = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const aulasMaiores15 = classes.filter((aula) => {
  return aula.min > 15;
});

// console.log(aulasMaiores15); //[ {nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25} ]

/*

Exercícios
------------------------------------ 
1.

Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso

<section class="curso">
  <h1>Web Design Completo</h1>
  <p>Este curso é para quem deseja entrar ou já está no mercado de criação de websites.</p>
  <span class="aulas">80</span>
  <span class="horas">22</span>
</section>

<section class="curso">
  <h1>WordPress Como CMS</h1>
  <p>No curso de WordPress Como CMS, você aprende do zero como pegar qualquer site em HTML e torná-lo otalmente gerenciável com a plataforma do WordPress.</p>
  <span class="aulas">46</span>
  <span class="horas">9</span>
</section>

<section class="curso">
  <h1>UI Design Avançado</h1>
  <p>Este é um curso avançado de User Interface Design.</p>
  <span class="aulas">55</span>
  <spanclass="horas">15</span>
  <span class horas >15</span>
</section> 
Arquivo HTML

*/

const cursosHTML = document.querySelectorAll('.curso');
const newCursos = Array.from(cursosHTML);
// console.log(newCursos);

const cursosListaObjetos = newCursos.map((aula, index) => {
  // console.log(aula);
  const titulo = aula.querySelector('h1').innerText;
  const descricao = aula.querySelector('p').innerText;
  const numeroAulas = aula.querySelector('.aulas').innerText;
  const totalHoras = aula.querySelector('.horas').innerText;
  return {
    // Titulo: titulo,
    // Descricao: descricao,
    // Numero_aulas: numeroAulas,
    // Horas_totais: totalHoras,
    // ou
    titulo,
    descricao,
    numeroAulas,
    totalHoras,
  };
});

// console.log(cursosListaObjetos);
// console.log(newCursos);

// .map, pois quero retonar uma array
// return {} --> retorna um objeto

/* 
2. Retorne uma lista com os números maiores que 100 */

const numbers4 = [3, 44, 333, 23, 122, 322, 33];

const newList = numbers4.filter((n) => n > 100);
// console.log(newList);

/* 3. Verifique se Baixo faz parte da lista de instrumentos e retorne true */

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const verify = instrumentos.some((instr) => instr === 'Baixo');
// console.log(verify);

// .find --> retorna o 1°

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const valorTotal = compras.reduce((acc, item) => {
  // const valor = +item.preco.replace("R$ ", "").replace(",", ".");
  //ou
  const valor = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
  // console.log(valor);
  return acc + valor;
}, 0);

// console.log(valorTotal);

/* 
Aula YouTube - Revisão Map, Filter e Reduce
----------------------------------------------------------------------

Esses métodos de Array retornam um novo array, exceto reduce(), que tem como retorno um VALOR ÚNICO final */

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precoFiltro = precos.filter((preco) => preco.includes('R$')); // + abreviado --> Arrow function c/ APENAS 1 LINHA  já possui return!!

/* outras formas:
a) return preco.includes('R$');
b) if (preco.includes('R$')) return true;
*) includes -> método de string
**) posso usar Regular expression */

const precoNumeros = precoFiltro.map((preco) => +preco.replace('R$', '')); //substituindo e retornando em Number

/*
a) Number(preco.replace('R$', '')) --> mesma coisa == usando os métodos de Number */

const total = precoNumeros.reduce((acc, itemAtual) => acc + itemAtual);

console.log(total);
