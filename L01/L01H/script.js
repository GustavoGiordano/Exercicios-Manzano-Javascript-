/*h) Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME = COMPRIMENTO * LARGURA * ALTURA.*/

const comprimento = parseFloat(prompt("Insira o comprimento da caixa retangular: "))
const largura = parseFloat(prompt("Insira a largura da caixa retangular: "))
const altura = parseFloat(prompt("Insira a altura da caixa retangular: "))
const volume = comprimento * largura * altura

alert("O volume é de " + volume + " m3")
