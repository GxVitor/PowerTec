"use strict";
//decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ExibirNome(target) {
    console.log(target);
}
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __verison: version });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.10")
], Api);
const api = new Api();
console.log(api);
//attribute decorators
function minLength(lenght) {
    return (target, key) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value) => {
            if (value.length < lenght) {
                throw new Error(`Tamanho menor que ${lenght}`);
            }
            else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Morango {
    constructor(nome) {
        this.nome = nome;
    }
}
__decorate([
    minLength(3)
], Morango.prototype, "nome", void 0);
const Fruta = new Morango("Azul");
console.log(Fruta.nome);
