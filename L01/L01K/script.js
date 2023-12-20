/*k) Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana.*/

const cotacaoDolar = parseFloat(prompt("Insira a cotação atual do dólar: "))
const quantidadeReais = parseFloat(prompt("Insira a quantidade de reais disponíveis: "))
const dolar = quantidadeReais / cotacaoDolar

alert(quantidadeReais + " reais = " + dolar + " dólares.")
