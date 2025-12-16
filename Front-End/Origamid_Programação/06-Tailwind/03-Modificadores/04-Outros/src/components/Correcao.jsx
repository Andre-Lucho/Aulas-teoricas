import React from 'react';

const Correcao = () => {
  return (
    <section className="grid gap-4 mt-8 max-w-lg mx-auto">
      <h1 className="uppercase font-bold tracking-wide">Escolha a sua</h1>
      <form action="" className="grid gap-2">
        <div className="">
          <input
            type="radio"
            id="nimbus-stark"
            name="bike"
            value="nibus"
            className="mr-1 my-4 peer"
          />
          <label
            htmlFor="nimbus-stark"
            className="inline-grid grid-cols-[180px_auto] bg-slate-400 peer-checked:bg-slate-600 hover:bg-slate-500 cursor-pointer px-4 py-2 rounded-md"
          >
            Nimbus Stark<span>R$ 4.999</span>
          </label>
          <ul className="p-2 ml-4 hidden peer-checked:block bg-slate-500 rounded-md">
            <li>Motor Elétrico</li>
            <li>Fibra de Carbono</li>
            <li>50 km/h</li>
            <li>Rastreador</li>
          </ul>
        </div>
        <div className="">
          <input
            type="radio"
            id="magic-might"
            value="nibus"
            className="mr-1 my-4 peer"
          />
          <label
            htmlFor="magic-might"
            className="inline-grid grid-cols-[180px_auto] bg-slate-400 peer-checked:bg-slate-600 hover:bg-slate-500 cursor-pointer px-4 py-2 rounded-md"
          >
            Magic Might<span>R$ 2.499</span>
          </label>
          <ul className="p-2 ml-4 hidden peer-checked:block bg-slate-500 rounded-md">
            <li>Motor Elétrico</li>
            <li>Fibra de Carbono</li>
            <li>45 km/h</li>
            <li>Rastreador</li>
          </ul>
        </div>
        <div className="">
          <input
            type="radio"
            id="nebulosa-cosmic"
            value="nebulosa"
            className="mr-1 my-4 peer"
          />
          <label
            htmlFor="nebulosa-cosmic"
            className="inline-grid grid-cols-[180px_auto] bg-slate-400 peer-checked:bg-slate-600 hover:bg-slate-500 cursor-pointer px-4 py-2 rounded-md"
          >
            Nebulosa Cosmic<span>R$ 3.999</span>
          </label>
          <ul className="p-2 ml-4 hidden peer-checked:block bg-slate-500 rounded-md">
            <li>Motor Elétrico</li>
            <li>Fibra de Carbono</li>
            <li>40 km/h</li>
            <li>Rastreador</li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default Correcao;

// flex flex-col items-center
