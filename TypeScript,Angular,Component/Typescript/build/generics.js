"use strict";
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [4]);
const stringArray = concatArray(["Vitor", "João"], ["Felipe"]);
console.log(numArray);
console.log(stringArray);
