/*
ITERACAO
------------------------------------------------------
Estruturas de Repetição = For...in e For...of

Métodos de Arrays = ForEach, Map

*/

// Exemplo 1

const myObj = [
  {
    name: 'John',
    age: 30,
    cars: [{ car: 'Ford' }, { car: 'BMW' }, { car: 'Fiat' }],
  },
];

// for (elem of myObj) {
//   console.log(elem);
//   console.log(elem.cars);
// }

// for (elem in myObj) {
//   console.log(elem); // indices
//   console.log(myObj[elem]); // iteraçao === for...of puxando o 'elem'
// }

/*
Com Map:
---------------- */

// const a = myObj.map((elem) => elem.cars);
// console.log(a);

// Agora myObj é somente um Objeto:

const myObj1 = {
  name: 'John',
  age: 30,
  cars: [{ car: 'Ford' }, { car: 'BMW' }, { car: 'Fiat' }],
};

for (elem in myObj) {
  // console.log(elem); // índice
  // console.log(myObj[elem]); // valores
}
// For...In --> mesmo funcionamento com Array e Objetos

/*

Transformando um Obj em uma Array
---------------------------------------------------
let models = Object.values(myObj1);
console.log(models); // Transformando o Obj em Array

let b = models.forEach((elem, i) =>
  console.log({ elemento: elem, posicao: i }),
); // iterando com forEach
*/

//Exemplo 2

const myObj2 = {
  name: 'John',
  age: 30,
  cars: [
    { car: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
    { car: 'BMW', models: ['320', 'X3', 'X5'] },
    { car: 'Fiat', models: ['500', 'Panda'] },
    //i0// {car:"Ford", models:["Fiesta", "Focus", "Mustang"]}, //j0, j1, j2//
    //i1// {car:"BMW", models:["320", "X3", "X5"]}, //j0, j1, j2//
    //i2// {car:"Fiat", models:["500", "Panda"]} //j0, j1//
  ],
};

/*
  
1) com For...in:
  ------------------------  */

// for (elem in myObj2) {
// console.log(elem); // itera sobre == age, name, cars
// console.log(myObj2[elem]); // itera sobre == valores
// }

/*

  1) com For...of :
  ------------------
  */
// for (carro of myObj2.cars) {
//   console.log(carro);
//   // iterando sobre a array 'cars'
// }
// break;
// }

/*
  
2) com For simples:
  ------------------------  */

// if (elem === 'cars') {
//   const carrosArray = myObj2[elem];
//   for (let i = 0; i < carrosArray.length; i++) {
//     console.log(`Índice ${i}:`, carrosArray[i]);
//   }
// }
/*


// console.log(myObj2['age']);
// console.log(myObj2.age);

/*
Iterando apenas em cars[i].models:
  ----------------------------------------------
  
  1) Com forEach:
  ------------------------------------------------------  
  
  */

let carros = myObj2.cars;
// console.log(carros[2].models);

// carros.forEach((carro) => {
//   console.log(carro.car);
//   carro.models.forEach((modelo) => {
//     console.log(` - ${modelo}`);
//   });
// });

/*
  2) Com for...of :   
  ------------------------------------------------------

  */

// for (carro of carros) {
//   console.log(carro.car);
//   for (modelo of carro.models) {
//     console.log(` - ${modelo}`);
//   }
// }

/*
3) Com o For simples: 
-----------------------------------------------------

*/

let cars2 = '';

for (let i in myObj2.cars) {
  cars2 += myObj2.cars[i].car + ': ' + '\n';
  for (let j in myObj2.cars[i].models) cars2 += '\n' + myObj2.cars[i].models[j];
}
// console.log(cars2);

// 3

const livros = [
  {
    nome: 'Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    nota_imdb: 8.8,
    personagens: ['Frodo Bolseiro', 'Gandalf', 'Aragorn', 'Legolas', 'Gollum'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    nota_imdb: 7.6,
    personagens: [
      'Harry Potter',
      'Hermione Granger',
      'Ron Weasley',
      'Alvo Dumbledore',
    ],
  },
  {
    nome: 'O Poderoso Chefão',
    autor: 'Mario Puzo',
    nota_imdb: 9.2,
    personagens: [
      'Vito Corleone',
      'Michael Corleone',
      'Sonny Corleone',
      'Tom Hagen',
    ],
  },
  {
    nome: 'O Código Da Vinci',
    autor: 'Dan Brown',
    nota_imdb: 6.6,
    personagens: [
      'Robert Langdon',
      'Sophie Neveu',
      'Silas',
      'Jacques Saunière',
    ],
  },
  {
    nome: 'A Saga Crepúsculo: Crepúsculo',
    autor: 'Stephenie Meyer',
    nota_imdb: 5.2,
    personagens: ['Edward Cullen', 'Bella Swan', 'Jacob Black', 'Alice Cullen'],
  },
];

// console.log(livros[0].nome);

const personagens = livros.forEach((livro) => {
  console.log(`Livro: ${livro.nome}`);
  console.log(`Personagens:`);
  const personagem = livro.personagens;
  personagem.forEach((person) => {
    console.log(` - ${person}`);
  });
});

// Como add elementos nas: entre posicoes das chaves;
// entre posicoes do array dentro da chaves (posicao 4)

// 4

let supermercado = {
  nome: 'Zafarri',
  endereço: 'Av, Protasio Alves, n 3400',
  frutas: ['banana', 'maca', 'melao'],
  mercearia: ['pao', 'frios', 'doces'],
  bebidas: {
    agua: ['com gás', 'sem gas'],
    cerveja: ['Brahma', 'Skoll', 'Bud'],
  },
};
