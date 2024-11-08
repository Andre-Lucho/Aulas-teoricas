const players = []


function getNames() {
  const name01 = document.getElementById('name01').value
  const name02 = document.getElementById('name02').value
  // const names= {name01, name02}
  players.push(name01)
  players.push(name02)
  console.log(players)

  displayNames()
}

// function displayNames(){


