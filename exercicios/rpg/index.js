const nome = prompt("Insira o nome do personagem :");
let pontoDeAtaque = Number(
  prompt("Insira o poder de ataque desse personagem :")
);

const nome2 = prompt("Insira o nome do outro personagem :");
let pv = Number(prompt("Insira os pontos de vida do persongem :"));
const pontoDeDefesa = Number(
  prompt("Insira o poder de defesa do personagem :")
);
const shield = Number(confirm("Insira o escudo do personagem :"));

let danoCausado = 0;

if (pontoDeAtaque > pontoDeDefesa && shield == "0") {
  danoCausado = pontoDeAtaque - pontoDeDefesa;
} else if (pontoDeAtaque > pontoDeDefesa && shield) {
  danoCausado = (pontoDeAtaque - pontoDeDefesa) / 2;
}

pv -= danoCausado;

alert("Dano causado : " + danoCausado);
alert(
  nome +
    "\n" +
    "\n Pontos de ataque : " +
    pontoDeAtaque +
    "\n\n" +
    nome2 +
    "\n" +
    "\n Pontos de vida : " +
    pv +
    "\n Pontos de defesa : " +
    pontoDeDefesa +
    "\n Dano recebido : " +
    danoCausado
);

console.log({
  nome,
  pontoDeAtaque,
  nome2,
  pv,
  pontoDeDefesa,
  shield,
  danoCausado,
});
