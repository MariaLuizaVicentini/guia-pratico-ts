"use strict";
/*

24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km.

Calcule o preço da passagem, cobrando
- R$0.50 por Km para viagens até 200Km
- R$0.45 para viagens mais longas.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function calculaDistancia(kmPer) {
    if (kmPer <= 200) {
        let preco = kmPer * 0.5;
        console.log(`Resultado: ${preco}`);
    }
    else {
        let preco = kmPer * 0.45;
        console.log(`Resultado: ${preco}`);
    }
}
calculaDistancia(300);
