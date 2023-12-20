/*m) Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.*/

const A = parseFloat(prompt("Insira o valor A"))
const B = parseFloat(prompt("Insira o valor B"))
const C = parseFloat(prompt("Insira o valor C"))

const resultado = (A + B + C)**2

alert("O quadrado da soma dos três valores lidos é " + resultado)
