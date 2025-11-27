import img from './assets/floresta.jpg';

const Cores = () => {
  return (
    <>
      <div classNameName="my-4">
        <img src={img} alt="" className="grayscale" />
        <img src={img} alt="" className="blur-sm hover:blur-none" />
        <img src={img} alt="" className="sepia" />
      </div>
      <div>
        <nav className="bg-white/20 backdrop-blur-md fixed back top-20 left-20 p-4 w-40 rounded-md">
          <a href="">Home</a>
          <ul>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
        <img src={img} alt="" />
      </div>
    </>
  );
};

/*

Filtros
------------------------------------------
------------------------------------------
Os filtros são aplicados utilizando a propriedade filter.

grayscale --> preto e branco
blur-(valor) --> desfoque
sepia
contrast-(valor)

Backdrop Filter
------------------------------------------
Os mesmos filtros podem também ser aplicados aos elementos do fundo apenas. 
Lembrando que para ver os elementos do fundo, é necessário que o elemento no topo possua uma certa transparência.

backdrop-blur-md - backdrop-filter 

bg-white/30 + backdrop-blur-md
** bg-white/30 com 30% transparência
*blur maior == vidro
posso usar qualquer filtro aqui


*/

export default Cores;
