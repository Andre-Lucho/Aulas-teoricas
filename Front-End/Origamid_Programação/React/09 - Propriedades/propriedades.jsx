/*
Propriedades

Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props. */

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

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};

/*
Desestruturação

É comum desestruturarmos as propriedades. */

const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};

/*
Children

Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade 'children'. */

const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo>Meu Primeiro Título</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};

/*
Rest e Spread

Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber. */

import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;

// Podemos ser criativos com as propriedades:
import React from 'react';

const Input = ({ id, ...props }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id} style={{ textTransform: 'capitalize' }}>
        {id}
      </label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;

const Form = () => {
  return (
    <form>
      <Input id="email" required />
      <Input id="password" type="password" />
      <Button />
    </form>
  );
};


/*
Dados

Podemos passar diferentes tipos de dados e até outros componentes nas propriedades. */

const App = () => {
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


/*


*/

/*


*/

/*


*/

/*


*/

/*


*/

/*


*/
