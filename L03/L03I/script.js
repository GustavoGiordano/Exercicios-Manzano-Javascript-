/*i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
somatório e a média aritmética dos valores lidos. */

var valor = 0
var contadora = 1
var soma = 0

while (contadora < 11) {
    valor = parseFloat(prompt("Insira um valor numérico: "))
    soma += valor
    contadora += 1
}

var media = soma / 10

alert("O total do somatório é " + soma + " e a média aritmética dos valores lidos é " + media)
