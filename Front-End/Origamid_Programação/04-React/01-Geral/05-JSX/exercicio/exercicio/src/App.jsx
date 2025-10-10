// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores. Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const listaCompras = {
  cliente1: {
    nome: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativo: true,
  },

  cliente2: {
    nome: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativo: false,
  },
};

const {
  cliente1: {
    nome: nome01,
    idade: idade01,
    compras: compras01,
    ativo: ativo01,
  },
  cliente2: {
    nome: nome02,
    idade: idade02,
    compras: compras02,
    ativo: ativo02,
  },
} = listaCompras;

function App() {
  const regex = /R\$ /;

  const somatorio = (cliente) =>
    cliente
      .map((prod) => Number(prod.preco.replace(regex, '')))
      .reduce((acc, valor) => acc + valor, 0);

  function situaçãoCadastro(status) {
    const ativo = <span style={{ color: 'green' }}>Ativo</span>;
    const inativo = <span style={{ color: 'red' }}>Inativo</span>;

    if (status) {
      return ativo;
    } else {
      return inativo;
    }
  }

  return (
    <>
      <section className="dados-container">
        <h2>Cliente: {nome01}</h2>
        <div className="dados">
          <ul>
            <li>Idade: {idade01}</li>
            <li>Situação: {situaçãoCadastro(ativo01)}</li>
            <li>Total gasto: R$ {somatorio(compras01)}</li>
            {somatorio(compras01) > 10000 && <p>Você está gastando muito</p>}
          </ul>
        </div>
      </section>
      <br />
      <section className="dados-container">
        <h2>Cliente: {nome02}</h2>
        <div className="dados">
          <ul>
            <li>Idade: {idade02}</li>
            <li>
              Situação:{' '}
              <span style={{ color: ativo02 ? 'green' : 'red' }}>
                {ativo02 ? 'Ativo' : 'Inativo'}{' '}
              </span>
            </li>
            <li>Total gasto: R$ {somatorio(compras02)}</li>
            {somatorio(compras02) > 10000 && <p>Você está gastando muito</p>}
          </ul>
        </div>
      </section>
    </>
  );
}

// --------------------------------------------------------------------------

function App1() {
  const dados = listaCompras.cliente1;

  const regex = /R\$ /;
  const somatorio = dados.compras
    .map((prod) => Number(prod.preco.replace(regex, '')))
    .reduce((acc, valor) => acc + valor, 0);

  function situaçãoCadastro(status) {
    const ativo = <span style={{ color: 'green' }}>Ativo</span>;
    const inativo = <span style={{ color: 'red' }}>Inativo</span>;

    if (status) {
      return ativo;
    } else {
      return inativo;
    }
  }

  return (
    <>
      <section className="dados-container">
        <h2>Cliente: {dados.nome}</h2>
        <div className="dados">
          <ul>
            <li>Idade: {dados.idade}</li>
            <li>Situação: {situaçãoCadastro(dados.ativo)}</li>
            <li>Total gasto: R$ {somatorio}</li>
            {somatorio > 10000 && <p>Você está gastando muito</p>}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App1;
