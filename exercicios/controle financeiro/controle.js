let saldo = parseFloat(prompt("Insira a quantidade de dinheiro inicial :"));
let opcao = "";

do {
  opcao = prompt(
    "Saldo : " +
      saldo +
      "\n Escolha uma das opções abaixo :" +
      "\n 1- Adicionar dinheiro" +
      "\n 2- Retirar dinheiro" +
      "\n 3- Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado :"));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser retirado :"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida.");
  }
} while (opcao !== "3");
