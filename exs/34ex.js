"use strict";
/*

    34) Escreva um programa que moste na tela a seguinte contagem:

    6 7 8 9 10 11 Acabou!
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
    for ( inicializacao;  condicao;  atualizacao) {
        // código que precisa ser executado
    }

*/
function programa() {
    let i;
    for (i = 6; i <= 11; i++) {
        console.log(i);
    }
    console.log("Acabou!");
}
programa();
