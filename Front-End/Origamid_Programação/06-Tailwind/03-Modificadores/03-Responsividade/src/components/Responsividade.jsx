const Responsividade = () => {
  return (
    <div className="m-4">
      {/* acima de md - 768px - aplica text-4xl */}
      <h1 class="text-xl md:text-4xl font-bold font-serif">
        Venha Experimentar a Vida na Floresta
      </h1>
      <div>
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-8">
          <div class="h-20 bg-green-400 rounded-md"></div>
          <div class="h-20 bg-green-400 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

/*

Responsividade
------------------------------------------
------------------------------------------
O Tailwind possui modificadores que aplicam as propriedades de acordo com o media querie.

Ele é Mobile First, logo uma propriedade md:text-4xl será aplicada quando a tela for maior que 768px já text-2xl será aplicado em qualquer tamanho de tela.

Breakpoints nativos, aplicam o @media (min-width: px):

sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px



max-
------------------------------------------
É possível também usar o modificador max-md: para aplicar os estilos quando a tela for menor que md (768px).

Tamanhos disponíveis: sm, md, lg, xl, 2xl.



min-[] e max-[]
------------------------------------------
Valor arbitrário é possível com o min-[]: e max-[]:



Exercício
------------------------------------------
Utilizando o layout do exercício de Text e Font, torne o mesmo responsivo ajustando a tipografia, paddings, espaçamentos e colunas para mobile.

*/

export default Responsividade;
