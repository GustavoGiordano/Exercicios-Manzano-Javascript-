/*l) Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos.*/

const A = parseFloat(prompt("Insira o valor A"))
const B = parseFloat(prompt("Insira o valor B"))
const C = parseFloat(prompt("Insira o valor C"))

const resultado = (A**2) + (B**2) +(C**2)

alert("A soma dos quadrados dos três valores lidos é " + resultado)
