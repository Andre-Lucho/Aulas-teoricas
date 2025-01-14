/*
Propriedades

Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. 
Esses são conhecidos como propriedades ou props. 
props = Objeto
*/

const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};

/*
Múltiplas Propriedades

Podemos passar quantas propriedades quisermos. */

const Titulo1 = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App1 = () => {
  return (
    <section>
      <Titulo1 texto="Meu Primeiro Título" cor="blue" />
      <Titulo1 texto="Meu Segundo Título" cor="red" />
    </section>
  );
};

/*
Desestruturação

É comum desestruturarmos as propriedades. */

const Titulo2 = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App2 = () => {
  return (
    <section>
      <Titulo2 texto="Meu Primeiro Título" cor="blue" />
      <Titulo2 texto="Meu Segundo Título" cor="red" />
    </section>
  );
};

/*
Children

Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade 'children'. */

const Titulo3 = (props) => {
  return (
    <>
      <p>Teste</p>
      <h1>{props.children}</h1>
    </>
  );
};

const App3 = () => {
  return (
    <section>
      <Titulo3 />{' '}
      {/* nessa linha está renderizando normalmente o componente s/ Children*/}
      <Titulo3>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo3>{' '}
      {/* aqui temos o children executado*/}
    </section>
  );
};

/*
Rest e Spread

Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber. */

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

// Podemos ser criativos com as propriedades:

const Input1 = ({ id, ...props }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id} style={{ textTransform: 'capitalize' }}>
        {id}
      </label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

const Form = () => {
  return (
    <form>
      <Input id="email" required />
      <Input id="password" type="password" />
      {/* <Button /> */}
    </form>
  );
};

/*
Dados

Podemos passar diferentes tipos de dados e até outros componentes nas propriedades. */

const App4 = () => {
  const logado = true;
  const nome = 'André';

  return (
    <section>
      <Header logado={logado} nome={nome} />
    </section>
  );
};

const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};
