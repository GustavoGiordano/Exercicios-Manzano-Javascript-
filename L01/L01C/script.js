/*
c) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume = pi * (Raio**2) * Altura
*/

const Raio = parseFloat(prompt("Insira o raio da lata de óleo: "))
const Altura = parseFloat(prompt("Insira o altura da lata de óleo: "))
const Volume = (Math.PI) * (Raio**2) * Altura

alert("O volume da lata de óleo é de " + Volume.toFixed(2))