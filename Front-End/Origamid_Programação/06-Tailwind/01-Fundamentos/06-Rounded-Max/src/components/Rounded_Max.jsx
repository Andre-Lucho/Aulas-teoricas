import React from 'react';

const Rounded_Max = () => {
  return (
    <div>
      <button className="bg-gray-300 border-2 border-lime-400 px-4 py-2 m-4 rounded-e-xl">
        Comprar Produto
      </button>
      <br />
      <button className="bg-gray-300 border-2 border-lime-400 px-4 py-2 mb-4 rounded-e-2xl">
        Comprar Produto
      </button>
      <br />
      <button className="bg-gray-300 border-2 border-lime-400 px-4 py-2 mb-4 rounded-full">
        Comprar Produto
      </button>
      <br />
      <h1 className="max-w-40 mx-auto bg-purple-200 text-center">
        Cursos de Front End & UI Design
      </h1>
      <div className="h-8 bg-blue-200 max-w-40">max-w-40 (160px)</div>
      <div className="h-8 bg-lime-200 max-w-sm">max-w-sm (384px)</div>
      <div className="h-8 bg-red-200 max-w-lg">max-w-lg (512px)</div>
      <div className="h-8 bg-yellow-200 max-w-5xl">
        max-w-screen-lg (1024px)
      </div>
    </div>
  );

  /*

Rounded e Max
-----------------------------------
-----------------------------------


Rounded (border-radius)
-----------------------------------

rounded / -sm, -xl ... -full
--------------------------------

rouded -> 4px
-sm (smaller)-> 2px
-xl (larger)--> 12px
-2xl--> 16px
-3xl --> 24px
-full --> 9999px max == para criar círculos

rounded-e / s / t / b
------------------------
-e == end (dir top + bottom)
-s == start (esq top + bottom)
-t == top 
-b == bottom

-br= bottom-right
-tl = top-left


max-w
-----------------------------------

Utilize o max-w para controlar o tamanho máximo de width de elementos de bloco/grid/flex

A escala possui, além dos valores de 4px em 4px, medidas predefinidas como sm / md/ lg / xl 

e screen-sm / screen-lg 

Screen-(Breakpoints de tela):
--------------------------------
Smalls(sm)= 640px
Medium(md) = 768px
Large(lg) = 1024px
Extra Large(xl) = 1280px


*/
};

export default Rounded_Max;
