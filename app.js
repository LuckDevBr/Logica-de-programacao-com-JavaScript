alert("Seja bem vindo ao jogo do número secreto");

let chute;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Qual é o número secreto entre 1 a 100?");
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor do que ${chute}`);
        } else {
            alert(`O número é maior do que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
 alert(`Parabens! O número secreto é ${chute} depois de ${tentativas} ${palavraTentativas}`);
