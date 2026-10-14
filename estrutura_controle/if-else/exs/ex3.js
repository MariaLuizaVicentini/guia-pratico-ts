"use strict";
/**
 * Desafio 3 - Calculadora de desconto
 *
 * - Crie duas variáveis: purchaseAmount e discount.
 * - purchaseAmount deve representar o valor de uma compra.
 * - Verifique se o valor da compra é maior ou igual a 100.
 * - Se for, aplique um desconto de 10% sobre o valor da compra.
 * - Caso contrário, mantenha o valor original, sem desconto.
 * - Exiba o valor final da compra.
 * - Utilize if e else para implementar a lógica.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var purchaseAmount = 100;
var discount = 10;
if (purchaseAmount >= 100) {
    let discountAmount = purchaseAmount / discount;
    purchaseAmount = purchaseAmount - discountAmount;
    console.log("desconto aplicado", purchaseAmount);
}
else {
    console.log("nao tem desconto", purchaseAmount);
}
