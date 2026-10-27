"use strict";
/**
 * Operador ternário ( ? : )
 *
 * Desafio 1 - Verificador de idade
 *
 * - Crie uma variável chamada idade do tipo number.
 * - Utilize o operador ternário para verificar se a idade
 *   é maior ou igual a 18.
 * - Se for, retorne a mensagem "Maior de idade".
 * - Caso contrário, retorne "Menor de idade".
 * - Exiba o resultado no console.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var age = 23;
var allowed = age >= 18 ? "Maior de idade" : "Menor de idade";
console.log(allowed);
