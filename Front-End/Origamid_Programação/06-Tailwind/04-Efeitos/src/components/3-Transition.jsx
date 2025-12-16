const Transition = () => {
  return (
    <div>
      <button class="bg-blue-200 hover:bg-blue-700 hover:text-white hover:scale-105 border-2 border-blue-700 px-4 py-2 rounded-md transition">
        Comprar Produto
      </button>
      <br />
      <button class="bg-blue-200 hover:bg-blue-700 hover:text-white hover:scale-105 border-2 border-blue-700 px-4 py-2 rounded-md transition duration-300 ease-out">
        Comprar Produto
      </button>
      <div class="m-4"></div>
      <button class="bg-blue-200 hover:bg-blue-700 hover:text-white hover:scale-105 border-2 border-blue-700 px-4 py-2 rounded-md transition ">
        Comprar Produto
      </button>
      <br />
      <button class="bg-blue-200 hover:bg-blue-700 hover:text-white hover:scale-105 border-2 border-blue-700 px-4 py-2 rounded-md transition motion-reduce:transition-none motion-reduce:hover:scale-100">
        Comprar Produto
      </button>
    </div>
  );
};

/*

Transition
----------------
Anima as propriedades mais comuns como color / transform.

Usa uma duração de 150ms e uma transição com cubic-bezier.

transition / -all / -transform / -colors / ... /-none


** O atributo 'transition' permite animar todas as animacões abaixo:

.transition {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); efeitos de tempo na animacão
  transition-duration: 150ms;
}



Propriedades
----------------
duration-300 / 150 / 500 - transition-duration:

ease-linear / in / out / in-out - transition-timing-function:
in- comeca lenta e acelera
out - comeca rápida e desacelera
in-out - come e termina rápida | meio da animacão é lento

delay-0 / 300 / 1000 - transition-delay:


motion-reduce(Sistema)
----------------
Para usuário que preferem utilizar aplicativos sem animações/movimentos.

motion-reduce

*/

export default Transition;
