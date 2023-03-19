// > maior
// < menor
// == igual
// <= menor igual
// >= maior igual
// != diferente

let numero = 11;


let numeroPar = (numero % 2) === 0;
// % é resto da divição === ele vai retorna True ou False falando se a condição é verdadeira ou falsa

/*
    A Diferencia entre = , == , ===.
     = é atribuição 
     == é igual mais iginora o tipo de variável
     === e se tudo é igual até o tipo
*/

//if(){} o if é o se, Se for true ele executa o codigo dentro das chaves{}, o () é a condição
// O else é o Senão que vem acopanhado com o If, se não executar o If ele executa o Else
// o Else if , é o senão se

if(numero === 0){
    console.log("Numero Inválido");
}
else if(numeroPar){
    console.log("É par");
}
else{
    console.log("é impar");
}

//Esse ! vai transforma no opos por exemplo: o True vira false, o false vira True
if(!numeroPar){
    console.log("é impar");
}

