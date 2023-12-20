/*j) Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
pares situados na faixa numérica de 50 a 70.*/

var valor = 50
var soma = 0
var quantidade = 0

while (valor < 71) {
    if (valor % 2 == 0) {
        soma = soma + valor
        quantidade += 1
    }
    valor += 1
}

var media = soma / quantidade

alert("A soma da média aritmética dos valores pares situados na faixa numérica de 50 a 70 é " + soma + " e a média é " + media)
