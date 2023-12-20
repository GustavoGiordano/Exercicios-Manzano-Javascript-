/*d) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.*/

var valor = 0

alert("Valores numéricos inteiros ímpares situados na faixa de 0 a 20")

while (valor < 21) {
    if (valor % 2 != 0) {
        alert(valor)
    } valor += 1
}
