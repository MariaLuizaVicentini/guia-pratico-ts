/**
 * Desafio 2 - Operações matemáticas
 *
 * - Crie uma variável do tipo unknown que receba o valor 25.
 * - Utilize a sintaxe <number>variavel para informar ao TypeScript
 *   que o valor deve ser tratado como number.
 * - Armazene o resultado em uma nova variável do tipo number.
 * - Calcule o dobro e o triplo do valor.
 * - Exiba os resultados no console.
 */

var num: unknown = 25;
var numType = <number>num;

console.log(`O dobro do numero recebido, é: ${numType * 2}`);
console.log(`O triplo do numero recebido, é: ${numType * 3}`);
