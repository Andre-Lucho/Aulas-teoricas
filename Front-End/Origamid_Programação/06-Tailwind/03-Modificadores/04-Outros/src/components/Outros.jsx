const Outros = () => {
  return (
    <div>
      <div class="rounded-md max-w-md p-4 bg-neutral-200 dark:bg-neutral-800">
        <h1 class="text-xl font-serif font-bold mb-2 text-neutral-500 dark:text-neutral-200">
          Aurora Boreal
        </h1>
        <p class="text-neutral-700 dark:text-neutral-300">
          Melhor período para observação da Aurora Boreal, o céu estará
          iluminado pelas estrelas.
        </p>
      </div>
      <br />
      <div class="rounded-md max-w-md p-4 bg-neutral-200 hover:bg-neutral-800 group">
        <h1 class="text-xl font-serif font-bold mb-2 text-neutral-500 group-hover:text-neutral-200">
          Aurora Boreal
        </h1>
        <p class="text-neutral-700 group-hover:text-neutral-300">
          Melhor período para observação da Aurora Boreal, o céu estará
          iluminado pelas estrelas.
        </p>
      </div>
      <br />
      <form action="">
        <div>
          <input
            type="text"
            class="border-2 border-gray-200 peer p-2"
            placeholder="cpf"
          />
          <p class="invisible peer-focus:visible text-yellow-700 mb-2">
            Use pontos e hífen
          </p>
        </div>
        <div>
          <input type="email" class="border-2 border-gray-200 peer p-2" />
          <p class="invisible peer-focus:visible text-red-800">
            Email inválido.
          </p>
        </div>
        <div>
          <label for="seguros" class="flex gap-2 peer">
            <input id="seguros" name="seguros" type="checkbox" />
            Seguros
          </label>
          <p class="invisible peer-has-:checked:visible mb-2">
            Você estará segurado até 24/12/2049
          </p>
        </div>
        <button class="border-2 border-gray-200 rounded-md p-2">Enviar</button>
      </form>
      <br />
      <div class="flex gap-8 mb-4 p-4">
        <div class="has-[.bg-green-500]:bg-gray-900  bg-gray-400 p-4 rounded-md size-40 relative">
          <h2 class="text-white">Plano Ouro</h2>
          <div class="recomendado absolute bg-green-500 text-green-950 p-1 rounded-md -top-4 -right-4">
            Recomendado
          </div>
        </div>
        <div class="has-[.recomendado]:bg-gray-800 bg-gray-400 p-4 rounded-md size-40 relative">
          <h2 class="text-white">Plano Prata</h2>
        </div>
      </div>
    </div>
  );
};

/*

Dark(sistema)
----------------
O modificador dark: serve para aplicarmos estilos diferentes quando o usuário altera para um dark-mode do sistema.



Group
----------------

No CSS podemos colocar uma pseudo-class no pai e alterar o filho.
No Tailwind podemos utilizar um modificador group para termos o mesmo efeito em um grupo de elementos ao mesmo tempo.

group deve ser adicionado ao elemento pai
group-modificador: deve ser adicionado ao elemento filho que será alterador quando o modificador ocorrer no pai.



Peer
----------------
Funciona como o group porém serve para elementos "irmãos", que estão dentro do mesmo pai e no mesmo nível.

Obs.: 
------------------
------------------
Para qualquer elemento após o elemento pai, e que estejam 1 nivel abaixo

Em um form(ex acima) - qd tenho varios elementos e não quero que o mesmo efeito se propague entre os demais irmãos ==> 
1. ou coloco entre Div's ;
2. ou add uma tag(como uma id) diferente para cada irmão, antecedido de /<algum nome> para cada pai e para cada filho
Ex. 
peer/cpf
peer-focus/cpf:block

peer/email
peer-focus/email:block


** Diferenca entre hidden e invisible --
hidden - esconde o elemento e retira do Dom
invisible - apenas 'esconde o elemento', mantendo ele no dom(espacamento)



Has(condicional)
----------------
Modifica o pai (de acordo com o seu identificador), caso o filho também tenha o identificador (condição verdadeira) -  

EX.
----
1.
Pai - "has-[.dark]:text-white"
Filho- "dark"

o Pai recebe o texto branco

2.Também posso usar uma classe Tailwind como identificador
Pai - "has-[.bg-lime-400]:text-white"
Filho- "bg-lime-400"

o Pai recebe o texto branco



*/

export default Outros;
