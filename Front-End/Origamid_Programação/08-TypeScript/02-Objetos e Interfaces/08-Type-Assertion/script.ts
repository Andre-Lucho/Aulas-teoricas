// 1.

/*
const video = document.querySelector('.player') as HTMLVideoElement;

const video2 = document.querySelector('.player')!;

video.volume *;
video2.volume ***; 

----------------------------------------

* Não tenho esse elemento no meu HTML:
não dá erro de Lint TypeScript**, porém:
Dá erro no runtime
** pois estou afirmanto que video é uma instância tipo HTMLVideoElement


*** estou afirmando que não é null, então será do tipo Element(nesse caso)... acima, estou afirmando o tipo específico que ele deve ser


as --> afirma o tipo ou a instância do Elemento
! ---> afirma que o elemento NÃO será null

*/

// 2.
interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>; // posso indicar aqui o tipo de retorno com == 'as Promise<Produto>'
}

async function handleProduto1() {
  const produto = (await fetchProduto()) as Produto; // ou posso indicar aqui produto 'as Produto'
  console.log(produto.preco);
}

async function handleProduto2() {
  const produto = await fetchProduto();
  (produto as Produto).nome; // ou posso indicar assim == não recomendado
}

handleProduto1();

// 3.

document.querySelector('a')!.href = 'https://www.origamid.com';

// estou afirmando que 'document.querySelector('a')' nunca será null --> qd for, dará erro de runtime!! Cuidado

// 4.
const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player'); // Há a possibilidade de ser null
const video4 = document.querySelector('.player'); // Há a possibilidade de ser null

video1.volume;
video2.volume;
video3?.volume; // somente irá executar o método se NÃO for null
(video4 as HTMLVideoElement).volume; // tiro a possibilidade do null, pois estou afirmando o que ele é
