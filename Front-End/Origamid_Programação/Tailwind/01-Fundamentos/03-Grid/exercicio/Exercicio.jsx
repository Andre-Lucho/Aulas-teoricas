import React from 'react';
import '../assets/camera.jpg';
import '../assets/notebook.jpg';
import '../assets/tablet.jpg';

const Exercicio = () => {
  return (
    <main className="m-8">
      <div className="grid gap-12">
        {/* grid-coluns: auto --> limita-se apenas ao espaçamento do seu conteúdo */}
        <header className="grid grid-cols-[1fr_auto] gap-10">
          <a href="">Produtos</a>
          <ul className="grid grid-cols-2 gap-10 list-none">
            <li className="">Bicicletas</li>
            <li className="">Contato</li>
          </ul>
        </header>
        <section className="grid grid-cols-3 gap-10">
          <h1>Produtos de Alta Qualidade</h1>
          <p className="col-span-2">
            Produtos de alta precisão e qualidade, feitos sob medida para você.
            Explore o mundo na sua velocidade com a Nivacraft
          </p>
        </section>
        <section className="grid grid-cols-3 gap-10">
          <div className="grid gap-2">
            <img src="../assets/camera.jpg" alt="Imagem Camera" />
            <h2>Câmera R$1.200</h2>
          </div>
          <div className="grid gap-2">
            <img src="../assets/notebook.jpg" alt="Imagem Notebook" />
            <h2>NoteBook R$ 5.000</h2>
          </div>
          <div className="grid gap-2">
            <img src="../assets/tablet.jpg" alt="Imagem Tablet" />
            <h2>Tablet R$ 3.000</h2>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Exercicio;
