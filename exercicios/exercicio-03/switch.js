const valorMetros = parseFloat(prompt("Digite um valor em metros para ser convertido: "))
const medida = prompt("Escolha para qual medida você deseja converter: \n1. Milimetro (mm) \n2. Centimetro (cm) \n3. Decimetro (dm) \n4. Decâmetro (dam) \n5. Hectômetro (hm) \n6. Quilômetro (km)")


const milimetros = valorMetros * 1000
const centimetros = valorMetros * 100
const decimetro = valorMetros * 10
const decametro = valorMetros / 10
const hectometro = valorMetros / 100
const quilometro = valorMetros / 1000

switch (medida) {
  case '1':
    alert("O valor " + valorMetros + " metro(s) em milimetros é: " + milimetros + " mm.")
    break
  case '2':
    alert("O valor " + valorMetros + " metro(s) em centimetros é: " + centimetros + " cm.")
    break
  case '3':
    alert("O valor " + valorMetros + " metro(s) em decimetros é: " + decimetro + " dm.")
    break
  case '4':
    alert("O valor " + valorMetros + " metro(s) em decâmetros é: " + decametro + " dam.")
    break
  case '5':
    alert("O valor " + valorMetros + " metro(s) em hectômetros é: " + hectometro + " hm.")
    break
  case '6':
    alert("O valor " + valorMetros + " metro(s) em quilômetros é: " + quilometro + " km.")
    break
  default:
    alert("Opção invalida")
}