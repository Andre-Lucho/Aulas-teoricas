const Tipografia = () => {
  return (
    <div className="my-4">
      <p className="text-xs">Escala tipográfica - text-xs</p>
      <p className="text-sm">Escala tipográfica - text-sm</p>
      <p className="text-base">Escala tipográfica - text-base</p>
      <p className="text-lg">Escala tipográfica - text-lg</p>
      <p className="text-xl">Escala tipográfica - text-xl</p>
      <p className="text-2xl">Escala tipográfica - text-2xl</p>
      <p className="text-5xl">Escala tipográfica - text-5xl</p>
      <div classNameName="m-4">
        <h1 className="text-2xl font-serif font-bold m-4">Aurora Boreal</h1>
        <p className="text-lg font-mono">
          Descubra o melhor período para observar a deslumbrante Aurora Boreal,
          com o céu iluminado por milhares de estrelas. Desperte ao som dos
          pássaros e participe das nossas caminhadas ao ar livre para viver essa
          experiência mágica.
        </p>
      </div>
      <div className="m-4">
        <h1 className="font-serif font-bold text-3xl text-center uppercase">
          Aurora Boreal
        </h1>
        <p className="text-lg w-96 mt-4 mx-auto text-center">
          Descubra o melhor período para observar a deslumbrante Aurora Boreal,
          com o céu iluminado por milhares de estrelas. Desperte ao som dos
          pássaros e participe das nossas caminhadas ao ar livre para viver essa
          experiência mágica.
        </p>
      </div>
      <div className="m-4">
        <h1 className="font-serif font-bold text-xl text-center tracking-wide uppercase">
          Aurora Boreal
        </h1>
        <p className="leading-normal w-96 mt-4 italic mx-auto text-center text-pretty">
          Descubra o melhor período para observar a deslumbrante Aurora Boreal,
          com o céu iluminado por milhares de estrelas. Desperte ao som dos
          pássaros e participe das nossas caminhadas ao ar livre para viver essa
          experiência mágica.
        </p>
      </div>
      <div>
        <a className="text-xl underline underline-offset-4 decoration-wavy decoration-4 decoration-purple-600">
          Inscreva-se
        </a>
      </div>
    </div>
  );
};

/*
Escala Tipográfica
------------------------------------------
------------------------------------------
text-base --> padrão
{
font-size: 1rem (16px)
line-height: 1.5rem (24px)
}

font-size ==> text-xs / sm / lg / xl / 2xl ... 9xl



Font
------------------------------------------
Define estilo e peso.

font-sans -->padrão

font-family ==> font-serif / sans / mono 
font-weight ==> font-bold / light / thin / medium / black 
font-style ==> italic


Text
------------------------------------------

text-align ==> text-left / center / right / justify

text-wrap ==> text-balance / pretty / nowrap

text-transform ==> uppercase / lowercase / capitalize



Leading e Tracking
------------------------------------------
line-height ==> leading-normal /  3 ... 10 / none / tight / relaxed / snug / loose
font-size + line-height ==> text-xl/relaxed

letter-spacing ==> tracking-wide / widest / tight / valores negativos também


Underline
------------------------------------------
text-decoration ==> underline / line-through / no-underline

text-underline-offset (espaçamento entre linha e texto)
text-decoration-color ==> ex. decoration-gray-200 
text-decoration-thickness ==> decoration-0 / 2 ... 8
text-decoration-style ==> decoration-dashed / wavy / dotted


*/

export default Tipografia;
