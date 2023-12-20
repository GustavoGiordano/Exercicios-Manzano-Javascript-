/*c. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição.*/

const nota1 = parseFloat(prompt("Insira a 1ª nota: "))
const nota2 = parseFloat(prompt("Insira a 2ª nota: "))
const nota3 = parseFloat(prompt("Insira a 3ª nota: "))
const nota4 = parseFloat(prompt("Insira a 4ª nota: "))
const media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 5) {
    alert("A nota média do aluno é: " + media + "\nO aluno foi aprovado.")
} else {
    alert("A nota média do aluno é: " + media + "\nO aluno foi reprovado.")
}
