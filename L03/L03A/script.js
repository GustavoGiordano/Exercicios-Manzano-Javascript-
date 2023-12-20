/*a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.*/

var numero =  parseInt(prompt("Insira um número: "))
var contadora = 1
var multiplicacao

alert("Tabuada de 1 a 10")

while (contadora < 11) {
    multiplicacao = numero * contadora
    alert(numero + " x " + contadora + " = " + multiplicacao )
    contadora += 1
}
