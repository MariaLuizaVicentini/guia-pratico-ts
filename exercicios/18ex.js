"use strict";
/*
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function podeVotar(anoNasc) {
    var idade = 2026 - anoNasc;
    if (idade >= 16) {
        console.log("Sua idade é: ", idade);
        console.log("Pode votar!");
    }
    else {
        console.log("Ainda não pode votar!");
    }
}
podeVotar(2003);
podeVotar(2023);
