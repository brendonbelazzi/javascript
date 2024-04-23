let arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar elementos
// Push (final)
let tamanho = arr.push("Ragnar");
tamanho = arr.push("Ragnar");
console.log(arr);
console.log(tamanho);

//unshift (começo)
tamanho = arr.unshift("Floki");
console.log(arr);
console.log(tamanho);

//remover elementos
//pop
let ultimoElemento = arr.pop();
console.log(arr);
console.timeLog(ultimoElemento);
console.log(tamanho);

//shift
ultimoElemento = arr.shift();
console.log(arr);
console.timeLog(ultimoElemento);

// pesquisar por elemento
// includes
let inclui = arr.includes("Gandalf");
console.log(inclui);

inclui = arr.includes("Floki");
console.log(inclui);

//index0f
let indice = arr.indexOf("Ragnar");
console.log(indice);

console.log(arr);

// Cortar e Concatenar
let cortar = arr.slice(0, 4);
let final = arr.slice(-4);

console.log(cortar);
console.log(final);
