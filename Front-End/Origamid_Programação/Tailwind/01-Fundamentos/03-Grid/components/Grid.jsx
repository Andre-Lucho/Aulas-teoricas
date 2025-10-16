import React from 'react';

const ValoresArb = () => {
  return (
    <>
      <div class="grid grid-cols-2 gap-x-4 gap-y-8 *:bg-gray-300">
        <div class="p-4">Item 1</div>
        <div class="p-4">Item 2</div>
        <div class="p-4">Item 3</div>
        <div class="p-4">Item 4</div>
      </div>
      <br />
      <div class="grid grid-cols-[minmax(0,300px)_1fr] gap-2 *:bg-gray-300 *:p-4">
        <div>minmax(0,300px)</div>
        <div>1fr</div>
      </div>
      <br />
      <div class="grid grid-cols-3 gap-2 *:bg-gray-300 *:p-4">
        <div class="col-span-full">Item 1: col-span-full</div>
        <div class="col-span-2 row-span-2">Item 2: col-span-2 row-span-2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </div>
      <br />
      <div class="grid grid-cols-3 gap-2 *:bg-gray-300 *:p-4">
        <div class="col-start-2">Item 1: col-start-2</div>
        <div class="row-start-3 col-start-3">
          Item 2: row-start-3 col-start-3
        </div>
        <div>Item 3</div>
        <div>Item 4</div>
      </div>
    </>
  );
};

/*

Grid
-----------------------------------
-----------------------------------

Grid
grid define o display como grid

grid-cols- - cria colunas de 1fr

grid-rows- - cria linhas de 1fr

gap-x-, gap-y- e gap- - define o gap

Obs:
-----
*: Modificardor --> aplica em todos os elem-filhos



Grid Arbitrário
--------------------

A divisão padrão do grid utliza 1fr apenas, mas geralmente precisamos de uma composição diferente. Use valores arbitrários grid-cols-[1fr_2fr].

<style>
  html {
    --positivo: #2e0;
  }
</style>
<div class="w-[calc(50%-10px)] bg-[--positivo] ">
  w-[calc(50%-10px)] bg-[--positivo]
</div>



Grid Item
--------------------
Utilize col-span- e row-span- para controlar o espaçamento e o alcance dos itens.



Start e End
-----------------------------------
Utilize col-start- e col-end- para posicionar itens em um local específico do grid.

*/

export default ValoresArb;
