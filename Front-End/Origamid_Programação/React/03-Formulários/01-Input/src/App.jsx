import React from 'react';

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
        type="password"
        id="password"
        value={form.password}
        onChange={handleChange}
      />

      <button>Enviar</button>
      <p>{form.nome}</p>
      <p>{form.email}</p>
      <p>{form.password}</p>
    </form>
  );
};

export default App;
