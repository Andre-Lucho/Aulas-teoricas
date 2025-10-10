import Produtos from './Produtos';
const Produto = ({ nome, propriedades }) => {
  return (
    <div
      key={nome}
      style={{
        border: '2px solid white',
        padding: '1rem',
        margin: '1.2rem',
      }}
    >
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((spec) => (
          <li>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
