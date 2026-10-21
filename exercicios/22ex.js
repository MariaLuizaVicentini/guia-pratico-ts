"use strict";
/*
22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let ano = 2008;
let idade = 2026 - ano;
if (idade < 18) {
    console.log(`Faltam ${18 - idade} anos para o alistamento`);
}
else {
    console.log(`Se passaram ${idade - 18} anos do alistamento`);
}
