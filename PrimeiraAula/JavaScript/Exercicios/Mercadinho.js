/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

    Código Condição de pagamento:
     - Á vista Débito, recebe 10% de desconta;
     - Á vista no Dinheiro ou pix, Recebe 15% de desconto;
     - Em duas vezes, preço normal de etique sem Juros;
     - Acima e duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const formaPagamento = 4;
/*
1 = Débito 10% e desconto
2 = Dinheiro ou Pix 15% de desconto
3 = Duas vezes 
4 = Treis ou mais vezes, 10% de juros;
*/

if(formaPagamento === 1){
    console.log( precoProduto - ((precoProduto * 10) / 100));
}
else if(formaPagamento === 2){
    console.log(precoProduto - ((precoProduto * 15) / 100));
}
else if(formaPagamento === 3){
    console.log(precoProduto / 2);
}
else{
    console.log(precoProduto + ((precoProduto * 10) / 100));
}

