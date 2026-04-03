alert("Seja bem vindo ao jogo do número secreto");

let chute;
let numeroSecreto = 777;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Qual é o número secreto entre 1 a 1000?");
    if (chute == numeroSecreto) {
        alert(`Parabens! O número secreto é ${chute} depois de ${tentativas} tentivas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor do que ${chute}`);
        } else {
            alert(`O número é maior do que ${chute}`);
        }
        tentativas++;
    }
}