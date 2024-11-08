//1.
//this.propriedade = objeto.propriedade

myObj1 = {}

myObj1.name = "Andre"
myObj1.lastName = "Lucho"
myObj1.fullName = function(){
  return (this.name + " " + this.lastName).toUpperCase()
  // return myObj1.name + " " + myObj1.lastName
}  

console.log(myObj1.fullName())
