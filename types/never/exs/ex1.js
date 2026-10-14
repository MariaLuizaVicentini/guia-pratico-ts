"use strict";
/*
 * Desafio 1 - Interrupção de execução
 *
 * Crie uma função chamada stopProcess que receba uma mensagem
 * do tipo string e interrompa a execução lançando um erro.
 *
 * Requisito:
 * - Utilize never como tipo de retorno.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function stopProcess(msg) {
    throw new Error(msg);
}
stopProcess("Erro, processo congelado!");
