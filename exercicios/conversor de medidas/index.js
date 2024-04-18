let numero = parseFloat(
  prompt("Escreva o número em metros que deseja converter : ")
);
let medida = prompt(
  "Escreva de forma abreviada a medida que deseja : \n milímetro (mm) \n centímetro (cm) \n decímetro (dm) \n decâmetro (dam) \n hectômetro (hm) \n quilômetro (km)"
);

switch (medida) {
  case "mm":
    alert(
      "O resultado em milímetro é " + numero + " m = " + numero * 1000 + " mm"
    );
    break;
  case "cm":
    alert(
      "O resultado em centímetros é " + numero + " m = " + numero * 100 + " cm"
    );
    break;
  case "dm":
    alert(
      "O resultado em decímetro é " + numero + " m = " + numero * 10 + " dm"
    );
    break;
  case "dam":
    alert("O resultado em decâmetro é " + " m = " + numero / 10 + " dam");
    break;
  case "hm":
    alert(
      "O resultado em hectômetro é " + numero + " m = " + numero / 100 + " hm"
    );
    break;
  case "km":
    alert(
      "O resultado em quilômetro é " + numero + " m = " + numero / 1000 + " km"
    );
    break;
  default:
    alert("Opção inválida.");
}
