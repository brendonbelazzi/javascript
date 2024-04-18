const nome = prompt("Insira o seu nome : ");
let continuar = confirm("Você ja visitou alguma cidade ?");

let cidades = "";
let contagem = 0;

while (continuar) {
  let cidade = prompt("Qual o nome da cidade ?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = confirm("Você ja visitou alguma outra cidade ?");
}

alert(
  "Nome : " +
    nome +
    "\n\n Quantas cidades visitou : " +
    contagem +
    "\n Quais cidades ja visitou : \n" +
    cidades
);
