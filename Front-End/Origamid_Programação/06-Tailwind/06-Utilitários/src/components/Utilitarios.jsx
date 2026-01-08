const Utilitarios = () => {
  return (
    <div>
      <footer className="text-stone-800 border-t-2 border-stone-200 mt-16 bg-stone-200">
        <div className="container grid gap-16 grid-cols-3 py-4">
          <div>
            <h4 className="font-serif text-xl text-stone-500 mb-4">Páginas</h4>
            <ul className="divide-y-2">
              <li className="py-2">
                <a href="/">Imóveis</a>
              </li>
              <li className="py-2">
                <a href="/">Contato</a>
              </li>
              <li className="py-2">
                <a href="/">Financiamento</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl text-stone-500 mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>21 9999-9999</li>
              <li>contato@example.com</li>
              <li>Rua Ali Perto</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl text-stone-500 mb-4">Redes</h4>
            <ul>
              <li>@farest.imoveis</li>
              <li>youtube.com/farest.imoveis</li>
            </ul>
          </div>
        </div>
        <p className="container border-t-2 border-t-stone-200 py-4 w-full">
          © 2024 Farest Imóveis
        </p>
      </footer>
      <form
        action=""
        class="max-w-md mt-4 p-6 bg-green-200 rounded accent-cyan-700"
      >
        <div className="grid gap-1">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            class="border-2 border-cyan-400 rounded-md block p-2 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          />
        </div>
        <div>
          <label class="flex items-center gap-2 mt-4" for="termos">
            <input id="termos" name="termos" type="checkbox" class="size-5" />
            Li e aceito os termos.
          </label>
        </div>
        <select
          class="mt-6 mb-10 appearance-none border-2 rounded-md p-2 border-cyan-400 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-100 pr-8 bg-[url('./img/seta.svg')] bg-no-repeat bg-position[center_right_0.5rem]"
          name=""
          id=""
        >
          <option value="">JavaScript</option>
          <option value="">Python</option>
          <option value="">Ruby</option>
        </select>
        <input
          type="file"
          className="block w-full text-sm file:border-2 file:border-cyan-600 file:py-2 file:px-2 file:rounded-md file:bg-cyan-700  hover:file:bg-cyan-800 hover:focus:outline-none hover:file:focus:border-cyan-700 hover:file:focus:ring-4 hover:file:focus:ring-pink-900"
        />
      </form>
    </div>
  );
};

export default Utilitarios;
