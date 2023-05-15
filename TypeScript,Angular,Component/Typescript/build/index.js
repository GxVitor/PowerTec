"use strict";
// tipos Primitivos
// boolean = verdadeiro ou falso
// number = numeros
// string = text
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ligado = false;
let nome = "Vitor";
let idade = 20;
// null
// undefined
let nulo = null;
let indefinido = undefined;
//any
//void
let qualquercoisa = "tudo, 90, boolean, number";
let vaziu;
//objeto - sem previsibilidade
let produto = {
    name: "Vitor",
    cidade: "Sp",
    idade: 20,
};
let meuProduto = {
    nome: "Tenis",
    preco: 20.23,
    unidade: 2,
};
//arrays
let dados = ["Vitor", "Caua", "Julia"];
let dados2 = ["Miguel", "Gabriel", "Regina"];
let info = [12, "OLiveira", 20, "Caua"];
//Tuplas = é um vetor de multi types porem tem um lugar certo para cada coisa
let boleto = ["agua", 199.90, 345345];
// Arrays métados
//Datas
let aniversario = new Date("2002-11-10 12:00");
console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(1, 10);
//funções com multi types
function CalltoPhone(phone) {
    return phone;
}
//funções Async
function getDataBese(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Vitor";
    });
}
const bot = {
    id: 12,
    name: "GxBot"
};
