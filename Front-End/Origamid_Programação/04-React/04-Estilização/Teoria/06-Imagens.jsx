/*
Imagens
-----------------------------------
Podemos importar a imagem direto para o componente. 
O webpack irá gerar o caminho correto na build final.

import foto from './img/foto.jpg';

const App = () => {
  return (
    <div>
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

Background
-----------------------------------
No CSS podemos utilizar o caminho direto. 
É importante colocar o ./, pois o webpack vai utilizar isso e substituir para o caminho final do site.

.fundo {
  width: 50px;
  height: 50px;
  background-image: url('./img/foto.jpg');
  background-size: cover;
}

SVG
-----------------------------------
Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como 
um componente. 
Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.

1. No Vite é necessário um plugin para ativar essa funcionalidade.
a) npm i vite-plugin-svgr
b) import svgr from 'vite-plugin-svgr' (configurações do Vite)


Basta importar o SVG (sem usar o as ReactComponent) e adicionar ?react no final do
Na versão nova do vite também é necessário utilizar os SVG's de uma forma mais simples.

import Dog from './img/dog.svg?react';


2. No create-react-app essa funcionalidade vem instalada por padrão.
import {ReactComponent as Dog} from './img/dog.svg'


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

Configuração Vite --> vite.config.js
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
*/
//       include: ["./src/**/*.js', './src/**/*.jsx"],
//     }),
//     svgr(),
//   ],
// });

/*

1. Com Vite:
---------------
import Dog from './img/dog.svg?react';

const App = () => {
  return (
    <div>
      <Dog />
    </div>
  );
};

2. Com create-react-app:
--------------------------

const App = () => {
  return (
    <div>
      <ReactComponent />
    </div>
  );
};


Componentes SVG
-----------------------------------
Além da importação direto como componentes, podemos também definirmos cada SVG como um componente. 
Lembre-se, propriedades que tiverem hífens serão modificadas: fill-rule vira fillRule

const DogSvg = ({ color }) => {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z"
        fill={color}
      />
      <circle cx="21" cy="3" r="3" fill={color} />
      <circle cx="7" cy="3" r="3" fill={color} />
    </svg>
  );
};


*/
