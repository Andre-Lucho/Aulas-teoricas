const Flex = () => {
  return (
    <div className="m-8">
      <ul className="flex flex-col gap-2 *:p-2 *:rounded *:text-center">
        <li className="bg-orange-200 text-orange-800">HTML</li>
        <li className="bg-lime-200 text-lime-800">CSS</li>
        <li className="bg-yellow-200 text-yellow-800">JavaScript</li>
        <li className="bg-blue-200 text-blue-800">React</li>
        <li className="bg-violet-200 text-violet-800">PHP</li>
      </ul>
      <br />
      <h1 className="mb-2 text-neutral-50">flex-1 - todos crescem iguais</h1>
      <ul className="flex gap-2 *:p-2 *:rounded *:text-center">
        <li className="bg-orange-200 text-orange-800 p-2 flex-1">HTML</li>
        <li className="bg-lime-200 text-lime-800 p-2 flex-1">CSS</li>
        <li className="bg-yellow-200 text-yellow-800 p-2 flex-1">JavaScript</li>
        <li className="bg-blue-200 text-blue-800 p-2">React</li>
        <li className="bg-violet-200 text-violet-800 p-2">PHP</li>
      </ul>
      <br />
      <h1 className="mb-2 text-neutral-50">
        flex-auto - todos crescem de acordo com o conteúdo interno
      </h1>
      <ul className="flex gap-2 *:p-2 *:rounded *:text-center mb-4">
        <li className="bg-orange-200 text-orange-800 flex-auto">HTML</li>
        <li className="bg-lime-200 text-lime-800 flex-auto">CSS</li>
        <li className="bg-yellow-200 text-yellow-800 flex-auto">JavaScript</li>
        <li className="bg-blue-200 text-blue-800">React</li>
        <li className="bg-violet-200 text-violet-800">PHP</li>
      </ul>
      <br />
      <h1 className="mb-2 text-neutral-50">flex grow e shrink</h1>
      <ul className="flex gap-2 *:p-2 *:rounded *:text-center">
        <li className="bg-orange-200 text-orange-800">HTML</li>
        <li className="bg-lime-200 text-lime-800 grow">CSS</li>
        <li className="bg-yellow-200 text-yellow-800 w-90 shrink-0">
          JavaScript
        </li>
        <li className="bg-blue-200 text-blue-800 w-32 shrink-0">React</li>
        <li className="bg-violet-200 text-violet-800">PHP</li>
      </ul>
      <br />

      <h1 className="mb-2 text-neutral-50">flex-wrap</h1>
      <ul className="flex gap-2 flex-wrap *:flex-1 *:p-2 *:rounded *:text-center">
        <li className="bg-orange-200 text-orange-800">HTML</li>
        <li className="bg-lime-200 text-lime-800">CSS</li>
        <li className="bg-yellow-200 text-yellow-800 shrink">JavaScript</li>
        <li className="bg-blue-200 text-blue-800">React</li>
        <li className="bg-violet-200 text-violet-800">PHP</li>
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

flex-1 == flex: 1 1 0%; Ocupa o espaço vazio, mas ignora o valor do conteúdo (todos os elems crescem com o mesmo tamanho)

flex-auto: flex: 1 1 auto; Ocupa o espaço vazio, mas cresce de acordo com o tamanho do conteúdo (elems com coteúdo maior, crescem mais).



Grow e Shrink
--------------------
grow | grow-0: flex-grow: 1 | 0

shrink | shrink-0: flex-shrink: 1 | 0


Wrap
--------------------
Por padrão, o Flex não quebra(cria um scroll)

flex-wrap: flex-wrap: wrap;

flex-wrap-reverse: flex-wrap: wrap-reverse;

flex-nowrap: flex-wrap: nowrap;

*/

export default Flex;
