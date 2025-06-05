//1.
//Acessando uma prop = obj dentro de um obj
const myObj = {
  name: 'John',
  age: 30,
  cars: {
    car1: 'Ford',
    car2: 'BMW',
    car3: 'Fiat',
  },
};

let a = myObj.cars.car2;
// console.log(a)

//1.a)
//abaixo, mesmo exemplo acima - porem com hiperlink
let pai = 'cars';
let filho = 'car2';

let b = myObj[pai][filho];
// console.log(b)

//2.
//Acessando um objeto dentro de um array como valor de uma propriedade de objeto
const myObj1 = {
  name: 'John',
  age: 30,
  cars: [{ car: 'Ford' }, { car: 'BMW' }, { car: 'Fiat' }],
};

let c = myObj1.cars[1];
// console.log(c)

//3.
// O valor é um dos atributos da propriedade de um obj
// Outros atributos são: enumeráveis, configuráveis ​​e graváveis;
// ** Em JavaScript, todos os atributos podem ser lidos, mas apenas o atributo value pode ser alterado **
// (e somente se a propriedade for gravável).

//3.1 ) DELETAR PROPRIEDADES
// delete Objeto.nomePropriedade

// 4.
// Exibir um objeto JavaScript produzirá [object Object].
// Algumas soluções comuns para exibir objetos JavaScript são:
// a) Exibir as propriedades do objeto por nome
// b) Exibir as propriedades do objeto em um loop
// c) Exibir o objeto usando Object.values()
// d) Exibir o objeto usando JSON.stringify()

// c) Exibindo o objeto usando Object.values()
// /QQuer Obj JS pode ser convertido em um Array usando Object.values():

const myObj2 = {
  name: 'John',
  age: 30,
  car: 'Celta',
};

const array = Object.values(myObj2);
console.log(array);

// d) Exibir o objeto usando JSON.stringify()
// Qualquer objeto JavaScript pode ser stringificado (convertido em uma string) com a função JSON.stringify():

const myString = JSON.stringify(myObj2);
console.log(myString);

// Stringificando Arrays

const arr = ['John', 'Peter', 'Sally', 'Jane'];

let arr2 = JSON.stringify(arr);
console.log(arr2);
