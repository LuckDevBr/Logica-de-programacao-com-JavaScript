//INICIO DO JOGO ENCONTRE O N° SECRETO
alert("Boas vindas ao jogo do n° secreto");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 a 10");

//MENSAGEM CASO VC ENCONTRE O N° SECRETO
if(chute == numeroSecreto){
    console.log("Isso aí! você descobriu o n° secreto (5)");
    alert("Parabéns, este é n° secreto");
} 