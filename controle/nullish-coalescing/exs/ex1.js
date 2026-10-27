"use strict";
/**
 * Desafio 1 - Configuração de Usuário
 *
 * - Crie uma função que receba o nome de um usuário, que pode ser uma string ou null.
 * - Caso o nome seja null ou undefined, utilize o valor padrão "Visitante".
 * - Exiba uma mensagem de boas-vindas utilizando o nome recebido ou o valor padrão.
 * - Utilize o operador de nullish coalescing (??) para definir o nome.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getName(n) {
    var nome = n ?? "visitante";
    console.log(`Seja bem vindo(a) - ${nome}`);
}
getName("malu");
getName(null);
