import React from 'react';

const ValoresArb = () => {
  return (
    <>
      <div class="w-[65%] h-[200px] m-[calc(10%-40px)] pt-10 bg-[#a8f] ">
        w-[45%] h-[200px] bg-[#a8f] m-[calc(10%-40px)] pt-10 bg-[#a8f]
      </div>
      <div class="bg-amber-50 shadow-[0px_2px_4px_2px_rgba(0,0,0,0.25)] p-4">
        shadow-[0_2px_4px_2px_rgba(0,0,0,0.25)] p-4
      </div>
    </>
  );
};

/*

Valores Arbitrários
-----------------------------------
-----------------------------------

Use valores arbitrários com colchetes [] para aplicar qualquer valor CSS que não esteja disponível nas classes padrão do Tailwind CSS.

Um valor arbitrário que for constantemente utilizado, deve se transformar em uma classe utilitárias (configurações).

Diferentes Aplicações
--------------------

Podemos usar calc, variáveis de css e mais nos valores arbitrários.

<style>
  html {
    --positivo: #2e0;
  }
</style>
<div class="w-[calc(50%-10px)] bg-[--positivo] ">
  w-[calc(50%-10px)] bg-[--positivo] ou bg-(--positivo) == CSS v4
</div>


Espaços e Vírgulas
--------------------
Existem prorpiedades do CSS que levam espaço:
Ex. Box-shadow

As classe que recebem os estilo no Tailwind não pode ter espaços. Então, para lidar com eles, o usamos o '_'(underline). 
Você pode usar as vírgulas normalmente.


*/

export default ValoresArb;
