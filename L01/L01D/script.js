/*d) Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. 

Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. 

Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA = TEMPO * VELOCIDADE. 

Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula
LITROS_USADOS = DISTANCIA / 12. 

Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.*/

const TEMPO = parseFloat(prompt("Insira o tempo da viagem: "))
const VELOCIDADE = parseFloat(prompt("Insira a velocidade da viagem: "))
const DISTANCIA = TEMPO * VELOCIDADE
const LITROS_USADOS = DISTANCIA / 12

alert("A velocidade média foi de " + VELOCIDADE 
+ "\nO tempo gasto na viagem foi de " + TEMPO 
+ "\nA distancia percorrida foi de " + DISTANCIA 
+ "\nA quantidade de litros utilizada na viagem foi de " + LITROS_USADOS)
