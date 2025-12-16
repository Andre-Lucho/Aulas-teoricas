const Gradiente = () => {
  return (
    <div>
      <button class="bg-linear-to-b from-lime-600 to-lime-700 text-white py-2 px-4 rounded-md">
        COMPRAR
      </button>
      <br />
      <div class="h-1 mb-2 bg-linear-to-r from-pink-400 via-red-400 to-blue-400"></div>
      <h1 class="font-bold text-4xl inline text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-red-400 to-blue-400">
        Venha Conhecer Malibu
      </h1>
      <br />
      <div class="h-4 bg-linear-to-r from-emerald-400 from-50% via-blue-800 via-60% to-blue-400"></div>

      <div class="mt-8 h-4 bg- bg-linear-to-r from-black from-50% to-blue-400 to-50%"></div>
    </div>
  );
};

/*

Gradiente
-------------
-------------
bg-linear-to-b / t / tr / tl / br / bl
b=bottom
t=top
r=right
l=left

from- e to-
-----------
from
-----
comeca de determinada cor e vai para o transparente ou cor de fundo(padrão)

to
----
termina com a cor escolhida


bg-conic
bg-radial



Via
--------------
via- para adicionar cores intermediárias entre as cores em 'from' e 'to'


from-%
--------------

É possível definir onde o background começa/termina

*OBS:
------
se eu aplicar o mesmo percentual em from e to (ex.from-20% to-20%) significa que comeca e termina no mesmo ponto.
Assim, tenho 2 cores em transicao chapada, sem efeito



Para textos
------------
--------------

bg-clip-text + text-transparent
----------------------------------
add o efeito ao texto

*OBS:
------
Observar o 'box model' do elemento --> texto constuma ser block - pega w-100% do espaco da tela
**devo mudar para inline - restrito ao espaco dos caractereas 




*/

export default Gradiente;
