"use strict";
/*
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).
*/
Object.defineProperty(exports, "__esModule", { value: true });
function mediaFinal(n1, n2) {
    let media = (n1 + n2) / 2;
    if (media >= 7) {
        console.log(`A sua média final é ${media}, você passou de ano!`);
        console.log("Parabens!");
    }
    else {
        console.log(`Reprovado, sua média final é: ${media}`);
    }
}
// mediaFinal(5, 5); Reprovado
mediaFinal(9, 5);
