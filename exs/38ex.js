"use strict";
/*
    42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
    qualquer e mostre uma contagem até esse valor:
    Ex: Digite um valor: 35
    Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
*/
Object.defineProperty(exports, "__esModule", { value: true });
function contagem(fim) {
    let inicio = 1;
    let nums = [];
    for (let i = inicio; i <= fim; i++) {
        nums.push(i);
        console.log(i);
    }
    console.log("Acabou!");
}
contagem(35);
