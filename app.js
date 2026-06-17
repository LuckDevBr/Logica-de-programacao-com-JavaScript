console.log("Boas vindas!");

let name = "Lucas";

alert(`Hello, ${name}!`);

prompt("Qual a linguagem de programação que você mais gosta?");

let valor1 = 7;
let valor2 = 4;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let v1 = 10;
let v2 = 5;
let resultado2 = v1 - v2;

console.log(`A diferença entre ${v1} e ${v2} é igual a ${resultado2}`);

let idade = prompt("Digite sua idade:");

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}
var numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O numero é positivo.");
} else if (numero < 0) {
    console.log("O numero é negativo.");
} else {
    console.log("O numero é zero.");
}

let numero1 = 1;
while (numero1 <= 10) {
    console.log(numero1);
    numero1++;
}
let nota1 = prompt("Digite a primeira nota:");
if (nota1 >= 7) {
    alert("Aprovado!");
} else {
    alert("Reprovado!");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);
let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);