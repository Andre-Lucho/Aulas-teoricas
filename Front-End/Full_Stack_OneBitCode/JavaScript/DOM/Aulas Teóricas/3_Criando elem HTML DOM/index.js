function addInput() {
  // Obtendo elemento do HTML 
  const ul = document.getElementById('inputs') 

  // Criando um elem HTML no DOM
  const newLi = document.createElement('li') 
  // TAG que quero criar = li - Ele cria <li> + </li>
  
  // Atributos da TAG li:
  newLi.className = 'list-item'
  newLi.innerText = 'Novo Input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'


  
  newLi.appendChild(newInput)
  ul.appendChild(newLi)
  ul.appendChild(document.createElement('br'))
}