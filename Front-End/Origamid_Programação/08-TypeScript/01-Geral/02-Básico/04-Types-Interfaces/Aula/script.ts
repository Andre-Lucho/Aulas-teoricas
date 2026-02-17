// Type

// Ex. 1.

type NumberOrString = string | number;

let preco: NumberOrString = 200;
preco = '200';

// 2. criando um type para Objetos
type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

// 3. criando uma variável do tipo Objeto com o type 'Produto':
const pc: Produto = {
  nome: 'PC',
  preco: 5000,
  teclado: true,
};

// 1. Object
function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML += `
  <div style="color: #f6f6f6; font-size: 1.2rem">
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>

  `;
}

// 2. Função com argumento tipo Type
function preencherDados2(dados: Produto) {
  document.body.innerHTML += `
  <div style="color: #58afbc; font-size: 1.4rem">
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>

  `;
}

preencherDados({
  nome: 'PS5',
  preco: 2000,
  teclado: false,
});

// 3. com a variavel 'pc' --> type 'Produto'
preencherDados2(pc);

// ------

type Categorias = 'design' | 'codigo' | 'descod';

function tipoCategoria(categoria: Categorias) {
  console.log(categoria);
}

tipoCategoria('codigo');

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// 4. usando interface (para objetos):

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

// Função com argumento tipo Interface
function preencherDados3(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div style="color: #58afbc; font-size: 1.4rem">
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
  </div>

  `;
}
