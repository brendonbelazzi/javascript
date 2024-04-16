const carro1 = prompt("Insira a velocidade do carro 1 :");
const carro2 = prompt("Insira a velocidade do carro 2 :");

if (carro1 > carro2) {
  alert("O carro 1 é mais rápido!");
} else if (carro2 > carro1) {
  alert("O carro 2 é mais rápido!");
} else {
  alert("As velocidades são iguais");
}
