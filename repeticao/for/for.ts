/**
 * FOR
 * - Estrutura de repetição que executa um bloco enquanto a condição for verdadeira.
 * - Sua sintaxe possui três expressões: inicialização, condição e atualização.
 * - É frequentemente utilizado com um contador para controlar as repetições.
 */

/**
 * Sintaxe:
 *
 * for (inicializacao; condicao; atualizacao) {
 *     // Bloco de código a ser executado
 * }
 */


var languages = ["C#", "PYHTON", "JS", "TS"];

let i: number;
for (i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}
