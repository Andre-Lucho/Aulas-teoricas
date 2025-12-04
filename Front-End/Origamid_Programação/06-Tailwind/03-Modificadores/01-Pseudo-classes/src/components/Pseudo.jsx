const Pseudo = () => {
  return (
    <div className="m-4">
      <button className="bg-blue-400 hover:bg-blue-200 active:bg-blue-300 text-blue-950 border-2 border-blue-200 rounded-md py-2 px-4">
        Comprar Produto
      </button>
      <input
        className="border-2 border-gray-200 bg-gray-100 rounded-md p-2 focus:outline-yellow-400"
        type="text"
      />
      <button
        className="bg-blue-400 hover:bg-blue-200 active:bg-blue-300 text-blue-950 border-2 border-blue-200 rounded-md py-2 px-4 hover:disabled:bg-blue-400 disabled:grayscale disabled:opacity-50"
        disabled
      >
        Enviar
      </button>
      <div>
        <ol className="max-w-[800px] m-4 list-decimal *:odd:bg-gray-500 *:even:bg-gray-300 text-black *:first:text-green-600 *:last:text-red-600">
          <li>Marta</li>
          <li>Nina</li>
          <li>Maria</li>
          <li>Mara</li>
          <li>Mila</li>
        </ol>
      </div>
      {/* <!-- O código abaixo fará mais sentido quando utilizamos JavaScript ou Back End para gerar o conteúdo através de um Loop, 
      onde não sabemos exatamente qual o primeiro/último elemento --> */}
    </div>
  );
};

/*

Pseudo Classes
------------------------------------------
------------------------------------------


Podemos utilizar pseudo classes como hover: e active: para adicionarmos classes condicionais.

hover:bg-green-200 - o background só será verde ao hover



Focus, Visited e Disabled
--------------------------
focus: - foco do teclado
foucus:outline --> borda de um input qd focado pelo teclado

visited: - link visitado
disabled: - campo/botão desabilitado
hover:disabled: - campo/botão desabilitado e com hover



Seletores
----------------------
first: - first-child
last: - last-child
odd: - nth-child(odd)
even: - nth-child(even)



Asterisco
----------------------
*: Seleciona os filhos com > *


OBS.:
--------
--------

Tailwind v3
--------------
Importante, esse tipo de seletor deve ser adicionado diretamente aos filhos. 
No CSS usamos ul li:first-child - note que estamos adicionando no LI e não na UL o :first-child. 
Logo terá que ser assim também no Tailwind, não coloque odd: na ol/ul, mas sim na li.
Posso também escrever assim (v3): class="odd:*:bg-gray-200"


Tailwind v4
--------------
coloque o * na frente de odd/even/first/last
class="*:odd:bg-gray-200"


*/

export default Pseudo;
