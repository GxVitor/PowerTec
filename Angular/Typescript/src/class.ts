//classes 

class Character{
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string ,stregth: number ,skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`${this.name} Attack with ${this.stregth} points`);
    }

    defed(p1: Character ,p2: Character): void{
        if(p1.skill > p2.skill){
            console.log(`${p1.name} ganhou de ${p2.name} com ${p1.skill - p2.skill} a mais`)
        }else{
            console.log(`${p2.name} ganhou de ${p1.name} com ${p2.skill - p1.skill} a mais`)
        }
    }
}

const player1 = new Character("Vitor", 20, 989);
console.log(player1)
const player2 = new Character("João", 19, 100);
console.log(player2)

player1.defed(player1,player2)
player2.defed(player2, player1)

// data modifiers
/*
    public = poder ser alterado fora da classe com player1.name = "Luiz"
    private = somente no contructor pode mexer, depois da class formata não pode ser accesada fora da class
    protected = somente outra class ou subClass pode alterar 
*/

//Character: superClass
//subClass
//Magician: subClass
class Magician extends Character{
    magicPoints: number;
    constructor(name: string ,stregth: number ,skill: number, magicPoints: number){
        super(name,stregth,skill);
        this.magicPoints = magicPoints;
    }
}

const Mago = new Magician("Vitor", 10, 100, 200);