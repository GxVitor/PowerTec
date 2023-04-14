//generics

function concatArray <T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [4]);
const stringArray = concatArray<string[]>(["Vitor", "João"], ["Felipe"]);

console.log(numArray)
console.log(stringArray)
