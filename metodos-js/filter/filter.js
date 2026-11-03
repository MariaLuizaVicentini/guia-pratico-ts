"use strict";
/*
    Filter
        - percorre um array e cria um novo array contendo apenas os elementos
        que retornam ' true ' pra condição (callback) fornecida
*/
Object.defineProperty(exports, "__esModule", { value: true });
// const sintaxe = list.filter(() => condicoes);
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((num) => num % 2 === 0);
