/*
 1 - Crie uma classe para representar carros.
 Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
 Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dê o valor
 gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca,cor,gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    //metado
    calcularGastoDePercuro(distanciaKM, precoCombustivelKM){
        return (distanciaKM * this.gastoPorKm) * precoCombustivelKM;
    }
}

const Uno = new Carro('Fiat','Prata',1/12);

console.log(Uno.calcularGastoDePercuro(70,5).toFixed(2));

const palio = new Carro('Fiat', 'Preto', 1/10);

console.log(palio.calcularGastoDePercuro(70,5).toFixed(2));

