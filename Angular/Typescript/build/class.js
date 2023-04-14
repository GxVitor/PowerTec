"use strict";
//classes 
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} Attack with ${this.stregth} points`);
    }
    defed(p1, p2) {
        if (p1.skill > p2.skill) {
            console.log(`${p1.name} ganhou de ${p2.name} com ${p1.skill - p2.skill} a mais`);
        }
        else {
            console.log(`${p2.name} ganhou de ${p1.name} com ${p2.skill - p1.skill} a mais`);
        }
    }
}
const player1 = new Character("Vitor", 20, 989);
console.log(player1);
const player2 = new Character("João", 19, 100);
console.log(player2);
player1.defed(player1, player2);
player2.defed(player2, player1);
