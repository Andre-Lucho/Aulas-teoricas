/*
// 1
function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);

// Interface = tipo função com nome Callback
type Callback = (event: MouseEvent) => void;

// ex. usando:
function handleEvent(event: Callback) {
  console.log(event);
}


// 2. Void
// -----------

function pintarTela(cor: string) {
  document.body.style.background = cor;
}
// não possue retorno --> void

pintarTela('black');



if (pintarTela('black')) {
  console.log('Pintou a tela'); // Retorna undefined --> void não pode ser verificado, pois a function NÃO está retornando nada!!
}

const btn = document.querySelector('button');

// Erro, void não pode ser verificado --> não há retorno na função 'click' apenas um evento do DOM aplicado diretamente ao elemento.
if (btn && btn.click()) {
}

// Se a função tiver qualquer tipo de retorno, ela não terá mais o void como uma opção e sim o undefined


function isString(value: any) {
  if (typeof value === 'string') {
    return true;
  }
}

if (isString('teste')) {
  console.log('É string');
}

// --------------------------------------------------------------------

// 3. Never

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

abortar('Um erro ocorreu');
console.log('Tente novamente');

// --------------------------------------------------------------------

// 4 Métodos 

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {}


// 5. Overload

function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor == 'string') {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar(' Produto '));
console.log(normalizar([]));
console.log(normalizar(['Banana ', ' UVA     ']));

// // Exemplo 2

function $(seletor: number): number;
function $(seletor: 'video'): HTMLVideoElement | null;
function $(seletor: 'a'): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$('a')?.href;
$('video')?.volume;
$('.classe')?.innerHTML; */
