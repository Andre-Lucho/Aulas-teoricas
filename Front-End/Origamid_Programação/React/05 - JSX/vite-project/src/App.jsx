import react from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$2500' },
    { nome: 'Geladeira', preco: 'R$3000' },
    { nome: 'Smartphone', preco: 'R$1500' },
  ],
  ativa: true,
};

const mario = {
  cliente2: 'Mario',
  idade2: 31,
  compras2: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const { cliente, idade, compras } = luana;
const { cliente2, idade2, compras2 } = mario;
const regexp = /[R$]/g;

const App = () => {
  function totalGastos() {
    const totalGastos = compras
      .map((item) => +item.preco.replace(regexp, ''))
      .reduce((acc, item) => acc + item);
    return totalGastos;
  }

  const totalGastos2 = compras2
    .map((item) => +item.preco.replace(regexp, ''))
    .reduce((acc, item) => acc + item);

  function situacaoCadastro() {
    const ativo = <span style={{ color: 'green' }}>Ativo</span>;
    const inativo = <span style={{ color: 'red' }}>Inativo</span>;
    if (luana.ativa == true) {
      return ativo;
    } else {
      return inativo;
    }
  }

  return (
    <>
      <ul>
        <li>Nome: {cliente}</li>
        <li>Idade: {idade}</li>
        <li>Situação: {situacaoCadastro()}</li>
        <li>Total gastos: R$ {totalGastos()}</li>
      </ul>
      <br />
      <ul>
        <li>Nome: {cliente2}</li>
        <li>Idade: {idade2}</li>
        <li>
          {/*diretamente via expressão JS */}
          Situação:
          <span style={{ color: cliente2.ativa ? 'green' : 'red' }}>
            {cliente2.ativa ? 'Ativo' : 'Inativo'}
          </span>
        </li>
        <li>Total gastos: R$ {totalGastos2}</li>
        {totalGastos2 >= 1000 && <p>Seus gastos foram maior que R$ 10.000</p>}
      </ul>
    </>
  );
};

// Varias formas aqui: com e sem função; com e se condicional

export default App;
