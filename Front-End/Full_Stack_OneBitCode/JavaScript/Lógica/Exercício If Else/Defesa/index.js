//1 - personagem = Warrior
const name_warrior = 
prompt("Personagem - WARRIOR\n Digite um nome para o personagem: ")

const assault_power = 
parseFloat(prompt("Personagem - WARRIOR\n Digite seu poder de ataque: "))

//2 personagem = Ranger
const name_rager = 
prompt("Personagem - RAGER\n Digite um nome para o personagem: ")

const life_points = 
parseFloat(prompt("Personagem - RAGER\n Digite a quantidade de pontos de vida: "))
const defensive_power = 
parseFloat(prompt("Personagem - RAGER\n Digite seu poder de defesa: "))
const shield = 
prompt("Personagem - RAGER\n Ranger possui um escudo?\n Digite: s(sim) ou n(nao) ")

let assault_damage = []
let life = life_points

if (assault_power <= defensive_power){
  assault_damage = 0
} else if(assault_power > defensive_power && shield == "n"){
    assault_damage = assault_power - defensive_power
  } else if(assault_power > defensive_power && shield == "s") {
      assault_damage = (assault_power - defensive_power) /2
    }   

life -= assault_damage

alert(name_warrior + " causou " + assault_damage + " pontos de dano em " + name_rager)

alert("Status \nWARRIOR: " + name_warrior + "\nLife = 100% \nAssault Power = " + assault_power + 
  "\nRANGER: " + name_rager + "\nLife = " + life + "\nAssault Damage = " + assault_damage)
