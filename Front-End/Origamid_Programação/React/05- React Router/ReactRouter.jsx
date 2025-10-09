/*

React Router Dom
-----------------------------------
É uma extensão que permite gerenciarmos as rotas do React.

https://reactrouter.com/

npm install react-router-dom@6 */

/*

BrowserRouter, Routes e Route
-----------------------------------
O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router - páginas que estão sendo roteadas
O Routes define a área em que vamos colocar os nossos Route. 
O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

  */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// * --> todos, exceto os elementos roteados

/*

OBS.
-----
Como os componentes Header e Footer estão fora de Routes, eles serão renderizados em TODAS as páginas, independente da rota!

/*

Link
-----------------------------------
O Link irá modificar a rota e renderizar o novo componente SEM recarregar a página. */

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};

/*

NavLink
-----------------------------------
O NavLink funciona da mesma forma, mas adiciona uma classe (class='active') ao link que estiver ativo. 
É necessário colocar o atributo 'end' no NavLink responsável por navegar para a raiz do app. */

import './Header.css';
import { NavLink } from 'react-router-dom';

const Header2 = () => {
  const activeStyle = {
    color: 'tomato',
  };
  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="contato" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </nav>
  );
};

// activeStyle ou .active no CSS --> caso queria estilizar o NavLink ativo

/*

useNavigate
-----------------------------------
O hook useNavigate permite navegarmos programaticamente entre as rotas. 
Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta. */

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Faz o login');
    navigate('/sobre');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

// OBS.: é necessário SEMPRE passar '/<página onde quero ir>' a barra antes do endereço, indicando o local a partir da raiz

/*

Rota Dinâmica
-----------------------------------
O uso de :'algumnome'* irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. 
Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone. 

*pode ser qualquer nome que será dado para a url da nova rota! */

const App2 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

/*

useParams
-----------------------------------
O hook useParams terá um objeto com todos os parâmetros da rota. 
É possível ter mais de um parâmetro.*/

import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};

/*

useLocation
-----------------------------------
Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.*/

import { useLocation } from 'react-router-dom';

const Header3 = () => {
  const location = useLocation();
  console.log(location); //**

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);

  return <div></div>;
};

// Existe também o const [searchParams, setSearchParams] = useSearchParams()

/*
IMPORTANTE
-----------------------------------
** location: 
Objeto com informações da rota --> pathname, search, hash, state e key

a) pathname = local(página) onde estou no momento
b) search = parâmetros da página

Ex.: http://algumacoisa.com/notebook?q=ASUS&cpu=12treads , onde:
q e cpu --> keys - chaves do objeto
ASUS e 12treads --> valores

Esses parâmetros estão armazenados no servidor --> posso ter acesso e manipula-los através de:
new URLSearchParams(location.search) */

/*

Nested Routes (Rotas aninhadas)
-----------------------------------
Utilizamos nested routes quando precisamos de rotas dentro de rotas. 
Como por exemplo: perfil/editar e perfil/certificados e etc. 
Utilize o \* para definir que existem outras rotas dentro. */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

const App3 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

/*
path="produto/:id/*" --> localização da página:
a) produto --> página ou rota raiz;
b) /id -->  Rota dinâmica(depende de uma variável);
c) * --> todas as demais rotas estão ANINHADAS a rota principal */

import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto2 = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

// Utilizo o <Routes></Routes> para indicar que tenho + rotas a partir da minha rota raiz(Primária) que é Produto;
// e <Route /> com cada rota aninhada(secundária) a partir da principal

/*

Outlet
-----------------------------------
Outra forma de definirmos as rotas aninhadas é definindo todos as rotas diretamente no App 
e utilizar o component 'Outlet' para mostrarmos a rota.*/

const Produto4 = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login2 from './Login';
import Produto4 from './Produto';
import Header2 from './Header';
import NaoEncontrada from './NaoEncontrada';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const App4 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

// Agora, envolvo <Route></Route> - Primaria para Produtos - as demais <Route></Route> - secundárias a Produto

/*

Head
-----------------------------------
No React não temos acesso direto as tags e informações do Head. 
Porém com o uso de rotas é essêncial realizar a mudança do título e descrição para cada rota. 
Podemos fazer isso através de um componente ou custom hook.*/

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);

  return <></>;
};

// Sobre.jsx
import Head2 from './Head';

const Sobre = () => {
  return (
    <div>
      <Head title="Página Sobre" description="Descrição da sobre" />
      <h1>Sobre</h1>
      <p>Essa é a Sobre</p>
    </div>
  );
};

// Home.js
import Head2 from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Página Home" description="Descrição da home" />
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

/*

Helmet
-----------------------------------
Uma extensão famosa é o react-helmet. Ela retorna com componente em que você pode definir tags do Head dentro do mesmo. */

import { Helmet } from 'react-helmet';

const Home3 = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta name="description" content="Conteúdo da descrição" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};
