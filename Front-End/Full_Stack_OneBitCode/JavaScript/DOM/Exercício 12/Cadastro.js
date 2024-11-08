const button = document.getElementById('button-add')
const ol = document.getElementById('addTec')
const olRemove = document.getElementById('button-reset')
const send = document.getElementById('button-send')

let devList =[]
let firstEvent = true
//Variavel tipo Rastreador = a condicional IF faz uma verificação do seu valor; 
// Após a primeira execução, seu valor será alterado, fazerdo com que, no proximo click, 
// a condicao sejá falsa, pulando essa etapa da execução e renderização  


button.addEventListener('click', function(event){
  event.preventDefault()
  if (firstEvent){
    newP(event)
    firstEvent = false 
  }
  newInputs(event)
  // return firstEvent
  // não há necessidade, pois o resultado da funcao nao sera utilizado fora dela
  // nao precisa retornar um resultado
  
})
// poderia criar 2 linhas com button.addEventListener (para os dois eventos),
// mas nao daria para verificar a condicao do firstEvent

olRemove.addEventListener('click', function(event){
  event.preventDefault()
  ol.innerHTML = ""
})

send.addEventListener('click', getDevData)
    // const form = document.getElementById('devBase')
    // form = event.currentTarget.parentNode
    // const inputSend = form.children.tecInput.value
    // const radioSend = form.children.tecTime.value
  

function newP(event){
  event.preventDefault()
  const p = document.createElement('p')
  p.textContent = 'Em qual(is) tecnologia(s) tem conhecimento?'
  ol.appendChild(p) 
}

function newInputs(event){
  event.preventDefault()
  ol.innerHTML += `
  <li>
    <input type="text" name='tecInput' placeholder="Nome tecnologia"></input>
  </li>
  <p>
    <input type="radio" name='tecTime' id="tecTime">0-2 anos </input>
    <input type="radio" name='tecTime' id="tecTime">2-5 anos </input>
    <input type="radio" name='tecTime' id="tecTime">5+ anos </input>
  </p>  `
}
// innerHTML = Substitui todo o valor anterior

function getDevData(event){
event.preventDefault()
const name = document.getElementById('name').value
const tecName = document.getElementById('tecInput').value
const tecTime = document.getElementById('tecTime').value

const devInfo = {nome: name, nomeTec:tecName, tempo_Exp:tecTime}

devList.push(devInfo)
}