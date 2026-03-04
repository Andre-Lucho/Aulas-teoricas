async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  // handleCursos(json);
  handleCursos2(json);
}
fetchCursos();

/*

1)
---------------------

function handleCursos(data: unknown) {
  // aqui, o TS verifica internamente se data é uma instância de Array
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  // aqui, o TS não executa JS (método do Array)... como ele sabe que é um array? --> usa Type Predicate
  if (Array.isArray(data)) {
    console.log('É array');
  }
}
*/

/*

2)
----------------------- */

// function tipo User Type Guard:
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
// type predicate 'is' ==> o retorno da função é um valor booleano
// value is string ==> indica que o retorno de 'value' é uma string

function isString2(value: unknown): value is string {
  return typeof value === 'number';
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toUpperCase());
  }
}

function handleData2(data: unknown) {
  if (isString2(data)) {
    console.log(data.toUpperCase());
  }
}

// handleData('Origamid');
// handleData(200); // nem chega a executar e não dá erro --> não passa no Type Guard

// handleData2(200); //erro passou no type guard, mas o método não é de Number

/*

3 ) Objetos
----------------------

3.1) */
interface Curso {
  nome: string;
  aulas: number;
  nivel: string;
  gratuito: boolean;
}

// const handleCursos2 = (data: unknown) => {
//   if (data instanceof Curso) {
//     console.log(data.map((curso: Curso) => curso.nome));
//   }
// };

// dá erro pois interface não é uma instância

// 3.2)

const isCurso = (value: unknown): value is Curso => {
  if (value && typeof value === 'object' && 'nome' in value) {
    return true;
  } else {
    return false;
  }
};

/* 

OBS: no if() acima:
--------------------
1. Verifica se 'value' é true --> não é null, undefined ... mas pode ser tipo primitivo, então verifico:
2. 'typeof value === 'object'' --> verifica se o tipo de value é objeto
3. 'nome' in value --> verifica se o objeto possui a propriedade 'nome' **
** aqui o TS já está considerando o value como um objeto, então posso usar o 'in'


com API's que retornam Arrays:
-------------------------------
if (Array.isArray(value) && value.length > 0 && 'nome' in value[0])

1. verificando se temos uma array retornando da API;
2. se a array não está vazia;
3. se o primeiro item da array possui a propriedade 'nome'.

*/

const handleCursos2 = (data: unknown) => {
  if (isCurso(data)) {
    console.log(data.nome);
  }
};
