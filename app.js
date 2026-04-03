alert("Seja bem vindo ao jogo do número secreto");

let chute
let numeroSecreto = 5;

while (chute != numeroSecreto) {
    prompt = ("Qual é o número secreto?");
    if (chute == numeroSecreto) {
        alert(`Parabens! ${chute}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor do que ${chute}`);
        } else {
            alert(`O número menor do que ${chute}`);
        }
    }
}