"use strict";
/*
9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function exibeRealEmDolar(valor) {
    let dolarReal = 5.07;
    let conversao = valor / dolarReal;
    console.log(`Você tem R$${valor} na carteira.`);
    console.log(
    // `Consegue comprar U$${Math.round(valor / dolarReal)}, que seguir?`,
    `Consegue comprar U$${conversao.toFixed(2)}, que seguir?`);
}
exibeRealEmDolar(350);
/*
  toFixed, retorna uma string...
*/
