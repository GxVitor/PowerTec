//objetos

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'gabriel',
    idade: 20,

    descrever: function(){
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.altura = 1.80;

console.log(pessoa.altura);

delete pessoa.sobrenome;
const atributo = 'nome';
console.log(pessoa[atributo]);
console.log(pessoa.descrever());


//classes 
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const joao = new Pessoa('Joao' , 20);
// joao.nome = 'Joao Vitor'
// joao.idade = 19;

const julia = new Pessoa('Julia', 20);
// julia.nome = 'Julia';
// julia.idade = 16;

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

compararPessoas(joao,julia);

new pessoa('Zé',30).descrever();
