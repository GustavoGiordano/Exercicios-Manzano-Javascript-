/*j) Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.*/

const cotacaoDolar = parseFloat(prompt("Insira a cotação atual do dólar: "))
const quantidadeDolar = parseFloat(prompt("Insira a quantidade de dólares disponíveis: "))
const real = cotacaoDolar * quantidadeDolar

alert(quantidadeDolar + " dólares = " + real + " reais.")
