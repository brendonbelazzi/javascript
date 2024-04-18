let numero = parseFloat(
  prompt("Escreva o número em metros que deseja converter : ")
);
let medida = prompt(
  "Escreva de forma abreviada a medida que deseja : \n milímetro (mm) \n centímetro (cm) \n decímetro (dm) \n decâmetro (dam) \n hectômetro (hm) \n quilômetro (km)"
);

switch (medida) {
  case "mm":
    alert("O resultado em milímetro é " + numero * 1000);
    break;
  case "cm":
    alert("O resultado em centímetros é " + numero * 100);
    break;
  case "dm":
    alert("O resultado em decímetro é " + numero * 10);
    break;
  case "dam":
    alert("O resultado em decâmetro é " + numero / 10);
    break;
  case "hm":
    alert("O resultado em hectômetro é " + numero / 100);
    break;
  case "km":
    alert("O resultado em quilômetro é " + numero / 1000);
    break;
  default:
    alert("Opção inválida.");
}
