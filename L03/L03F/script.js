/*f) Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^). */

var base = parseFloat(prompt("Insira o valor da base: "))
var expoente = parseFloat(prompt("Insira o valor do expoente: "))
var potencia = 0
var contadora = 0

while (contadora <= expoente) {
    potencia *= base
    if (potencia == 0) {
        potencia = 1
    }
    contadora += 1
}
alert(potencia)
