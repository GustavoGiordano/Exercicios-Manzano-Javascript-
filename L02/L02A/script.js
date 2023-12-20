/*a. Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.*/

const valor01 = parseInt(prompt("Insira um número inteiro: "))
const valor02 = parseInt(prompt("Insira outro número inteiro: "))

let maiorValor = 0
let menorValor = 0

if (valor01 > valor02) {
    maiorValor = valor01
    menorValor = valor02
} else {
    maiorValor = valor02
    menorValor = valor01
}

const diferenca = maiorValor - menorValor

alert("O resultado da diferença do maior pelo menor valor vale " + diferenca)