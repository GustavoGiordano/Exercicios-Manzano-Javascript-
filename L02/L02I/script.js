/*i. Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem
informando se o número é par ou ímpar.*/

const numero = parseInt(prompt("Insira um número inteiro: "))

if (numero == 0) {
    alert("O número informado não é divisível.")
} else if (numero % 2 == 0) {
    alert("O número informado é par.")
} else {
    alert("O número informado é ímpar.")
}
