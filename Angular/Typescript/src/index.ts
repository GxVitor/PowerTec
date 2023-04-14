

// tipos Primitivos
// boolean = verdadeiro ou falso
// number = numeros
// string = text

    let ligado: boolean = false;
    let nome: string = "Vitor";
    let idade: number = 20;

// null
// undefined

    let nulo: null = null;
    let indefinido: undefined = undefined;

//any
//void

    let qualquercoisa: any = "tudo, 90, boolean, number";
    let vaziu:void;



//objeto - sem previsibilidade
let produto:object = {
    name:"Vitor",
    cidade:"Sp",
    idade: 20,
};

//Objeto Tipado - com previsibilidade
type produtoLoja = {
    nome:string;
    preco:number;
    unidade:number;
}

let meuProduto: produtoLoja = {
    nome: "Tenis",
    preco: 20.23,
    unidade: 2,
}

//arrays

let dados: string[] = ["Vitor","Caua","Julia"];
let dados2: Array<string> = ["Miguel", "Gabriel", "Regina"];

let info: (string | number)[] = [12,"OLiveira", 20,"Caua"];

//Tuplas = é um vetor de multi types porem tem um lugar certo para cada coisa

let boleto: [string,number,number] = ["agua",199.90, 345345]

// Arrays métados

//Datas

let aniversario: Date = new Date("2002-11-10 12:00")
console.log(aniversario.toString());

//funções

function addNumber(x: number,y: number): number{
    return x + y;
}

let soma: number = addNumber(1,10);

//funções com multi types

function CalltoPhone(phone: number | string): number | string{ 
    return phone;
}

//funções Async

async function getDataBese(id: number): Promise<string>{
    return "Vitor";
}

//interfaces (type x interfaces)

type robot = {
    id: number;
    name: string;
}

interface robot2{
    id: number;
    name: string;
}

const bot: robot = {
    id: 12,
    name: "GxBot"
}
