"use strict";
/*
 * Desafio 3 - Atualizador de Status
 * - Crie uma função que receba um objeto contendo o nome de um usuário e seu status.
 * - A função deve atualizar o status do usuário para "ativo".
 * - Exiba uma mensagem informando que o status foi atualizado.
 * - A função não deve retornar nenhum valor.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function userActive(user) {
    console.log(` antes: ${user.status}`);
    user.status = "ativo";
    console.log(` depois: ${user.status}`);
    console.log("O status foi atualizado!");
}
userActive({ name: "malu", status: "desativado" });
