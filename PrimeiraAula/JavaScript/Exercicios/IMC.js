/*
O IMC - Indice de Massa Corporal

    Formula do IMC:
    IMC = Peso / (Altura * Altura)

    Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em Adultos Condição:
     - Abaixo de 18.5 Abaixo do Peso;
     - Entre 18.5 e 25 Peso Normal;
     - Entre 25 e 30 Acima do Peso;
     - Entre 30 a 40 Obeso;
     - Acima de 40 Obsesidade Grave;
*/

const peso = 60;
const altura = 1.80;

const IMC = peso / (altura * altura);

if(IMC < 18.5){
    console.log("Abaixo do Peso");
}
else if(IMC < 25){
    console.log("Peso Normal");
}
else if(IMC < 30){
    console.log("Acima do Peso");
}
else if(IMC < 40){
    console.log("Obeso");
}else{
    console.log("Obsesidade Grave");
}