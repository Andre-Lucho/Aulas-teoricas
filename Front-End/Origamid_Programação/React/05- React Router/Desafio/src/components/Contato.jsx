import React from 'react';
import Head from './Hooks/Head';
import '../styles/contato.scss';
import contatoImg from '../assets/contato.jpg';

const Contato = () => {
  return (
    <section className="contato-container animeLeft">
      <Head title="Contato" description="contato" />
      <img src={contatoImg} alt="Img de uma máquina de escrever" />
      <div>
        <h1>Entre em Contato</h1>
        <ul className="contato-ul-container">
          <li>andre@gmail.com</li>
          <li>9.9999-9999</li>
          <li>Rua Ali na esquina, 1234 conj. 567</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
