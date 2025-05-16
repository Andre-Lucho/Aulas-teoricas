import { useState } from 'react';

const fields = [
  { id: 'nome', label: 'Nome', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'endereco', label: 'Endereço', type: 'text' },
  { id: 'senha', label: 'Senha', type: 'password' },
];

const App = () => {
  const [itens, setItens] = useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}), //? --> pq {} ?
  );
  // (itens) --> {nome: '', email: '', senha: ''}

  function handleChange({ target }) {
    const { id, value } = target;
    setItens({ ...itens, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Enviado');
  }

  return (
    <>
      <h2>Lista de Itens</h2>
      <form onSubmit={handleSubmit}>
        {fields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={itens[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>Enviar</button>
      </form>
      <p>{itens.nome}</p>
      <p>{itens.email}</p>
      <p>{itens.senha}</p>
    </>
  );
};

export default App;
