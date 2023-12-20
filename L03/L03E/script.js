/*e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). */

var base = 3
var expoente = 0
var potencia = 0

alert("Potências de 3 do expoente 0 até 15")

while (expoente < 16) {
    potencia *= base
    if (potencia == 0) {
        potencia = 1
    }
    expoente += 1
    alert(potencia)
}
