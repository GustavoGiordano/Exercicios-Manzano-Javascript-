/*h. Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. */

const numeros = [
    parseInt(prompt("Insira um número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: "))
]

let maior = numeros[0]
let menor = numeros[0]

for (let contadora = 0; contadora < numeros.length; contadora++) {
    if (numeros[contadora] > maior) {
        maior = numeros[contadora];
    } 
    if (numeros[contadora] < menor) {
        menor = numeros[contadora];
    }
}

alert("O maior valor é " + maior + "\nO menor valor é " + menor)
