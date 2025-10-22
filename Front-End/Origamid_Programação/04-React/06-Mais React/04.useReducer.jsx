/*

useReducer
-----------------------------------

React.useReducer
O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo. */

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{state}</p>
    </div>
  );
};

// Sem o useReducer

export const App1 = () => {
  const [contar, setContar] = React.useState(0);

  function aumentar() {
    setContar(contar + 1);
  }

  function reduzir() {
    setContar(contar - 1);
  }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
      <p>{contar}</p>
    </div>
  );
};

// Exemplo

function reducer(state, action, ae) {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const App2 = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Item 1']);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'remover', content: 'Item 1' })}>
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'adicionar', content: 'Item 2' })}
      >
        +
      </button>
      <p>{state}</p>
    </div>
  );
};
