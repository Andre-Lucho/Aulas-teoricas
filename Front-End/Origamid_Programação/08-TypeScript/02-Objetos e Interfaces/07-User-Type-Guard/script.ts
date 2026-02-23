// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();

// // 1)
// function handleCursos(data: unknown) {
//   // aqui, o TS verifica internamente se data é uma instância de Array
//   if (data instanceof Array) {
//     console.log('É instância de Array');
//   }
//   // aqui, o TS não executa JS (método do Array)... como ele sabe que é um array?
//   if (Array.isArray(data)) {
//     console.log('É array');
//   }
// }

// 2)

// function tipo user type guard:
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

handleData('Origamid');
handleData(200);

handleData2(200);
