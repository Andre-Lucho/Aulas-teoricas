import react from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

function App() {
  const listProd = produtos.filter(
    ({ preco }) => +preco.replace('R$', ' ') > 1500,
  );
  return (
    <section>
      {listProd.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <h2>Preço: {preco}</h2>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{ backgroundColor: cor }}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default App;
