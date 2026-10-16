"use strict";
/**
 * DESAFIO 2 — Soma acumulada
 *
 * Crie as variáveis numero = 1 e soma = 0.
 *
 * Utilize o do...while para:
 * - Adicionar numero ao valor de soma.
 * - Incrementar numero em uma unidade.
 * - Repetir enquanto numero for menor ou igual a 10.
 * - Exibir o resultado final de soma no console.
 *
 * Resultado esperado: 55
 */
Object.defineProperty(exports, "__esModule", { value: true });
let num = 1;
let soma = 0;
do {
    soma = soma + num;
    num = num + 1;
} while (num <= 10);
console.log("Resultado Final: ", soma);
