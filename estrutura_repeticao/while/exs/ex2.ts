/**
 * Desafio 2 - Soma de Números
 *
 * - Crie uma variável numérica iniciada em 1.
 * - Utilize o laço while para percorrer os números de 1 até 100.
 * - Calcule a soma de todos os números percorridos.
 * - Ao final, exiba o resultado da soma.
 * - A repetição deve continuar enquanto o número atual for menor ou igual a 100.
 */

var current: number = 1;
var i: number = 0;

while (current <= 100) {
  i = i + current;
  current++;
}

console.log("A soma total de 1 até 100 é:", i);
