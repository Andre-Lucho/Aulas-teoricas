import React from 'react';

const Exercicio = () => {
  return (
    <section className="m-6">
      <h1 className="uppercase">Escolha a sua</h1>
      <form action="" className="grid grid-cols-1 gap-4 mt-6">
        <div className="">
          <div className="flex justify-between px-4 py-2 mb-2 max-w-84 bg-gray-400 focus:bg-gray-600 rounded-md">
            <div className="">
              <input type="radio" id="Nimbus-Stark" value="nibus" />
              <label htmlFor="Nimbus-Stark">Nimbus Stark</label>
            </div>
            <span>R$ 4.999</span>
          </div>
          <ul className="bg-gray-600 rounded-md">
            <li>Motor Elétrico</li>
            <li>Fibra de Carbono</li>
            <li>50 km/h</li>
            <li>Rastreador</li>
          </ul>
        </div>
        <div className="">
          <div>
            <input type="radio" id="magic-might" value="nibus" />
            <label htmlFor="magic-might">Magic Might</label>
            <span>R$ 2.499</span>
          </div>
          <div>
            <ul>
              <li>Motor Elétrico</li>
              <li>Fibra de Carbono</li>
              <li>45 km/h</li>
              <li>Rastreador</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div>
            <input type="radio" id="nebulosa-cosmic" value="nebulosa" />
            <label htmlFor="nebulosa-cosmic">Nebulosa Cosmic</label>
            <span>R$ 3.999</span>
          </div>
          <div>
            <ul>
              <li>Motor Elétrico</li>
              <li>Fibra de Carbono</li>
              <li>40 km/h</li>
              <li>Rastreador</li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Exercicio;

// flex flex-col items-center
