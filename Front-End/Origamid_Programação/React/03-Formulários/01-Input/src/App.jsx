import React from 'react';

// 1.
// const App = () => {
//   const [nome, setNome] = React.useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(nome);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input
//         type="text"
//         id="nome"
//         name="nome" // add name a url
//         value={nome}
//         onChange={({ target }) => setNome(target.value)}
//       />
//       <button>Enviar</button>
//       <p>{nome}</p>
//     </form>
//   );
// };

// 2.

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form); //
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={form.password}
        onChange={handleChange}
      />

      <button>Enviar</button>
      <p>{form.nome}</p>
      <p>{form.email}</p>
      <p>{form.password}</p>
      {/* Estou verificando a reatividade */}
    </form>
  );
};

export default App;
