"use strict";
/*
14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// dias x DIARIA_CAR = valor cobrado pelos dias
// km x KM_CAR = valor cobrado pelos quilometros
// TOTAL: (dia x 90) + (km x 0.20)
function locadoraCarros(kmPer, diasAlug) {
    let DIARIA_CAR = 90;
    let KM_CAR = 0.2;
    let totalDiaria = diasAlug * DIARIA_CAR;
    let totalKms = kmPer * KM_CAR;
    let totalPagar = totalDiaria + totalKms;
    console.log(`O preco total a pagar e: ${totalPagar}`);
}
locadoraCarros(250, 4);
