const button = document.getElementById('button-add')
const ol = document.getElementById('addTec')
const olRemove = document.getElementById('button-reset')
const send = document.getElementById('button-send')

let devList =[]
let firstEvent = true
//Variavel tipo Rastreador = a condicional IF faz uma verificação do seu valor; 
// Após a primeira execução, seu valor será alterado, fazerdo com que, no proximo click, 
// a condicao sejá falsa, pulando essa etapa da execução e renderização  

let inputRows = 0
// Variável tipo Contador = para contar as linhas de li's add com o botao 'button-add'


// ** EVENTOS ** //

button.addEventListener('click', function(){
  if (firstEvent){
    newP()
    firstEvent = false 
  }
  newInputs()
})
  // return firstEvent
  // não há necessidade, pois o resultado da funcao nao sera utilizado fora dela
  // nao precisa retornar um resultado
  
// poderia criar 2 linhas com button.addEventListener (para os dois eventos),
// mas nao daria para verificar a condicao do firstEvent


// PQ NÁO FUNCIONOU??
// cleanBtn.addEventListener('click', function(ev){
//   ev.preventDefault()
//   ol.removeChild(newLi)
// })

olRemove.addEventListener('click', function(){
  ol.innerHTML = ""
  newP()
})

send.addEventListener('click', getDevData())

// ** FUNCOES **//

function newP(){
  const ol = document.getElementById('addTec')

  const p = document.createElement('p')
  p.textContent = 'Em qual(is) tecnologia(s) tem conhecimento?'
  ol.appendChild(p) 
}

function newInputs(){
  // preciso setar um ID diferente e em ordem crescente de criacao(Click)
  // para cada label e input = index para manipulaçao futura

  const newLi = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newLi.id = 'inputRow-' + rowIndex
  newLi.className = 'inputRow'

  const newTechLabel = createLabel(null, 'techInput-' + rowIndex)
  const newTechInput = createInput('text', 'techInput-' + rowIndex, 'techInput', "Nome tecnologia")
  

  const expLabel = createLabel(' Experiência: ', 'expRadio-' + rowIndex )
  const id1 = 'expRadio-' + rowIndex + '.1'
  const radioLabel1 = createLabel('0-2 anos', id1)
  const newTechRadio1 = createRadio('radio', id1, 'techExp-' + rowIndex, '0-2 anos')
  const id2 = 'expRadio-' + rowIndex + '.2'
  const radioLabel2 = createLabel('3-4 anos', id2)
  const newTechRadio2 = createRadio('radio', id2, 'techExp-' + rowIndex, '3-4 anos' )
  const id3 = 'expRadio-' + rowIndex + '.3'
  const radioLabel3 = createLabel('5+ anos', id3)
  const newTechRadio3 = createRadio('radio', id3, 'techExp-' + rowIndex, '5+ anos')

  // os 'name' dos radios precisam ser iguais, porem diferentes dos ids dos labels 
  // = tratamento das informações no back-end - p nao se confundir com os ids
  
  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.id = 'button-clean'
  removeRowBtn.innerText = 'Limpar'
  removeRowBtn.addEventListener('click', function(){
    ol.removeChild(newLi)
  })
  
  
  newLi.append(newTechLabel, newTechInput,
    expLabel, radioLabel1, newTechRadio1, 
    radioLabel2, newTechRadio2, 
    radioLabel3, newTechRadio3,
    removeRowBtn)
  
  ol.appendChild(newLi)
}


  // ** FUNCAO DE SUBMIT DE DADOS**//

function getDevData(){
  const form = document.getElementById('devBase')
  
  form.addEventListener('submit', function(ev){
    ev.preventDefault()
    const fullNameInput = document.getElementById('fullName')
    
    const li = document.querySelectorAll('.inputRow')
  // querySelectorAll('.inputRow') - pega pela classe = cada <li> com seus labels, input e radios = 1 linha de cada tecnologia
  // querySelectorAll = cria uma NodeList =~ Array
    
    let devTech =[]
  
    li.forEach(function (row) {
      //  #rowId input[name="techName"]
      // a cada linha pelo id vai pegar o valor de 1 input através do [name = techInput]
      const techName = document.querySelector('#' + row.id + ' input[name="techInput"]').value
      // a cada linha pelo id vai pegar o valor de 1 radio que foi marcado
      const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
      
      devTech.push({ nome_Tec: techName, Exp: techExp })
    })
    
    const newDev = {nome: fullNameInput.value, Tecno:devTech}
    
    devList.push(newDev)

    alert('Dev Cadastrado')

    fullNameInput.value = ""
    
    li.forEach(function (row){
      row.remove()})
    })
}

  // ** CRIACAO DE LABELS E INPUTS**//  

  function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
    return label
  }

  function createInput(type= 'text', id, name, placeholder= '') {
    const input = document.createElement('input')
    input.type = type
    input.id = id
    input.name = name
    input.placeholder = placeholder
    return input
  }

  function createRadio(type = 'radio', id, name, value) {
  const radio = document.createElement('input')
  radio.type = type
  radio.id = id
  radio.name = name
  radio.value = value
    return radio
  }