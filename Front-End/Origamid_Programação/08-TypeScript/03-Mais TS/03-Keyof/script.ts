interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave1: 'nome' | 'preco' | 'novo'; // possíveis valores recebidos por 'chave'

let chave: keyof Produto; // chaves da interface 'Produto' --> são strings

function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;
coord = (x: number, y: number) => {
  return { x, y };
};

// coord tem a mesma interface da function coordenadas

/*

02. querySelector
-------------------- */

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

function selection(selector: 'a'): Elementos['a'] | null {
  return document.querySelector(selector);
}

// Estou dizendo que a function 'selection' recebe o parâmetro:string = 'a' e a função retorna a posição 'a' da interface Elementos === HTMLAnchorElement

selection('a')?.href; // retornando tipo = HTMLAnchorElement | null

/*

02. a) Criando um type Generic
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
  // const jogo = await fetchData<Jogo></Jogo>('/jogo.json');
  const jogo1 = await fetchData('/jogo.json');
  // const livro = await fetchData<Livro>('/livro.json');
  const livro1 = await fetchData('/livro.json');
  if (checkInterface<Jogo>(jogo1, 'desenvolvedora')) {
    console.log(jogo1.desenvolvedora.toLowerCase());
  }
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
