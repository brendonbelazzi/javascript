let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }
  opcao = prompt(
    "Pacientes : \n" +
      pacientes +
      "\n Escolha uma ação : \n 1- Novo Paciente \n 2- Consultar \n 3- Sair"
  );

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Qual o nome do paciente ?");
      fila.push(novoPaciente);
      break;
    case "2":
      let pacienteConsultado = fila.shift();
      alert(pacienteConsultado + " foi removido da fila.");
      break;
    case "3":
      alert("Encerrando...");
      break;
  }
} while (opcao !== "3");
