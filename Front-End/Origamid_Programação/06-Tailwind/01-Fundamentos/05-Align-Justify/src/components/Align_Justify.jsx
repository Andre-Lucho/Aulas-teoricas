import React from 'react';

const Align_Justify = () => {
  return (
    <div>
      <section className="grid grid-cols-2 gap-4 h-96 place-items-center bg-[url('../assets/grid.svg')]">
        <div className="bg-violet-900 p-8 rounded">
          <h2 className="font-bold mb-4 text-white">Plano Premium</h2>
          <ul className="list-disc text-white">
            <li>300 Acessos</li>
            <li>1200 Requests</li>
            <li>Suporte Vitalício</li>
            <li>Acesso Completo</li>
            <li>Proteção Total</li>
          </ul>
          <button className="bg-violet-200 text-violet-900 py-1 px-4 rounded mt-4">
            Assinar Premium
          </button>
        </div>
        <div className="bg-gray-200 p-8 rounded">
          <h2 className="font-bold mb-4">Plano Básico</h2>
          <ul className="list-disc">
            <li>150 Acessos</li>
            <li>500 Requests</li>
          </ul>
          <button className="bg-gray-300 text-gray-900 py-1 px-4 rounded mt-4">
            Assinar Básico
          </button>
        </div>
      </section>
      <section class="grid grid-cols-2 gap-4 h-96">
        <div class="bg-violet-900 p-8 rounded self-end justify-self-start">
          <h2 class="font-bold mb-4 text-white">Plano Premium</h2>
          <ul class="list-disc text-white">
            <li>300 Acessos</li>
            <li>1200 Requests</li>
            <li>Suporte Vitalício</li>
            <li>Acesso Completo</li>
            <li>Proteção Total</li>
          </ul>
          <button class="bg-violet-200 text-violet-900 py-1 px-4 rounded mt-4">
            Assinar Premium
          </button>
        </div>
        <div class="bg-gray-200 p-8 rounded self-start justify-self-end">
          <h2 class="font-bold mb-4">Plano Básico</h2>
          <ul class="list-disc">
            <li>150 Acessos</li>
            <li>500 Requests</li>
          </ul>
          <button class="bg-gray-300 text-gray-900 py-1 px-4 rounded mt-4">
            Assinar Básico
          </button>
        </div>
      </section>
      <section class="flex h-96 gap-4 justify-center bg-[url('../assets/grid.svg')]">
        <div class="bg-violet-900 p-8 rounded">
          <h2 class="font-bold mb-4 text-white">Plano Premium</h2>
          <ul class="list-disc text-white">
            <li>300 Acessos</li>
            <li>1200 Requests</li>
            <li>Suporte Vitalício</li>
            <li>Acesso Completo</li>
            <li>Proteção Total</li>
          </ul>
          <button class="bg-violet-200 text-violet-900 py-1 px-4 rounded mt-4">
            Assinar Premium
          </button>
        </div>
        <div class="bg-gray-200 p-8 rounded content-end">
          <h2 class="font-bold mb-4">Plano Básico</h2>
          <ul class="list-disc">
            <li>150 Acessos</li>
            <li>500 Requests</li>
          </ul>
          <button class="bg-gray-300 text-gray-900 py-1 px-4 rounded mt-4">
            Assinar Básico
          </button>
        </div>
      </section>
      <section class="grid grid-cols-[auto_auto] gap-4 h-96 place-content-center">
        <div class="bg-violet-900 p-8 rounded">
          <h2 class="font-bold mb-4 text-white">Plano Premium</h2>
          <ul class="list-disc text-white">
            <li>300 Acessos</li>
            <li>1200 Requests</li>
            <li>Suporte Vitalício</li>
            <li>Acesso Completo</li>
            <li>Proteção Total</li>
          </ul>
          <button class="bg-violet-200 text-violet-900 py-1 px-4 rounded mt-4">
            Assinar Premium
          </button>
        </div>
        <div class="bg-gray-200 p-8 rounded">
          <h2 class="font-bold mb-4">Plano Básico</h2>
          <ul class="list-disc">
            <li>150 Acessos</li>
            <li>500 Requests</li>
          </ul>
          <button class="bg-gray-300 text-gray-900 py-1 px-4 rounded mt-4">
            Assinar Básico
          </button>
        </div>
      </section>
    </div>
  );

  /*

Observação geral: 
------------
1. O alinhamento/justificação só funciona quando existe espaço vazio para alinhar;
2. Strech (ocupar todo o grid) é aplicado por padrão.


Align/Justify Items
-----------------------------------
a)items == (align-items): alinha os itens no eixo Y (vertical)

b)justify-items- justifica os itens no eixo X (horizontal)

c)place-items- alinha/justifica os itens

Para todos:
------------
start, center, end, stretch


----------------------------------------------
----------------------------------------------


Align/Justify Self
-----------------------------------
a) self- (align) alinha o item no eixo Y (vertical)

b) justify-self- justifica o item no eixo X (horizontal)

c) place-self- alinha/justifica o item

Para todos:
------------
start, center, end, stretch


----------------------------------------------
----------------------------------------------


Align/Justify Content
-----------------------------------
-----------------------------------
a) content- (align) alinha o conteúdo no eixo Y (vertical)

b) justify- justifica o conteúdo no eixo X (horizontal)

c) place-content alinha/justifica o conteúdo

Para todos:
------------
start, center, end, stretch, normal, between, around



*/
};

export default Align_Justify;
