// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada némuro par encontrado

const listaNumeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < listaNumeros.length; i++){
    if(listaNumeros[i] % 2 === 0){
        console.log("O Numero: " + listaNumeros[i] + " é par");
    }
}