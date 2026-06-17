alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1; // o chute é a tentativa do jogador, o número secreto é o número que o jogador tem que acertar, e as tentativas é a quantidade de vezes que o jogador tentou acertar o número secreto

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e 100`);

    //se chute for igual o numero secreto
    if (chute == numeroSecreto) {
        break; // o break para o código, ou seja, para o laço de repetição
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);

        } else (chute < numeroSecreto); {
            alert(`O número é maior que ${chute}`);
        }

        tentativas++; // o ++ é um operador de incremento, ou seja, ele aumenta o valor da variável em 1
    }
}
// se for 1 tentativa, palavra tentiva, se for mais de 1, palavra tentativas
let palavraTentativa = tentativas > 1 ? "tentiva" : "tentativas";