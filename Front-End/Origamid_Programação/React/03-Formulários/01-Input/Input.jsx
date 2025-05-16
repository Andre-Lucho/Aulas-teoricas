/*
Formulários - Input
------------------------------------
------------------------------------

Reatividade
------------------------------------

Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange. */

const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        // Sempre atribuir o estado designado ao componente input, através do atrib 'value' = valor do Input
        // IMPORTANTE: value sempre deve ser um 'number' ou uma 'string'
        onChange={(event) => setNome(event.target.value)}
        //devo passar um evento de 'change' para ATT o 'value' --> qquer alteração ocorrida no input, meu estado será atualizado!
      />
      <p>{nome}</p>
    </form>
  );
};

/*
Form
------------------------------------

No form, controlamos o que acontece ao enviar o mesmo. 
Por isso, definimos uma função para lidar com o onSubmit. 
O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="". 
Geralmente, utilizamos um fetch para lidar com as requisições do onSubimit, por isso o preventDefault() é importante (ele impede a att da página).*/

const App = () => {
  const [nome, setNome] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }
  // func é acionada qd o form é submetido (com 'Enter' ou clicando em algum <button> dentro do form)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome" // add name a url do site (porém estou impedindo pois não queremos a att da página)
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

// OBS. Quando usamos o <button> inserido dentro de um <form> NÃO é necessário passar um event em <button>, pois, agora, o evento pertence ao Form que está englobando <button>.

/*
Múltiplos Campos
------------------------------------

1. Podemos definir um estado para cada campo. */

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

/*
Objeto
------------------------------------

2. Podemos definir um objeto que irá conter todos os valores dos campos do formulário. */

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form); // verificando o que foi submetido
  }

  function handleChange({ target }) {
    const { id, value } = target;
    // (target) é desestruturado para obter as propriedades 'id' e 'value'.
    setForm({ ...form, [id]: value });
    // "Crie uma cópia do estado atual do formulário e adicione/atualize a propriedade cujo novo nome será o novo valor de 'id'(key) e 'value' o novo valor(value) da propriedade."
  }
  // Atenção : Estou usando a mesma função p/ att 'form' em todos os campos

  /* 
  IMPORTANTE:
  -----------------------
  Olhar arquivo Computed Property Names em 01-Geral

[id] --> não se refere a POSIÇÃO 'nome', 'email'... estamos falando com um objeto -> SEM POSIÇÕES (observar que o estado form é um objeto simples, sem posições!!)

*/

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
      <button>Enviar</button>
    </form>
  );
};
