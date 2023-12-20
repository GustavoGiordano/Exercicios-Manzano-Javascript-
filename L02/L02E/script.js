/*e. Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.*/

const variaveis = {
    A: parseFloat(prompt("Insira o valor de A: ")),
    B: parseFloat(prompt("Insira o valor de B: ")),
    C: parseFloat(prompt("Insira o valor de C: "))
}
const delta = (variaveis.B ** 2) - (4 * variaveis.A * variaveis.C)
let raiz01 = 0
let raiz02 = 0

if (delta > 0) {
    raiz01 = (-variaveis.B + Math.sqrt(delta)) / (2 * variaveis.A)
    raiz02 = (-variaveis.B - Math.sqrt(delta)) / (2 * variaveis.A)
    alert("As raízes são x1 = " + raiz01 + " e x2 = " + raiz02)
} else if (delta == 0) {
    raiz01 = -variaveis.B / (2 * variaveis.A)
    alert("A raiz é x = " + raiz01)
} else {
    alert("Não há raízes reais")
}
