"use strict";
/**
 * FOR
 * - Estrutura de repetição que executa um bloco enquanto a condição for verdadeira.
 * - Sua sintaxe possui três expressões: inicialização, condição e atualização.
 * - É frequentemente utilizado com um contador para controlar as repetições.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sintaxe:
 *
 * for (inicializacao; condicao; atualizacao) {
 *     // Bloco de código a ser executado
 * }
 */
var languages = ["C#", "PYHTON", "JS", "TS"];
let i;
for (i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
