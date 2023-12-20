/*d. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. */

const nota = [
    parseFloat(prompt("Insira a 1ª nota: ")),
    parseFloat(prompt("Insira a 2ª nota: ")),
    parseFloat(prompt("Insira a 3ª nota: ")),
    parseFloat(prompt("Insira a 4ª nota: "))
]
let media = (nota[0] + nota[1] + nota[2] + nota[3]) / 4
let notaExame = 0

if (media >= 7) {
    alert("A nota média do aluno é: " + media + "\nO aluno foi aprovado.")
} else {
    notaExame = parseFloat(prompt("Insira a nota de exame: "))
    media = (media + notaExame) / 2

    if (media >= 5) {
        alert("A nota média do aluno é: " + media + "\nO aluno foi aprovado em exame.")
    } else {
        alert("A nota média do aluno é: " + media + "\nO aluno foi reprovado.")
    }
}
