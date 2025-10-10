import { useEffect, useState } from 'react';
import { formFields, initialFormState } from './fields.js';
import useFetch from './hooks/useFetch.jsx';

const App = () => {
  const [form, setForm] = useState(initialFormState);
  const { request, response, loading, error, fetchData } = useFetch();

  useEffect(() => console.log(fetchData), [fetchData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFetch = async (url, options) => {
      await request(url, options);
    };
    newFetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <section>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => {
          return (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                value={form[id]}
                onChange={handleChange}
              />
            </div>
          );
        })}
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default App;
