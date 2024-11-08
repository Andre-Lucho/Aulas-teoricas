
let assault_damage = 0 

if (assault_power > defensive_power && shield === "Nao") {
  assault_damage = assault_power - defensive_power
} else if (assault_power > defensive_power && shield === "Sim") {
  assault_damage = (assault_power - defensive_power) / 2
}

life_points -= assault_damage

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)