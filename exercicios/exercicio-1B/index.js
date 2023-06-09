window.alert("Programa que mostra ás 5 operações básicas de 2 valores.");
const valor_1 = parseFloat(prompt("Digite o primeiro valor: ")); //parseFloat() Serve para converter uma string para Flutuante
const valor_2 = parseFloat(prompt("Digite o segundo valor: "));

const soma = valor_1 + valor_2;
const subtracao = valor_1 - valor_2;
const multiplicacao = valor_1 * valor_2;
const divisao = valor_1 / valor_2;
const resto_div_inteira = valor_1 % valor_2;

window.alert(
  "O valores são: \nSoma " +
    soma +
    "; \nSubtração " +
    subtracao +
    ";\nMultiplicação: " +
    multiplicacao +
    "; \nDivisão: " +
    divisao +
    "; \nResto da divisão inteira: " +
    resto_div_inteira +
    "."
);
