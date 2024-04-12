const primeiroNome = prompt("Informe o nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const campoDeEstudo = prompt("Informe o campo de estudo do recruta:");
const anoDeNascimento = prompt("Informe o ano de nascimento do recruta:");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\n Nome completo : " +
    primeiroNome +
    sobrenome +
    "\n Campo de estudo : " +
    campoDeEstudo +
    "\n Idade : " +
    (2024 - anoDeNascimento)
);
