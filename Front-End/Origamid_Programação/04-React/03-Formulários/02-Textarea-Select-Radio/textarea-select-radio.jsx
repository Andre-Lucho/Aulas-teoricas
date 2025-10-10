/*
Textarea
------------------------------------
------------------------------------

No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento 
e com o value para definir o seu valor interno. */

const App = () => {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  );
};

/*
Select
------------------------------------
------------------------------------

O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState. */

const App1 = () => {
  const [select, setSelect] = React.useState('smartphone');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

/*
Selecione
------------------------------------

Defina o primeiro valor como disabled e com uma string pura, assim o usuário terá que selecionar um valor. 
*/
const App2 = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

/*
Radio
------------------------------------
------------------------------------

No radio, comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão. 

IMPORTANTE:
-------------
Aqui, value NÃO é reativo (é estático). 
1. O que é reativo é o atributo 'checked' --> então devemos fazer uma checagem se radio === ao valor que tenho em 'value'
2. 
Posso utilizar o atributo 'name' no lugar de CHECKED, com o mesmo valor em todos os inputs de tipo 'radio' --> 
como ele definirá que SOMENTE 1 RADIO poderá estar selecionado, JÁ temos a nossa verificação feita


*/

const App3 = () => {
  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === 'notebook'}
          // name="produto"  // Se usar o NAME, não preciso do CHECKED
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === 'smartphone'}
          // name="produto"  // Se usar o NAME, não preciso do CHECKED
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === 'tablet'}
          // name="produto"  // Se usar o NAME, não preciso do CHECKED
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};

/*
Diferentes Grupos
------------------------------------

Defina um estado para cada grupo. */

const App4 = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h2>Dispositivo</h2>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
    </form>
  );
};
