"use strict";
/*
21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let divisivel_4 = 0;
let divisivel_100 = 0;
function bissexto(num) {
    // se nao for divisivel (diferente de zero) por 4 - nao bissexto
    if (num % 4 !== 0) {
        console.log("NÃO É BISSEXTO");
        return;
    }
    // se sobrar zero na divisao por 4, mas nao sobrar zero na divisao por 100 - bissexto
    if (num % 100 !== 0) {
        console.log("É BISSEXTO");
        return;
    }
    // se sobrar zero na divisao por 100, e for divisivel por 400 - BISSEXTO
    if (num % 400 == 0) {
        console.log("É BISSEXTO");
        return;
    }
    else {
        console.log("NÃO É BISSEXTO");
        return;
    }
}
// Ano bissexto padrao
// bissexto(2024);
bissexto(2100);
// ano comum - nao bissexto
// bissexto(2023);
/*
CASOS DE ERRO
// ano secular - bissexto
// bissexto(2000);

// ano secular - nao bissexto
// bissexto(2100);
*/
