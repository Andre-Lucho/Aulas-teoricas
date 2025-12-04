const BeforeAfter = () => {
  return (
    <div className="m-4">
      <p className="mt-4 mb-2">1</p>
      <button class="bg-blue-400 hover:bg-blue-200 active:bg-blue-300 text-blue-950 border-2 border-blue-200 rounded-md py-2 px-4 relative after:size-6 after:bg-white after:border-4 after:border-blue-900 after:border-r-transparent after:rounded-full after:absolute after:-top-2 after:-right-2">
        Comprar Produto
      </button>
      <div>
        <p className="mt-4 mb-2">2</p>
        <button class="bg-blue-400 hover:bg-blue-200 active:bg-blue-300 text-blue-950 border-2 border-blue-200 rounded-md py-2 px-4 relative">
          Comprar Produto
          <span class="size-6 bg-white border-4 border-blue-900 border-r-transparent rounded-full absolute -top-2 -right-2"></span>
        </button>
      </div>
    </div>
  );
};

/*

Before e After
------------------------------------------
------------------------------------------
Adiciona os pseudo elements before e after.

O Tailwind adiciona content: '' automaticamente.



Evite
------------------------------------------
Considere uma div/span para a criação de elementos decorativos, assim evitamos poluir a tag com classes de before e after.


Outros
------------------------------------------
placeholder - estiliza o placeholder de inputs
marker - estiliza marcadores de lista

https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements

*/

export default BeforeAfter;
