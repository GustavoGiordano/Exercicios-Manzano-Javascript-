/*b) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). */

var numero = 1
var soma = 0

while (numero < 101) {
    soma += numero
    numero += 1
}

alert("O total da soma obtida dos cem primeiros números inteiros é: " + soma)
