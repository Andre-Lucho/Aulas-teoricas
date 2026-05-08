/* 01.a) keyof
---------------------*/

interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

// let chave1: 'nome' | 'preco' | 'novo'; // possíveis valores recebidos por 'chave'

let chave: keyof Produto;
// chaves da interface 'Produto' -- pode receber 'nome'ou 'preco' ou 'novo'
// so não preciso estar passando todas as propriedades possíveis... apenas digito keyof



/* 01. b) typeof do TypeScript:
-------------------------------- */


function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;

// coord = 'alguma coisa' // erro --> pois deve ter o mesmo typeof da func coordenadas

coord = (x: number, y: number) => {
  return { x, y };
};

// coord tem a mesma interface da function coordenadas

/*

02. keyof ---> DOM : querySelector
-------------------- 
a)

*/

interface Elementos {
  a: HTMLAnchorElement;
  body: HTMLBodyElement;
  div: HTMLDivElement;
  form: HTMLFormElement;
  input: HTMLInputElement;
  nav: HTMLElement;
  ul: HTMLUListElement;
}

// let chaves: keyof Elementos;

// chaves = '';
// pode ser apenas(especificamente) as propriedade da interface Elementos

function selection(selector: 'a'): Elementos['a'] | null {
  return document.querySelector(selector);
}

// Estou dizendo que a function 'selection' recebe o parâmetro:string = 'a' e a função retorna a posição 'a' da interface Elementos === HTMLAnchorElement

selection('a')?.href; // retornando tipo = HTMLAnchorElement | null

/*

02. B) Criando um type Generic -- exatamente o funcionamento (por baixo dos panos) do TS - relação tipos e interfaces(querySelector)
------------------------------- */

function selection1<Chave extends keyof Elementos>(
  selector: Chave,
): Elementos[Chave] | null {
  return document.querySelector(selector);
}

selection1('input')?.name;

/*

03. checkInterface 
------------------------------- */


// Atenção - fetch para Interfaces diferentes
interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

// Função de checagem de interface Simples
function checkInterface<Interface>(
  obj: unknown,
  key: keyof Interface,
): obj is Interface {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function fetchData<T>(url: string): Promise<T> {
  const base = 'https://api.origamid.dev/json';
  const response = await fetch(base + url);
  return await response.json();
}

async function handleData() {
  // const jogo = await fetchData<Jogo>('/jogo.json');
  const jogo1 = await fetchData('/jogo.json');
  if (checkInterface<Jogo>(jogo1, 'desenvolvedora')) {
    console.log(jogo1.desenvolvedora.toLowerCase());
  }
  // const livro = await fetchData<Livro>('/livro.json');
  const livro1 = await fetchData('/livro.json');
  if (checkInterface<Livro>(livro1, 'paginas')) {
    console.log(livro1.paginas.toFixed());
  }

  // console.log(jogo, livro);
}

handleData();

// Função de checagem de interface mais completa - Checa todos os elementos da interface
function checkInterfaceComplexa<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === 'object' &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}
