//Jogos de pontos
console.log("Boa sorte!");
alert("Bem vindo ao jogo de pontos");

//Ponto minimo para ganhar e pergunta de quantos pontos voce fez
console.log("Tente fazer do que 99 pontos")
let pontosV = 100;
let pontuação = prompt ("Quantos pontos você fez?");

//Mensagem caso ganhe ou perca
if( pontuação >= pontosV){
    console.log("Rei dos pontos");
    alert("Parabéns, você venceu!");
} else{
    console.log("Na proxima você vai conseguir!");
    alert("Tente novamente para ganhar");
}