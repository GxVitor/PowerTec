/*
Faça um Programa para calcular o valor gasto de combustível em uma viagem.

Fazer com 3 Variáveis sendo Elas:
 - 1 Preço do combustível sendo 5.79 o preço do Combustivel;
 - 2 gasto médio de combustível do carro por KM sendo 10KM igual a 1L;
 - 3 Distância em KM da viagem;

E Imprima no Console o valor que será gasto de combustível para realizar esta viagem.
*/

//const pois não ira mudar o preco do combustivel no codigo
const precoCombustivel = 5.79;

//km por litros
const gastoMedio = 10;

//a distancia em KM percorida pelo veiculo
let distanciaKM = 100;

//10KM = 1l então minha distancia dividido pelo gasto
let litrosConsumidos = distanciaKM / gastoMedio;

//preço da viagem pegando o litro * minha variável de preço
let valorDaViagem = litrosConsumidos * precoCombustivel

console.log(valorDaViagem.toFixed(2));
// o .toFixed vai arrendodar 2 numeros depois da virgula
