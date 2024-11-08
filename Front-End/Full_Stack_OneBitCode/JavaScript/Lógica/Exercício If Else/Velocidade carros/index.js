const name_First_Car = prompt("Insira o nome do veiculo 1: ")
const name_Sec_Car = prompt("Insira o nome do veiculo 2: ")
const speed_First = parseFloat(prompt("Insira a velocidade do veiculo 1: "))
const speed_Sec = parseFloat(prompt("Insira a velocidade do veiculo 2: "))


if (speed_First==speed_Sec){
  alert("As velocidades de " + name_First_Car + " e de" + name_Sec_Car + " sao iguais")
  } else if (speed_First > speed_Sec){
    alert("A velocidade de "+ name_First_Car + " e maior do que de " + name_Sec_Car)
    } else{
      alert("A velocidade de " + name_Sec_Car + " e maior do que de " + name_First_Car)
      }



