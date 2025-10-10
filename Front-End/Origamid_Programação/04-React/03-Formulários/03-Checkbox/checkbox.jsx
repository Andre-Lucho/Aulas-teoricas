/*

Checkbox - type='checkbox'
------------------------------------
------------------------------------

Aqui, como no <input type=radio> --> value NÃO é reativo (é estático). 
O que é reativo é o atributo 'checked' --> O estado do checkbox está relacionado ao checked.
# Reatividade == queremos ver se está marcado ou não;
Mas Temos multiplas possibilidades de marcação (e não apenas 1 como em 'radio') 
=== lógica:
1. para atualização do estado  --> quatos estão marcados
2. para o controle do que: a)está marcado ou b) está desmarcado

*/

const App = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={termos}
            onChange={({ target }) => setCheckbox(target.checked)}
          />
          Li os termos.
        </label>
      </form>
      {termos && <p>Termos foram aceitos</p>}
    </div>
  );
};

/*

Múltiplos
------------------------------------

Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.*/

const App1 = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
      // retorna uma array com valores 'true' da iteração
    }
  }

  // faz o controle do checked em tela com 'value' --> para já retornar como 'marcado' ou não na renderização
  function handleChecked(cor) {
    return cores.includes(cor);
  }
  //

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked('roxo')}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
