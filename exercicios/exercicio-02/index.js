const nomeVeiculo1 = prompt("Informe o nome do primeiro veículo: ");
const velocidadeVeiculo1 = parseFloat(prompt("Insira a velocidade do veículo em KMPH: "));
const nomeVeiculo2 = prompt("Insira o nome do segundo veículo: ");
const velocidadeVeiculo2 = parseFloat(prompt("Insira a velocidade do veículo em KMPH: "));

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert("A velocidade do veículo " + nomeVeiculo1 + " é mais alta.");
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
  alert(
    "A velocidade do veículo " + nomeVeiculo2 + " é mais alta. " + velocidadeVeiculo2 + " KMPH");
} else if (velocidadeVeiculo1 === velocidadeVeiculo2) {
  alert("A velocidade dos veículos são iguais! \n"
  +nomeVeiculo1+ ": " +velocidadeVeiculo1+ " KMPH \n"
  +nomeVeiculo2+ ": " +velocidadeVeiculo2+ " KMPH");
} else if(nomeVeiculo1 || nomeVeiculo2 || velocidadeVeiculo1 || velocidadeVeiculo2 === null){
  alert("Insira as informações solicitadas.")
}
 else{
  alert("Você cancelou as informações solicitadas.")
}
 
