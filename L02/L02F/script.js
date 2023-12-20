/*f. Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. */

const A = parseFloat(prompt("Insira o valor de A: "))
const B = parseFloat(prompt("Insira o valor de B: "))
const C = parseFloat(prompt("Insira o valor de C: "))

let n1, n2, n3

if (A <= B && A <= C) {
    n1 = A
    if (B <= C) {
        n2 = B
        n3 = C
    } else {
        n2 = C
        n3 = B
    }
} else if (B <= A && B <= C) {
    n1 = B
    if (A <= C) {
        n2 = A
        n3 = C
    } else {
        n2 = C
        n3 = A
    }
} else {
    n1 = C
    if (A <= B) {
        n2 = A
        n3 = B
    } else {
        n2 = B
        n3 = A
    }
}

alert("Valores em ordem crescente: " + n1 + ", " + n2 + ", " + n3)
