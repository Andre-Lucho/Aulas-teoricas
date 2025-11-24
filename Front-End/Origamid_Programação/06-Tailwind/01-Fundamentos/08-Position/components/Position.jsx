const Position = () => {
  return (
    <div>
      <div className="m-8">
        <nav class="flex justify-between bg-gray-200 p-4 sticky top-0">
          <a href="/">Floresta</a>
          <ul class="flex gap-4">
            <li>
              <a href="/">Produtos</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
        <p class="my-96 h-96">Conteúdo</p>
      </div>
      <br />
      <div class="flex gap-4">
        <div class="bg-lime-950 h-20 w-20 rounded relative">
          <div class="bg-lime-300 border-4 border-lime-950 h-3 w-12 rounded-full absolute top-8 -right-8 z-10"></div>
        </div>
        <div class="bg-lime-950 h-20 w-20 rounded relative"></div>
      </div>
      <br />
      <div class="size-40">Conteúdo</div>
      <div class="absolute inset-0 bg-black/50 z-50">Overlay</div>
    </div>
  );
};

/*

Position
-----------------------------------
absolute / relative / sticky / fixed - position


top/right/bottom/left
----------------------
top / right / bottom / left - valores positivos e negativos

z-0 / 10 ... 50 - z-index


inset
----------------------
inset / inset-x - define valores para top/right/bottom/left


*/

export default Position;
