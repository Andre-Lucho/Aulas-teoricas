const Sombras = () => {
  return (
    <div>
      <div class="flex gap-4">
        <div class="size-40 bg-white shadow-md"></div>
        <div class="size-40 bg-white shadow-xl"></div>
        <div class="size-40 bg-white shadow-2xl shadow-blue-200"></div>
      </div>
      <br />
      <input
        type="text"
        class="py-2 px-4 focus:ring-3 border border-gray-200 focus:border-yellow-500 ring-yellow-200 rounded-md focus:outline-none bg-gray-200 focus:bg-white"
      />
    </div>
  );
};

/*

Sombras
----------------
O Tailwind oferece alguns valores padrões para sombras e permite também mudarmos a cor delas com shadow-cor



Ring
----------------
Ring é uma sombra utilizada para simular uma borda nos elementos. 
Com ela podemos criar efeitos de bordas duplas, geralmente utilizados em botões e campos de input.




*/

export default Sombras;
