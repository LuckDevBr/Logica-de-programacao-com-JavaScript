//Mini desafio do Alura
alert("Desafio: hora da prática");

//Perguntando para o usuário
console.log("Espero que seja sábado ou domingo");
let diaSemana = prompt ("Qual é o dia da semana?");

//Falas (se a resposta for positiva ou se for negativa)
if (diaSemana == "Sabado"){
    alert("Bom final de semana!");
    console.log("Ainda bem que Sabado");
} else if (diaSemana == "Domingo"){
    alert("Bom final de semana!");
    console.log("Ainda bem que é Domingo");
} else{
    alert("Queria que fosse final de semana");
    console.log("Esperar uns dias pelo final de semana");
}