/*g. Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.*/

const numeros = [
    parseInt(prompt("Insira um número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: "))
];

alert("Os números inteiros divisíveis por 2 e 3 são: ")

for (let contadora = 0; contadora < numeros.length; contadora++) {
    if (numeros[contadora] % 2 === 0 && numeros[contadora] % 3 === 0) {
        alert(numeros[contadora])
    }
}
