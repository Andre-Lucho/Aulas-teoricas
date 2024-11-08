let number = Number(prompt("Digite um numero para ser convertido em BINARIO: "))
let bin = []
let ntoCal = number

for(let ctl = 0; ntoCal >=1; ) {
  if (ntoCal % 2 >= 0){
    bin.unshift(ntoCal % 2) 
  } else {
    bin.unshift("1")
  }
  ntoCal = Math.trunc(ntoCal / 2)
}

alert("O Numero " + number + " digitado equivale a:\n " + bin + " em numeros BINARIOS")

// while para retornar numeros??

// parseFloat, parseInt = comando Number