/*
Arrays (Map e Filter)
--------------------------------------------------------

Métodos para iterarmos entre os valores de arrays. 

** Map, Filter e Reduce => mantém a array original e retorna uma nova array */

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

/*

Filter 
--------------------------------------------------------
Retorna uma array nova, que contém os items em que o retorno da função for Verdadeiro */

const precosFiltro1 = precos.filter((preco) => preco); // clone de 'const preco'

const precosFiltro = precos.filter((preco) => preco.includes('R$'));

console.log(precosFiltro);
/* 
1. 
function (preco) { 
console.log(preco) 
}

callback SEM returno == Nova array vazia!
não tenho return - ele é 'undefined'
preciso q o return seja true para obter uma nova array com os elementos de 'const preco';

2. 
com if('R$ 400'):
tenho no returno apenas com os elementos que atendem a condição true da array  'const preco' ;

3. 
Podemos utilizar o método includes --> ele retorna 'true or false' com o argumento que eu passar --> quero a Nova array com o retorno dos elementos 'true'*/

/*

Map 
--------------------------------------------------------
Retorna uma nova array, modificada com o retorno de cada item da função */

const precoNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
);

console.log(precoNumeros);

/*

Reduce
--------------------------------------------------------
Retorna um valor ou elemento único de sua última iteração, podendo ser: uma string, um námero, uma array ou um objeto */

const total = precoNumeros.reduce((acumulador, atual) => acumulador + atual);
// acumulador = valor anterior - no exemplo está somando
// ao final, tenho a opção de definir um valor inicial
console.log(total);
