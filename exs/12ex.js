"use strict";
/*
12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function aplicaDesconto(produto) {
    let desconto = 0.05;
    let descontoTotal = produto.preco * desconto;
    let valorFinalComDesconto = produto.preco - descontoTotal;
    console.log(`O valor total de desconto: ${descontoTotal}`);
    console.log(`O valor total do produto com desconto aplicado: ${valorFinalComDesconto}`);
}
aplicaDesconto({ nome: "tv", preco: 3000 });
