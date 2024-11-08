function addPlayer() {
  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number = document.getElementById("number").value

  const confirmation = confirm("Escalar " + name + " como " + position + "?")

  if (confirmation) {
    const teamList = document.getElementById("team-list")
    const playerItem = document.createElement("li")
    playerItem.id = "player-" + number
    // sera criado um li com 1 ID especifico por jogador escalado
    playerItem.innerText = position + ": " + name + " (" + number + ")"
    teamList.appendChild(playerItem)

    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value
  const playerToRemove = document.getElementById("player-" + number)
  // esta setando o li com o ID especifico por jogador escalado, 
  // de acordo com o valor fornecido pelo ususario


  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")
// esta pegando o valor inserido na li do jogador
  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove)
    // ou:
    // playerToRemove.remove()
    // remove direto o "filho" = nao ha necessidade de fazer referencia ao nó "pai"

    document.getElementById("numberToRemove").value = ""
  }
}