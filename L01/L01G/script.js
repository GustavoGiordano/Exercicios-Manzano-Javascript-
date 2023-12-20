/*g) Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída.*/

let A, B, C, D
let SomaAB, SomaAC, SomaAD, SomaBC, SomaBD, SomaCD
let MultAB, MultAC, MultAD, MultBC, MultBD, MultCD

A = parseFloat(prompt("Digite o valor de A: "))
B = parseFloat(prompt("Digite o valor de B: "))
C = parseFloat(prompt("Digite o valor de C: "))
D = parseFloat(prompt("Digite o valor de D: "))

SomaAB = A + B
SomaAC = A + C
SomaAD = A + D
SomaBC = B + C
SomaBD = B + D
SomaCD = C + D

MultAB = A * B
MultAC = A * C
MultAD = A * D
MultBC = B * C
MultBD = B * D
MultCD = C * D

alert(
    "Resultados: " +
    "\nA + B = " + SomaAB +
    "\nA + C = " + SomaAC +
    "\nA + D = " + SomaAD +
    "\nB + C = " + SomaBC +
    "\nB + D = " + SomaBD +
    "\nC + D = " + SomaCD +
    "\nA * B = " + MultAB +
    "\nA * C = " + MultAC +
    "\nA * D = " + MultAD +
    "\nB * C = " + MultBC +
    "\nB * D = " + MultBD +
    "\nC * D = " + MultCD
)
