const Animacoes = () => {
  return (
    <div>
      <button class="bg-green-200 text-green-800 py-2 px-4 rounded-md flex items-center gap-2">
        COMPRAR
        <span class="block size-4 rounded-full border-4 border-green-600 border-r-transparent animate-spin"></span>
      </button>
      <br />
      <button class="relative bg-blue-200 text-blue-800 py-2 px-4 rounded-md">
        Mensagens
        <span class="absolute size-3 bg-purple-600 rounded-full -top-0.5 -right-0.5">
          <span class="size-3 absolute inset-0 bg-purple-600 rounded-full animate-ping"></span>
        </span>
      </button>
    </div>
  );
};

/*

Animacões
----------------


animate-spin
-------------
Anima o rotate do elemento.
Ex. Loading.


animate-ping
-------------
Aumenta e remove a opacidade do elemento;
Ex. notificações.


animate-pulse
-------------
Efeito de aparecer e sumir(pulsar)


animate-bounce
-------------
Efeito 'quicando'
Ex. Pode ser usado p downloads

*/

export default Animacoes;
