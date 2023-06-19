alert("Visitando novas Cidades.")

const turista = prompt("Digite o seu nome: ")
let cidades = "" //Pode receber vários valores concatenados
let contagem = 0 //contador inicia em 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n" //concatena o valor da variável cidades com a cidade
  contagem++ //Para incrementar 1 na contagem
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas: \n" + cidades
)