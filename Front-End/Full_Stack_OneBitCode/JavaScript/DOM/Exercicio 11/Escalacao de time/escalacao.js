const lineUp = []

function newLineUp() {
  const newForm = document.getElementById('newSection')
  const newH3 = document.createElement('h3')
  newH3.innerText = "Meu Time"
  newH3.name = 'newh3'
  
  const newUl = document.createElement('ul')
  newUl.name = 'newul'
  
  const nameLi = document.createElement('li')
  nameLi.innerHTML = '<label for="nameinput">Nome do Jogador: </label>'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullName'
  nameInput.id = 'nameinput'
  nameInput.placeholder = 'Jogador'
  nameLi.appendChild(nameInput)
  newUl.appendChild(nameLi)
  newUl.appendChild(document.createElement('br'))
  
  const jerseyLi = document.createElement('li')
  jerseyLi.innerHTML = '<label for="jerseyinput">Número da Camisa: </label>'
  const jerseyInput = document.createElement('input')
  jerseyInput.type = 'number'
  jerseyInput.name = 'jersey'
  jerseyInput.id = 'jerseyinput'
  jerseyInput.placeholder = 'Digite um número'
  jerseyLi.appendChild(jerseyInput)
  newUl.appendChild(jerseyLi)
  newUl.appendChild(document.createElement('br'))
  
  const positionLi = document.createElement('li')
  positionLi.innerHTML = '<label for="positioninput">Posição do Jogador: </label>'
  const positionInput = document.createElement('input')
  positionInput.type = 'text'
  positionInput.name = 'position'
  positionInput.id = 'positioninput'
  positionInput.placeholder = 'Posição'
  positionLi.appendChild(positionInput)
  newUl.appendChild(positionLi)
  newUl.appendChild(document.createElement('br'))

  newForm.append(newH3, newUl)
}

function lineUpConfirmation(){
  
  const nameImput = document.getElementById('nameinput').value
  const jerseyInput = document.getElementById('jerseyinput').value
  const positionInput = document.getElementById('positioninput').value
  // (id).value = pega o valor inserido pelo usuario
  
  const newForm = document.getElementById('newSection')
  const newH3 = document.getElementsByTagName('h3')
  const newUl = document.getElementsByTagName('ul')
  
  
  let lineUpConfirm = confirm("A escalação de seu time está correta?\n" + 
  "Se sim, aperte OK")
  
  if (lineUpConfirm) {
    
    const player= {nome: nameImput, camisa: jerseyInput, posição: positionInput}
    lineUp.push(player)
    
    newForm.innerHTML = ""
    
    lineUpVisualization()
    
  } else{
    let lineUp2Confirm = confirm("Gostaria de modificar a escalação do ultimo jogador?\n" + 
    "Se sim, aperte OK\n" + "Para apagar toda a escalação, aperte: Cancelar ")
    
    if (lineUp2Confirm) {
    newForm.removeChild(newH3[newH3.length - 1])
    newForm.removeChild(newUl[newUl.length - 1])

    } else{
      
      newForm.innerHTML = ""
    }}
    return nameImput, jerseyInput, positionInput
}

function lineUpVisualization(){
  
  let newLineUp = ""
  let lineUpVisual = lineUp.forEach(function(newplayer, i) {
    newLineUp = "Jogador n* " + (i+1) + "\n" +
    "Nome: " + newplayer.nome + "\n" + 
    "Camisa " + newplayer.camisa + "\n" + 
    "Posição: " + newplayer.posição
    console.log(newLineUp)
    return newLineUp
  })
  
  
  const newDiv = document.getElementById('lineup')
  const newP = document.createElement('p')
  // name é atributo somente de inputs?
  newP.name = 'newlineup'
  newP.id = 'newlineup' 
  newP.innerText = newLineUp
  
  // ajustar a visualizacao do Array na pagina
  
  newDiv.appendChild(newP)
  lineUpVisual = ""

}  