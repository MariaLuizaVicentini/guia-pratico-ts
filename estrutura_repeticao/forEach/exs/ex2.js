"use strict";
/*
Desafio 2 — Dobro dos números
Crie um array de números inteiros. Utilize forEach para percorrer o array, calcular o dobro de cada número e exibir os resultados no console.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let arrayNums = [1, 2, 3];
arrayNums.forEach((num) => {
    let dobro = num * 2;
    console.log(`O dobro de ${num} é: ${dobro}`);
});
