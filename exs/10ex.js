"use strict";
/*
10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// calculo da area
/*
area = largura  x altura
*/
// sabendo que 1 litro de tinta pinta 2m quadrados
/*
Quantidade de tinta = area total / 2 = x litro
*/
function quantidadeTinta(largura, altura) {
    let area = largura * altura;
    let qntTinta = area / 2;
    console.log(`A area tem ${area} metros quadrados`);
    console.log(`A quantidade de tinta necessária é: ${qntTinta} litros`);
}
quantidadeTinta(4, 3);
