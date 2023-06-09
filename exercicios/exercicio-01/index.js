const primeiro_nome = window.prompt("Digite o seu primeiro nome: ");
const segundo_nome = window.prompt("Digite o seu sobre nome: ");
const area_estudo = window.prompt("Digite sua área de estudos: ");
const ano_nascimento = window.prompt("Digite o seu ano de nascimento: ");
const aniversario = 2023 - ano_nascimento;

alert("Olá, " + primeiro_nome + " " + segundo_nome + "!");
alert("Sua área de estudos é: " + area_estudo + ".");
alert("Sua idade é: " + aniversario + ".");
