/*
 * Desafio 2 - Verificação exaustiva
 *
 * Crie um tipo chamado UserRole com os valores:
 * "admin", "editor" e "viewer".
 *
 * Crie uma função que receba um UserRole e utilize switch
 * para tratar todos os valores possíveis.
 *
 * Requisito:
 * - Utilize never no default para verificar se todos os
 *   valores do tipo foram tratados.
 */

// type UserRole = "admin" | "editor" | "viewer" | "valorNaoTratadoComCase";
type UserRole = "admin" | "editor" | "viewer";

function trataValores(userRole: UserRole) {
  switch (userRole) {
    case "admin":
      console.log("O usuário é admin");
      break;

    case "editor":
      console.log("O usuário é editor");
      break;

    case "viewer":
      console.log("O usuário é viewer");
      break;

    default: {
      const roleInvalida: never = userRole;
      return roleInvalida;
    }
  }
}

trataValores("admin");
