let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho : " +
      baralho.length +
      "\n\n 1- Adicionar uma carta " +
      "\n 2- Puxar uma carta " +
      "\n 3- Sair"
  );

  switch (opcao) {
    case "1":
      let nomeDaCarta = prompt("Qual o nome da carta a ser adicionada :");
      baralho.push(nomeDaCarta);
      break;

    case "2":
      const cartaPuxada = baralho.pop();
      alert("Você puxou a carta " + cartaPuxada);
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida !");
  }
} while (opcao !== "3");
