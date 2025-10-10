const form = document.getElementById("orderForm")

form.addEventListener("submit", function (event) {
  
  // event(ev).preventDefault()
  // previne a acao padrao(atrib =>  action="") dos <Forms> = enviar os dados p um endereço web(servidor)
  // ao submeter um Form, a pag é atualizada, e seus dados sao perdidos
  // com o metodo ev.preventDefault() - a acao padrao do evento "submit" para o <Form> é impedida
  // outros eventos JS também têm eventos padrões. Para ver quando esse metodo pode ser aplicado
  // deve-se usar a prop 'ev.cancelable' = retona um boolean
  
  event.preventDefault()



  // querySelector = mesma sixtaxe do CSS (.- classes / # -ids)
  // "elementos[1]" 
  // 1= [especificar atributos das TAGS HTML]"
  const name = document.querySelector("input[name='name']").value
  const address = document.querySelector("input[name='address']").value
  const breadType = document.querySelector("select[name='breadType']").value 
  
  // value de um select = value da opcao marcada pelo usuario 
  const main = document.querySelector("input[name='main']").value
  const observations = document.querySelector("textarea[name='observations']").value

  
  // checkbox = aceita +1 valor ao mesmo tempo p ser submetido
  let salad = ""
  // PQ querySelectorAll? = pois, quero o conjunto dos "input[name='salad']"
  // querySelectorAll = devolve uma nodeList = tenho alguns metodos de Arrays - aqui: ForEach
  document.querySelectorAll("input[name='salad']:checked").forEach(function (saladaSelecionada) {
    salad += " - " + saladaSelecionada.value + "\n"
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})