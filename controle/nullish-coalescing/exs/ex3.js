"use strict";
/**
 * Desafio 3 - Estoque de Produtos
 *
 * - Crie uma função que receba a quantidade de produtos em estoque.
 * - A quantidade pode ser um número, null ou undefined.
 * - Caso a quantidade seja null ou undefined, considere que existem 10 produtos em estoque.
 * - Exiba a quantidade final de produtos.
 * - Se a quantidade recebida for 0, mantenha esse valor.
 * - Utilize o operador de nullish coalescing (??) para definir a quantidade final.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function exibeQntProduto(qnt) {
    var defaultProduct = qnt ?? 10;
    console.log("A quantidade total de produtos é: ", defaultProduct);
}
exibeQntProduto(2);
exibeQntProduto(null);
