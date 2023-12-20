/*g) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. */

alert("Programa que apresente a série de Fibonacci até o décimo quinto termo.")

let anterior = 0
let atual = 1
let soma = 0
let contadora = 1
let sequencia = " "

while (contadora <= 15) {
    soma = anterior + atual
    sequencia += soma + " "
    if (contadora == 1) {
        atual = 0
        anterior = 1
    }
    anterior = atual
    atual = soma
    contadora += 1
}
alert(sequencia)
