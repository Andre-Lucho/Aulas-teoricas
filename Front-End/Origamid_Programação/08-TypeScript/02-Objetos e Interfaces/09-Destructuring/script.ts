// // 1
// const { body }: { body: HTMLElement } = document;

// // desestruturando document.body e informando o tipo de dado

// // 2
// function handleData({ nome, preco }: { nome: string; preco?: number }) {
//   // *
//   nome.toUpperCase();
//   preco?.toFixed;
// }

// // 3
// interface Data {
//   nome: string;
//   preco?: number;
// }

// function handleData2({ nome, preco }: Data) {
//   nome.toUpperCase();
//   preco?.toFixed;
// }

// handleData({ nome: 'notebook' });

// /*
// 1. * qd informamos o tipo de dados desestruturados, usamos a mesma sintaxe de uma Interface;
// 2. usando ?.(Optional Chaining - encadeamento opcional) --> o dado pode ser true ou undefined(qd não sei se irei recebê-lo)

// 3. Se for mto grande, posso escrever a interface em separado */

// // 4

// interface Target {
//   currentTarget: EventTarget | null;
//   pageX: number;
//   pageY: number;
// }

// const handleClick = ({ currentTarget, pageX, pageY }: Target) => {
//   console.log(currentTarget);
//   // console.log(currentTarget.innerHtml); --> dá erro, pois currentTarget = EventTarget | null
//   console.log(pageX);
//   console.log(pageY);

//   if (currentTarget instanceof HTMLElement)
//     currentTarget.innerHTML = `<h2>Mouse está nas coordenadas: ${pageX} e ${pageY}</h2>`;
// };

// document.documentElement.addEventListener('click', handleClick);
// // Como a function 'handleClick' pode estar associada a + tipo de evento(addEventListener), eu não posso afirmar que o seu tipo será sempre HTMLElement --> associamos 'currentTarget' a EventTarget | null --> tipos mais abaixo na herança de HTMLElement

// // 5

// const handleClick2 = ({
//   currentTarget,
// }: {
//   currentTarget: EventTarget | null; // ou apenas interface de touchEvent
// }) => {
//   console.log(currentTarget);

//   if (currentTarget instanceof HTMLElement)
//     currentTarget.innerHTML = `<h2>Mouse está nas coordenadas: 1</h2>`;
// };

// document.documentElement.addEventListener('touchstart', handleClick2);

/* 
REST
-------------------- */

function comparar(tipo: 'menor' | 'maior', ...numeros: number[]) {
  //console.log(numeros); retorna uma array com os dados do 'rest'
  if (tipo === 'menor') return Math.min(...numeros);
  if (tipo === 'maior') return Math.max(...numeros);
}

console.log(comparar('maior', 3, 4, 6, 1, 10));

// *obs --> tipagem de 'tipo' pode ser string...mas 'menor' | 'maior' restringe os parâmetros recebidos e deixa a function com nenhuma possibilidade de receber uma argumento errado !!
