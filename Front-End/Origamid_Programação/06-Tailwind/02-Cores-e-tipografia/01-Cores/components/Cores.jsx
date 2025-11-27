const Cores = () => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-3">
        <div>
          <div className="bg-blue-100 text-black">bg-blue-100</div>
          <div className="bg-blue-500">bg-blue-500</div>
          <div className="bg-blue-900">bg-blue-900</div>
        </div>
        <div>
          <div className="bg-lime-100">bg-lime-100</div>
          <div className="bg-lime-500">bg-lime-500</div>
          <div className="bg-lime-900">bg-lime-900</div>
        </div>
        <div>
          <div className="bg-yellow-100">bg-yellow-100</div>
          <div className="bg-yellow-500">bg-yellow-500</div>
          <div className="bg-yellow-900">bg-yellow-900</div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8">
        <div>
          <div className="bg-gray-100 text-black">bg-gray-100</div>
          <div className="bg-gray-500">bg-gray-500</div>
          <div className="bg-gray-900">bg-gray-900</div>
        </div>
        <div>
          <div className="bg-neutral-100">bg-neutral-100</div>
          <div className="bg-neutral-500">bg-neutral-500</div>
          <div className="bg-neutral-900">bg-neutral-900</div>
        </div>
        <div>
          <div className="bg-stone-100">bg-stone-100</div>
          <div className="bg-stone-500">bg-stone-500</div>
          <div className="bg-stone-900">bg-stone-900</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 *:p-4 text-sm">
        <div className="bg-lime-200 text-lime-600">
          Lime 200/600 - Contraste 2.65:1
        </div>
        <div className="bg-blue-200 text-blue-600">
          Lime 200/600 - Contraste 3.64:1
        </div>
        <div className="bg-neutral-200 text-neutral-600">
          Neutral 200/600 - Contraste 6.20:1
        </div>
        <div className="bg-lime-200 text-lime-800">
          Lime 200/800 - Contraste 6.06:1
        </div>
        <div className="bg-blue-200 text-blue-800">
          Lime 200/800 - Contraste 6.14:1
        </div>
        <div className="bg-neutral-200 text-neutral-800">
          Neutral 200/800 - Contraste 12.01:1
        </div>
      </div>
      <div className="decoration-purple-800 text-purple-800 decoration-2 underline underline-offset-2">
        Origamid
      </div>
      <div className="mt-6">
        <div className="size-28 bg-blue-500/50"></div>
        <div className="size-28 bg-red-500/50 -mt-6"></div>
        <div className="size-28 bg-green-500/50 -mt-6"></div>
      </div>
      <div className="bg-[#333]/80 text-[color(display-p3_1_0.9_0)] border-[hsl(20_80%_60%)] border-4">
        Front End
        {/* color(display-p3_1_0.9_0) == para smartphones */}
      </div>
      <section>
        <ul className="flex gap-4 mt-8 *:rounded-full *:px-5 *:py-1 ">
          <li className="bg-lime-100 text-lime-900 border-2 border-lime-600">
            Pago
          </li>
          <li className="bg-sky-200 text-sky-800 border-2 border-sky-700">
            Arquivado
          </li>
          <li className="bg-yellow-200 text-yellow-900 border-2 border-yellow-600">
            Processando
          </li>
          <li className="bg-red-200 text-red-900 border-2 border-red-400">
            Falha
          </li>
        </ul>
      </section>
    </div>
  );
};

/*

Cores
------------------------------------------
------------------------------------------
As cores vão de 50 (claro) - 950 (escuro).
O Tailwind oferece diferentes tons de cinza (gray, neutral, stone, ...) e diferentes matizes (green, lime, emerald, ...).
Tem também o white e black

https://tailwindcss.com/docs/customizing-colors



a) Cinza
-------------
Os tons de cinza variam em suas matizes: 
1. Cinza padrão apresenta um leve tom azul, 
2. Stone tem uma tonalidade avermelhada 
3. Neutral permanece completamente neutro.



b) Contraste
-------------
400- - Cores mais claras.

600+ - Cores mais escuras.

** Cuidado com as cores do meio 400 -> 600, pois elas possuem menores possibilidades de fundos contrastantes.

O Tailwind não possui uma lógica de contraste, uma matiz que funciona bem com 300/600 pode não funcionar em outra.

Por regra, tente usar cores com diferença de pelo menos 500 pontos.

*** Importante:
-----------------
------------------
Site par verificação de Contraste
https://www.siegemedia.com/contrast-ratio


c) Propriedades
-------------
Praticamente todas as propriedades que permitem a alteração de cores podem utilizar as paletas de cores do Tailwind.

text-, bg-, border-, decoration- e outros



d) Opacidade
-------------
Podemos modificar a opacidade de uma cor adicionando / e a porcentagem que desejamos: bg-black/20 vai gerar rgb(0 0 0 / 0.2);

Os valores vão de 0 até 100, pulando de 5 em 5.



e) Cores Arbitrárias
--------------------
Podemos utilizar valores arbitrários para cores, mas geralmente vamos definir nas configurações uma nova cor. 
Pois assim o Tailwind gera para a gente todas as cores com o novo valor.

* lembrar que espaços - devem estar entre '_'(underline)!



Exercício
----------

Recrie as notificações (badges) conforme Img --> /src/assets


*/

export default Cores;
