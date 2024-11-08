// Iterando sobre uma string

// A) FOR

let bb = ""
let a = "Andre Lucho"

for(let i = 0; i < a.length; i++) {
  bb += a[i] + "\n"     //(i + 1) + "*" + "letra = " + a[i] + "\n"
}

console.log(bb)


// B) FOR...OF
// Você pode usar um loop FOR...OF para iterar sobre os elementos de uma string:

let empty = ""
let b = "Andre Lucho"

for(let x of b){
  empty += x + "\n"

}

console.log(empty)


// OBS = DIFERENÇA com FOR...OF x FOR...IN 
// FOR IN também faz iteração, PORÉM RETORNA **POSIÇÕES** e não valores

// FOR IN em Arrays = também retorna posições e não valores
// FOR...IN = mais adequado para Objetos

