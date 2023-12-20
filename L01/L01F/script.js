/*f) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados*/

let A = prompt("Insira o valor de A ")
let B = prompt("Insira o valor de B: ")
let acumuladora

acumuladora = A
A = B
B = acumuladora

alert("Valores trocados:\nA: " + A + "\nB: " + B)
