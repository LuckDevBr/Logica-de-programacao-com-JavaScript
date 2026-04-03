alert("Seja bem vindo ao jogo do número secreto");

let chute
let numeroSecreto = 5;

while (chute != numeroSecreto) {
    chute = prompt ("Qual é o número secreto?");
    if (chute == numeroSecreto) {
        alert(`Parabens! O número é ${chute}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor do que ${chute}`);
        } else {
            alert(`O número é maior do que ${chute}`);
        }
    }
}