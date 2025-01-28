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
        onChange={(event) => setNome(event.target.value)}
        //devo passar um evento de 'change' para ATT o 'value' --> qd tirar o foco do input, meu estado será atualizado!
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
Iremos utilizar um fetch para lidar com as requisições do onSubimit, por isso o preventDefault() é importante.*/

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
        name="nome" // // add name a url do site (porém estou impedindo pois não queremos a att da página)
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

// OBS. Não é necessário passar um event em <button>, pois o evento pertence ao Form que engloba <button>

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
    console.log(form); // verificnado o que foi submetido
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  // Atenção : Estou usando a mesma função p/ att 'form' em todos os campos

  /* 
  IMPORTANTE:
  ------------------------------------

[id] --> não se refere a POSIÇÃO 'nome', 'email'... estamos faLando com um objeto SEM POSIÇÕES (observar que o estado form é um objeto simples, sem posições!!)

O que ele faz é TRANSFORMAR o ATRIBUTO 'id' do INPUT em uma STRING!
Então: id='email' no setForm ficará ===> 'email': 'algo@gmail.com', ambos como uma string
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
