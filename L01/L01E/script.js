/*e) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).*/

const VALOR = parseFloat(prompt("Insira o valor da prestação: "))
const TEMPO = parseFloat(prompt("Insira o tempo de atraso (em meses): "))
const TAXA = parseFloat(prompt("Digite a taxa de juros (em porcentagem): "))
const PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO

alert("O valor da prestação em atraso é: R$" + PRESTACAO)
