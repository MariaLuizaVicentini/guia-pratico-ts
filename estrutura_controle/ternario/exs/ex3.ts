/**
 * Desafio 3 - Classificador de perfil
 *
 * - Crie uma variável chamada perfil do tipo string.
 * - Ela poderá receber os valores "superadmin", "admin"
 *   ou qualquer outro texto.
 * - Utilize o operador ternário para verificar o perfil.
 * - Se for "superadmin", retorne "Super usuário".
 * - Se for "admin", retorne "Administrador".
 * - Caso contrário, retorne "Usuário comum".
 * - Utilize operadores ternários aninhados para resolver o desafio.
 * - Exiba o resultado no console.
 */

type roles = "admin" | "superadmin";

var profile = "admin";

var result =
  profile == "admin"
    ? "administrador"
    : profile == "superadmin"
      ? "Super usuario"
      : "usuario comum";

console.log(result);
