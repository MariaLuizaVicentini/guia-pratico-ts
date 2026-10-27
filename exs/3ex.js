"use strict";
/*
    3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
    final uma mensagem.
    Ex:
    Nome do Funcionário: Maria do Carmo
    Salário: 1850,45
    O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.


*/
Object.defineProperty(exports, "__esModule", { value: true });
function exibeMsgs(nome, sal) {
    console.log(`Nome do Funcionário: ${nome}`);
    console.log(`Salário: ${sal}`);
    console.log(`O funcionário ${nome} tem um salário de R$${sal} em Junho`);
}
exibeMsgs("Malu", "1.000,00");
