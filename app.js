// INICIO DO JOGO ENCONTRE O N° SECRETO
alert("Boas vindas ao jogo do n° secreto");

let numeroSecreto = 4;
console.log("DICA: " + numeroSecreto);

let chute = prompt("Escolha um número entre 1 a 10");

// MENSAGEM SE VC ENCONTRAR OU NÃO ENCONTRAR O N°
if (chute == numeroSecreto) {
    console.log("Isso aí! você descobriu o n° secreto");
    alert(`Parabéns, este é o n° secreto: ${numeroSecreto}`);
} else {
    // Lógica para quando o chute for diferente do número secreto
    if (chute > numeroSecreto) {
        alert(`O n° secreto é menor que ${chute}`);
    } else {
        alert(`O n° secreto é maior que ${chute}`);
    }
}
