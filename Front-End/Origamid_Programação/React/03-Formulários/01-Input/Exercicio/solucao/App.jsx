import React from 'react';
import useFetch from '../src/useFetch';

const fields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];
// criando uma array com os atributos html que se diferem entre cada campo de <label> + <input>
// lado de fora, pois ele NÃO é reativo

const App = () => {
  const [form, setForm] = React.useState(
    fields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),

    // ou
    // {nome: '', email: '', senha: '', cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: '',}
  );

  // 1.
  // const [data, setData] = React.useState(null);

  // 2.
  const { data, load, request, error } = useFetch();

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    /* 
1. 
Usando uma função assíncrona + fetch
------------------------------------------------------  
*/
    // const response = await fetch(
    //   'https://ranekapi.origamid.dev/json/api/usuario',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // propredade de escrita composta == string
    //     },
    //     body: JSON.stringify(form),
    //   },
    // );
    // console.log(response);
    // setData(response);

    /* 
    ou  
    2. Usando o custom Hook
    -----------------------------------------
*/
    const a = request('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ id, label, type, i }) => (
        // = fields.chave
        <div key={i}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
          {/* form[id] === form['nome'] por exemplo*/}
        </div>
      ))}
      <button>Enviar</button>
      {data && data.ok && <p>Dados Transferidos</p>}
      {/* data.ok --> propriedade do Response que indica se o fetch retornou de acordo */}
    </form>
  );
};

export default App;

/*
Explicações sobre a utilização da sintaxe [id]: value, [field.id]
------------------------------------------------------------------------

[Os colchetes [] aqui são utilizados para a 'sintaxe de computação de propriedades'. 
Isso permite que você use o valor da variável id como uma chave(prop) do objeto. 
Em outras palavras, o nome da propriedade do objeto será o valor da variável id, e seu valor será value.

Portanto, setForm({ ...form, [id]: value }) cria um novo objeto com todos os pares chave-valor do objeto form original, 
mas com o valor do campo identificado por id atualizado para value.

Não usar colchetes para a computação de propriedades resultará na criação de uma chave literal.
(Chave Literal: O nome da chave é escrito diretamente e é exatamente como aparece no código.)


Computação de Propriedades (ou Chave Dinâmica)
------------------------------------------------------------------------
Chave Dinâmica (ou Computada): O nome da chave é determinado pelo valor de uma variável, usando colchetes [].

Às vezes, você quer que o nome da chave seja definido dinamicamente com base no valor de uma variável. 
Para isso, você usa colchetes []:

const chave = 'nome';
const objeto = {
  [chave]: 'João' 
  // Equivale a { nome: 'João' }
};

No exemplo acima, o valor da variável chave ('nome') é usado como o nome da chave do objeto. 
A expressão [chave] permite que o nome da chave seja dinâmico, dependendo do valor da variável chave.


No Contexto do Seu Código
------------------------------------

No seu código, quando você usa [id]: value dentro do objeto passado para setForm, está criando uma chave dinâmica 
baseada no valor da variável id. 
Isso permite que a chave do objeto form seja definida de acordo com o campo do formulário que está sendo alterado.
*/
