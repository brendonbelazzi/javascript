let numero = parseFloat(
  prompt("Insira o número a ser usado na multiplicação :")
);
let resultado = "";

for (let multiplicacao = 1; multiplicacao <= 20; multiplicacao++) {
  resultado +=
    " ->" + numero + "X" + multiplicacao + "=" + numero * multiplicacao + "\n";
}

alert("Resultado da tabuada de " + numero + " :\n\n " + resultado);
