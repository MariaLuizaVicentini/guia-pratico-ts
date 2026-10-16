"use strict";
/**
 * DESAFIO 1 — Contador de tentativas
 *
 * Crie uma variável tentativa iniciada em 0.
 *
 * Utilize o do...while para:
 * - Incrementar tentativa em uma unidade.
 * - Exibir o valor de tentativa no console.
 * - Repetir enquanto tentativa for menor que 5.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let tentativa = 0;
do {
    // code a ser executado
    tentativa = tentativa + 1;
    console.log("Tentativa: ", tentativa);
} while (tentativa < 5);
