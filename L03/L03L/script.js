/*l) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário. */

var valor = 1
var maior = 0
var menor = 0

while (valor >= 0) {
    valor = parseInt(prompt("Insira um valor inteiro: "))
    switch (true) {
        case valor > maior:
            maior = valor;
            break;
        case valor < menor:
            menor = valor;
            break;
    }
}
alert("O maior valor informado foi " + maior + " e o menor valor informado foi " + menor)
