"use strict";
/**
 * Desafio 2 - Classificador de números
 *
 * - Crie uma variável chamada numero do tipo number.
 * - Utilize o operador ternário para verificar se o número
 *   é positivo ou negativo.
 * - Se for maior que zero, retorne "Número positivo".
 * - Caso contrário, retorne "Número negativo ou igual a zero".
 * - Exiba o resultado no console.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var num = 2;
var process = num <= 0 ? "Negativo ou igual a zero" : "Postivo";
console.log(process);
