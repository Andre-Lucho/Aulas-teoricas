/*

useReducer
-----------------------------------

O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo. 
Como se fosse uma função centralizadora para um estado, onde posso ter diversos comportamentos diferentes para aquele estado 


const [state, dispatch] = React.useReducer(reducer, 0);

useReducer:
----------------
O hook retorna: a const 'state' e uma função 'dispatch' 
a função dispatch --> atualiza o 'state' conforme o comportamento definido no argumento 'reducer'(corresponde a função principal)

valor 0 --> valor inicial para a const state
OBS:
dispatch pode receber qualquer valor --> string, objeto, array
>


a função principal 'reducer' recebe 2 argumentos:
--------------------------------------------------
a) o estado a ser atualizado(state);
b) a ação a ser acionada p atualizar o state(action)


*/

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
