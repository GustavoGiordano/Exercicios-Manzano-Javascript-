/*l. Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da
mensagem de saudação o nome previamente informado. */

const pessoa = {
    nome: prompt("Nome: "),
    sexo: " "
}
while (pessoa.sexo !== "masculino" && pessoa.sexo !== "feminino") {
    pessoa.sexo = prompt("Sexo (masculino ou feminino): ").toLowerCase()
}
if (pessoa.sexo === "masculino") {
    alert("Ilmo Sr. " + pessoa.nome)
} else {
    alert("Ilma Sra. " + pessoa.nome)
}
