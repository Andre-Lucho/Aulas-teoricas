/*
JSX
-----------------------------------
JavaScript XML / Extension. 
Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React. */

const App = () => {
  return <button>Comprar</button>;
};

//É transformado em

const App2 = () => {
  return React.createElement('button', null, 'Comprar');
};
// É possível utilizar a extensão .jsx

/*
Atributos
-----------------------------------
Atributos podem ser passados como no HTML, porém com alguns casos especiais.*/

const App3 = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};
// dentro de ( ) --> mai de 1 linha de retorno

/*
Identações do React
------------------------------
+ de 1 elemento --> usar <div> </div> ou 
<></> ( = React.fragment)  */

/*
Casos Especiais
-----------------------------------
O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className. */

// class = className
const App4 = () => {
  return <div className="grid">Origamid</div>;
};

// for (loop - js) = htmlFor
const App5 = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};

// https://reactjs.org/docs/dom-elements.html

/*
camelCase
-----------------------------------
Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay. */

const App6 = () => {
  return <video autoPlay />;
};

/*
Expressões / Variáveis
-----------------------------------
Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.*/

const App7 = () => {
  const nome = 'André';
  return <p>{nome}</p>;
};

const App8 = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
};

const App9 = () => {
  const ativo = true;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};

// Também posso atribuir JSX direto a uma constante/variável

const Titulo = <h1>Meu título</h1>;

const App10 = () => {
  return <div>{Titulo}</div>;
};

/*
JSX Expressões
-----------------------------------
Você pode executar qualquer expressão dentro das chaves {}:
1) Se o resultado da expressão for um NÚMERO, STRING ou ARRAY de números/strings o resultado irá aparecer na tela;

2) Booleanos (true/false), undefined e null NÃO irão resultar em nada na tela;

3) FUNÇÕES não ativadas irão retornar um ERRO -->  Devemos passar o RESULTADO da função(ativá-la);

4) OBJETOS irão retornar um erro --> Devemos passar a propriedade e/ou o método correspondente aquele objeto/classe. */

const App11 = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};

/*
Style
-----------------------------------
O style irá receber um objeto com as propriedades do elemento em camelCase. */

const App12 = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <>
      {/* pega todo o estilo - estou passando a variável*/}
      <h1 style={estiloH1}>Empresa</h1>
      {/* adiciona um estilo qualquer específicol*/}
      <p style={{ fontSize: '20px' }}>Sempre aberta</p>
    </>
  );
};

/* Exercício
-----------------------------------
Mostre os dados da aplicação, como aprensetado no vídeo. Não utilize CSS externo, use o style para mudar as cores. 
Se a situação estiver: ativa, pinte de verde; inativa, de vermelho. 
Se o gasto for maior que 10000, mostre uma mensagem */

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App01 = () => {
  const dados = luana;

  return <div></div>;
};
