const Background = () => {
  return (
    <div className="my-4 h-[2000px]">
      <div class="p-12 pt-70 bg-[url('assets/floresta.jpg')] rounded-2xl overflow-hidden bg-fixed bg-center bg-cover">
        <h1 class="text-4xl/tight text-white font-serif font-bold text-balance mb-16 max-w-screen-sm">
          Venha Experimentar a Vida na Floresta
        </h1>
        <p class="text-white">
          Melhores locais para visitar
          <a
            href="/"
            class="underline underline-offset-4 decoration-2 inline-block text-white"
          >
            2049
          </a>
          *
        </p>
      </div>
      <div>
        <h1 class="text-4xl/tight bg-clip-text text-transparent bg-[url('assets/floresta.jpg')] font-serif font-bold text-balance">
          Venha Experimentar a Vida na Floresta
        </h1>
      </div>
    </div>
  );
};

/*

Background
------------------------------------------
------------------------------------------
background-color ==> bg-gray-200

valor arbitrário para usar imagens ==> bg-[url('img/padrao.svg')]



Propriedades
------------------------------------------
background-size ==> 
  bg-cover --> a imagem diminui ocupando toda a Div (de acordo com o tam tela)
  contain

background-repeat ==> bg-no-repeat 

background-position ==> bg-center / top / right / left

background-attachment ==> 
  bg-fixed - a imagem se mantem fixa enquanto rolamos o scroll p/ baixo ou cima 
  scroll



Clip
------------------------------------------

bg-clip-text - background-clip
*/

export default Background;
