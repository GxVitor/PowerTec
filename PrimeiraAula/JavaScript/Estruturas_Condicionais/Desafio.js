/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do Etanol sendo 5.79;
 2 - Preço da Gasolina sendo 6.66;
 3 - O Tipo de combustível do carro por KM;
 4 - Gasto Médio de combustivel do carro por KM;
 5 - Distância em KM da viagem;

Imprima no Console o valor que será gasto para realizar esta viagem.
*/

const etanol =  5.79;
const gasolina = 6.66;
const gastoMedio = 10;
let distanciaKM = 100;

let litrosConsumidos = distanciaKM / gastoMedio;

let tipoCombustivel = "Gasolina"; 

if(tipoCombustivel === "Etanol"){
    let valorDaViagem = litrosConsumidos * etanol
    console.log(valorDaViagem);
}
else if(tipoCombustivel === "Gasolina"){
    let valorDaViagem = litrosConsumidos * gasolina
    console.log(valorDaViagem);
}
else{
    console.log("Não tenho essa Combustivel")
}