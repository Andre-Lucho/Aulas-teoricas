import React from 'react';

const Container = () => {
  return (
    <section className="flex justify-center my-4 main-container">
      <div className="flex w-3xl h-[670px] border-16 border-amber-50 rounded container-externo">
        <div className="w-full bg-lime-950 container-interno-backg">
          <div className="flex flex-col items-center container-interno">
            <p className="mt-8 uppercase text-lime-300">
              Conecte-se com a Natureza
            </p>
            <div className="mx-9 container-titulo">
              <p className="mt-4 text-6xl capitalize font-serif text-center">
                cada som, cada momento, uma nova descoberta
              </p>
            </div>
            <div className="grid grid-cols-2 gap-7 w-[90%] mt-10 *:bg-[#365314] *:border *:border-[#365314] *:rounded-2xl container-grids">
              <div className="p-2 py-4 *:ml-5 *:mb-3 grid-container-dir">
                <div className="text-lime-300 text-2xl font-serif ">
                  Lua Nova
                </div>
                <div className="">
                  <p className="text-5xl font-serif">23</p>
                  <span>Março 2049</span>
                </div>
                <p className="w-[65%] text-lime-300">
                  Melhor período para observação astronômica. O Céu estará claro
                  e as estrelas visíveis.
                </p>
                <button className="mt-2 py-2 px-4 bg-lime-950 rounded-2xl">
                  reservar 23/03
                </button>
              </div>
              <div className="p-2 py-4 *:ml-5 *:mb-3 grid-container-esq">
                <div className="text-lime-300 text-2xl font-serif ">
                  Aurora Boreal
                </div>
                <div className="">
                  <p className="text-5xl font-serif">15</p>
                  <span>Abril 2049</span>
                </div>
                <p className="w-[65%] text-lime-300">
                  Melhor período para observação da Aurora Boreal, o céu estará
                  iluminado pelas estrelas.
                </p>
                <button className="mt-2 py-2 px-4 bg-[#1A2E05] rounded-2xl">
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

export default Container;
