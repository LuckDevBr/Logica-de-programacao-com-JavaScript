//INICIO DO JOGO ENCONTRE O N° SECRETO
alert("Boas vindas ao jogo do n° secreto");
 let numeroSecreto = 1;
    console.log("DICA");
    console.log(numeroSecreto);
 let chute = prompt("Escolha um número entre 1 a 10");
//MENSAGEM SE VC ENCONTRAR OU NÃO ENCONTRAR O N°
    if(chute == numeroSecreto){
     console.log("Isso aí! você descobriu o n° secreto");
alert(`Parabéns, este é n° secreto ${numeroSecreto}`);
}   else{
     console.log("Não fique triste, tente novamente")
alert("Você errou :(");
}