alert("Boas-vindas ao jogo do número secreto");
let numeroMaximo = 100;
// Adicionamos + 1 no final para o número secreto poder ser 100 (e evitar o número 0)
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1; 
console.log(numeroSecreto); 

let chute;
let tentativas = 1; 

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); 

    if (chute == numeroSecreto) {
        break; // Acertou, para o jogo!
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        // Incrementa a tentativa aqui dentro, toda vez que o jogador errar
        tentativas++; 
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);