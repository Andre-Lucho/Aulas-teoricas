const Flex = () => {
  return (
    <div className="m-8">
      <ul class="flex flex-col gap-2 *:p-2 *:rounded *:text-center">
        <li class="bg-orange-200 text-orange-800">HTML</li>
        <li class="bg-lime-200 text-lime-800">CSS</li>
        <li class="bg-yellow-200 text-yellow-800">JavaScript</li>
        <li class="bg-blue-200 text-blue-800">React</li>
        <li class="bg-violet-200 text-violet-800">PHP</li>
      </ul>
      <br />
      <h1 class="mb-2 text-neutral-50">flex-auto</h1>
      <ul class="flex gap-2 *:p-2 *:rounded *:text-center mb-4">
        <li class="bg-orange-200 text-orange-800 flex-auto">HTML</li>
        <li class="bg-lime-200 text-lime-800 flex-auto">CSS</li>
        <li class="bg-yellow-200 text-yellow-800 flex-auto">JavaScript</li>
        <li class="bg-blue-200 text-blue-800">React</li>
        <li class="bg-violet-200 text-violet-800">PHP</li>
      </ul>
      <br />
      <h1 class="mb-2 text-neutral-50">flex-1</h1>
      <ul class="flex gap-2 *:p-2 *:rounded *:text-center">
        <li class="bg-orange-200 text-orange-800 p-2 flex-1">HTML</li>
        <li class="bg-lime-200 text-lime-800 p-2 flex-1">CSS</li>
        <li class="bg-yellow-200 text-yellow-800 p-2 flex-1">JavaScript</li>
        <li class="bg-blue-200 text-blue-800 p-2">React</li>
        <li class="bg-violet-200 text-violet-800 p-2">PHP</li>
      </ul>
      <br />
      <h1 class="mb-2 text-neutral-50">flex grow e shrink</h1>
      <ul class="flex gap-2 *:p-2 *:rounded *:text-center">
        <li class="bg-orange-200 text-orange-800">HTML</li>
        <li class="bg-lime-200 text-lime-800 grow">CSS</li>
        <li class="bg-yellow-200 text-yellow-800 w-90 shrink-0">JavaScript</li>
        <li class="bg-blue-200 text-blue-800 w-32 shrink-0">React</li>
        <li class="bg-violet-200 text-violet-800">PHP</li>
      </ul>
      <br />
      <h1 class="mb-2 text-neutral-50">flex-wrap</h1>
      <ul class="flex gap-2 flex-wrap  *:flex-1 w-60 *:p-2 *:rounded *:text-center">
        <li class="bg-orange-200 text-orange-800">HTML</li>
        <li class="bg-lime-200 text-lime-800">CSS</li>
        <li class="bg-yellow-200 text-yellow-800">JavaScript</li>
        <li class="bg-blue-200 text-blue-800">React</li>
        <li class="bg-violet-200 text-violet-800">PHP</li>
      </ul>
    </div>
  );
};

/*

Flex
-----------------------------------
-----------------------------------

flex define o elemento como flexbox

flex-row e flex-row-reverse coloca em linha

flex-col e flex-col-reverse coloca em coluna



Flex Item
--------------------
flex: (grow) - cresce (shrink)- pode diminuir (basis)

flex-1: flex: 1 1 0%; Ocupa o espaço vazio, mas ignora o valor do conteúdo (todos os elems crescem com o mesmo tamanho)

flex-auto: flex: 1 1 auto; Ocupa o espaço vazio, mas cresce de acordo com o tamanho do conteúdo (elems com coteúdo maior, crescem mais).



Grow e Shrink
--------------------
grow | grow-0: flex-grow: 1 | 0

shrink | shrink-0: flex-shrink: 1 | 0


Wrap
--------------------
flex-wrap: flex-wrap: wrap;

flex-wrap-reverse: flex-wrap: wrap-reverse;

flex-nowrap: flex-wrap: nowrap;



Border
-----------------------------------
Os valores de border são especificados em px, então border-4 é 4px de borda. 
Os valores de bottom, top e etc são separados por -, por exemplo, border-b.

border-x-4 --> border na esq e dir
border-y-4 --> border em cima e embaixo


Box-sizing
-----------------------------------

Diferente do HTML padrão, o Tailwind define os elementos com box-sizing: border-box; 
Sendo assim, os valores de border e padding são absorvidos pelo valor do height e não somados ao mesmo.

Podemos mudar para o comportamento padrão com box-content
*/

export default Flex;
