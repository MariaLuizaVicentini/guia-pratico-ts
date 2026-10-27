"use strict";
/*
    Sort( )

    Recebe um array de strings, ordena a lista original em ordem alfabetica e retorna ela modificada

    Serve para ordenar números, mas com uma sintaxe especial

*/
Object.defineProperty(exports, "__esModule", { value: true });
// ordenando strings - crescente
const frutas = ["MARACUJA", "BANANA", "AMORA"];
console.log("ANTES", frutas);
frutas.sort();
console.log("DEPOIS", frutas);
// ordenando numeros - crescente
const numeros = [1, 9, 3];
console.log("ANTES", numeros);
numeros.sort((a, b) => a - b);
console.log("DEPOIS", numeros);
// ordenando numeros - descrecente
const numsDecre = [1, 2, 3];
console.log("ANTES", numsDecre);
numsDecre.sort((a, b) => b - a);
console.log("DEPOIS", numsDecre);
