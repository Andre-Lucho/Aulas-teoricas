import React from 'react';

const Corrigido = () => {
  return (
    <section className="flex justify-center my-4 text-neutral-100 [main-container]">
      <div className="flex max-w-3xl h-[670px] border-16 border-amber-50 rounded [container-externo]">
        <div className="w-full bg-lime-950 [container-interno-backg]">
          <div className="flex flex-col items-center [container-interno]">
            <p className="mt-8 uppercase text-lime-300 text-sm tracking-wide">
              Conecte-se com a Natureza
            </p>
            <div className="mx-9 [container-titulo]">
              <h1 className="mt-4 text-6xl capitalize font-serif text-center">
                cada som, cada momento, uma nova descoberta
              </h1>
            </div>
            <div className="flex gap-8 mt-10 px-6 *:p-6 *:bg-lime-900 *:rounded-2xl *:grid *:gap-4 [cards-container]">
              <div className="[grid-container-dir]">
                <h3 className="text-lime-300 text-2xl font-serif">Lua Nova</h3>
                <div className="">
                  <p className="text-5xl font-serif">23</p>
                  <span className="text-xl">Março 2049</span>
                </div>
                <p className="text-balance text-lime-300">
                  Melhor período para observação astronômica. O Céu estará claro
                  e as estrelas visíveis.
                </p>
                <button className="py-2 px-4 justify-self-start bg-lime-950 rounded-full">
                  reservar 23/03
                </button>
              </div>
              <div className="[grid-container-esq]">
                <h3 className="text-lime-300 text-2xl font-serif ">
                  Aurora Boreal
                </h3>
                <div className="">
                  <p className="text-5xl font-serif">15</p>
                  <span className="text-xl">Abril 2049</span>
                </div>
                <p className="text-balance text-lime-300">
                  Melhor período para observação da Aurora Boreal, o céu estará
                  iluminado pelas estrelas.
                </p>
                <button className="py-2 px-4 justify-self-start bg-lime-950 rounded-full">
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

export default Corrigido;
