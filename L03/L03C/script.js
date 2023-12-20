/*c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500. */

var numero = 2
var soma = 0

while (numero < 501) {
    if (numero % 2 == 0) {
        soma += numero
    } numero += 1
}

alert("O somatório dos valores pares existentes na faixa de 1 até 500: " + soma)
