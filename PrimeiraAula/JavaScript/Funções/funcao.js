/*
Função e como um bloco de codigo que vc chama no seu codigo podendo passar um parametro ou não
*/

function MyName(name){
    console.log("Prazer " + name);
}
//função que não tem retorno é um procetimento

MyName("Vitor");

function Soma(numero, numero2){
    return numero + numero2;
    //O Return vai me retonar alguma coisa;
}

console.log(Soma(10,10));