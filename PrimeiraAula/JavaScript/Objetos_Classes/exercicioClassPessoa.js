/*
Crie uma class para representar Pessoas.
Para cada pessoa teremos os atributos nome,peso e altura.
As pessoas devem ter capacidade de dizer o valor do seu IMC (IMC = peso/(altura * altura));
Instancie uma pessoa Chamada josé que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do Seu IMC;
*/

class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //Calculo de IMC
    qualSeuImc(){
        return this.peso / (this.altura * this.altura);
    }

    //Classificar IMC
    classIMC(){
        const IMC = this.qualSeuImc();
        if(IMC < 18.5){
            return "Abaixo do Peso";
        }
        else if(IMC < 25){
            return "Peso Normal";
        }
        else if(IMC < 30){
            return "Acima do Peso";
        }
        else if(IMC < 40){
            return "Obeso";
        }else{
            return "Obsesidade Grave";
        }
    }

}

const jose = new Pessoas("José",70,1.75);

console.log(jose.qualSeuImc().toFixed(2));
console.log(jose.classIMC());
