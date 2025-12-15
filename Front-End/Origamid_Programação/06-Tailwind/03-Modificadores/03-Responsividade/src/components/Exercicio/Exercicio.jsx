import React from 'react';

const Exercicio = () => {
  return (
    <section className="flex justify-center my-0 md:my-4 [main-container]">
      <div className="flex max-w-2xl min-h-fit border-16 border-amber-50 rounded md:max-w-3xl [container-externo]">
        <div className="w-full min-h-fit bg-lime-950 py-7 md:py-4 [container-interno-backg]">
          <div className="flex flex-col items-center md:h-dvh [container-interno]">
            <p className="md:mt-8 uppercase text-lime-300 text-sm tracking-wide">
              Conecte-se com a Natureza
            </p>
            <div className="mx-6 md:mx-9 [container-titulo]">
              <h1 className="mt-3 text-3xl capitalize font-serif text-center md:mt-4 md:text-6xl">
                cada som, cada momento, uma nova descoberta
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-6 *:max-w-[300px] *:p-6 *:bg-lime-900 *:rounded-2xl md:grid-cols-2 md:mt-14 [cards-container]">
              <div className="*:mb-2 *:md:mb-3 [grid-container-esq]">
                <h3 className="text-lime-300 text-2xl font-serif">Lua Nova</h3>
                <div className="">
                  <p className="text-4xl md:text-5xl font-serif">23</p>
                  <span className="text-xl">Março 2049</span>
                </div>
                <p className="text-sm text-balance text-lime-300">
                  Melhor período para observação astronômica. O Céu estará claro
                  e as estrelas visíveis.
                </p>
                <button className="text-sm py-2 px-4 justify-self-start bg-lime-950 rounded-full md:text-[16px]">
                  reservar 23/03
                </button>
              </div>
              <div className="*:mb-2 *:md:mb-3 [grid-container-dir]">
                <h3 className="text-lime-300 text-2xl font-serif ">
                  Aurora Boreal
                </h3>
                <div className="">
                  <p className="text-4xl md:text-5xl font-serif">15</p>
                  <span className="text-xl">Abril 2049</span>
                </div>
                <p className="text-sm text-balance text-lime-300">
                  Melhor período para observação da Aurora Boreal, o céu estará
                  iluminado pelas estrelas.
                </p>
                <button className="text-sm py-2 px-4 justify-self-start bg-lime-950 rounded-full md:text-[16px]">
                  reservar 15/04
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercicio;
